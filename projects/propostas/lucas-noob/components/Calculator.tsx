"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const WORK_HOURS_PER_MONTH = 176; // 22 dias × 8h

function AnimatedNumber({ value, format, duration = 0.9 }: { value: number; format: (v: number) => string; duration?: number }) {
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => format(v));
  const [display, setDisplay] = useState(format(value));

  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [value, duration, mv, rounded]);

  return <span>{display}</span>;
}

function Slider({ label, value, min, max, step, unit, onChange, format }: {
  label: string; value: number; min: number; max: number; step: number;
  unit: string; onChange: (v: number) => void; format?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">{label}</label>
        <div className="flex items-baseline gap-1.5 font-mono text-white">
          <span className="text-lg font-medium tabular-nums">{format ? format(value) : value}</span>
          {unit && <span className="text-xs text-ink-400">{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        className="slider-tech"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--pct" as string]: `${pct}%` }}
      />
      <div className="mt-2 flex justify-between font-mono text-[10px] text-ink-500">
        <span>{format ? format(min) : min}</span>
        <span>{format ? format(max) : max}</span>
      </div>
    </div>
  );
}

function Metric({ label, value, unit, muted }: { label: string; value: React.ReactNode; unit?: string; muted?: boolean }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5 backdrop-blur-md">
      <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-400">{label}</div>
      <div className={`mt-1.5 font-mono text-xl font-medium tabular-nums ${muted ? "text-ink-300" : "text-white"}`}>
        {value}
        {unit && <span className="ml-1 text-sm text-ink-400">{unit}</span>}
      </div>
    </div>
  );
}

export function Calculator() {
  const [salary, setSalary] = useState(10000);
  const [hoursPerDay, setHoursPerDay] = useState(1);
  const [people, setPeople] = useState(1);

  const calc = useMemo(() => {
    const hourCost = salary / WORK_HOURS_PER_MONTH;
    const hoursPerMonth = hoursPerDay * 22;
    const costPerMonth = hourCost * hoursPerMonth * people;
    const costPerYear = costPerMonth * 12;
    const daysEquiv = Math.round((hoursPerMonth * people) / 8);
    return { hourCost, hoursPerMonth, costPerMonth, costPerYear, daysEquiv };
  }, [salary, hoursPerDay, people]);

  const fmtBRL = (v: number) => `R$ ${Math.round(v).toLocaleString("pt-BR")}`;
  const fmtH = (v: number) => v.toFixed(1);

  return (
    <div className="w-full">
      <div className="mb-6 max-w-3xl">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brand-blue">
          // calculadora de custo oculto
        </div>
        <h2 className="mt-3 font-display font-semibold leading-[1.0] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(34px, 4.6vw, 64px)" }}>
          Quanto custa 1h por dia{" "}
          <span className="text-gradient">de verdade?</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300">
          Ajuste os parâmetros e veja quanto custa o tempo perdido respondendo dúvidas que a automação resolve.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="glass p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between border-b border-white/8 pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">parâmetros</span>
            <span className="flex items-center gap-2 font-mono text-[10px] text-ink-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-blue" />
              tempo real
            </span>
          </div>
          <div className="space-y-6">
            <Slider
              label="Salário mensal"
              value={salary} min={3000} max={30000} step={500}
              unit="" onChange={setSalary} format={fmtBRL}
            />
            <Slider
              label="Horas por dia"
              value={hoursPerDay} min={0.5} max={4} step={0.5}
              unit="h/dia" onChange={setHoursPerDay} format={fmtH}
            />
            <Slider
              label="Quantidade de pessoas"
              value={people} min={1} max={10} step={1}
              unit="pessoa(s)" onChange={setPeople}
            />
          </div>
          <div className="mt-6 rounded-xl border border-white/6 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">custo da hora</div>
            <div className="mt-1.5 font-mono text-xl font-medium text-white tabular-nums">
              <AnimatedNumber value={calc.hourCost} format={fmtBRL} />
              <span className="ml-2 text-sm text-ink-400">/hora</span>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-3">
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="glass-hero relative overflow-hidden p-7">
            <div
              className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(43,95,255,0.35) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">// resultado</span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-brand-blue" />
                  calculando
                </span>
              </div>
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-ink-300">custo mensal desperdiçado</div>
                <div className="mt-2 font-display font-semibold leading-[0.9] tracking-[-0.04em] text-white" style={{ fontSize: "clamp(52px, 8vw, 108px)" }}>
                  <AnimatedNumber value={calc.costPerMonth} format={fmtBRL} />
                </div>
                <div className="mt-3 flex items-center gap-3 font-mono text-sm text-ink-300">
                  <span className="h-px w-10 bg-gradient-to-r from-brand-blue to-brand-violet" />
                  pagos em tempo improdutivo
                  <span className="caret text-brand-blue">▊</span>
                </div>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                <Metric label="custo anual" value={<AnimatedNumber value={calc.costPerYear} format={fmtBRL} />} />
                <Metric label="horas/mês" value={<AnimatedNumber value={calc.hoursPerMonth} format={fmtH} />} unit="h" />
                <Metric label="dias equiv./mês" value={<AnimatedNumber value={calc.daysEquiv} format={(v) => String(Math.round(v))} />} unit="dias" muted />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
