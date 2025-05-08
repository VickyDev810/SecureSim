'use client'
import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const ViewMessages: React.FC = () => {
  const [msgId, setMsgId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/messages/${msgId}`);
    const data = await response.json();
    setMessage(data.message || 'Message not found');
  };

  return (
    <div className="flex flex-col gap-4 p-8 bg-cyberTheme rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input value={msgId} onChange={(e) => setMsgId(e.target.value)} placeholder="Message ID" className="input-field" />
        <button type="submit" className="btn-primary">View Message</button>
      </form>
      <div className="message-container">{message}</div>
    </div>
  );
};

export default ViewMessages;