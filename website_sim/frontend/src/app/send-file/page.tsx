'use client'

import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const SendFile: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('recipient_id', recipientId);
    formData.append('file', file);

    const response = await fetch(`${API_URL}/send-file`, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    alert(`File sent with ID: ${data.file_id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-cyberTheme rounded-lg shadow-md">
      <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" className="input-field" />
      <input value={recipientId} onChange={(e) => setRecipientId(e.target.value)} placeholder="Recipient ID" className="input-field" />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="file-input" />
      <button type="submit" className="btn-primary">Send File</button>
    </form>
  );
};

export default SendFile;