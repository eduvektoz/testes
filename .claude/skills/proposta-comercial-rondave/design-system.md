# Design System — Proposta Comercial

Sistema visual exato extraído da proposta de referência. Todos os tokens, classes utilitárias e CSS deste arquivo devem ser copiados literais — eles definem a "assinatura" da apresentação. A paleta acompanha a Vektoz mas é adaptável: se o cliente tem identidade forte (cor primária explícita), substituir `brand-blue` pelo equivalente, mantendo a estrutura de tokens.

## 1. Paleta

Tokens em `tailwind.config.ts > theme.extend.colors`. Hexadecimais fixos.

### Escala neutra `ink-*` (dark)

| Token | Hex | Uso típico |
|-------|-----|------------|
| `ink-1000` | `#05070E` | Vignette extrema (rgba 5,7,14,0.8) |
| `ink-950` | `#080C18` | `body` background, base do MeshBackground |
| `ink-900` | `#0B1424` | `.glass` inner stop, nav bar bg |
| `ink-850` | `#111A2E` | (reserva — pouco usado) |
| `ink-800` | `#18233A` | `.glass` outer stop |
| `ink-700` | `#2A3653` | Cards "descartar"/secundários |
| `ink-600` | `#3E4A6B` | Bordas, dividers |
| `ink-500` | `#626B85` | Setas, labels secundários |
| `ink-400` | `#8A92A6` | Topbar mono em todos os slides, step labels |
| `ink-300` | `#B1B7C5` | Body text, labels de input |
| `ink-200` | `#D4D8E0` | Frase de slide, post body |
| `ink-100` | `#EDEFF3` | Cor de texto principal (`body color`) |

### Escala de marca `brand-*`

| Token | Hex | Carga semântica |
|-------|-----|-----------------|
| `brand-blue` | `#2B5FFF` | Primária — arcos, badges, CTAs |
| `brand-blueSoft` | `#5B82FF` | Primária suave — gradientes, glows, sócio CMO |
| `brand-violet` | `#7C3AED` | Sofisticado — entregável B, glass-hero glow |
| `brand-violetSoft` | `#A78BFA` | Violeta suave — sócio CEO, orbit lights |
| `brand-copper` | `#E08B63` | Humano/warm — entregável C, "checagem humana" |
| `brand-mint` | `#7ED4B8` | Sucesso — payback, "ideal", barra de progresso |

**Regra de uso de accent:** se a oferta tem 3 entregáveis, atribuir blue/violet/copper na ordem em que aparecem em Solution Overview e manter a mesma cor em cada entregável depois (slides 8/9/10). Mint é reservado pra positivo (payback, success state).

### Snippet Tailwind

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          1000: "#05070E", 950: "#080C18", 900: "#0B1424",
          850: "#111A2E", 800: "#18233A", 700: "#2A3653",
          600: "#3E4A6B", 500: "#626B85", 400: "#8A92A6",
          300: "#B1B7C5", 200: "#D4D8E0", 100: "#EDEFF3",
        },
        brand: {
          blue: "#2B5FFF", blueSoft: "#5B82FF",
          violet: "#7C3AED", violetSoft: "#A78BFA",
          copper: "#E08B63", mint: "#7ED4B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        float: "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -20px rgba(0,0,0,0.6), 0 50px 120px -40px rgba(43,95,255,0.25)",
        floatHi: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.7), 0 60px 140px -40px rgba(124,58,237,0.35)",
        glow: "0 40px 100px -40px rgba(43,95,255,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

## 2. Tipografia

Três famílias do Google Fonts via `next/font/google` em `app/layout.tsx`. Variáveis CSS expostas no `<html>`.

```tsx
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});
const display = Space_Grotesk({
  subsets: ["latin"], variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"], variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
});

// no <html>:
className={`${inter.variable} ${display.variable} ${mono.variable}`}
// no <body>:
className="font-sans" suppressHydrationWarning
```

### Escalas clamp

Todo título de slide usa `clamp(min, vw, max)` — vh-friendly e responsivo. Valores de referência:

| Elemento | Clamp |
|----------|-------|
| H1 hero (Plano de Ação) | `clamp(56px, 9.5vw, 148px)` |
| H2 padrão de slide (diagnóstico, custo, overview) | `clamp(40px, 5.5vw, 80px)` |
| H2 médio (ciclo, próximos passos) | `clamp(28px, 3.6vw, 48px)` |
| Headline de calculadora | `clamp(34px, 4vw, 64px)` |
| Número grande (resultado calc) | `clamp(52px, 8vw, 108px)` |
| Total preço (investimento) | `clamp(64px, 9vw, 120px)` |
| Payback número | `clamp(56px, 8vw, 104px)` |

### Padrões mono recorrentes

