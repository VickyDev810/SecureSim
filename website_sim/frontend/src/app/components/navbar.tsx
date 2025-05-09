
import React from 'react';
import Link from 'next/link';
import { FaUser, FaBell} from 'react-icons/fa';

const NavBar: React.FC = () => {
return (
<div>
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
      </header>
      </div>
);
}

export default NavBar;