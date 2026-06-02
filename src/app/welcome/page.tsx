"use client";

import Image from "next/image";
import BubbleCursor from "@/components/BubbleCursor";
import { useRouter } from "next/navigation";
import BlurText from "@/components/BlurText";
import CustomButton from "@/components/CustomButton";

export default function Wellcome() {
  const router = useRouter();
  return (
    <div className="h-screen w-full text-center flex flex-col items-center justify-center gap-3 bg-[#0B0B20] px-5">
      <BubbleCursor />
      <Image
        src="/logo/Lambang UGM-putih.png"
        alt="Logo UGM"
        width={200}
        height={200}
      />
      <BlurText
        text="Selamat Datang di Sistem Analisis Kelayakan Sumber Air Budidaya Udang Vaname"
        delay={250}
        animateBy="words"
        direction="top"
        className="text-3xl text-center text-white font-semibold"
      />
      <p className="text-3md text-center text-white font">
        Tentukan seberapa baik kualitas air Anda di sini!
      </p>
      <CustomButton onClick={() => router.push("/?enter=1")}>
        Masuk
      </CustomButton>
    </div>
  );
}