- Topbar: `font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400`
- Sub-labels: `font-mono text-[10px] uppercase tracking-[0.22em]`
- Prefixo de seção (`// nome`): `font-mono text-xs uppercase tracking-[0.3em] text-brand-blue`
- Etiquetas (`destino final`, `objetivo`): `font-mono text-[10px] uppercase tracking-[0.32em]`

Numeração de listas sempre `font-mono tabular-nums`.

## 3. Espaçamento

### Section padding

| Tipo de slide | Padding |
|---------------|---------|
| Hero/cover/agenda | `px-8` |
| Conteúdo padrão | `px-8 py-16` |
| Interativo (ciclo) | `px-4 py-8` |
| Calculator (compactado) | `px-8 py-10` |
| Demo/preço | `px-8 py-12` |

### Container interno

`max-w-6xl` é o default. Subir pra `max-w-7xl` em slides com 3 cards horizontais ou layout 2-coluna 5-grid (Solution Overview, Consultoria, Agentes).

### Cards

- `.glass p-6` — cards padrão (Diagnóstico, Próximos Passos, Solution Overview)
- `.glass-hero p-7` — cards principais com mais respiro (Calculator, LinkedIn mockup)
- `.glass-hero p-8` — destaque (Investimento)

### Badges

- `px-3 py-1.5` — pills (Plano de Ação)
- `px-4 py-2` — badges com dot (Consultoria "6 encontros")
- `px-2 py-1` — micro-badges (status "ideal/conferir/descartar")

## 4. Border radius

CSS hardcoded:

- `.glass` → `border-radius: 24px`
- `.glass-hero` → `border-radius: 28px`

Tailwind:

- `rounded-xl` (12px) — labels, cards de calculadora
- `rounded-full` — pills, badges, progress bars, orbit lights

## 5. Sombras

Três utilitárias prontas (em `tailwind.config.ts`):

```
shadow-float    → 5 layers (inset 0.08 + ring 0.06 + drops + glow blue 0.25)
shadow-floatHi  → 5 layers (inset 0.12 + ring 0.08 + drops + glow violet 0.35)
shadow-glow     → 1 layer (glow blue 0.5)
```

Composição interna do `.glass` (no `globals.css`):

```css
box-shadow:
  inset 0 1px 0 0 rgba(255,255,255,0.1),    /* highlight topo */
  0 0 0 1px rgba(255,255,255,0.06),          /* thin border */
  0 8px 24px -8px rgba(0,0,0,0.5),           /* close shadow */
  0 30px 60px -20px rgba(0,0,0,0.6),         /* mid shadow */
  0 60px 140px -40px rgba(43,95,255,0.28);  /* glow wash */
```

`.glass-hero` é mais profunda — `blur(40px)` no backdrop, `60px / 80px / 180px` nas drops, glow violet no lugar do blue.

## 6. Animações

### `@keyframes` globais (em `globals.css`)

```css
@keyframes floatA {
  0%, 100% { transform: translate3d(-6%, -4%, 0) scale(1); }
  50% { transform: translate3d(6%, 6%, 0) scale(1.08); }
}
@keyframes floatB {
  0%, 100% { transform: translate3d(8%, 10%, 0) scale(1.05); }
  50% { transform: translate3d(-6%, -8%, 0) scale(0.95); }
}
@keyframes floatC {
  0%, 100% { transform: translate3d(-4%, 16%, 0) scale(0.9); }
  50% { transform: translate3d(6%, -2%, 0) scale(1.12); }
}
.blob-a { animation: floatA 22s ease-in-out infinite; }
.blob-b { animation: floatB 28s ease-in-out infinite; }
.blob-c { animation: floatC 32s ease-in-out infinite; }

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.caret { animation: blink 1.1s steps(1) infinite; }

@keyframes cycleOrbit {
  from { offset-distance: 0%; }
  to   { offset-distance: 100%; }
}
```

### Framer Motion — easing canônico

`[0.22, 1, 0.36, 1]` em todas as transições principais (~45 ocorrências no projeto de referência). Não desviar — esse easing é a "assinatura cinematográfica".

Exceções permitidas:
- Blobs do MeshBackground → `ease-in-out` (loop fluido)
- Orbit lights → `linear` (constância de velocidade)

### Stagger de listas

| Quantidade | Delay base + step |
|-----------:|-------------------|
| 3 cards | `0.5 + i * 0.18` (mais lento, dá peso) |
| 5 itens | `0.7 + i * 0.1` |
| 6 itens | `0.45 + i * 0.13` |
| 7 itens | `0.55 + i * 0.09` (mais rápido, evita arrastar) |

### Padrões de entrada

- Headlines: `opacity 0 → 1`, `y: 30–50 → 0`, `filter: blur(8–10px) → blur(0)`. Duração 0.7–1.1s.
- Itens de lista: `opacity 0 → 1`, `x: 30 → 0` (slide da direita) ou `y: 16 → 0`.
- Cards principais (entregáveis, "Vender", total): `scale: 0.9–0.96 → 1` ("popping in").
- Footer/hint: delay 1.5–2.2s — entra por último.

