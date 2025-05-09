'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUser, FaKey, FaEnvelope, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

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
    <div className="flex flex-col min-h-screen bg-4d194d text-006466">
      {/* Top Navbar */}
      <header className="flex justify-between items-center py-4 bg-312244 px-6 border-b border-212f45 shadow-lg">
        <h1 className="text-2xl font-bold">
          <span className="text-006466">Secure</span>
          <span className="text-3e1f47">Sim</span>
        </h1>
        
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="navbar-link group">
            <span>Home</span>
            <div className="nav-glow"></div>
          </Link>
          
          <Link href="/keys" className="navbar-link group">
            <span>Keys</span>
            <div className="nav-glow"></div>
          </Link>
          
          <Link href="/messages" className="navbar-link group">
            <span>Messages</span>
            <div className="nav-glow"></div>
          </Link>
          
          <Link href="/files" className="navbar-link group">
            <span>Files</span>
            <div className="nav-glow"></div>
          </Link>
          
          <Link href="/about" className="navbar-link group">
            <span>About</span>
            <div className="nav-glow"></div>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="relative transition-transform transform hover:scale-110">
            <FaBell size={20} className="text-0b525b hover:text-144552 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center text-white">3</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-144552 flex items-center justify-center">
              <FaUser size={16} />
            </div>
            <span className="hidden md:block">User_01</span>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center py-2 bg-272640 border-b border-1b3a4b">
        <nav className="flex justify-between w-full px-4">
          <Link href="/" className="mobile-nav-link">
            <FaUser size={20} />
          </Link>
          <Link href="/keys" className="mobile-nav-link">
            <FaKey size={20} />
          </Link>
          <Link href="/messages" className="mobile-nav-link">
            <FaEnvelope size={20} />
          </Link>
          <Link href="/files" className="mobile-nav-link">
            <FaFileAlt size={20} />
          </Link>
          <Link href="/about" className="mobile-nav-link">
            <FaShieldAlt size={20} />
          </Link>
        </nav>
      </div>

      {/* Form Container */}
      <main className="flex-1 p-6 flex justify-center items-center bg-312244">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-3e1f47 rounded-lg border border-1b3a4b shadow-lg hover:shadow-cyan-600/30 transition-all w-full max-w-md">
          <h2 className="text-xl font-semibold text-006466 mb-2">Send Secure Message</h2>
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
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        .navbar-link {
          @apply relative flex items-center py-2 px-3 rounded-md text-065a60 hover:text-006466 transition-all duration-200;
        }
        
        .mobile-nav-link {
          @apply flex items-center justify-center p-2 rounded-md text-065a60 hover:text-006466 transition-colors;
        }
        
        .nav-glow {
          @apply absolute bottom-0 left-0 right-0 h-0.5 bg-006466 opacity-0 group-hover:opacity-100 transition-all duration-300;
          box-shadow: 0 0 8px 1px rgba(6, 182, 212, 0.4);
        }

        .input-field {
          @apply py-2 px-4 rounded-md border border-212f45 bg-272640 text-white;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .textarea-field {
          @apply py-2 px-4 rounded-md border border-212f45 bg-272640 text-white;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          @apply bg-006466 text-white py-2 px-4 rounded-lg hover:bg-065a60 transition-colors;
        }
      `}</style>
    </div>
  );
};

export default SendMessage;
