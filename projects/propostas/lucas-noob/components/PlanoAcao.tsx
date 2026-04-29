"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const pills = ["diagnóstico", "calculadora", "soluções", "investimento", "próximos passos"];

export function PlanoAcao() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 02 · plano de ação
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
        >
          // plano de ação
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, delay: 0.35, ease }}
          className="mt-5 font-display font-bold text-ink-100 leading-[0.92] tracking-[-0.035em]"
          style={{ fontSize: "clamp(56px, 9.5vw, 148px)" }}
        >
          Proposta{" "}
          <span className="text-gradient">comercial.</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="my-6 h-px bg-ink-600"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.15, ease }}
          className="font-display text-xl font-light text-ink-300"
        >
          Como a Vektoz vai transformar a operação da Lucas Noob.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300"
              style={{ borderRadius: 999 }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
