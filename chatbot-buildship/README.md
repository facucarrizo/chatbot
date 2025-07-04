# chatbot-buildship
This project is a specialized chatbot designed for professional services such as real estate, law firms, and medical centers. The chatbot is capable of answering frequently asked questions, guiding users through key processes, and escalating leads when necessary.

## Features
- Utilizes a Google Sheet as a knowledge base for custom FAQs tailored to different industries.
- Integrates with OpenAI to generate natural language responses when predefined answers are unavailable.
- Collects user data (e.g., name, phone number, service of interest) when appropriate.
- Sends email notifications to businesses when a lead is detected.
- Can be embedded in websites as a widget or iframe.

## Project Structure
```
chatbot-buildship
├── src
│   ├── backend
│   │   ├── index.ts
│   │   ├── googleSheets
│   │   │   └── sheetsService.ts
│   │   ├── openai
│   │   │   └── openaiService.ts
│   │   ├── email
│   │   │   └── emailService.ts
│   │   └── leadDetection
│   │       └── leadService.ts
│   ├── frontend
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── ChatbotWidget.tsx
│   │   └── styles
│   │       └── chatbot.css
│   └── types
│       └── index.ts
├── buildship.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Define Requirements**  
   Specify conversation flows, data to be collected, and criteria for lead detection.

2. **Prepare Google Sheets**  
   Create a sheet with columns such as `Question`, `Answer`, `Industry`, etc. Use the Google Sheets API to access data from your backend.

3. **Set Up Backend**  
   - Use Node.js, Python, or your preferred stack.
   - Implement endpoints for:
     - Fetching answers from Google Sheets.
     - Calling the OpenAI API if no answer is found.
     - Storing user data and detecting leads.
     - Sending emails (consider using Nodemailer, SendGrid, etc.).

4. **Create Frontend for the Chatbot**  
   - Use frameworks like React, Vue, or a simple JS widget.
   - Connect the frontend to your backend via REST API.
   - Allow integration as a widget or iframe.

5. **Make It Modular**  
   - Parameterize the Google Sheet and OpenAI prompt per client/industry.
   - Use environment variables or configuration files.

6. **Test and Adjust**  
   - Simulate real conversations.
   - Adjust prompts and flows based on feedback.

## Useful Resources
- [Google Sheets API Quickstart](https://developers.google.com/sheets/api/quickstart)
- [OpenAI API Docs](https://platform.openai.com/docs/api-reference)
- [Nodemailer](https://nodemailer.com/about/)
- [How to Create an Embeddable Widget](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)