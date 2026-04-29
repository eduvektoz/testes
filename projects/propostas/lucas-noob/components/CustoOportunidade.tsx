"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const LOSSES = [
  "Vendedor sai do balcão pra responder WhatsApp com dúvida técnica",
  "Reunião de venda interrompida por pergunta que a equipe não sabe",
  "Torneio na loja cancelado por falta de confiança técnica no jogo",
  "Lead esquecido por demora de horas na resposta inicial",
];

export function CustoOportunidade() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-16">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 06 · custo de oportunidade
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
              // custo de oportunidade
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mt-4 font-display font-bold text-ink-100"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Não é falta de <span className="text-gradient">vontade.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="mt-4 text-ink-300"
            >
              A equipe trabalha. O problema é onde o tempo vai.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="glass mt-6 p-5"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-500 block mb-2">
                definição
              </span>
              <p className="text-ink-200 text-sm leading-relaxed">
                Eficiência não é trabalhar mais — é trabalhar no que converte.
                Cada 1h em suporte improvisado é 1h longe do cliente certo.
              </p>
            </motion.div>

            <div className="pointer-events-none absolute top-1/4 right-1/3 h-48 w-48 rounded-full opacity-10" style={{ background: "#2B5FFF", filter: "blur(40px)" }} />
            <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-40 w-40 rounded-full opacity-10" style={{ background: "#7C3AED", filter: "blur(40px)" }} />
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center gap-3">
            {LOSSES.map((loss, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease }}
                className="glass p-4 flex items-center gap-4"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-600" />
                <span className="text-ink-300 text-sm">{loss}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.25, ease }}
              className="glass-hero relative mt-2 overflow-hidden p-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{ background: "radial-gradient(circle at center, #2B5FFF, transparent)" }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-ink-500 block mb-2">
                destino final
              </span>
              <span
                className="text-gradient font-display font-bold"
                style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
              >
                Vender.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
