'use client';
import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SendMessage: React.FC = () => {
  const [senderId, setSenderId] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/send-text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender_id: senderId, recipient_id: recipientId, message })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to send message');
      }

      const data = await response.json();
      alert(`Message sent!\nEncrypted: ${data.encrypted_message}`);
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-cyberTheme rounded-lg shadow-md">
      <input
        value={senderId}
        onChange={(e) => setSenderId(e.target.value)}
        placeholder="Sender ID"
        className="input-field"
      />
      <input
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
        placeholder="Recipient ID"
        className="input-field"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        className="textarea-field"
        rows={5}
      />
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  );
};

export default SendMessage;
