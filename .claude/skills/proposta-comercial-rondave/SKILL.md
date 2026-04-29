---
name: proposta-comercial-rondave
description: Cria proposta comercial como apresentação web interativa em Next.js + Framer Motion, no padrão Vektoz × Rondave. Use sempre que Eduardo pedir proposta para prospect, pitch deck para cliente, ou apresentação interativa de venda — incluindo "monta proposta para [X]", "cria apresentação para [Y]", "preciso de um pitch para [prospect]", mesmo quando ele não disser explicitamente "interativa". NÃO usar para slides de treinamento, materiais institucionais, banners, ou apresentações estáticas sem oferta comercial.
---

# Proposta Comercial — Padrão Rondave

Cria apresentação web em Next.js com glassmorphism profundo, animações cinematográficas e slides interativos, pronta pra deploy no Vercel. Resultado é um repositório Next.js novo, com 10–14 slides navegáveis por teclado, identidade visual customizada para o cliente da vez.

A referência canônica é a proposta `projects/propostas/rondave/`. Esta skill ensina o **padrão**, não o conteúdo da Rondave. Os preços, ICPs, mockups e nomes daquela proposta são exemplos — em cada nova proposta, esses elementos são redefinidos com o cliente.

## Quando usar

**Use:**
- Pedido explícito: "cria proposta para [cliente]", "monta apresentação para [prospect]", "pitch deck para [empresa]"
- Pedido implícito: "tenho reunião com [X] na quarta, preciso apresentar nossa solução"
- Continuação: "atualiza a proposta da [empresa]", "ajusta o slide de investimento"

**Não use:**
- Slides de treinamento (identidade Treinamentos, não Vektoz)
- Materiais institucionais (página de site, post LinkedIn, e-book)
- Apresentação estática sem oferta comercial (palestra, talk, aula)
- Pedido genérico de "slides" sem contexto comercial — pergunte primeiro o que é

## Stack obrigatório

Não desviar — toda decoração visual (glass, gradients, motion paths) depende dessa combinação exata.

```
"next": "16.2.0",
"react": "19.0.0",
"react-dom": "19.0.0",
"framer-motion": "11.15.0",
"tailwindcss": "3.4.17",
"typescript": "5.7.3"
```

Linguagem de UI: TypeScript + Tailwind + Framer Motion. Sem styled-components, sem CSS modules, sem outras libs de animação.

## Workflow

### Fase 1 — Briefing (sempre antes de codar)

Perguntar tudo de uma vez, em texto livre se Eduardo já tem na cabeça, ou via lista numerada se for descoberta:

1. **Cliente** — nome legal, logo (arquivo + alta resolução), site
2. **Decisor(es) na sala** — nome, cargo, e contato. Se houver mais de um sócio, pegar todos desde já (erro recorrente: lembrar do segundo só no slide 12 e ter que reorganizar)
3. **Oferta** — quais entregáveis, com nome curto cada (3 entregáveis virou padrão; pode ser 2–4)
4. **ICP do cliente do cliente** — quem o cliente vende pra quem (esse ICP nomeia os mockups: Vale, Furnas, Pref. Maceió no caso Rondave)
5. **Dores do cliente** — 5–9 dores concretas pro ciclo vicioso e diagnóstico
6. **Preços** — valor por entregável, ticket médio de 1 venda do cliente (pra cálculo de payback)
7. **Custo de oportunidade** — qual atividade do cliente está sendo abandonada por falta de tempo (vira slide 6)
8. **Reunião** — modo (presencial/remoto), duração, contexto da agenda

Se Eduardo passar um documento (ata de pré-reunião, briefing escrito), extrair e validar. Não inventar dados — se faltar algo, perguntar antes de codar.

### Fase 2 — Decidir estrutura de slides

Default 12 slides. Adaptar para 10–14 conforme briefing. Nunca menos de 10 (deck fica raso) nem mais de 14 (cliente perde o fio).

Estrutura canônica em [padroes-slide.md](padroes-slide.md):

1. Cover (ambiente)
2. Plano de Ação (agenda)
3. Diagnóstico
4. Ciclo Vicioso (interativo)
5. Calculadora (interativa, opcional — só se faz sentido pro custo do cliente)
6. Custo de Oportunidade (reframe)
7. Solution Overview (3 entregáveis)
8. Entregável A (processo, ex: consultoria)
9. Entregável B (mockup com dados reais)
10. Entregável C (artefato como prova)
11. Investimento (revelação progressiva)
12. Próximos Passos (CTA + identidade)

Confirmar com Eduardo antes de gerar. Se ele cortar a Calculadora ou trocar a ordem, ajustar o plano antes de tocar em código.

### Fase 3 — Setup do projeto

Criar pasta `projects/propostas/<cliente-slug>/` com Next.js 16.2 + React 19 + TS + Tailwind + Framer Motion. Configurar:

- `app/layout.tsx` com 3 fontes: Inter (sans), Space Grotesk (display), IBM Plex Mono (mono) via `next/font/google`
- `<body suppressHydrationWarning>` (extensões do browser injetam atributos antes da hidratação)
- `app/globals.css` com tokens CSS de glass, glass-hero, text-gradient, noise, grid-bg, keyframes (copiar de [design-system.md](design-system.md))
- `tailwind.config.ts` com tokens `ink-*` e `brand-*` (copiar de [design-system.md](design-system.md))
- `app/page.tsx` com `AnimatePresence mode="wait"` + slide variants (opacity + x ±60 + blur 12px) + handlerRef pattern + nav bar inferior

Logo do cliente em `public/<cliente>-logo.png`. Alta resolução (não pixelada — fica em tela cheia no Cover).

### Fase 4 — Construir os slides

