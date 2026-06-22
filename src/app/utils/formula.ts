// Weight (Wi)
export const weights = {
  suhu: 0.1538,
  sal: 0.1923,
  ph: 0.1538,
  do: 0.1538,
  tss: 0.1154,
  amonia: 0.1154,
  organik: 0.1154,
};

// Standar parameter
export const standards = {
  suhu: 28,
  sal: 20,
  ph: 7.5,
  do: 4,
  tss: 80,
  amonia: 0.1,
  organik: 55,
};

// Step 1
export function step1_qi(input: number, standard: number): number {
  if (!standard) return 0;
  return (input / standard) * 100;
}

// Step 2
export function step2_weighted(qi: number, weight: number): number {
  return qi * weight;
}

// Step 3
export function step3_total(data: Record<string, number>): number {
  return Object.values(data).reduce((acc, v) => acc + v, 0);
}

// ===== FULL CALCULATION =====
export function calculateGWQI(inputs: number[]) {
  const step1 = {
    suhu: step1_qi(inputs[0], standards.suhu),
    salinitas: step1_qi(inputs[1], standards.sal),
    ph: step1_qi(inputs[2], standards.ph),
    do: step1_qi(inputs[3], standards.do),
    tss: step1_qi(inputs[4], standards.tss),
    amonia: step1_qi(inputs[5], standards.amonia),
    organik: step1_qi(inputs[6], standards.organik),
  };
  const step2 = {
    suhu: step2_weighted(step1.suhu, weights.suhu),
    salinitas: step2_weighted(step1.salinitas, weights.sal),
    ph: step2_weighted(step1.ph, weights.ph),
    do: step2_weighted(step1.do, weights.do),
    tss: step2_weighted(step1.tss, weights.tss),
    amonia: step2_weighted(step1.amonia, weights.amonia),
    organik: step2_weighted(step1.organik, weights.organik),
  };
  const step3 = step3_total(step2);
  return {
    step1,
    step2,
    step3,
  };
}

// ===== GWQI CLASS =====
export function getGWQIClass(value: number) {
  if (value < 50) return "Sangat Baik";
  if (value < 100) return "Baik";
  if (value < 200) return "Buruk";
  if (value < 300) return "Sangat Buruk";
  return "Tidak Layak";
}
