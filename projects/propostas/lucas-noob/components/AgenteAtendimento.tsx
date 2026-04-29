"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const FLOW = [
  { icon: "💬", label: "Cliente no WhatsApp" },
  { icon: "🤖", label: "Agente responde em <30s" },
  { icon: "📋", label: "Qualificação automática" },
  { icon: "✅", label: "Conversão ou encaminhamento" },
];

const MOCKUPS = [
  {
    store: "Game Over Store",
    city: "São Paulo, SP",
    msg: "Oi! Vi que vocês têm o novo Mario Kart. Tem versão física pra Switch OLED?",
    reply: "Sim! Temos física e digital. Para Switch OLED recomendamos a física — cartucho nativo. Posso separar uma unidade. Qual forma de pagamento prefere?",
    tag: "ideal",
    tagColor: "#7ED4B8",
  },
  {
    store: "Level Up Games",
    city: "Belo Horizonte, MG",
    msg: "Quero comprar um controle pro meu filho de 7 anos, mas não sei qual é melhor.",
    reply: "Para 7 anos o Joy-Con é ótimo — leve e ergonômico. Se ele já joga bastante, o Pro Controller é uma opção. Qual o orçamento?",
    tag: "conferir",
    tagColor: "#5B82FF",
  },
  {
    store: "Pixel Paradise",
    city: "Rio de Janeiro, RJ",
    msg: "vcss aceitam trocar jogos usados?",
    reply: "Não trabalhamos com troca no momento, mas temos promoções toda semana no Instagram. Posso te adicionar na lista VIP para ofertas exclusivas?",
    tag: "descartar",
    tagColor: "#E08B63",
  },
];

export function AgenteAtendimento() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8 py-12">
      <div className="pointer-events-none absolute left-8 top-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <span className="text-brand-blue">▸</span> slide 09 · agente de atendimento
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-5">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0, ease }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-brand-violetSoft"
          >
            // entregável B
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="mt-3 font-display font-bold text-ink-100"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Atendimento <span className="text-gradient">24/7.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="mt-2 text-ink-300 text-sm"
          >
            Como seu agente qualifica lojas de videogame antes que a concorrência responda.
          </motion.p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {FLOW.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.12, ease }}
                className="glass flex items-center gap-2 px-3 py-2 flex-shrink-0"
              >
                <span className="text-base">{step.icon}</span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-ink-300 sm:block">{step.label}</span>
              </motion.div>
              {i < FLOW.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.12, ease }}
                  className="h-px w-6 origin-left bg-ink-600 flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {MOCKUPS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.15, ease }}
              className="glass flex flex-col gap-3 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-ink-200">{m.store}</p>
                  <p className="font-mono text-[9px] text-ink-500">{m.city}</p>
                </div>
                <span
                  className="rounded-full px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em]"
                  style={{ color: m.tagColor, background: `${m.tagColor}18`, border: `1px solid ${m.tagColor}40` }}
                >
                  {m.tag}
                </span>
              </div>
              <div className="glass rounded-xl p-2.5">
                <p className="text-[11px] leading-relaxed text-ink-300">{m.msg}</p>
              </div>
              <div className="rounded-xl p-2.5" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <p className="text-[11px] leading-relaxed" style={{ color: "#A78BFA" }}>{m.reply}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9, ease }}
          className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-brand-copper"
        >
          → agente qualifica. equipe fecha. checagem humana sempre disponível.
        </motion.p>
      </div>
    </section>
  );
}
