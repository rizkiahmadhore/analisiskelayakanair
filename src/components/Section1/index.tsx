import CustomButton from "../CustomButton";
import { ChartNoAxesCombined } from "lucide-react";

interface Section1Props {
  standards: {
    suhu: number;
    sal: number;
    ph: number;
    do: number;
    tss: number;
    amonia: number;
    organik: number;
  };
  handleChange: (value: string, index: number) => void;
  handleSubmit: () => void;
}

export default function Section1({
  standards,
  handleChange,
  handleSubmit,
}: Section1Props) {
  const fields = [
    {
      label: "Suhu (°C)",
      placeholder: standards.suhu,
    },
    {
      label: "Salinitas (ppt)",
      placeholder: standards.sal,
    },
    {
      label: "pH",
      placeholder: standards.ph,
    },
    {
      label: "Oksigen terlarut (mg/L atau ppm)",
      placeholder: standards.do,
    },
    {
      label: "TSS (mg/L)",
      placeholder: standards.tss,
    },
    {
      label: "Amonia (mg/L N-NH₃)",
      placeholder: standards.amonia,
    },
    {
      label: "Bahan organik (mg/L)",
      placeholder: standards.organik,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-xl text-center font-semibold animate-slide">
        Masukkan parameter kualitas air Anda
      </h1>

      <div className="flex flex-col max-w-xl gap-3">
        {fields.map((field, index) => (
          <div
            key={field.label}
            className="grid grid-cols-2 sm:grid-cols-[300px_1fr] items-center gap-4 animate-slide"
            style={{ animationDelay: `${(index + 1) * 120}ms` }}
          >
            <label className="text-right text-md">{field.label}</label>

            <input
              type="number"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === ",") e.preventDefault();
              }}
              placeholder={`Contoh: ${field.placeholder}`}
              className="w-full rounded-lg px-2 py-2 bg-[#11112A] border border-gray-600
              focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:opacity-25"
            />
          </div>
        ))}
      </div>

      <CustomButton
        onClick={handleSubmit}
        icon={<ChartNoAxesCombined size={18} />}
        style={{ animationDelay: `${8 * 120}ms` }}
      >
        Analisis
      </CustomButton>
    </section>
  );
}
