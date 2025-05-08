'use client';
import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const UploadKey: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [pubKey, setPubKey] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create FormData to mimic the `curl -F` format
      const formData = new FormData();
      formData.append('user_id', userId);
      formData.append('pubkey', pubKey);

      const response = await fetch(`${API_URL}/pubkey`, {
        method: 'POST',
        headers: {
          // No need to set 'Content-Type' here, FormData sets it automatically
        },
        body: formData, // Sending the FormData object directly
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Upload failed');
      }

      const data = await response.json();
      alert(data.status);
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-cyberTheme rounded-lg shadow-md">
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        className="input-field"
      />
      <input
        value={pubKey}
        onChange={(e) => setPubKey(e.target.value)}
        placeholder="Public Key"
        className="input-field"
      />
      <button type="submit" className="btn-primary">Upload</button>
    </form>
  );
};

export default UploadKey;
