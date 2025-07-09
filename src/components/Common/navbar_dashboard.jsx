'use client';

import { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function NavbarDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex items-center justify-between border-b h-16 px-6 bg-white shadow">
      {/* Title */}
      <h1 className="text-lg font-semibold text-[#1E3A5F]">Dashboard Admin</h1>

      {/* Search Input */}
      <div className="flex items-center gap-2 bg-[#f9f9f9] px-4 py-2 rounded-md border w-full max-w-md">
        <Search size={18} className="text-[#1E3A5F]" />
        <input
          type="text"
          placeholder="search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-sm text-[#1E3A5F] w-full"
        />
      </div>

      {/* Notification + Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded bg-[#A4C5DA] hover:bg-[#8FB2CA] transition">
          <Bell className="text-[#1E3A5F]" size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-[#A4C5DA] p-2 rounded-full">
            <User className="text-[#1E3A5F]" size={20} />
          </div>
          <div className="text-xs text-[#1E3A5F] leading-tight">
            <p className="font-medium">username</p>
            <p className="text-[10px]">HR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
