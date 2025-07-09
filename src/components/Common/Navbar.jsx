import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { title: 'Beranda', url: '/' },
    { title: 'Solusi', url: '/solusi' },
    { title: 'Harga', url: '/harga' },
  ];

  function NavItem({ title, url, isSelected }) {
    return (
      <li>
        <Link
          to={url}
          className={`block px-3 py-2 transition hover:text-[#7CA5BF] ${
            isSelected ? 'text-[#7CA5BF]' : 'text-[#1E3A5F]'
          }`}
        >
          {title}
        </Link>
      </li>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f8f8] shadow-xl border-b-2 border-[#1E3A5F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo (bulat & tidak melebihi navbar) */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#1E3A5F]/30">
              <img
                src="/sarastya.jpg"
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-10 font-medium">
            {navLinks.map((link) => (
              <NavItem
                key={link.url}
                title={link.title}
                url={link.url}
                isSelected={pathname === link.url}
              />
            ))}
          </ul>

          {/* Login & Demo Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/auth/login"
              className={`font-medium ${
                pathname === '/login/email' ? 'text-[#7CA5BF]' : 'text-[#1E3A5F]'
              } hover:text-[#7CA5BF]`}
            >
              Login
            </Link>

            <Link
              to="/auth/register"
              className="bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-[24px] p-1 text-white items-center"
            >
              <span className="inline-block bg-white text-[#1E3A5F] rounded-[20px] px-6 py-2 text-sm font-medium">
                Demo Gratis
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
