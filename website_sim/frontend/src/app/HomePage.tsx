'use client'
import React from 'react';
import Link from 'next/link';
import { FaKey, FaEnvelope, FaFileAlt, FaUser, FaBell, FaChartBar, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';

const HomePage: React.FC = () => {
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

      {/* Dashboard Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="h-42 bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-cyan-600/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">System Status</h2>
              <FaShieldAlt size={20} className="text-006466" />
            </div>
            <p className="text-3xl font-bold text-006466 mb-2">Secure</p>
            <p className="text-065a60 text-sm">Last scan: 2 minutes ago</p>
            <div className="mt-4 w-full bg-1b3a4b h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-065a60 to-1b3a4b h-full rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>

          <div className="h-42 bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-3e1f47/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Network Traffic</h2>
              <FaNetworkWired size={20} className="text-3e1f47" />
            </div>
            <p className="text-3xl font-bold text-3e1f47 mb-2">1.2 GB</p>
            <p className="text-065a60 text-sm">24-hour volume</p>
            <div className="mt-4 w-full bg-1b3a4b h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-3e1f47 to-3e1f47 h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="h-42 bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-212f45/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Encryption Status</h2>
              <FaKey size={20} className="text-0b525b" />
            </div>
            <p className="text-3xl font-bold text-0b525b mb-2">Active</p>
            <p className="text-065a60 text-sm">RSA-4096</p>
            <div className="mt-4 w-full bg-1b3a4b h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-0b525b to-065a60 h-full rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Action Cards with Modern Button */}
          <div className="h-42 flex flex-col justify-between bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-cyan-600/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Upload Key</h2>
              <FaKey size={20} className="text-006466" />
            </div>
            <Link href="/upload-key">
              <button className="bg-006466 text-white py-2 px-4 rounded-lg mx-auto hover:bg-065a60 transition-colors w-full">
                Upload Key
              </button>
            </Link>
          </div>

          <div className="h-42 flex flex-col justify-between bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-3e1f47/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Send Message</h2>
              <FaEnvelope size={20} className="text-3e1f47" />
            </div>
            <Link href="/send-message">
              <button className="bg-006466 text-white py-2 px-4 rounded-lg mx-auto hover:bg-065a60 transition-colors w-full">
                Send Message
              </button>
            </Link>
          </div>

          <div className="h-42 flex flex-col justify-between bg-312244 border border-1b3a4b rounded-lg p-4 shadow-lg hover:shadow-212f45/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Send File</h2>
              <FaFileAlt size={20} className="text-0b525b" />
            </div>
            <Link href="/send-file">
              <button className="bg-006466 text-white py-2 px-4 rounded-lg mx-auto hover:bg-065a60 transition-colors w-full">
                Send File
              </button>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-312244 border border-1b3a4b rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-006466">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b border-1b3a4b pb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-3e1f47/30 flex items-center justify-center">
                  <FaFileAlt className="text-3e1f47" />
                </div>
                <div>
                  <p className="font-medium">File_00{item}.encrypted was sent</p>
                  <p className="text-065a60 text-sm">{item * 2} hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default HomePage;
