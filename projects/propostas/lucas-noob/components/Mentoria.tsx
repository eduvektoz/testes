"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  "Diagnóstico de nível técnico da equipe",
  "Programa personalizado de treino",
  "Sessões semanais de prática intensiva",
  "Simulação de torneio com cenários reais",
  "Certificação de domínio técnico",
];

export function Mentoria() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-12">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 08 · mentoria
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0, ease }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
            >
              // entregável A
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mt-4 font-display font-bold text-ink-100"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Mentoria <span className="text-gradient">Smash.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="mt-4 flex items-center gap-2"
            >
              <span className="h-2 w-2 animate-ping rounded-full bg-brand-blue" />
              <span className="glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-blue" style={{ borderRadius: 999 }}>
                8 sessões
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="glass-hero relative mt-6 overflow-hidden p-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{ background: "radial-gradient(circle at top right, #2B5FFF, transparent)" }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-ink-500 block mb-2">objetivo</span>
              <p className="text-ink-200 text-sm leading-relaxed">
                Transformar a equipe em referência técnica local — capaz de vencer torneios e converter clientes pela autoridade no jogo.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center">
            <ol className="flex flex-col gap-3">
              {STEPS.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.09, ease }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="glass flex items-center gap-4 p-4"
                >
                  <span className="font-mono text-[10px] tabular-nums flex-shrink-0 text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-200 text-sm">{step}</span>
                  {i === STEPS.length - 1 && (
                    <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.2em] text-brand-mint md:block">
                      → resultado
                    </span>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
