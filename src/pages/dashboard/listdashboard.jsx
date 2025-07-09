'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import NavbarDashboard from '../../components/Common/navbar_dashboard';
import ChartLisensi from './component/chartLisensi';
import ChartOrganization from './component/chartOrganization';
import ChartPengguna from './component/chartPengguna';

export default function ListDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeDashboard = async () => {
      setIsLoading(false);
    };

    initializeDashboard();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F5F6FA]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <NavbarDashboard />

        <h1 className="text-2xl font-bold text-[#1E3A5F]">Dashboard Chart</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow border">
            <h2 className="font-semibold text-[#1E3A5F] mb-2">Statistik Lisensi</h2>
            <ChartLisensi />
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <h2 className="font-semibold text-[#1E3A5F] mb-2">Statistik Organisasi</h2>
            <ChartOrganization />
          </div>
          <div className="bg-white p-4 rounded-xl shadow border md:col-span-2">
            <h2 className="font-semibold text-[#1E3A5F] mb-2">Statistik Pengguna</h2>
            <ChartPengguna />
          </div>
        </div>
      </div>
    </div>
  );
}
