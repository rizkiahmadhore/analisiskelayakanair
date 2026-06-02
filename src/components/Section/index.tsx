"use client";

import { useState } from "react";
import BubbleCursor from "@/components/BubbleCursor";
import WarningDialog from "@/components/WarningDialog";
import NeuralGlow from "@/components/NeuralGlow";

import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";

import {
  standards,
  weights,
  calculateGWQI,
  getGWQIClass,
} from "@/app/utils/formula";

import { formatObjectNumbers } from "@/app/utils/format";
import CustomButton from "../CustomButton";
import { Info, IterationCw } from "lucide-react";

export default function Section() {
  const [inputs, setInputs] = useState<number[]>(Array(7).fill(0));

  const [showWarning, setShowWarning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const [step1Result, setStep1Result] = useState<any>({});
  const [step2Result, setStep2Result] = useState<any>({});
  const [step3Result, setStep3Result] = useState(0);

  const handleChange = (value: string, index: number) => {
    const copy = [...inputs];
    copy[index] = parseFloat(value) || 0;
    setInputs(copy);
  };

  const handleSubmit = () => {
    const isAllEmpty = inputs.every((val) => val === 0);

    if (isAllEmpty) {
      setShowWarning(true);
      setShowResult(false);
      return;
    }

    const result = calculateGWQI(inputs);

    setStep1Result(formatObjectNumbers(result.step1, 4));
    setStep2Result(formatObjectNumbers(result.step2, 4));
    setStep3Result(formatObjectNumbers({ total: result.step3 }, 3).total);

    setShowWarning(false);
    setShowResult(true);
  };

  const handleReset = () => {
    setInputs(Array(7).fill(0));

    setShowResult(false);
    setShowDetail(false);

    setStep1Result({});
    setStep2Result({});
    setStep3Result(0);
  };

  return (
    <>
      <NeuralGlow />

      {showWarning && (
        <WarningDialog
          isOpen={showWarning}
          title="Input belum lengkap"
          message="Mohon isi minimal satu parameter kualitas air sebelum melakukan analisis."
          onClose={() => setShowWarning(false)}
        />
      )}

      <div className="relative flex flex-col flex-1 overflow-x-hidden bg-[linear-gradient(to_right,transparent_0%,#0b0b20_20%,#0b0b20_80%,transparent_100%)] items-center justify-center gap-6 text-white py-15 px-15 pt-70 sm:pt-60 md:pt-50 lg:pt-40 xl:pt-30">
        <BubbleCursor />

        {!showResult ? (
          <Section1
            standards={standards}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <>
            <Section2
              step3Result={step3Result}
              classification={getGWQIClass(step3Result)}
              showDetail={showDetail}
              onToggleDetail={() => setShowDetail((prev) => !prev)}
              onReset={handleReset}
            />

            {showDetail && (
              <Section3
                inputs={inputs}
                standards={standards}
                weights={weights}
                step1Result={step1Result}
                step2Result={step2Result}
                step3Result={step3Result}
              />
            )}

            <div className="flex gap-4">
              <CustomButton
                variant="outline"
                icon={<Info size={18} />}
                onClick={() => setShowDetail((prev) => !prev)}
              >
                {showDetail ? "Tutup Rincian" : "Rincian"}
              </CustomButton>

              <CustomButton
                icon={<IterationCw size={18} />}
                onClick={handleReset}
              >
                Kembali
              </CustomButton>
            </div>
          </>
        )}
      </div>
    </>
  );
}
