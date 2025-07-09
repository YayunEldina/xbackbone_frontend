import { Home, Users, Building2, User, LogOut } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: Home, href: '/Admin/dashboard' },
    { label: 'Pengelola Pengguna', icon: Users, href: '/Admin/Pengguna' },
    { label: 'Pengelola Organisasi', icon: Building2, href: '/Admin/Organisasi' },
    { label: 'Profile', icon: User, href: '/Admin/profile' },
  ];

  const handleLogout = () => {
    navigate('/landing_page');
  };

  return (
    <aside className="w-64 bg-white text-[#1E3A5F] min-h-screen flex flex-col justify-between py-6 px-4 shadow-md border-r">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src="/sarastya.jpg"
          alt="Sarastya Logo"
          width={60}
          height={60}
          className="rounded-full mb-2"
        />
        {/* Nama Perusahaan */}
        <span className="text-base font-semibold text-center mb-12">
          PT. Sarastya Technologi
        </span>

        {/* Navigasi */}
        <nav className="space-y-2 w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.label}
                to={item.href}
                className={`group flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1E3A5F] text-white'
                    : 'text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white'
                }`}
              >
                <item.icon
                  className={`h-5 w-5 transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#1E3A5F] group-hover:text-white'
                  }`}
                />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#1E3A5F] hover:text-white text-[#1E3A5F]"
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </aside>
  );
}
