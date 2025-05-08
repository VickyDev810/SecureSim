'use client'
import React, { useState } from 'react';


const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ViewFiles: React.FC = () => {
  const [fileId, setFileId] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/files/${fileId}`);
    const data = await response.json();
    setFileContent(data.encrypted_content || 'File not found');
  };

  return (
    <div className="flex flex-col gap-4 p-8 bg-cyberTheme rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input value={fileId} onChange={(e) => setFileId(e.target.value)} placeholder="File ID" className="input-field" />
        <button type="submit" className="btn-primary">View File</button>
      </form>
      <div className="file-container">{fileContent}</div>
    </div>
  );
};

export default ViewFiles;