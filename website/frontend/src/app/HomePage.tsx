'use client'
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center p-8 min-h-screen bg-cyberTheme">
      <h1 className="text-4xl font-bold mb-8 text-cyberGreen">Secure Sim</h1>
      <nav className="flex flex-col gap-4 text-center">
        <Link href="/upload-key" className="btn-primary">Upload Public Key</Link>
        <Link href="/send-message" className="btn-primary">Send Message</Link>
        <Link href="/send-file" className="btn-primary">Send File</Link>
        <Link href="/view-messages" className="btn-primary">View Messages</Link>
        <Link href="/view-files" className="btn-primary">View Files</Link>
      </nav>
    </main>
  );
};

export default HomePage;
