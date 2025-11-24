import { GoogleGenAI, Type } from "@google/genai";
import { EstimateResponse } from "../types.ts";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

export const generateEstimate = async (
  description: string,
  imageBase64?: string
): Promise<EstimateResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure the environment variable or add it to index.html process.env.");
  }

  const modelId = "gemini-2.5-flash"; // Efficient for multimodal tasks

  // Define the response schema for structured output
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      estimatedPriceRange: {
        type: Type.STRING,
        description: "A rough estimated price range in USD (e.g., '$150 - $250').",
      },
      explanation: {
        type: Type.STRING,
        description: "A friendly explanation of what the work entails based on the input.",
      },
      difficultyLevel: {
        type: Type.INTEGER,
        description: "A number from 1 to 10 indicating difficulty.",
      },
      materialsNeeded: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of potential materials needed.",
      },
      disclaimer: {
        type: Type.STRING,
        description: "A legal disclaimer stating this is AI-generated and requires an in-person quote.",
      },
    },
    required: ["estimatedPriceRange", "explanation", "difficultyLevel", "materialsNeeded", "disclaimer"],
  };

  const promptText = `
    You are Dan, an experienced, friendly, and honest handyman. 
    Analyze the user's repair request.
    If an image is provided, inspect it for damage magnitude, material type, and accessibility.
    Provide a conservative, rough cost estimate for the job.
    Be realistic about labor and parts. 
    Maintain a professional yet approachable tone.
    The user's description is: "${description}"
  `;

  const parts: any[] = [{ text: promptText }];

  if (imageBase64) {
    // Remove data URL prefix if present (e.g., "data:image/jpeg;base64,")
    const base64Data = imageBase64.split(',')[1] || imageBase64;
    parts.push({
      inlineData: {
        mimeType: "image/jpeg", // Assuming JPEG for simplicity, or detect from header
        data: base64Data,
      },
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        systemInstruction: "You are an expert home repair estimator system for Dan Handyman Services.",
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from AI");

    return JSON.parse(jsonText) as EstimateResponse;
  } catch (error) {
    console.error("Error generating estimate:", error);
    throw new Error("Failed to generate estimate. Please try again later.");
  }
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};