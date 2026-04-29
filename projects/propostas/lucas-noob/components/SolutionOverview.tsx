"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const DELIVERABLES = [
  {
    code: "A",
    name: "Mentoria Super Smash Bros",
    benefit: "Credibilidade técnica real nos jogos mais vendidos da loja.",
    hex: "#2B5FFF",
    textClass: "text-brand-blueSoft",
  },
  {
    code: "B",
    name: "Agente de Atendimento",
    benefit: "Atendimento 24/7 que converte no WhatsApp antes da concorrência.",
    hex: "#7C3AED",
    textClass: "text-brand-violetSoft",
  },
];

export function SolutionOverview() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-16">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 07 · solução
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0, ease }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
          >
            // solução
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-4 font-display font-bold text-ink-100"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Duas frentes <span className="text-gradient">claras.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {DELIVERABLES.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.18, ease }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass relative overflow-hidden p-8 text-center"
            >
              <div
                className="pointer-events-none absolute top-0 left-0 w-full h-0.5 rounded-t-3xl opacity-60"
                style={{ background: d.hex }}
              />
              <span
                className="pointer-events-none absolute top-4 right-6 font-display font-bold opacity-25 text-7xl leading-none"
                style={{ color: d.hex }}
              >
                {d.code}
              </span>
              <div className="relative z-10">
                <span className={`font-mono text-[10px] uppercase tracking-[0.3em] block mb-3 ${d.textClass}`}>
                  entregável {d.code}
                </span>
                <h3 className="font-display font-bold text-ink-100 text-xl mb-3">{d.name}</h3>
                <p className="text-ink-300 text-sm leading-relaxed">{d.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease }}
          className="text-center mt-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
            Como quebramos o ciclo vicioso?{" "}
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              →
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
