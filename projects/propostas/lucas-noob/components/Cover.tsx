"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export function Cover() {
  return (
    <section className="relative noise flex h-full min-h-screen w-full items-center justify-center px-8">
      <div className="pointer-events-none absolute left-8 top-8 flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          aguardando início
        </span>
      </div>
      <div className="pointer-events-none absolute right-8 top-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        2026
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <div className="flex items-center justify-center gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-12 rounded-full opacity-70"
              style={{
                background: "radial-gradient(circle, rgba(43,95,255,0.35) 0%, transparent 65%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
              <Image
                src="/lucas-noob-logo.png"
                alt="Lucas Noob"
                width={400}
                height={400}
                className="h-32 w-auto object-contain md:h-40"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="relative h-32 w-px md:h-40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(91,130,255,0.8) 50%, transparent 100%)",
                filter: "blur(4px)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-12 rounded-full opacity-70"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 65%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative font-display text-6xl font-bold leading-none tracking-tight text-ink-100 md:text-7xl">
              Vektoz<span className="text-brand-blue">.</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-brand-blue">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-blue" />
            reunião de apresentação
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-blue" />
          </div>
          <div className="caret font-mono text-xl text-ink-400">▊</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2, ease }}
        className="pointer-events-none absolute bottom-24 left-0 right-0 flex justify-center"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-500">
          → para iniciar
        </div>
      </motion.div>
    </section>
  );
}
