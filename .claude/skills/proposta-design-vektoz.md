# Vektoz — Proposta Comercial | Design System

Reference DESIGN.md for business proposals. Modern, confident, tech-forward. Roxo + Azul com impacto visual.

## 1. Visual Theme & Atmosphere

Tech-forward minimalism com autoridade. Design que transmite inovação e resultado. Inspirado em propostas de agências premium mas sem excessos.

Mood: Profissional, inovador, confiante, acessível.

## 2. Color Palette & Roles

```
--bg:              #000000   /* Preto fundo principal */
--bg-alt:          #161618   /* Cinza escuro para cards/seções */
--surface:         #1a1a1d   /* Surface para elementos */
--text:            #ffffff   /* Branco principal */
--text-muted:      #a1a1a6   /* Cinza claro para secundário */
--text-dim:        #6b6b70   /* Cinza mais escuro */
--border:          #2a2a2d   /* Bordas sutis */
--accent-primary:  #9333ea   /* Roxo Vektoz — destaques, CTA */
--accent-secondary:#22d3ee   /* Azul Vektoz — highlights, gradientes */
--accent-hover:    #7e22ce   /* Roxo mais escuro — hover */
--success:         #25D366   /* Verde WhatsApp para CTA secundária */
```

Rule: Roxo em botões principais e destaques. Azul em gradientes e elementos secundários. Verde WhatsApp só em links de contato direto.

## 3. Typography Rules

- **Headlines + body:** `Inter`, fallback system-ui. Weight 400/500/600/700. 
- **Hierarquia:**
  - H1: 48px, Bold 700, 1.2 line-height
  - H2: 36px, SemiBold 600, 1.3 line-height
  - H3: 24px, SemiBold 600, 1.4 line-height
  - H4: 20px, Medium 500, 1.4 line-height
  - Body: 16px, Regular 400, 1.6 line-height
  - Small: 14px, Regular 400, 1.5 line-height

Sem serifs, sem italics para ênfase — usar weight 600 ou cor de destaque.

## 4. Component Stylings

**Buttons**
- Primary (CTA): Gradiente roxo→azul, texto branco, radius 8px, padding 12/24px, weight 600.
- Secondary: `--bg-alt` background, `--text` color, 1px `--border` outline, radius 8px.
- Ghost: roxo texto, sem background, hover → roxo com bg-alt.

**Cards/Seções**
- `--bg-alt` background, 1px `--border`, radius 12px, padding 24px.
- Hover: border shift to mais claro (suave). Nenhuma sombra pesada — max glow sutil.

**Inputs/Formulários**
- 1px `--border`, radius 8px, padding 12/16px.
- Focus: 2px roxo ring, 2px offset.
- Placeholder: `--text-dim`.

**Glow/Efeitos**
```css
/* Glow roxo sutil */
box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);

/* Glow azul sutil */
box-shadow: 0 0 12px rgba(34, 211, 238, 0.2);
```

## 5. Layout Principles

- 1200px max (responsivo: 960px em tablet, 100% em mobile).
- 24px gutter, 12-column grid.
- Espaçamento: 8/12/16/24/32/48/64px scale (múltiplos de 8).
- Densidade moderada — respira, mas informação visível.

## 6. Sections & Structure for Proposals

**Cover/Introdução**
- Fundo preto puro com gradiente sutil roxo→azul no topo ou lateral.
- Logo Vektoz (branco ou colorido).
- H1 proposta: branco.
- Subtitle: `--text-muted`.
- Data/Client: `--text-dim`.

**Seção de Problema**
- Fundo `--bg-alt`.
- Ícones roxo/azul à esquerda.
- H2 em roxo (ou gradiente roxo→azul).
- Bullets em branco com accent-secondary bullets.

**Solução/Proposta**
- Fundo preto (alternado com `--bg-alt`).
- Cards em `--bg-alt` com ícones roxo/azul.
- CTA button roxo → azul gradiente.

**Investimento/Pricing**
- Destaque máximo: número em roxo bold.
- Descrição em branco, termos em `--text-muted`.
- Button primário roxo→azul.

**Próximos Passos**
- Timeline visual com dots roxo/azul.
- Cards para cada fase.
- CTA final: WhatsApp verde ou roxo.

## 7. Depth & Elevation

Flat com bordas. Sombras restritas a glow nos elementos de destaque. Use transparências sutis (rgba com 10-20% opacity) para profundidade.

## 8. Do's and Don'ts

**Do**
- Roxo em CTAs e destaques primários.
- Azul em gradientes e elementos secundários.
- Manter contraste branco/roxo/azul forte.
- Usar Inter em todos os textos.
- Respirar entre seções — padding 48-64px.
- Ícones linha fina em roxo/azul.

**Don't**
- Múltiplas cores além de roxo/azul.
- Sombras pesadas ou 3D.
- Transparências >30%.
- Pilhas de elementos sem espaçamento.
- Imagens pixeladas — alta qualidade sempre.
- Jargões sem contexto.

## 9. Responsive Behavior

- **Desktop:** 1200px, 12 colunas.
- **Tablet (768px):** 960px, stack columns inteligente.
- **Mobile (<640px):** 100% com 16px gutter, single column, botões full-width.

Headlines scale down 1-2 steps em mobile. Cards stack com padding 16px.

## 10. Agent Prompt Guide

Bias: roxo + azul Vektoz, dark mode elegante, Inter font everywhere, 8-12px radius, gradientes sutis, glow sutil em destaques, high contrast branco/roxo.

Reject: teal genérico, múltiplas cores, sombras pesadas, serifs, layout denso demais, ícones gráficos pesados, fundo branco.

Target feeling: Premium agency, tech-forward, confiável, pronta para converter prospect em cliente.
