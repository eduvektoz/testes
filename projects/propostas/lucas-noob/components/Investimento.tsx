"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PRICES = [
  { code: "A", title: "Mentoria Super Smash Bros", value: 20000, accent: "blue" },
  { code: "B", title: "Agente de Atendimento",     value: 10000, accent: "violet" },
];

const TOTAL = PRICES.reduce((s, p) => s + p.value, 0);
const PROJECT_TICKET = 30000;
const COVERAGE_PCT = Math.round((PROJECT_TICKET / TOTAL) * 100);

const ACCENTS = {
  blue:   { border: "border-brand-blue/40",   bg: "bg-brand-blue/10",   text: "text-brand-blueSoft",   glow: "rgba(43,95,255,0.4)" },
  violet: { border: "border-brand-violet/40", bg: "bg-brand-violet/10", text: "text-brand-violetSoft", glow: "rgba(124,58,237,0.4)" },
};

const fmtBRL = (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

export type SlideHandler = {
  next: () => boolean;
  prev: () => boolean;
};

type Props = {
  handlerRef?: { current: SlideHandler };
  onAdvanceSlide?: () => void;
};

export function Investimento({ handlerRef, onAdvanceSlide }: Props) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!handlerRef) return;
    handlerRef.current = {
      next: () => {
        if (revealed < 1) { setRevealed(1); return true; }
        return false;
      },
      prev: () => {
        if (revealed > 0) { setRevealed(0); return true; }
        return false;
      },
    };
  }, [revealed, handlerRef]);

  const handleClick = () => {
    if (revealed < 1) setRevealed(1);
    else onAdvanceSlide?.();
  };

  return (
    <section
      onClick={handleClick}
      className={`relative noise flex h-full min-h-screen w-full select-none items-center justify-center px-8 py-12 ${revealed < 1 ? "cursor-pointer" : ""}`}
    >
      <div className="pointer-events-none absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        <span className="text-brand-blue">▸</span> slide 10 · investimento
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue">// investimento</div>
            <h2 className="mt-3 font-display font-semibold leading-[1.0] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(40px, 5.2vw, 72px)" }}>
              <span className="text-gradient">Investimento.</span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" />
            pagamento único · à vista
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRICES.map((p, i) => {
            const c = ACCENTS[p.accent as keyof typeof ACCENTS];
            return (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="glass relative overflow-hidden p-6"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full"
                  style={{ background: `radial-gradient(circle, ${c.glow} 0%, transparent 65%)`, filter: "blur(28px)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.text}`}>/ entregável {p.code}</div>
                    <div className={`font-mono text-3xl font-semibold leading-none opacity-30 ${c.text}`}>{p.code}</div>
                  </div>
                  <div className="mt-4 font-display text-[15px] font-medium leading-snug text-ink-200">{p.title}</div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-mono text-[11px] text-ink-400">R$</span>
                    <span className="font-display text-4xl font-semibold tabular-nums text-white">
                      {p.value.toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="glass-hero relative mt-5 overflow-hidden p-8"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(43,95,255,0.45) 0%, transparent 65%)", filter: "blur(50px)" }} />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 65%)", filter: "blur(50px)" }} />
          <div className="relative z-10 flex flex-col items-center gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-brand-blueSoft">investimento total</div>
              <div className="mt-2 font-display font-semibold leading-[0.9] tracking-[-0.04em] text-white" style={{ fontSize: "clamp(64px, 9vw, 120px)" }}>
                {fmtBRL(TOTAL)}
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <div className="rounded-full border border-brand-mint/40 bg-brand-mint/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-mint">
                à vista · único
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {revealed >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-hero relative overflow-hidden p-7"
                style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.14), 0 0 0 1px rgba(126,212,184,0.25), 0 12px 32px -12px rgba(0,0,0,0.6), 0 40px 80px -20px rgba(0,0,0,0.7), 0 80px 180px -40px rgba(126,212,184,0.35)" }}
              >
                <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(126,212,184,0.45) 0%, transparent 65%)", filter: "blur(50px)" }} />
                <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-mint">
                      <span className="h-px w-8 bg-brand-mint" />
                      payback
                    </div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300">uma venda da lucas noob</div>
                    <div className="mt-3 font-display font-semibold leading-[0.9] tracking-[-0.04em] text-white" style={{ fontSize: "clamp(56px, 8vw, 104px)" }}>
                      {fmtBRL(PROJECT_TICKET)}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
                    <div className="font-display font-light leading-snug text-ink-100 text-xl md:text-2xl">
                      Cobre <span className="font-semibold text-brand-mint">{COVERAGE_PCT}%</span> do investimento.
                    </div>
                    <div className="text-[13px] leading-relaxed text-ink-300 md:max-w-xs">
                      Na <span className="text-white">1ª venda</span> realizada pelo agente, o investimento está coberto. Tudo que vem depois é lucro.
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink-400">
                        <span>investimento</span>
                        <span className="tabular-nums text-brand-mint">{COVERAGE_PCT}%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${COVERAGE_PCT}%` }}
                          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-mint to-brand-blueSoft shadow-[0_0_12px_rgba(126,212,184,0.6)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute bottom-20 left-0 right-0 z-20 flex justify-center px-8">
        <motion.div
          key={`hint-${revealed}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] backdrop-blur-md"
        >
          {revealed === 0 ? (
            <span className="text-ink-300">clique <span className="text-brand-blue">ou</span> pressione → para ver o payback</span>
          ) : (
            <span className="text-brand-mint">→ para os próximos passos</span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
