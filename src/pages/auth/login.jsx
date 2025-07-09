import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userStatus, setUserStatus] = useState("");
  const navigate = useNavigate();

  const blueFilter =
    "brightness(0) saturate(100%) invert(61%) sepia(48%) saturate(645%) hue-rotate(180deg) brightness(99%) contrast(105%)";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userStatus) {
      alert("Silakan pilih Status Pengguna terlebih dahulu.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white"> {/* Pastikan latar seluruh halaman putih */}
      <Navbar />

      <main className="flex flex-col md:flex-row flex-grow bg-white"> {/* Tambahkan bg-white di sini */}
        {/* KIRI: Section Sarastya */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-start text-white pt-8 p-10 bg-white"> {/* Tambahkan bg-white */}
          <img
            src="/HR_image.png"
            alt="Sarasstya Icon"
            width={500}
            height={500}
            className="mb-4 object-contain"
          />
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text text-center"
            style={{
              backgroundImage: "linear-gradient(to right, #7CA5BF, #1E3A5F)",
            }}
          >
            {/* PT. SARASTYA TECHNOLOGY */}
            XBACKBONE
          </h1>
          <p className="mt-4 text-center max-w-md text-gray-700 text-lg">
            Platform XBackbone all-in-one untuk otomatisasi pengelolaan untuk
            memudahkan Manager.
          </p>
        </div>

        {/* KANAN: Form Login */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6 bg-white"> {/* Tambahkan bg-white */}
          <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-xl p-8 w-full max-w-md"> {/* Ubah dari gray-100 ke white */}
            <h2 className="text-[32px] font-bold text-gray-800 mb-2 leading-tight">
              Login
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Selamat datang kembali di XBackbone! Atur semua dengan mudah
            </p>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#7CA5BF] to-[#1E3A5F] rounded-full mb-4" />

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Nama Lengkap */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  placeholder="nama lengkap"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1 relative">
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="--- --- ---"
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  <img
                    src={showPassword ? "/password_off.svg" : "/password_on.svg"}
                    alt="Toggle Password"
                    width={20}
                    height={20}
                    style={showPassword ? { filter: blueFilter } : {}}
                  />
                </span>
              </div>

              {/* Ingat saya + Lupa Password */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Ingat saya
                  </label>
                </div>
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  Lupa Password?
                </a>
              </div>

              {/* Tombol Masuk */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
              >
                Masuk Sekarang
              </button>
            </form>

            {/* Link Daftar */}
            <p className="text-sm text-center mt-4 text-gray-600">
              Belum memiliki akun?{" "}
              <a
                href="/auth/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Daftar lewat sini
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
