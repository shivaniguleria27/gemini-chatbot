import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyANwz7NJKuO8PQodrH7PztWwqGhKYytmCM"; // Ensure your API key is secured in a real-world scenario
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
export default async function runChat(prompt) {
  console.log("running");
  // Initialize GoogleGenerativeAI with your API key
  const genAI = new GoogleGenerativeAI(apiKey);

  // Load the Gemini model
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  // Start a chat session with the model
  const chatSession = model.startChat({
    generationConfig,
    history: [], // Optional: Add previous message history if needed
  });

  try {
    // Send the message (prompt) and wait for the result
    const result = await chatSession.sendMessage(prompt);

    // Extract the response text
    const responseText = result.response; // Adjust according to actual API response structure
    console.log("Response from model:", responseText);
    console.log("another from model:", responseText.text());
    setAnswers((prev) => [...prev, responseText.text()]);
    return responseText;
  } catch (error) {
    console.error("Error during chat:", error);
    return null;
  }
}
