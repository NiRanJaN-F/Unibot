// api/gemini.js
export default async function handler(req, res) {
  try {
    // --- CORS ---
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(204).end();
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // --- Parse body ---
    let bodyData = req.body;
    if (!bodyData || typeof bodyData === "string") {
      try { bodyData = JSON.parse(bodyData || "{}"); } catch (e) { bodyData = {}; }
    }

    const { prompt, mode, conversation = [] } = bodyData;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const model = "gemini-2.5-flash";

    // --- System styles ---
    const styles = {
      academic: "Answer like a university-level academic expert.",
      study_buddy: "Explain simply and kindly like a study buddy.",
      tutor: "Act as a strict tutor. Ask guiding questions.",
      friendly: "Be warm, concise, and helpful.",
      motivational: "Give motivational study advice and boost confidence."
    };

    const style = styles[mode] || styles.academic;

    // -------------------------------
    //  ✅ Limit conversation to last 20 messages
    // -------------------------------
    const trimmedConversation =
      conversation.length > 20 ? conversation.slice(-20) : conversation;

    // -------------------------------
    //  Build message history
    // -------------------------------
    const historyParts = trimmedConversation.map(msg => {
      if (msg.role === "user") return `User: ${msg.text}`;
      if (msg.role === "bot") return `Bot: ${msg.text}`;
      return "";
    }).join("\n");

    const finalInput = `
${style}

${historyParts}

User: ${prompt}
`.trim();

    // Gemini body
    const body = {
      contents: [
        {
          parts: [{ text: finalInput }]
        }
      ]
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify(body)
    });

    const raw = await resp.text();

    if (!resp.ok) {
      return res.status(502).json({ error: raw });
    }

    let data;
    try { data = JSON.parse(raw); } catch (e) { data = {}; }

    let extracted =
      data?.candidates?.[0]?.content?.[0]?.parts?.map(p => p.text).join("\n") ||
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n") ||
      data?.candidates?.[0]?.content?.[0]?.text ||
      "";

    extracted = extracted?.trim() || "No response generated.";

    return res.status(200).json({ text: extracted });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
