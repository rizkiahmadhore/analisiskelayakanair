import { BlockMath } from "react-katex";
import { getGWQIClass } from "@/app/utils/formula";
import "katex/dist/katex.min.css";

interface Section3Props {
  inputs: number[];
  standards: any;
  weights: any;
  step1Result: any;
  step2Result: any;
  step3Result: number;
}

export default function Section3({
  inputs,
  standards,
  weights,
  step1Result,
  step2Result,
  step3Result,
}: Section3Props) {
  const parameters = [
    {
      label: "SUHU",
      input: inputs[0],
      standard: standards.suhu,
      weight: weights.suhu,
      step1: step1Result.suhu,
      step2: step2Result.suhu,
    },
    {
      label: "SALINITAS",
      input: inputs[1],
      standard: standards.sal,
      weight: weights.sal,
      step1: step1Result.salinitas,
      step2: step2Result.salinitas,
    },
    {
      label: "PH",
      input: inputs[2],
      standard: standards.ph,
      weight: weights.ph,
      step1: step1Result.ph,
      step2: step2Result.ph,
    },
    {
      label: "DO",
      input: inputs[3],
      standard: standards.do,
      weight: weights.do,
      step1: step1Result.do,
      step2: step2Result.do,
    },
    {
      label: "TSS",
      input: inputs[4],
      standard: standards.tss,
      weight: weights.tss,
      step1: step1Result.tss,
      step2: step2Result.tss,
    },
    {
      label: "AMONIA",
      input: inputs[5],
      standard: standards.amonia,
      weight: weights.amonia,
      step1: step1Result.amonia,
      step2: step2Result.amonia,
    },
    {
      label: "B. ORGANIK",
      input: inputs[6],
      standard: standards.organik,
      weight: weights.organik,
      step1: step1Result.organik,
      step2: step2Result.organik,
    },
  ];

  const renderRows = (
    key: "input" | "standard" | "weight" | "step1" | "step2",
  ) =>
    parameters.map((item) => (
      <div
        key={`${item.label}-${key}`}
        className="grid grid-cols-[85px_10px_1fr]"
      >
        <span>{item.label}</span>
        <span>:</span>
        <span className="text-blue-400">{item[key]}</span>
      </div>
    ));

  const Card = ({
    title,
    children,
    delay,
  }: {
    title: string;
    children: React.ReactNode;
    delay: number;
  }) => (
    <div
      className="bg-[#11112A] border border-cyan-400 rounded-xl neon-flicker-slide px-6 py-4"
      style={{ animationDelay: `${delay * 120}ms` }}
    >
      <h2 className="text-lg underline underline-offset-4 mb-2 text-center">
        {title}
      </h2>

      <div className="text-left text-sm">{children}</div>
    </div>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-7xl overflow-hidden">
      <Card title="Input Parameter (Ci)" delay={1}>
        {renderRows("input")}
      </Card>

      <Card title="Nilai Standar (Si)" delay={2}>
        {renderRows("standard")}
      </Card>

      <Card title="Bobot Parameter (Wi)" delay={3}>
        {renderRows("weight")}
      </Card>

      <Card title="Step 1" delay={3}>
        <BlockMath math={String.raw`qi = \frac{Ci}{Si} \times 100`} />
        {renderRows("step1")}
      </Card>

      <Card title="Step 2" delay={4}>
        <BlockMath math={String.raw`SI = Wi \times qi`} />
        {renderRows("step2")}
      </Card>

      <Card title="Step 3" delay={5}>
        <div className="flex flex-col h-full">
          <div className="overflow-x-auto overflow-y-hidden">
            <BlockMath math={String.raw`GwQI = \sum SI`} />
          </div>

          <div className="flex justify-center gap-2 text-lg mt-auto pt-6">
            <div className="text-right">
              <p>TOTAL:</p>
              <p>Klasifikasi:</p>
            </div>

            <div className="text-left">
              <div className="font-bold text-blue-400">{step3Result}</div>

              <div className="font-semibold text-blue-400">
                {getGWQIClass(step3Result)}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
