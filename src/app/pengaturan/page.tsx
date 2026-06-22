import InfoPage from "@/components/InfoPage";
import { Gauge, Keyboard, SlidersHorizontal } from "lucide-react";

const settings = [
  {
    icon: <Keyboard size={28} />,
    title: "Format input",
    text: "Masukkan data dalam bentuk angka. Untuk nilai pecahan, gunakan titik sebagai pemisah desimal agar pembacaan nilai tetap konsisten.",
  },
  {
    icon: <Gauge size={28} />,
    title: "Satuan parameter",
    text: "Suhu memakai derajat Celsius, salinitas memakai ppt, sedangkan DO, TSS, amonia, dan bahan organik memakai mg/L sesuai label pada formulir.",
  },
  {
    icon: <SlidersHorizontal size={28} />,
    title: "Standar perhitungan",
    text: "Aplikasi menggunakan nilai standar dan bobot parameter bawaan pada metode GWQI yang sudah ditanamkan di sistem.",
  },
];

export default function PengaturanPage() {
  return (
    <InfoPage
      title="Pengaturan"
      description="Halaman ini menjelaskan aturan input dan konfigurasi dasar yang digunakan sistem ketika melakukan perhitungan kelayakan air."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {settings.map((setting, index) => (
          <article
            key={setting.title}
            className="rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-5 animate-slide"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="mb-3 flex items-center gap-3 text-cyan-300">
              {setting.icon}
              <h2 className="text-xl font-semibold text-white">
                {setting.title}
              </h2>
            </div>
            <p className="leading-relaxed text-gray-300">{setting.text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-blue-400/40 bg-blue-500/10 p-5 text-gray-200">
        <h2 className="mb-2 text-xl font-semibold text-blue-200">
          Catatan penggunaan
        </h2>
        <p className="leading-relaxed">
          Jika data parameter belum lengkap, sistem tetap dapat menghitung dari
          nilai yang diisi. Untuk hasil yang lebih representatif, gunakan data
          pengukuran lengkap dari semua parameter.
        </p>
      </div>
    </InfoPage>
  );
}
