"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MeshBackground } from "@/components/MeshBackground";
import { Cover } from "@/components/Cover";
import { PlanoAcao } from "@/components/PlanoAcao";
import { Diagnostico } from "@/components/Diagnostico";
import { ViciousCycle, type SlideHandler } from "@/components/ViciousCycle";
import { Calculator } from "@/components/Calculator";
import { CustoOportunidade } from "@/components/CustoOportunidade";
import { SolutionOverview } from "@/components/SolutionOverview";
import { Mentoria } from "@/components/Mentoria";
import { AgenteAtendimento } from "@/components/AgenteAtendimento";
import { Investimento } from "@/components/Investimento";
import { ProximosPassos } from "@/components/ProximosPassos";

const TOTAL_SLIDES = 11;

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 60 : -60, filter: "blur(12px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -60 : 60, filter: "blur(12px)" }),
};

function CalculatorSlide() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-10">
      <div className="pointer-events-none absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        <span className="text-brand-blue">▸</span> slide 05 · calculadora
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>
      <div className="relative z-10 w-full max-w-6xl">
        <Calculator />
      </div>
    </section>
  );
}

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const handlerRef = useRef<SlideHandler>({ next: () => false, prev: () => false });

  const goNext = useCallback(() => {
    handlerRef.current = { next: () => false, prev: () => false };
    setDirection(1);
    setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    handlerRef.current = { next: () => false, prev: () => false };
    setDirection(-1);
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const consumed = handlerRef.current.next();
        if (!consumed) goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const consumed = handlerRef.current.prev();
        if (!consumed) goPrev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const renderSlide = (index: number) => {
    switch (index) {
      case 0:  return <Cover />;
      case 1:  return <PlanoAcao />;
      case 2:  return <Diagnostico />;
      case 3:  return <ViciousCycle handlerRef={handlerRef} onAdvanceSlide={goNext} />;
      case 4:  return <CalculatorSlide />;
      case 5:  return <CustoOportunidade />;
      case 6:  return <SolutionOverview />;
      case 7:  return <Mentoria />;
      case 8:  return <AgenteAtendimento />;
      case 9:  return <Investimento handlerRef={handlerRef} onAdvanceSlide={goNext} />;
      case 10: return <ProximosPassos />;
      default: return <Cover />;
    }
  };

  return (
    <>
      <MeshBackground />
      <main className="fixed inset-0 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            {renderSlide(current)}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="pointer-events-none fixed bottom-5 left-0 right-0 z-50 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-ink-900/75 p-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Slide anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-300 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-3 px-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">
            <span className="tabular-nums text-white">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-ink-600">/</span>
            <span className="tabular-nums text-ink-400">{String(TOTAL_SLIDES).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-1 px-2">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  handlerRef.current = { next: () => false, prev: () => false };
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Ir para slide ${i + 1}`}
                className="group relative flex h-3 w-3 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    i === current
                      ? "h-1.5 w-5 bg-gradient-to-r from-brand-blue to-brand-violet"
                      : i < current
                      ? "h-1.5 w-1.5 bg-brand-blueSoft/60 group-hover:bg-brand-blueSoft"
                      : "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={current === TOTAL_SLIDES - 1}
            aria-label="Próximo slide"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-300 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
