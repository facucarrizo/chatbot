# chatbot
chatbot especializado
I'm building a specialized chatbot for professional services (e.g. real estate, law firms, medical centers) that can answer frequently asked questions, guide users through key processes (like scheduling, pricing, or qualification), and escalate leads when needed. 

The bot should:
- Use a Google Sheet as a knowledge base of custom FAQs per industry.
- Call OpenAI to generate natural language replies when there's no predefined answer.
- Collect user data (e.g. name, phone, service of interest) when appropriate.
- Send an email notification to the business if a lead is detected.
- Be embeddable in websites as a widget or iframe.

I want it to be modular, so I can clone the same flow and adapt it to different industries or clients by just changing the content in the Google Sheet and the prompt for OpenAI.
