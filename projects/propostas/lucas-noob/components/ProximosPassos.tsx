"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  { num: "01", title: "Contrato assinado.", sub: "Formalização da parceria" },
  { num: "02", title: "Onboarding realizado.", sub: "Configuração e integração" },
  { num: "03", title: "Resultados mensurados.", sub: "Primeiros dados em mãos" },
];

export function ProximosPassos() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-16">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 11 · próximos passos
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
        >
          // próximos passos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mt-4 font-display font-bold text-ink-100"
          style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
        >
          O que vem <span className="text-gradient">a seguir.</span>
        </motion.h2>

        <div className="relative mt-12 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.18, ease }}
              className="glass p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 block mb-2">passo {s.num}</span>
              <h3 className="font-display font-bold text-ink-100 text-xl mb-1">{s.title}</h3>
              <p className="text-ink-400 text-sm">{s.sub}</p>
            </motion.div>
          ))}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0, ease }}
              className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 text-ink-600 md:block"
              style={{ left: `${(i + 1) * 33.33}%`, transform: "translate(-50%, -50%)" }}
            >
              →
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.2, ease }}
          className="mt-10 font-display font-bold text-gradient"
          style={{ fontSize: "clamp(20px, 3vw, 40px)" }}
        >
          Vamos construir o futuro da Lucas Noob juntos?
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease }}
          className="mt-8 flex items-center justify-center gap-10"
        >
          <div className="text-center">
            <p className="font-display font-semibold text-brand-violetSoft">Lucas</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-500">Dono — Lucas Noob</p>
            <p className="mt-1 font-mono text-[9px] text-ink-500">@lucas.veiga29</p>
          </div>
          <div className="h-12 w-px bg-ink-700" />
          <div className="text-center">
            <p className="font-display font-semibold text-brand-blueSoft">Eduardo Salles</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-500">CEO — Vektoz</p>
            <p className="mt-1 font-mono text-[9px] text-ink-500">eduardo@vektoz.com.br</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
