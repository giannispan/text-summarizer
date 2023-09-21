import { Request, Response } from 'express';
import OpenAI from 'openai';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve('../.env') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class SummarizeController {
  async summarizeText(req: Request, res: Response) {
    const { inputText } = req.body;

    const completionRequest = {
      model: 'davinci',
      prompt: `Summarize the following text: ${inputText}`,
      temperature: 0,
      max_tokens: 1024,
    };

    try {
      const response = await openai.completions.create(completionRequest);

      const summary = response.choices[0]?.text || 'No summary available';

      res.status(200).json({ summary });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
}

export default new SummarizeController();
