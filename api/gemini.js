// api/gemini.js
export default async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(204).end();
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt, mode } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing prompt" });
    }

    // ensure API key present
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY env var");
      return res.status(500).json({ error: "Server misconfigured: missing API key" });
    }

    // choose the free-friendly flash model
    const model = "gemini-2.5-flash";

    // simple mode instructions
    const styles = {
      academic: "Answer like a university-level academic expert. Use headings and bullet points when helpful.",
      study_buddy: "Explain simply and kindly like a study buddy. Be encouraging.",
      tutor: "Act as a strict tutor: ask guiding questions and show step-by-step reasoning.",
      friendly: "Be warm, concise, and helpful.",
      motivational: "Give motivational study advice and boost confidence."
    };
    const style = styles[mode] || styles.academic;

    // Build request body according to Generative Language REST API (generateContent)
    const body = {
      contents: [
        {
          parts: [
            { text: `System: ${style}` },
            { text: `User: ${prompt}` }
          ]
        }
      ]
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    // Use fetch (Node 18+ on Vercel supports global fetch)
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify(body),
      // no credentials; using API key header
    });

    const text = await resp.text();

    if (!resp.ok) {
      console.error("Gemini REST error", resp.status, text);
      // return details but avoid leaking large internal info
      return res.status(502).json({ error: "Bad response from Gemini API", status: resp.status, details: text });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse Gemini response", e, text);
      return res.status(502).json({ error: "Invalid response from Gemini" });
    }

    // The response shape varies; attempt to extract text safely
    let extracted = null;
    // Try common path: data.candidates[0].content.parts[0].text OR data.output[0].content[0].text
    if (Array.isArray(data?.candidates) && data.candidates[0]?.content?.parts?.[0]?.text) {
      extracted = data.candidates[0].content.parts[0].text;
    } else if (Array.isArray(data?.output) && data.output[0]?.content?.[0]?.text) {
      extracted = data.output[0].content[0].text;
    } else if (typeof data?.output?.[0]?.text === "string") {
      extracted = data.output[0].text;
    } else {
      // fallback: stringify whole response
      extracted = JSON.stringify(data);
    }

    return res.status(200).json({ text: extracted });
  } catch (err) {
    console.error("Server error in /api/gemini:", err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
