"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const CYCLE_ITEMS = [
  "Pergunta técnica do cliente",
  "Vendedor não sabe responder",
  "Constrangimento na loja",
  "Venda perdida para o concorrente",
  "Reputação cai na comunidade gamer",
  "Menos tráfego na loja",
  "Sem verba para capacitar a equipe",
];

const N = CYCLE_ITEMS.length;
const SIZE = 1000;
const CENTER = SIZE / 2;
const RADIUS = 225;
const LABEL_OFFSET = 58;
const RADIUS_PCT = (RADIUS / SIZE) * 100;
const PERIMETER = 2 * Math.PI * RADIUS;
const CARD_W = 175;

export type SlideHandler = {
  next: () => boolean;
  prev: () => boolean;
};

type Props = {
  handlerRef?: { current: SlideHandler };
  onAdvanceSlide?: () => void;
};

export function ViciousCycle({ handlerRef, onAdvanceSlide }: Props) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!handlerRef) return;
    handlerRef.current = {
      next: () => {
        if (revealed < N) {
          setRevealed((r) => Math.min(r + 1, N));
          return true;
        }
        return false;
      },
      prev: () => {
        if (revealed > 0) {
          setRevealed((r) => Math.max(r - 1, 0));
          return true;
        }
        return false;
      },
    };
  }, [revealed, handlerRef]);

  const isComplete = revealed === N;

  const handleClick = () => {
    if (revealed < N) setRevealed((r) => r + 1);
    else onAdvanceSlide?.();
  };

  const nodes = useMemo(() => {
    return CYCLE_ITEMS.map((label, i) => {
      const angleDeg = (i * 360) / N - 90;
      const angleRad = (angleDeg * Math.PI) / 180;
      const cosA = Math.cos(angleRad);
      const sinA = Math.sin(angleRad);

      const x = CENTER + RADIUS * cosA;
      const y = CENTER + RADIUS * sinA;
      const lx = CENTER + (RADIUS + LABEL_OFFSET) * cosA;
      const ly = CENTER + (RADIUS + LABEL_OFFSET) * sinA;

      let alignX: "left" | "right" | "center" = "center";
      if (cosA > 0.25) alignX = "left";
      else if (cosA < -0.25) alignX = "right";

      let alignY: "top" | "bottom" | "center" = "center";
      if (sinA > 0.55) alignY = "top";
      else if (sinA < -0.55) alignY = "bottom";

      return { x, y, lx, ly, leftPct: (lx / SIZE) * 100, topPct: (ly / SIZE) * 100, label, alignX, alignY, index: i };
    });
  }, []);

  const visibleArc = (revealed / N) * PERIMETER;

  return (
    <section
      onClick={handleClick}
      className={`relative noise flex h-full min-h-screen w-full select-none items-center justify-center px-4 py-8 ${revealed < N ? "cursor-pointer" : ""}`}
    >
      <div className="pointer-events-none absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        <span className="text-brand-blue">▸</span> slide 04 · ciclo vicioso
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        vektoz × lucas noob
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-20 z-20 flex flex-col items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue"
        >
          // ciclo vicioso
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
        >
          Como esses problemas{" "}
          <span className="text-gradient">se conectam.</span>
        </motion.h2>
      </div>

      <div
        className="relative aspect-square overflow-visible"
        style={{ width: "min(76vh, 920px)", maxWidth: "94vw" }}
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="cycleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2B5FFF" />
              <stop offset="50%" stopColor="#5B82FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <radialGradient id="centerHaze">
              <stop offset="0%" stopColor="rgba(43,95,255,0.18)" />
              <stop offset="60%" stopColor="rgba(43,95,255,0.04)" />
              <stop offset="100%" stopColor="rgba(43,95,255,0)" />
            </radialGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={RADIUS * 0.85} fill="url(#centerHaze)" />
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} strokeDasharray="2 8" />
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none"
            stroke="url(#cycleStroke)"
            strokeWidth={3}
            strokeDasharray={PERIMETER}
            strokeDashoffset={PERIMETER - visibleArc}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
              filter: "drop-shadow(0 0 10px rgba(91,130,255,0.7))",
            }}
          />
          {isComplete && (
            <motion.circle
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.4 }}
              cx={CENTER} cy={CENTER} r={RADIUS}
              fill="none" stroke="url(#cycleStroke)" strokeWidth={2}
              style={{ filter: "blur(14px)" }}
            />
          )}

          {nodes.map((node, i) => {
            const isVisible = i < revealed;
            const isLatest = i === revealed - 1;
            return (
              <g key={i}>
                <motion.circle
                  cx={node.x} cy={node.y}
                  r={isLatest ? 18 : 12}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? (isLatest ? 0.55 : 0.3) : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  fill="url(#cycleStroke)"
                  style={{ filter: "blur(5px)" }}
                />
                <motion.circle
                  cx={node.x} cy={node.y}
                  r={isLatest ? 11 : 9}
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  fill={isLatest ? "#ffffff" : "#5B82FF"}
                  stroke="#0B1424"
                  strokeWidth={4}
                />
              </g>
            );
          })}
        </svg>

        {isComplete && (
          <div className="pointer-events-none absolute inset-0">
            {[
              { delay: "0s", color: "#ffffff", size: 14, glow: "rgba(91,130,255,0.95)", spread: "rgba(124,58,237,0.55)" },
              { delay: "-3s", color: "#A78BFA", size: 10, glow: "rgba(167,139,250,0.85)", spread: "rgba(124,58,237,0.45)" },
              { delay: "-6s", color: "#5B82FF", size: 10, glow: "rgba(91,130,255,0.85)", spread: "rgba(43,95,255,0.45)" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: 0, left: 0,
                  width: p.size, height: p.size,
                  background: p.color,
                  offsetPath: `circle(${RADIUS_PCT}% at 50% 50%)`,
                  offsetDistance: "0%",
                  offsetRotate: "auto",
                  animation: "cycleOrbit 9s linear infinite",
                  animationDelay: p.delay,
                  boxShadow: `0 0 24px 6px ${p.glow}, 0 0 60px 14px ${p.spread}`,
                }}
              />
            ))}
          </div>
        )}

        {nodes.map((node, i) => {
          const isVisible = i < revealed;
          const isLatest = i === revealed - 1;

          let xTransform = "-50%";
          if (node.alignX === "left") xTransform = "0%";
          else if (node.alignX === "right") xTransform = "-100%";

          let yTransform = "-50%";
          if (node.alignY === "top") yTransform = "0%";
          else if (node.alignY === "bottom") yTransform = "-100%";

          return (
            <AnimatePresence key={i}>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  transformTemplate={(_, generated) =>
                    `translate(${xTransform}, ${yTransform}) ${generated}`
                  }
                  className="absolute z-10"
                  style={{
                    left: `${node.leftPct}%`,
                    top: `${node.topPct}%`,
                    width: `${(CARD_W / SIZE) * 100}%`,
                  }}
                >
                  <div
                    className={`rounded-xl border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-500 ${
                      isLatest
                        ? "border-brand-blue/70 bg-brand-blue/15 shadow-[0_0_32px_rgba(43,95,255,0.55),inset_0_1px_0_rgba(255,255,255,0.15)]"
                        : "border-white/10 bg-white/[0.045] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]"
                    }`}
                  >
                    <div className={`font-mono text-[10px] uppercase tracking-[0.22em] tabular-nums ${isLatest ? "text-brand-blueSoft" : "text-ink-400"}`}>
                      / {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[12.5px] font-medium leading-snug text-white">
                      {node.label}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: isComplete ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-400">
              ciclo vicioso
            </div>
            <div className={`mt-2 font-display text-3xl font-semibold transition-colors duration-700 md:text-4xl ${isComplete ? "text-white" : "text-ink-300"}`}>
              Lucas Noob
            </div>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-3 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-brand-blueSoft"
              >
                <span className="caret">▊</span>
                em loop
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-20 left-0 right-0 z-20 flex justify-center px-8">
        <motion.div
          key={`hint-${isComplete ? "complete" : "prog"}-${revealed}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] backdrop-blur-md"
        >
          {isComplete ? (
            <span className="text-brand-blueSoft">→ avançar para o próximo passo</span>
          ) : revealed === 0 ? (
            <span className="text-ink-300">clique <span className="text-brand-blue">ou</span> pressione → para revelar</span>
          ) : (
            <span className="text-ink-300">
              <span className="tabular-nums text-white">{revealed}</span>
              <span className="text-ink-500"> / </span>
              <span className="tabular-nums">{N}</span>
              <span className="ml-2 text-ink-500">— continue</span>
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
