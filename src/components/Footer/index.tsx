import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-cyan-400 bg-[#0b0b20]/25 backdrop-blur-md mt-auto z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        {/* Kiri */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <Image
            src="/logo/Lambang UGM-putih.png"
            alt="Logo UGM"
            width={100}
            height={100}
            draggable={false}
            className="w-25 h-25 object-contain"
          />

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cyan-200 tracking-wide">
              <span className="px-2 py-0.5 rounded-full border border-cyan-500/40 bg-cyan-500/10">
                Program Studi Akuakultur
              </span>

              <span className="text-cyan-500">•</span>

              <span>Departemen Perikanan</span>

              <span className="text-cyan-500">•</span>

              <span>Fakultas Pertanian</span>
            </div>

            <h2 className="text-cyan-400 font-bold text-lg uppercase tracking-widest">
              Universitas Gadjah Mada
            </h2>

            <div className="w-24 h-0.5 bg-linear-to-r from-cyan-400 to-transparent rounded-full" />

            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
              Istimewa Yogyakarta 55281
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="text-center md:text-right text-gray-500">
          <p>© 2026 Rizki Ahmad Fahrezi</p>
          <p>Dikembangkan dengan Next.js dan Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
