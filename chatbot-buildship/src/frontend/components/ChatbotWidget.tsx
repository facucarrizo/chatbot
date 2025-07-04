import React, { useState } from 'react';
import './chatbot.css';

const ChatbotWidget: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const newChatHistory = [...chatHistory, { user: userInput, bot: '' }];
        setChatHistory(newChatHistory);
        setUserInput('');

        // Call backend API to get bot response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        const botReply = data.reply;

        setChatHistory((prev) => {
            const lastEntry = prev[prev.length - 1];
            return [...prev.slice(0, -1), { user: lastEntry.user, bot: botReply }];
        });
    };

    return (
        <div className="chatbot-widget">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className="chat-entry">
                        <div className="user-message">{chat.user}</div>
                        <div className="bot-message">{chat.bot}</div>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatbotWidget;