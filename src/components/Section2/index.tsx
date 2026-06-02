interface Section2Props {
  step3Result: number;
  classification: string;
  showDetail: boolean;
  onToggleDetail: () => void;
  onReset: () => void;
}

export default function Section2({
  step3Result,
  classification,
  showDetail,
}: Section2Props) {
  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-xl font-semibold animate-slide pt-4">
        Hasil Analisis
      </h1>

      {!showDetail && (
        <div
          className="flex flex-col justify-center items-center text-3xl z-5 animate-slide"
          style={{ animationDelay: "120ms" }}
        >
          <div className="font-bold text-blue-400">{step3Result}</div>

          <div className="font-semibold text-blue-400">{classification}</div>
        </div>
      )}
    </section>
  );
}
