import { GoogleGenAI } from '@google/genai';
import mime from 'mime';
import { writeFile } from 'fs';

export function saveBinaryFile(fileName, content) {
  writeFile(fileName, content, 'utf8', (err) => {
    if (err) console.error(`Error writing file ${fileName}:`, err);
    else console.log(`File ${fileName} saved.`);
  });
}

export async function generateContentStream(userInput) {
  // No apiKey needed — uses GOOGLE_APPLICATION_CREDENTIALS
  const ai = new GoogleGenAI({ vertexai: true });

  const model = 'gemini-2.5-flash-image-preview';
  const config = { responseModalities: ['IMAGE', 'TEXT'] };
  const contents = [{ role: 'user', parts: [{ text: userInput }] }];

  const response = await ai.models.generateContentStream({ model, config, contents });

  let fileIndex = 0;
  for await (const chunk of response) {
    if (!chunk.candidates?.[0]?.content?.parts) continue;

    const part = chunk.candidates[0].content.parts[0];

    if (part.inlineData) {
      const fileName = `output_${fileIndex++}`;
      const inlineData = part.inlineData;
      const ext = mime.getExtension(inlineData.mimeType || '') || 'bin';
      const buffer = Buffer.from(inlineData.data || '', 'base64');
      saveBinaryFile(`${fileName}.${ext}`, buffer);
    } else {
      console.log(chunk.text);
    }
  }
}
