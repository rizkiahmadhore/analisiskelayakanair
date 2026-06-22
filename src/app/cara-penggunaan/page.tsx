import InfoPage from "@/components/InfoPage";
import { ClipboardList, FileText, RotateCcw, SearchCheck } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={28} />,
    title: "Siapkan data kualitas air",
    text: "Gunakan hasil pengukuran suhu, salinitas, pH, oksigen terlarut, TSS, amonia, dan bahan organik dari sampel air yang ingin dianalisis.",
  },
  {
    icon: <FileText size={28} />,
    title: "Masukkan nilai parameter",
    text: "Isi angka pada kolom yang tersedia. Gunakan tanda titik untuk angka desimal, misalnya 7.5 atau 0.1.",
  },
  {
    icon: <SearchCheck size={28} />,
    title: "Jalankan analisis",
    text: "Tekan tombol Analisis untuk menghitung nilai GWQI dan melihat klasifikasi kelayakan sumber air.",
  },
  {
    icon: <RotateCcw size={28} />,
    title: "Lihat rincian atau ulangi",
    text: "Gunakan tombol Rincian untuk melihat tahapan perhitungan, atau Kembali untuk menghapus hasil dan memasukkan data baru.",
  },
];

export default function CaraPenggunaanPage() {
  return (
    <InfoPage
      title="Cara Penggunaan"
      description="Ikuti langkah berikut untuk menganalisis kelayakan sumber air budidaya udang vaname berdasarkan parameter kualitas air."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-lg border border-cyan-400/40 bg-[#0b0b20]/70 p-5 animate-slide"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="mb-3 flex items-center gap-3 text-cyan-300">
              {step.icon}
              <h2 className="text-xl font-semibold text-white">
                {step.title}
              </h2>
            </div>
            <p className="leading-relaxed text-gray-300">{step.text}</p>
          </article>
        ))}
      </div>
    </InfoPage>
  );
}
