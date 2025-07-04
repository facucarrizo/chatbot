import express from 'express';
import bodyParser from 'body-parser';
import { SheetsService } from './googleSheets/sheetsService';
import { OpenAIService } from './openai/openaiService';
import { EmailService } from './email/emailService';
import { LeadService } from './leadDetection/leadService';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const sheetsService = new SheetsService();
const openAIService = new OpenAIService();
const emailService = new EmailService();
const leadService = new LeadService();

// Define routes
app.get('/faqs/:industry', async (req, res) => {
    const industry = req.params.industry;
    const faqs = await sheetsService.getFAQs(industry);
    res.json(faqs);
});

app.post('/generate-response', async (req, res) => {
    const { question } = req.body;
    const response = await openAIService.generateResponse(question);
    res.json({ response });
});

app.post('/lead', async (req, res) => {
    const userData = req.body;
    const isLead = leadService.detectLead(userData);
    if (isLead) {
        await emailService.sendEmail(userData);
    }
    res.json({ isLead });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});