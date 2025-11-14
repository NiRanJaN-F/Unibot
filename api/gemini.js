import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    const { prompt, mode } = req.body;

    // Define UniBot personalities
    const modes = {
      academic: "You are UniBot, an advanced academic expert. Explain concepts deeply, clearly, and with examples. Use structured answers, headings, and bullet points.",
      study_buddy: "You are UniBot, a friendly study buddy. Keep things simple, supportive, and easy to understand. Encourage the student.",
      tutor: "You are UniBot, a strict tutor. Push the student to think. Do NOT give full answers immediately—ask questions, guide them step-by-step.",
      friendly: "You are UniBot, a friendly assistant. Casual, warm, and supportive. Keep answers helpful but light.",
      motivational: "You are UniBot, a motivational coach. Encourage confidence, give inspirational study advice, boost the student's energy."
    };

    const systemInstruction = modes[mode] || modes.academic;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent([
      { role: "system", parts: systemInstruction },
      { role: "user", parts: prompt }
    ]);

    res.status(200).json({ response: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
