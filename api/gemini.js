import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt, mode } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // FIX: correct model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    // Behavioral modes
    const styles = {
      academic: "Answer like a university-level academic expert.",
      study_buddy: "Explain in simple, friendly terms like a study buddy.",
      tutor: "Be strict, detailed and structured like a tutor.",
      friendly: "Be warm and friendly.",
      motivational: "Motivate the student with positive energy."
    };

    const style = styles[mode] || "Be helpful.";

    const finalPrompt = `${style}\n\nUser question: ${prompt}`;

    const result = await model.generateContent(finalPrompt);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
