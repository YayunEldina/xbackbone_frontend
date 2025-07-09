import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/Common/Navbar';
import Footer from '../../components/Common/Footer';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const blueFilter =
    'brightness(0) saturate(100%) invert(61%) sepia(48%) saturate(645%) hue-rotate(180deg) brightness(99%) contrast(105%)';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bisa tambah validasi dan API call di sini

    // Redirect ke halaman login setelah submit
    navigate('/auth/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex flex-col md:flex-row flex-grow">
        {/* KIRI */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-start text-white pt-8 p-10 bg-white">
          <img
            src="/HR_image.png"
            alt="HRIS Icon"
            width={500}
            height={500}
            className="mb-4 object-contain"
          />
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text text-center"
            style={{
              backgroundImage: 'linear-gradient(to right, #7CA5BF, #1E3A5F)',
            }}
          >
            XBACKBONE
          </h1>
          <p className="mt-4 text-center max-w-md text-gray-700 text-lg">
            Platform XBackbone all-in-one untuk otomatisasi pengelolaan untuk memudahkan Manager.
          </p>
        </div>

        {/* KANAN */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-6">
          <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
            <h2 className="text-[32px] font-bold text-gray-800 mb-2">Daftar di XBackbone</h2>
            <p className="text-sm text-gray-600 mb-2">
              Daftarkan akunmu manager dengan mudah di XBackbone
            </p>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-full mb-4" />

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* first name */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* lastname */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status Pengguna
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Status Pengguna</label>
                <select
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Pilih Status --</option>
                  <option value="manager">Manager</option>
                  <option value="magang">Peserta Magang</option>
                </select>
              </div> */}

              {/* lastname */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Organization name</label>
                <input
                  type="text"
                  placeholder="PT. Sarastya Technology"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="manager1@gmail.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* lastname */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  placeholder="managersatu"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div className="space-y-1 relative">
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  <img
                    src={showPassword ? '/password_off.svg' : '/password_on.svg'}
                    alt="Toggle Password"
                    width={20}
                    height={20}
                    style={showPassword ? { filter: blueFilter } : {}}
                  />
                </span>
              </div>

              {/* Konfirmasi Password */}
              <div className="space-y-1 relative">
                <label className="text-sm text-gray-600">Konfirmasi Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Konfirmasi Password"
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  <img
                    src={showConfirmPassword ? '/password_off.svg' : '/password_on.svg'}
                    alt="Toggle Confirm Password"
                    width={20}
                    height={20}
                    style={showConfirmPassword ? { filter: blueFilter } : {}}
                  />
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-4 mb-3"
              >
                Daftar Sekarang
              </button>

              {/* <div className="flex items-center gap-2 mb-2">
                <div className="flex-grow h-px bg-blue-300" />
                <span className="text-sm font-semibold text-blue-400 whitespace-nowrap">
                  Metode Lain
                </span>
                <div className="flex-grow h-px bg-blue-300" />
              </div>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md bg-white font-semibold mt-2">
                <span>Gunakan akun Google</span>
                <img src="/icon-google.svg" alt="Google" width={20} height={20} />
              </button> */}
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Sudah pernah daftar?{' '}
              <Link to="/auth/login" className="text-blue-600 font-medium hover:underline">
                Masuk disini
              </Link>
            </p>
            <p className="text-xs text-center text-gray-500 mt-2">
              Dengan menekan tombol daftar, saya telah membaca dan menyetujui serta patuh kepada{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Syarat & Ketentuan XBackbone
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