Cada slide é seu próprio `<section>` em `components/<NomeSlide>.tsx`. Não usar wrapper genérico (`Slide.tsx` da Rondave foi descartado — layouts variam demais).

Padrões transversais aplicáveis a todos os slides:

- Topbar absoluta esquerda: `▸ slide XX · <nome-em-lowercase>` em mono uppercase tracking-[0.22em]
- Topbar absoluta direita: `<vektoz × cliente>` mesmo estilo
- Container interno: `max-w-6xl` ou `max-w-7xl` com `relative z-10`
- Header tag mono: `// <seção>` em uppercase tracking-[0.3em] cor `text-brand-blue`
- Cascata de entrada: header (delay 0s) → conteúdo principal → suporte → hint footer
- Easing custom dominante: `[0.22, 1, 0.36, 1]` em todas as transições principais
- Total de animação por slide: 2–3s (não passar disso — vira espera)

Slides interativos (Ciclo Vicioso, Investimento) usam o `handlerRef` pattern documentado em [decisoes.md](decisoes.md) — interceptam ArrowRight/ArrowLeft antes do navegador padrão.

Para cada tipo de frame (cover, agenda, diagnóstico, viz interativa, ferramenta, reframe, overview, processo, demo mockup, demo artefato, precificação, fechamento), ler [padroes-slide.md](padroes-slide.md) — tem a estrutura, copy, animação e raciocínio.

### Fase 5 — Validar antes de entregar

Rodar `npm run dev`, abrir em 1080p (Full HD é a resolução de referência — propostas são apresentadas em TVs/projetores). Checar:

- Toda copy cortada por overflow vertical → compactar (`py-*`, fontsize, gap)
- Slides interativos funcionando: clique e seta direita avançam, seta esquerda volta dentro do slide e depois para o anterior
- Cards do Ciclo Vicioso totalmente fora do círculo — medir com `getBoundingClientRect` se houver dúvida (ver [erros-comuns.md](erros-comuns.md))
- Cover sem datas, sem "proposta comercial" no título, sem entregáveis (é slide ambiente)
- Slide 12 com TODOS os sócios/decisores informados no briefing, com cores diferentes diferenciando cargos
- Headlines com 1–5 palavras, ponto final, sem perguntas (exceto Calculadora)
- Mockups com dados reais e plausíveis do ICP do cliente (não "Cliente A", "Empresa X")

### Fase 6 — Deploy

Hospedagem padrão: Vercel (zero-config com Next.js). Repo Git com identidade de sessão:

```bash
git -c user.name="Eduardo Salles" -c user.email="eduardo@vektoz.com.br" commit -m "..."
```

Nunca alterar `git config --global` (regra do CLAUDE.md). Antes de `git push` em background no Windows: `$env:GIT_TERMINAL_PROMPT = "0"` (ou rodar síncrono) — sem isso, GCM pendura aguardando GUI dialog.

Backup offline pra reunião: `npm run build && npm start` no laptop. Não usar `output: 'export'` — assets podem depender de fetch no primeiro load.

## Estrutura de pastas

```
projects/propostas/<cliente-slug>/
├── app/
│   ├── globals.css       # tokens glass, keyframes, noise, grid-bg
│   ├── layout.tsx        # 3 fontes + suppressHydrationWarning
│   └── page.tsx          # AnimatePresence + handlerRef + nav
├── components/
│   ├── MeshBackground.tsx
│   ├── Cover.tsx
│   ├── PlanoAcao.tsx
│   ├── Diagnostico.tsx
│   ├── ViciousCycle.tsx
│   ├── Calculator.tsx       (opcional)
│   ├── CustoOportunidade.tsx
│   ├── SolutionOverview.tsx
│   ├── <EntregavelA>.tsx
│   ├── <EntregavelB>.tsx
│   ├── <EntregavelC>.tsx
│   ├── Investimento.tsx
│   └── ProximosPassos.tsx
├── public/
│   └── <cliente>-logo.png
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Ponteiros para os arquivos de referência

| Arquivo | Quando ler |
|---------|-----------|
| [design-system.md](design-system.md) | Antes de configurar `globals.css` e `tailwind.config.ts`, ou ao definir cor/tipo/sombra de qualquer elemento |
| [padroes-slide.md](padroes-slide.md) | Antes de construir cada slide — tem estrutura, copy e animação por tipo de frame |
| [decisoes.md](decisoes.md) | No setup do projeto e quando aparecer dúvida de "como fazer X" — convenções globais e decisões já tomadas |
| [erros-comuns.md](erros-comuns.md) | Antes de mexer em transform com Framer Motion, calcular geometria, ou rodar git em background. Ler também ao bater num bug — provavelmente já está aqui |
| [preferencias.md](preferencias.md) | Antes de propor copy, escolher entre alternativas estéticas, ou apresentar entrega — Eduardo aprova pelo silêncio e corrige pelo específico |

## Critério de qualidade antes de apresentar

Aplicar [.claude/rules/execucao.md] (já no contexto):

- Se eu fosse o cliente lendo isso, o que me faria fechar a página?
- A coerência narrativa entre slides está clara? (problema → conexão → solução → prova → preço → fechamento)
- Os mockups têm dados reais e plausíveis ou ficaram genéricos?
- O Cover está como slide ambiente (sem informação) ou virou slide informativo?
- O slide de Investimento tem revelação progressiva (preços → click → payback)?
- Headlines foram cortadas em pelo menos 30% antes de aprovar?
- Geometria validada com `getBoundingClientRect`, não thumbnail?

Erros recorrentes que aparecem se essa checagem é pulada estão em [erros-comuns.md](erros-comuns.md). Não apresentar nada sem rodar essa lista.
