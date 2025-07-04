import axios from 'axios';

export class OpenAIService {
    private apiKey: string;
    private apiUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://api.openai.com/v1/chat/completions';
    }

    public async generateResponse(prompt: string): Promise<string> {
        try {
            const response = await axios.post(this.apiUrl, {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error generating response from OpenAI:', error);
            throw new Error('Failed to generate response');
        }
    }
}