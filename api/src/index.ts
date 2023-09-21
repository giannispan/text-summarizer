import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import SummarizerController from './controllers/summarizeController';

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// Define a route for text summarization
app.post('/summarize', SummarizerController.summarizeText);

// Define a default route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Text Summarizer API is running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
