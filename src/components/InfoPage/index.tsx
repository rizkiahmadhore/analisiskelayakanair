import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NeuralGlow from "@/components/NeuralGlow";
import Link from "next/link";
import type { ReactNode } from "react";

interface InfoPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function InfoPage({
  title,
  description,
  children,
}: InfoPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden text-white">
      <Navbar />
      <NeuralGlow />

      <main className="relative z-10 flex flex-1 justify-center px-6 pb-16 pt-72 sm:pt-64 md:pt-52 lg:pt-44 xl:pt-36">
        <section className="flex w-full max-w-5xl flex-col gap-8 rounded-xl border border-cyan-400/70 bg-[#11112A]/85 px-6 py-8 shadow-[0_0_20px_rgba(34,211,238,0.18)] backdrop-blur-md sm:px-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Sistem Analisis Kelayakan Air
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300">
              {description}
            </p>
          </div>

          {children}

        </section>
      </main>

      <Footer />
    </div>
  );
}
