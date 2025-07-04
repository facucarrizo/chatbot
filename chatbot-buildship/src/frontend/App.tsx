import React from 'react';
import ChatbotWidget from './components/ChatbotWidget';
import './styles/chatbot.css';

const App: React.FC = () => {
    return (
        <div className="chatbot-app">
            <h1>Welcome to the Professional Services Chatbot</h1>
            <ChatbotWidget />
        </div>
    );
};

export default App;