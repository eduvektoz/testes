"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const ITEMS = [
  "Clientes fazem perguntas técnicas que os vendedores não sabem responder",
  "Equipe perde 1h/dia respondendo as mesmas dúvidas no WhatsApp",
  "Torneios na loja expõem funcionários sem preparo técnico no jogo",
  "Leads somem sem resposta rápida — concorrência age primeiro",
  "Plataformas online vencem na informação técnica e no atendimento 24/7",
];

export function Diagnostico() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-16">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 03 · diagnóstico
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
        >
          // diagnóstico
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mt-4 font-display font-bold text-ink-100"
          style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
        >
          O que <span className="text-gradient">identificamos.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-3 text-ink-300 text-lg"
        >
          Padrões mapeados antes desta reunião.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.13, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass p-6 relative overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-opacity hover:opacity-20"
                style={{ background: "radial-gradient(circle, #2B5FFF, #7C3AED)", filter: "blur(20px)" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 tabular-nums mr-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink-200 text-[15px] leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6, ease }}
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500"
        >
          → como esses problemas se conectam
          <span className="caret ml-1">|</span>
        </motion.p>
      </div>
    </section>
  );
}
