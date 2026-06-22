import InfoPage from "@/components/InfoPage";
import Image from "next/image";
import { GraduationCap, Shell, UserRound, Waves } from "lucide-react";

export default function TentangPage() {
  return (
    <InfoPage
      title="Tentang"
      description="Aplikasi ini dibuat untuk membantu proses penilaian awal kelayakan sumber air pada budidaya udang vaname."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-5 animate-slide">
          <div className="mb-3 flex items-center gap-3 text-cyan-300">
            <Waves size={28} />
            <h2 className="text-xl font-semibold text-white">Fokus sistem</h2>
          </div>
          <p className="leading-relaxed text-gray-300">
            Sistem memproses parameter kualitas air untuk menghasilkan nilai
            GWQI dan klasifikasi kelayakan sebagai bahan pertimbangan awal.
          </p>
        </article>

        <article
          className="rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-5 animate-slide"
          style={{ animationDelay: "100ms" }}
        >
          <div className="mb-3 flex items-center gap-3 text-cyan-300">
            <Shell size={28} />
            <h2 className="text-xl font-semibold text-white">
              Budidaya vaname
            </h2>
          </div>
          <p className="leading-relaxed text-gray-300">
            Parameter yang dianalisis disusun untuk mendukung evaluasi sumber
            air pada kegiatan budidaya udang vaname.
          </p>
        </article>

        <article
          className="rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-5 animate-slide"
          style={{ animationDelay: "200ms" }}
        >
          <div className="mb-3 flex items-center gap-3 text-cyan-300">
            <GraduationCap size={28} />
            <h2 className="text-xl font-semibold text-white">Konteks</h2>
          </div>
          <p className="leading-relaxed text-gray-300">
            Dikembangkan sebagai media bantu analisis kualitas air berbasis web
            dengan Next.js dan Tailwind CSS.
          </p>
        </article>
      </div>

      <section className="grid grid-cols-1 items-center gap-6 rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-6 animate-slide md:grid-cols-[140px_1fr]">
        <div className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-500/10">
            <Image
              src="/Kihor.jpeg"
              alt="Rizki Ahmad Fahrezi"
              width={88}
              height={88}
              className="h-25 w-25 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-cyan-300 md:justify-start">
              <UserRound size={24} />
              <h2 className="text-2xl font-semibold text-white">
                Profil Pengembang
              </h2>
            </div>
            <p className="text-xl font-semibold text-blue-300">
              Rizki Ahmad Fahrezi
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-3">
            <div className="rounded-lg border border-cyan-400/30 bg-[#11112A]/80 p-3">
              <p className="text-cyan-200">Program Studi</p>
              <p> Akuakultur</p>
            </div>
            <div className="rounded-lg border border-cyan-400/30 bg-[#11112A]/80 p-3">
              <p className="text-cyan-200">Departemen</p>
              <p>Perikanan</p>
            </div>
            <div className="rounded-lg border border-cyan-400/30 bg-[#11112A]/80 p-3">
              <p className="text-cyan-200">Institusi</p>
              <p>Universitas Gadjah Mada</p>
            </div>
          </div>
        </div>
      </section>

     
    </InfoPage>
  );
}