Total de animação por slide: **2–3s**. Acima disso vira espera.

### Arc SVG (Ciclo Vicioso)

`stroke-dashoffset` animado por CSS transition (não Framer):

```css
transition: stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1);
filter: drop-shadow(0 0 10px rgba(91,130,255,0.7));
```

## 7. Backgrounds

### `.noise` — overlay sutil

Aplicar em **todos os slides**. SVG fractalNoise embed inline como dataURL.

```css
.noise::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>");
}
```

### `.grid-bg` — malha sutil mascarada

```css
.grid-bg {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at center, black 25%, transparent 78%);
}
```

### `MeshBackground.tsx` — 6 camadas

Component fixo `pointer-events-none` que fica `<MeshBackground />` no `app/page.tsx` antes do `<main>`. Camadas (de baixo pra cima):

1. Base `bg-ink-950`
2. Radial gradient sutil (blue 12% top-left + violet 10% bottom-right)
3. `.grid-bg` (linhas 72px com mask radial)
4. Blob azul `blob-a` (top-left, 85vh, blur 90px)
5. Blob violeta `blob-b` (right mid, 95vh, blur 110px)
6. Blob cobre `blob-c` (bottom-left, 65vh, blur 100px, opacity 0.22)
7. Vignette (radial transparent → ink-1000 80% nas bordas)

Ajustar opacidade dos blobs se a marca do cliente tiver outra cor primária — a estrutura de 6 camadas é o que importa.

## 8. Efeitos de profundidade

### `.glass`

```css
.glass {
  position: relative;
  background: linear-gradient(180deg, rgba(24,35,58,0.55) 0%, rgba(11,20,36,0.65) 100%);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
  border-radius: 24px;
  box-shadow:
    inset 0 1px 0 0 rgba(255,255,255,0.1),
    0 0 0 1px rgba(255,255,255,0.06),
    0 8px 24px -8px rgba(0,0,0,0.5),
    0 30px 60px -20px rgba(0,0,0,0.6),
    0 60px 140px -40px rgba(43,95,255,0.28);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
}

.glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 45%, rgba(43,95,255,0.3) 100%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### `.glass-hero`

Igual à .glass mas:
- Background mais escuro: `rgba(17,26,46,0.75)` → `rgba(11,20,36,0.85)`
- Blur 40px, saturate 200%
- Radius 28px
- Sombras maiores (12 / 40 / 80)
- Glow violet `rgba(124,58,237,0.4)` no lugar do blue
- ::before highlight `rgba(255,255,255,0.22)` (mais forte)

### `.text-gradient`

```css
.text-gradient {
  background: linear-gradient(120deg, #ffffff 0%, #5B82FF 50%, #A78BFA 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

Aplicar em **uma palavra** por título — a mais densa semanticamente. Usar com moderação: 1 gradient por slide cria foco; 3 gradients viram ruído.

## 9. Slider tech (calculadora)

```css
input[type="range"].slider-tech {
  -webkit-appearance: none;
  appearance: none;
  width: 100%; height: 6px;
  background: linear-gradient(to right, #2B5FFF 0%, #7C3AED var(--pct, 50%), rgba(255,255,255,0.08) var(--pct, 50%));
  border-radius: 999px;
  outline: none;
}
input[type="range"].slider-tech::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #2B5FFF;
  box-shadow: 0 0 0 6px rgba(43,95,255,0.15), 0 8px 20px rgba(0,0,0,0.6);
  cursor: grab;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}
input[type="range"].slider-tech::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}
```

Variável `--pct` controla o ponto de gradient via prop inline:

```tsx
style={{ ["--pct" as string]: `${pct}%` }}
```

## 10. Breakpoints

Tailwind padrão:

| Breakpoint | Largura | Onde usar |
|-----------|---------|-----------|
| `sm` | 640px | Features 1→2 colunas |
| `md` | 768px | Cards 1→3 colunas, logos com mais gap, mockups grid |
| `lg` | 1024px | Layouts 2-coluna 5-grid (col-span-2/3), ajustes de altura hero |
| `xl` | 1280px | Refinamento de layout 12-col (6/6 → 7/5) |

Apresentações são exibidas em 16:9 horizontal. **Não fazer responsivo pra mobile** — proposta é apresentada em laptop/TV/projetor. Garantir que cabe em 1280×720 e em 1920×1080.

## 11. Scrollbar e seleção

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 8px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.18); }

::selection { background: rgba(43,95,255,0.3); color: #fff; }
```

## 12. Color-scheme dark

Sempre no `:root` do `globals.css`:

```css
:root { color-scheme: dark; }
html, body {
  background: #080C18;
  color: #EDEFF3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
```
