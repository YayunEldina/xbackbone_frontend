import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

type FooterLinkProps = {
  text: string;
  url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <a href={url} className="transition hover:text-teal-500">
      {text}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white pt-10 px-8 pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

        {/* Logo */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/sarastya.jpg"
              alt="Logo"
              width={160}
              height={160}
              className="mr-2 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Fitur */}
        <div>
          <h4 className="font-semibold mb-2">XBackbone</h4>
          <ul className="space-y-1 text-gray-300">
            <li><FooterLink text="Dashboard" url="#" /></li>
            <li><FooterLink text="Management Pengguna" url="#" /></li>
            <li><FooterLink text="Management Organisasi" url="#" /></li>
            <li><FooterLink text="Managemen Lisensi" url="#" /></li>
            {/* <li><FooterLink text="Mobile Developer" url="#" /></li>
            <li><FooterLink text="Network Engineer" url="#" /></li> */}
          </ul>
        </div>

        {/* Alamat */}
        <div>
          <h4 className="font-semibold mb-2">Alamat</h4>
          <p className="text-gray-300">
            Jalan Terusan Candi Mendut No.9B, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold mb-2">Kontak</h4>
          <p className="flex items-center gap-2 text-gray-300">
            <FaPhone /> +62 851-7686-3899
          </p>
          <p className="flex items-center gap-2 text-gray-300 mt-1">
            <FaEnvelope /> sarastya.hg@mail.com
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="font-semibold mb-2">Sosial Media</h4>
          <div className="flex space-x-4 mt-1 text-xl">
            <a href="#"><span className="text-white hover:text-blue-400"><FaLinkedin /></span></a>
            <a href="#"><span className="text-white hover:text-blue-400"><FaFacebook /></span></a>
            <a href="#"><span className="text-white hover:text-pink-400"><FaInstagram /></span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
