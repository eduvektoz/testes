# Extração do Chat — Apresentação Rondave

Documento de trabalho para reconstruir o processo da apresentação a partir do chat antigo do Claude.
Cada seção recebe o output bruto do passe correspondente + minhas notas de validação contra o repo (`projects/propostas/rondave/`).

**Repo:** https://github.com/eduvektoz/Treinamentos
**Branch:** main (commit a06d0e1 — único commit)
**Estado:** apresentação final em produção (Vercel = repo)

---

## Passe 1 — Decisões de design (cronológicas)

> Prompt usado no chat antigo:
> "Liste TODAS as decisões de design que tomamos nesta conversa, em ordem cronológica. Para cada uma: o que foi decidido, qual era a alternativa descartada, e por quê. Não resuma. Não agrupe. Uma linha por decisão."

### Output bruto

**Stack & infra:**
- Manter Next.js 16.2 + Turbopack. Descartado: downgrade pra 15.1.6. Por quê: já tinha atualizado e atualização é o caminho certo.
- Manter `suppressHydrationWarning` no `<body>`. Descartado: remover. Por quê: extensões do browser injetam `bis_skin_checked` e geram warning não-fatal — suprimir é o uso pretendido da prop.
- 12 slides numa apresentação única. Descartado: separar em deck + calculadora. Por quê: experiência contínua de proposta comercial.
- Hospedagem Vercel. Descartado: Netlify, GitHub Pages, Cloudflare Pages. Por quê: Vercel é da própria Next.js — deploy zero-config.
- Repo `github.com/eduvektoz/Treinamentos` na raiz. Descartado: subdiretório, ou criar repo novo. Por quê: simplifica configuração Vercel.
- URL pública sem proteção por senha (por enquanto). Descartado: ativar Deployment Protection. Por quê: pode ativar depois pra envios pré-reunião.
- Identidade git: Eduardo Salles <eduardo@vektoz.com.br> via `-c` flag. Descartado: `git config --global` permanente. Por quê: regra do CLAUDE.md proíbe alterar config global.
- Arquivos antigos (HTML pré-Next) movidos pra `archives/`. Descartado: deletar. Por quê: regra do CLAUDE.md.
- Backup offline: `npm start` no laptop. Descartado: export estático com `output: 'export'`. Por quê: já tem Node — `npm start` é mais simples e mantém Next/Image otimizado.
- Não migrar para Google Slides. Descartado: exportar como imagens. Por quê: Slides perde glassmorphism, animações, interatividade, motion paths e SVG dinâmico.

**Cover (slide 1):**
- Logos lado a lado (Rondave esquerda, Vektoz direita). Descartado: outras disposições. Por quê: clássico de proposta comercial.
- Frase ambiente "reunião de apresentação". Descartado: provocador ("Quebrando o ciclo"), direto ("Plano 2026"). Por quê: slide ambiente que fica enquanto pessoas chegam.
- Sem data. Descartado: data da reunião. Por quê: evita "validade" se reapresentar.
- Não mostrar entregáveis nem sistemas. Descartado: 3 cards de preview. Por quê: slide ambiente, mais limpo.
- Vektoz como texto estilizado, não imagem. Descartado: logo image. Por quê: você não passou logo Vektoz.

**Plano de Ação (slide 2):**
- Título "Plano de Ação Rondave" + subtítulo separado. Descartado: tudo numa linha. Por quê: hierarquia visual mais forte.
- Sem autoria no rodapé. Descartado: incluir Eduardo Salles / Vektoz. Por quê: autoria fica pro slide 12.

**Diagnóstico (slide 3):**
- Tópicos soltos sem subtítulo por item. Descartado: cada item com explicação. Por quê: clareza, sem ruído.
- Animação fade-in sequencial automático. Descartado: revelação interativa por clique. Por quê: ciclo é só no slide 4.
- Selic 15% como item destacado. Descartado: cenário macro genérico. Por quê: é a desculpa principal do cliente — atacar de frente.

**Ciclo Vicioso (slide 4):**
- 9 etapas no ciclo. Descartado: 8 etapas previamente propostas. Por quê: você forneceu lista de 9.
- Trigger por clique no slide OU seta direita. Descartado: apenas teclado, ou apenas mouse.
- Tópicos acumulam (todos visíveis). Descartado: só 1 visível por vez. Por quê: destaque sutil no novo, sem exagero.
- Formato circular. Descartado: linear / outras formas. Por quê: ciclo precisa parecer ciclo.
- Linhas se desenham conforme reveal. Descartado: estrutura pré-desenhada em estado fantasma. Por quê: "construir o ciclo".
- Ciclo gira sozinho quando completo (3 luzes orbitando). Descartado: estático ao completar. Por quê: reforça "loop infinito".
- Seta direita avança quando ciclo completo. Descartado: botão separado. Por quê: consistência.
- Coordenadas FIXAS em viewBox (SIZE 1000). Descartado: medir container com `useEffect`. Por quê: race condition entre size default (640) e size real causava cards desalinhados no primeiro render.
- SVG escala via viewBox + HTML labels via percentages. Descartado: `foreignObject` dentro do SVG. Por quê: foreignObject com glassmorphism (backdrop-blur) tem renderização inconsistente entre browsers.
- Orbit lights via CSS `offset-path: circle(% at 50% 50%)`. Descartado: SVG `animateMotion`, ou offset-path em px. Por quê: % escala junto com container.
- `alignX` baseado em `cos` do ângulo (left/right/center). Descartado: todos centered. Por quê: cards próximos do horizontal precisam crescer pra lateral.
- `alignY` baseado em `sin` (threshold 0.55). Descartado: todos centered. Por quê: card 09 com 5 linhas crescia pra dentro do círculo se centered.
- BUG FIX: `transformTemplate` do Framer Motion. Descartado: `style.transform` inline. Por quê: Framer Motion sobrescreve `style.transform` quando aplica scale da animação, então o `translate(alignX, alignY)` era ignorado.
- Validação via screenshot Puppeteer com debug das geometrias reais. Descartado: confiar em validação matemática. Por quê: errei 3x seguidas — `getBoundingClientRect` é a fonte da verdade.
- `LABEL_OFFSET = 58` (escala "5/10"). Descartado: 115, 145. Por quê: meio termo entre encostado no círculo (0) e distante (10).

**Navegação geral:**
- Setas de teclado (apresentação fullscreen). Descartado: scroll vertical com snap. Por quê: consistência com slide 4.
- Indicador "01/12" + dots no rodapé central. Descartado: canto superior. Por quê: cantos superiores já têm label do slide e marca "vektoz × rondave".
- Transição: fade + slide horizontal + blur. Descartado: apenas fade. Por quê: efeitos "Caramba".
- `handlerRef` pattern para slides interceptarem setas. Descartado: contexto global ou eventos custom. Por quê: simples, type-safe, e só 2 slides precisam (4 e 11).
- `AnimatePresence mode="wait"`. Descartado: `mode="sync"`. Por quê: evita 2 slides simultâneos durante transição.

**Identidade visual:**
- Identidade visual = a do site existente, não Vektoz puro. Descartado: aplicar paleta da `context/brand.md`. Por quê: é uma proposta para Rondave, não material institucional Vektoz.
- Glassmorphism e transições intensificados. Descartado: efeitos sutis. Por quê: "Caramba, nunca vi".

**Calculadora (slide 5):**
- Manter código pré-existente. Descartado: reescrever do zero. Por quê: já estava bom, só precisava integrar.
- Headline "Quanto custa o seu tempo de verdade?". Descartado: "Quanto o tempo do seu time custa de verdade?". Por quê: mais curta e direta.
- Remover card "upside". Descartado: manter explicação sobre ROI real. Por quê: ruído visual, mensagem implícita.
- Compactar fontes/paddings (resultado 140px → 108px). Descartado: manter tamanho original. Por quê: caber tudo num único viewport sem scroll.

**Custo de Oportunidade (slide 6):**
- Lista vertical. Descartado: cards em grid.
- Todos os tópicos com fade automático. Descartado: revelação interativa. Por quê: padrão dos slides não-interativos.
- "Vender" destacado como destino final. Descartado: igual aos outros. Por quê: é a conclusão lógica.
- Subtítulo = definição literal de "eficiência". Descartado: slogan próprio. Por quê: você forneceu o texto exato.

**Solution Overview (slide 7):**
- 3 cards lado a lado. Descartado: grid 2x2. Por quê: 3 entregáveis = 3 cards horizontais, paralelismo visual.
- Cards animados em sequência. Descartado: aparecer juntos. Por quê: cria ritmo narrativo.
- CTA "Como quebramos o ciclo vicioso?". Descartado: "Como faremos isso?". Por quê: amarra com slide 4.
- Accent colors diferentes por entregável (azul/violeta/cobre). Descartado: tudo na mesma cor. Por quê: facilita identificação visual ao retomar nos slides 8/9/10.

**Consultoria (slide 8):**
- "6 encontros" no header. Descartado: badge no canto, ou junto com objetivo. Por quê: mais visível.
- 7 etapas listadas. Descartado: 6 etapas (alinhar com 6 encontros). Por quê: são etapas, não encontros 1:1.
- Lista numerada vertical. Descartado: timeline horizontal. Por quê: mais legível com 7 itens.
- Objetivo em card glass-hero destacado. Descartado: texto inline.

**Agente Licitação (slide 9):**
- Fluxo visual + lista de funcionalidades juntos. Descartado: só lista, ou só fluxo.
- 3 mockups com badges Ideal/Conferir/Descartar. Descartado: só lista. Por quê: prova visual + 1 exemplo por nível.
- Mockups com clientes/contratos plausíveis (Vale Carajás, Furnas Itutinga, Pref. Maceió). Descartado: dados genéricos. Por quê: ICP confirmado (mineradoras / energia / setor público).
- Nota "checagem humana" em destaque cobre. Descartado: rodapé pequeno. Por quê: quebra objeção de "IA vai errar".

**Agente LinkedIn (slide 10):**
- Fluxo + lista + mockup de post. Descartado: só funcionalidades.
- Perfil do post = Rondave (empresa). Descartado: perfil pessoal. Por quê: é o agente da Rondave.
- Tema = "frota 4×4 / mineradora / 14 dias parados". Descartado: genérico. Por quê: ICP exato — decisor de mineradora.
- Estrutura Formato 2 (Prova+Desejo) da skill `post-linkedin`. Descartado: Formato 1. Por quê: tema tem dado/número específico (14 dias).
- Engagement fictício mas realista (187 reações, 43 comentários). Descartado: zerado, ou enormes. Por quê: realismo.

**Investimento (slide 11):**
- Headline "Investimento.". Descartado: "O que custa destravar.". Por quê: direto e claro.
- Pagamento único à vista. Descartado: setup + mensalidade. Por quê: manutenção é extra opcional.
- Revelação interativa em 2 estados (preços+total → click → payback). Descartado: tudo de uma vez, ou 3+ etapas. Por quê: 2 estados é o mínimo pra criar a quebra de objeção.
- Payback com barra de progresso visual em mint. Descartado: só texto. Por quê: cor mint = positivo/sucesso.
- "R$20k = 1 projeto" aparece DEPOIS do preço. Descartado: junto com o total. Por quê: técnica de quebra de objeção precisa de "absorção" antes da resposta.

**Próximos Passos (slide 12):**
- 3 cards timeline com setas conectoras. Descartado: lista numerada.
- Sem datas nos passos. Descartado: prazos estimados. Por quê: evita compromissos antes do contrato.
- CTA "Vamos construir o futuro da Rondave juntos?". Descartado: "Obrigado", ou nada. Por quê: convite, não fechamento.
- Rodapé com Eduardo (CMO azul) + Lucas (CEO violeta) com divider vertical. Descartado: só Eduardo, ou ambos sem diferenciação. Por quê: cores diferentes diferenciam cargos sem texto extra.

**Assets:**
- Logo Rondave alta resolução (4.4MB). Descartado: manter logo anterior. Por quê: qualidade superior compensa o peso.

### Validação contra o repo

**Validado ✅ (alinhado com o código):**

| Afirmação | Evidência |
|-----------|-----------|
| Next.js 16.2 + React 19 + Framer Motion 11 + Tailwind 3 | [package.json](../rondave/package.json) — `next 16.2.0`, `react 19.0.0`, `framer-motion 11.15.0`, `tailwindcss 3.4.17` |
| `suppressHydrationWarning` no `<body>` | [layout.tsx:36](../rondave/app/layout.tsx#L36) |
| 12 slides | [page.tsx:24](../rondave/app/page.tsx#L24) — `TOTAL_SLIDES = 12` |
| `AnimatePresence mode="wait"` | [page.tsx:135](../rondave/app/page.tsx#L135) |
| `handlerRef` pattern com `SlideHandler { next, prev }` | [page.tsx:63-66](../rondave/app/page.tsx#L63-L66), usado em ViciousCycle e Investimento |
| Transição: opacity + x ±60 + blur 12px, 0.55s, ease cubic-bezier(0.22, 1, 0.36, 1) | [page.tsx:26-42, 143-146](../rondave/app/page.tsx#L26-L146) |
| Indicador "01/12" + dots no rodapé central | [page.tsx:155-230](../rondave/app/page.tsx#L155-L230) |
| Setas de teclado ArrowLeft/ArrowRight | [page.tsx:81-93](../rondave/app/page.tsx#L81-L93) |
| Cover: logos lado a lado (Rondave imagem + Vektoz texto) | [Cover.tsx:23-88](../rondave/components/Cover.tsx#L23-L88) |
| Cover: frase ambiente "reunião de apresentação" | [Cover.tsx:99](../rondave/components/Cover.tsx#L99) |
| Cover: Vektoz como `font-display text-7xl` com ponto azul | [Cover.tsx:84-86](../rondave/components/Cover.tsx#L84-L86) |
| Ciclo: 9 etapas | [ViciousCycle.tsx:6-16](../rondave/components/ViciousCycle.tsx#L6-L16) |
| Ciclo: SIZE 1000, RADIUS 225, LABEL_OFFSET 58, CARD_W 175 | [ViciousCycle.tsx:22-28](../rondave/components/ViciousCycle.tsx#L22-L28) |
| Ciclo: `transformTemplate` com comentário CRITICAL explicando o bug | [ViciousCycle.tsx:340-345](../rondave/components/ViciousCycle.tsx#L340-L345) |
| Ciclo: 3 luzes orbit com `cycleOrbit 9s linear infinite` | [ViciousCycle.tsx:269-313](../rondave/components/ViciousCycle.tsx#L269-L313) |
| Ciclo: clique OU seta direita (hint visível "clique ou pressione →") | [ViciousCycle.tsx:65-68, 422](../rondave/components/ViciousCycle.tsx#L65-L422) |
| Calculadora: headline "Quanto custa o seu tempo de verdade?" | [Calculator.tsx:132-133](../rondave/components/Calculator.tsx#L132-L133) |
| Calculadora: sem palavra "upside" no código | grep retornou 0 matches |
| Licitação: Vale S.A. (Carajás), Eletrobras Furnas (Itutinga), Pref. Maceió | [AgenteLicitacao.tsx:58-89](../rondave/components/AgenteLicitacao.tsx#L58-L89) |
| Licitação: badges ideal/conferir/descartar | [AgenteLicitacao.tsx:60-85](../rondave/components/AgenteLicitacao.tsx#L60-L85) |
| Licitação: nota "checagem humana" em destaque copper | [AgenteLicitacao.tsx:287-299](../rondave/components/AgenteLicitacao.tsx#L287-L299) |
| LinkedIn: perfil = Rondave | [AgenteLinkedIn.tsx:182-198](../rondave/components/AgenteLinkedIn.tsx#L182-L198) |
| LinkedIn: tema 14 dias / 4×4 / 380km | [AgenteLinkedIn.tsx:228-230](../rondave/components/AgenteLinkedIn.tsx#L228-L230) |
| LinkedIn: 187 reações, 43 comentários | [AgenteLinkedIn.tsx:257-261](../rondave/components/AgenteLinkedIn.tsx#L257-L261) |
| Investimento: 2 estados (revealed 0 → 1) | [Investimento.tsx:69-94](../rondave/components/Investimento.tsx#L69-L94) |
| Investimento: barra mint com COVERAGE_PCT calculado | [Investimento.tsx:29, 280-289](../rondave/components/Investimento.tsx#L29-L289) |
| Investimento: "R$20k = 1 projeto" depois do preço | [Investimento.tsx:225-294](../rondave/components/Investimento.tsx#L225-L294) |
| Próximos Passos: 3 cards timeline com setas conectoras | [ProximosPassos.tsx:5-52, 132-152](../rondave/components/ProximosPassos.tsx#L5-L152) |
| Próximos Passos: CTA "Vamos construir o futuro da Rondave juntos?" | [ProximosPassos.tsx:172-175](../rondave/components/ProximosPassos.tsx#L172-L175) |
| Próximos Passos: Eduardo CMO (blueSoft) + Lucas Veiga CEO (violetSoft) com divider | [ProximosPassos.tsx:194-233](../rondave/components/ProximosPassos.tsx#L194-L233) |
| Sem datas nos passos | confirmado nas descrições dos STEPS |
| Commit autor: Eduardo Salles <eduardo@vektoz.com.br> | git log: `a06d0e1` |

**Divergências (output ligeiramente impreciso):**

1. **Logo Rondave: 4.4MB → real é 4.21MB.** Provável arredondamento do Claude antigo. Não material.
2. **`alignX` thresholds não foram especificados no output.** Output diz "baseado em cos" mas não menciona threshold. Código usa `cosA > 0.25` (left) e `< -0.25` (right). Lacuna técnica importante.
3. **Output diz "Cover sem data" mas no topbar tem "2026"** ([Cover.tsx:18](../rondave/components/Cover.tsx#L18)). Não é data de reunião, é ano genérico — interpretação ambígua mas vale documentar.
4. **Output diz "187 reações, 43 comentários" mas o post tem também "12 reposts"** ([AgenteLinkedIn.tsx:260](../rondave/components/AgenteLinkedIn.tsx#L260)). Esquecimento sutil.

### Lacunas identificadas

✅ **Todas resolvidas.** Detalhes táticos cobertos pelos passes 3 (sistema visual), 4 (slides completos) e acesso direto ao repo.

**Notas de fechamento:**

- **Threshold cosA > 0.25** — fine-tuning visual pós-bug-mor. O Passe 2 documenta como 0.20 → 0.25 (não capturado nos 19 erros). Valor final no código é definitivo: `ViciousCycle.tsx:85`.
- **Preços (R$7k / R$10k / R$6k) e PROJECT_TICKET (R$20k)** — valores específicos da Rondave, não template. Para próximas apresentações, os serviços e valores serão redefinidos com o cliente. O que é reutilizável é a estrutura do slide de Investimento (revelação progressiva em 2 estados, COVERAGE_PCT como argumento de payback), não os números.
- **Copy específico da Rondave** (hooks, mockups Vale/Furnas/Maceió, ICP mineração/energia/setor público, telefones, nomes) — não é template. O que é reutilizável é o padrão: mockups com dados reais e plausíveis do ICP confirmado do cliente.

---

### Adendo (recebido) — Conteúdo literal + micro-decisões dos slides 2/3/6/7/8

**Conventions globais (confirmadas todas):**
- Easing custom `[0.22, 1, 0.36, 1]` em todas as transições principais.
- Topbar esquerda: `▸ slide XX · <nome>` em mono uppercase tracking-[0.22em] cor `text-ink-400`, `absolute left-8 top-8`.
- Topbar direita: `vektoz × rondave` mesmo estilo, `absolute right-8 top-8`.
- Header tag: `// <nome>` em mono uppercase tracking-[0.3em] cor `text-brand-blue`.
- Container interno: `max-w-6xl` ou `max-w-7xl`, `relative z-10`.

**Slide 2 — PlanoAcao** (textos literais + cascata: tag 0.15s → H1 0.35s blur(10px) → divider largura 0→96px @ 1.0s → subtítulo 1.15s → pills 1.4s; H1 `clamp(56px,9.5vw,148px)` leading-[0.92] tracking-[-0.035em]).

**Slide 3 — Diagnostico** (6 itens literais, header bloco único, cards `delay = 0.45 + i*0.13`, hover `y: -4 / 0.25s`, hover glow gradient azul→violeta blur-md, footer hint com caret 1.6s, layout `md:grid-cols-2`).

**Slide 6 — CustoOportunidade** (2 colunas `lg:grid-cols-5` esquerda 2 / direita 3; 5 itens lista + 6º card "Vender" como destino; cascata direita `delay = 0.7 + i*0.1`, card Vender `+0.15s` extra de pausa = 1.35s; 2 glows internos azul top-right + violeta bottom-left).

**Slide 7 — SolutionOverview** (3 cards header centralizado; cards `delay = 0.5 + i*0.18` com `blur(10px)` initial; hover `y: -8 / 0.3s` mais agressivo; CTA com seta em loop infinito `x: [0, 6, 0] / 1.6s easeInOut`; glows accent diferentes por card: azul / violeta / cobre).

**Slide 8 — Consultoria** (2 colunas `lg:grid-cols-5` esquerda 2 / direita 3; badge "6 encontros" com `animate-ping` dot; 7 etapas `delay = 0.55 + i*0.09` gap 90ms — mais rápido porque 7 itens; etiqueta `→ resultado` extra no item 7 visível só md+; hover `x: 4 / 0.2s`).

**Padrões transversais (afirmados pelo adendo):**
1. Headlines sempre com blur initial 8-10px → 0px ("foco entrando").
2. Items em lista com `x: 30` (slide-in da direita); headlines com `y: 30-50` (slide-up). Diferenciação visual proposital.
3. Cards principais (Vender, A/B/C, Objetivo) sempre com `scale: 0.9-0.96` initial → "popping in".
4. Glow + blur sempre como overlay absoluto com `pointer-events-none`.
5. Cascata começa com header (delay 0s), preenchimento top-down / left-right.
6. Total ~2-3s por slide.
7. Glass uniforme: `backdrop-blur(32px) saturate(180%)` + multi-shadow + 1px border gradient (definido em globals.css).

### Validação do adendo contra o repo

**Tudo bate 1:1 com o código.** Conferi cada slide linha por linha:

| Slide | Validação | Evidência |
|-------|-----------|-----------|
| **2 — PlanoAcao** | 100% MATCH (texto, layout, cascata, durações, delays, easings, tipografia) | [PlanoAcao.tsx](../rondave/components/PlanoAcao.tsx) — tag `delay 0.15s`, H1 `delay 0.35s ease custom`, divider `delay 1.0s width 96px`, subtítulo `delay 1.15s`, pills `delay 1.4s`. H1 `clamp(56px,9.5vw,148px)` exato. |
| **3 — Diagnostico** | 100% MATCH | [Diagnostico.tsx](../rondave/components/Diagnostico.tsx) — 6 ITEMS literais conferem (Selic 15% como #1), `delay = 0.45 + i*0.13` exato, hover `y:-4 0.25s` exato, footer hint `delay 1.6s` exato. |
| **6 — CustoOportunidade** | 100% MATCH | [CustoOportunidade.tsx](../rondave/components/CustoOportunidade.tsx) — 5 ITEMS literais, card Vender `delay = 0.7 + 5*0.1 + 0.15 = 1.35s` exato, glows `rgba(43,95,255,0.45) / rgba(124,58,237,0.4) blur 40px`. |
| **7 — SolutionOverview** | 100% MATCH | [SolutionOverview.tsx](../rondave/components/SolutionOverview.tsx) — 3 SOLUTIONS literais com accents blue/violet/copper, `delay = 0.5 + i*0.18` exato, hover `y:-8 0.3s`, seta loop `x:[0,6,0] 1.6s easeInOut Infinity` exato. |
| **8 — Consultoria** | 100% MATCH | [Consultoria.tsx](../rondave/components/Consultoria.tsx) — 7 STEPS literais, badge `animate-ping`, `delay = 0.55 + i*0.09` exato, etiqueta `→ resultado` no item 7 com `md:block`. |

**Micro-divergências (insignificantes):**

1. **Slide 3 — easing do header.** Adendo diz easing "default" pra o bloco header, código usa `ease: [0.22, 1, 0.36, 1]` ([Diagnostico.tsx:29](../rondave/components/Diagnostico.tsx#L29)). Output omitiu — não é erro material.
2. **Padrão "Headlines sempre com blur"** — slide 3 é exceção: H2 não tem `filter: blur()` no initial porque header é um bloco único (tag+H2+P juntos), não componente isolado. Padrão se aplica quando H2 anima sozinha (slides 6/7/8 confirmam).
3. **Linhas decorativas "──"** — adendo escreve "── eficiência" / "── onde tudo converge" / "── detalhado a seguir" como se fosse texto literal. No código, esses traços são `<span>` separados com `h-px w-6/8 bg-brand-blue` (linhas reais) precedendo o texto. Descrição visual, não literal.

### Lacunas remanescentes (após o adendo)

✅ **Todas resolvidas pelo Passe 4** (12 slides documentados com estrutura, copy, animação e raciocínio) e acesso direto ao repo durante a consolidação.

---

## Passe 2 — Erros e correções

> Prompt usado (versão melhorada — forçou estrutura, categorização e iterações):
> "Liste todos os erros e correções desta conversa em formato estruturado. Para CADA erro: Categoria, Slide afetado, Sintoma exato, Causa raiz, Correção aplicada, Iterações até resolver, Aprendizado generalizável. Inclua erros pequenos. No final, faça uma seção 'Padrões de erro' agrupando os tipos que repetiram."

### Output bruto

**19 erros documentados, 6 padrões de erro, 1 bug-mor.**

#### Erro #1 — Hydration mismatch falsamente diagnosticado como interno do Next
- **Categoria:** bug técnico + interpretação errada do diagnóstico
- **Sintoma:** console "Hydration failed: server rendered HTML didn't match client", apresentação não renderiza
- **Causa raiz:** extensões do browser (DivX/CRX-style) injetam `bis_skin_checked` e `bis_register` antes do React hidratar — não é bug do app
- **Correção:** re-adicionei `suppressHydrationWarning` ao `<body>`
- **Iterações:** 2x (1ª removi achando que era SSR; usuário mostrou diff com `bis_skin_checked` e voltei atrás)
- **Aprendizado:** hydration warning não-fatal com `bis_*` é sempre extensão. Antes de mexer em SSR, ler o diff específico.

#### Erro #2 — Race condition do useEffect no ViciousCycle
- **Categoria:** bug técnico (arquitetura de medição)
- **Slide:** 4
- **Sintoma:** nodes desalinhados em relação à curva azul no primeiro render
- **Causa raiz:** `containerRef.current.getBoundingClientRect()` em useEffect. State inicial 640, container real 760+. Em AnimatePresence, flicker visível.
- **Correção:** coordenadas FIXAS em viewBox (SIZE 800), HTML overlay em % das mesmas coords.
- **Aprendizado:** nunca depender de useEffect+setState para coordenadas críticas. SVG viewBox + percentages é determinístico.

#### Erro #3 — LABEL_OFFSET mal calibrado (1ª tentativa)
- **Sintoma:** card 09 sobreposto à curva, cards 04/05 muito próximos
- **Causa raiz:** LABEL_OFFSET=78 (8.5% do SIZE) pequeno demais; card 09 com 5 linhas tem ~99px altura
- **Correção:** SIZE 800→900, LABEL_OFFSET 78→110, threshold cosA ±0.35→±0.20
- **Aprendizado:** cards com texto variável têm altura imprevisível; LABEL_OFFSET considera o MAIS ALTO, não a média.

#### Erro #4 — Validei "no olho" via screenshot Puppeteer baixa-resolução
- **Categoria:** processo (validação visual insuficiente)
- **Sintoma:** disse "validei, está OK" quando card 09 ainda sobreposto
- **Causa raiz:** screenshot 1080p, olhei thumbnail, overlap não óbvio em escala pequena
- **Correção:** debug script `page.evaluate()` extraindo `getBoundingClientRect()` de cada label, calculando distância do canto até centro
- **Iterações:** usuário me chamou — "veja com seus próprios olhos, valide"
- **Aprendizado:** screenshot é evidência insuficiente para alinhamento geométrico. Sempre medir via DOM API.

#### Erro #5 — Aumentei valores sem entender a causa raiz
- **Categoria:** bug técnico + processo (chute em vez de diagnóstico)
- **Sintoma:** card 09 sobreposto mesmo com LABEL_OFFSET=145, SIZE=1000, alignY conditional
- **Causa raiz:** não conhecia o sintoma real. Continuei aumentando offsets, mas o `translate(-100%,-100%)` em `style.transform` estava sendo silenciosamente ignorado pelo Framer Motion
- **Iterações:** 1 desperdiçada (3ª no total). Usuário: "Analise e veja EXATAMENTE o porquê. Não erre mais isso."
- **Aprendizado:** quando aumentar parâmetros não resolve, pare. Há um bug binário escondido sob o ajuste contínuo.

#### Erro #6 — Framer Motion sobrescreve style.transform (BUG-MOR)
- **Categoria:** bug técnico (interação desconhecida com biblioteca)
- **Sintoma:** bottom-right do card 09 reportado em viewBox (412.1, 367.0) em vez de (262.1, 216.6). Diferença = 150x150 = dimensões exatas do card. Folga real -45px (DENTRO do círculo).
- **Causa raiz:** `motion.div` com `animate={{ scale: 1 }}` gera `transform: scale(1)` que sobrescreve `transform: translate(-100%,-100%)` do `style`. Posicionamento top-left em vez do canto correto.
- **Diagnose que funcionou:** Puppeteer + `page.evaluate()` + `getBoundingClientRect()` vs cálculo matemático — discrepância exata de 150px revelou o ignore.
- **Correção:** `transformTemplate={(_, generated) => `translate(${xT}, ${yT}) ${generated}`}` — API do Framer Motion pra mesclar transforms custom com animados.
- **Iterações:** 1x após diagnóstico (mas 3 cegas antes).
- **Aprendizado:** Framer Motion gerencia transform exclusivamente quando há props animadas envolvendo transform (scale, rotate, x, y). `style.transform` inline é silenciosamente sobrescrito. Sempre `transformTemplate`.

#### Erro #7 — Ajustes posteriores de LABEL_OFFSET
- **Sintoma:** após fix, cards muito longe da curva (folga 82-104px); usuário pediu aproximação numa "escala 5/10"
- **Correção:** LABEL_OFFSET 145 → 115 → 58
- **Aprendizado:** depois de corrigir bug subjacente, sempre revisar parâmetros inflados durante tentativas-cegas. Resíduos de debug viram dívida visual.

#### Erro #8 — Calculator headline longo demais
- **Original:** "Quanto o tempo do seu time custa de verdade?" (8 palavras, 3 linhas)
- **Final:** "Quanto custa o seu tempo de verdade?" (6 palavras, 2 linhas)
- **Aprendizado:** headlines de slide são manchete, não frase explicativa. Cortar pelo menos 1/3 antes de aprovar.

#### Erro #9 — Card "upside" desnecessário no Calculator
- **Sintoma:** card extra ocupava 25% da viewport, empurrando UI da calculadora pra baixo
- **Causa:** texto "ROI real em prospecção/renegociação/fechamento" duplicava o slide 6 (Custo de Oportunidade)
- **Aprendizado:** cada slide tem UMA mensagem. Se o conteúdo extra "ressoa com slide N+1", já é ruído.

#### Erro #10 — Calculator cortado verticalmente
- **Sintoma:** footer cortado abaixo da viewport
- **Causa:** padding `py-16`, fonte resultado 140px clamp, padding `p-10` não cabia em 1080p após header e nav indicator
- **Correção:** py-16 → py-10, fonte 140px → 108px, p-10 → p-7, gap-6 → gap-5, max-w-7xl → max-w-6xl
- **Aprendizado:** presentation slides são restritos por altura, não largura. Sempre testar em 1080p com header+footer reservados.

#### Erro #11 — Slide 11 headline pouco direto
- **Original:** "O que custa destravar." (passivo, abstrato)
- **Final:** "Investimento."
- **Aprendizado:** em slide de número/preço, headline é a categoria. Não é hora de poesia.

#### Erro #12 — Slide 12 sem Lucas Veiga
- **Sintoma:** rodapé só com Eduardo Salles
- **Causa:** usuário não havia informado existência do Lucas no briefing inicial
- **Correção:** Lucas Veiga (CEO, email, telefone) com divider vertical; cores diferentes (CMO `blueSoft`, CEO `violetSoft`)
- **Aprendizado:** rodapé de proposta com sócios deve ter espaço pra ambos desde o início se a empresa tem fundadores múltiplos. Perguntar antes.

#### Erro #13 — Push pendurado aguardando auth interativa
- **Sintoma:** `git push` em background sem output por minutos. `ls-remote` confirmava remoto vazio.
- **Causa:** Git Credential Manager (Windows) abre dialog GUI no 1º push em repo novo. Em background não-TTY, dialog não exibido — comando esperando indefinidamente.
- **Correção:** `TaskStop` + `git push` síncrono com `$env:GIT_TERMINAL_PROMPT = "0"` (força falha rápida)
- **Aprendizado:** `git push` em background nunca sem `GIT_TERMINAL_PROMPT=0` ou sem confirmar credentials cached. Se task ficar 30s sem output, presumir auth pendente.

#### Erro #14 — Git commit falhou por falta de identidade
- **Sintoma:** `fatal: unable to auto-detect email address (got 'eduar@Edu.(none)')`
- **Causa:** novo repo não herdou `user.email`. CLAUDE.md proíbe `git config --global`.
- **Correção:** `git -c user.name="Eduardo Salles" -c user.email="eduardo@vektoz.com.br" commit ...`
- **Aprendizado:** `git -c key=value <command>` é o atalho seguro pra commits de sessão sem persistir state.

#### Erro #15 — PowerShell Set-Location acumulando
- **Sintoma:** `Set-Location "projects/propostas/rondave"` falhou — path duplicado
- **Causa:** PowerShell tool mantém working directory entre execuções em alguns contextos
- **Correção:** `Push-Location <abs path>` + `Pop-Location` em par; ou variáveis com caminho absoluto
- **Iterações:** 2x (errei 1ª, errei 2ª, aprendi 3ª)
- **Aprendizado:** nunca paths relativos em `Set-Location` em Windows. Sempre `Push-Location` absoluto + `Pop-Location`.

#### Erro #16 — Cover original com entregáveis e "proposta comercial"
- **Sintoma:** 1ª versão tinha 3 cards de entregáveis, título "Vektoz × Rondave — Proposta Comercial", footer "preparado para Rondave"
- **Causa:** assumi briefing comum sem perguntar contexto de uso. Cover ficaria exposto enquanto pessoas chegam — slide ambiente, não informativo.
- **Correção:** removi entregáveis, removi "proposta comercial", só logos + frase "reunião de apresentação"
- **Aprendizado:** perguntar uso do slide, não só conteúdo. Slide ambiente vs slide de abertura ativa têm requisitos opostos.

#### Erro #17 — Diagnóstico com subtítulos por item
- **Sintoma:** 1ª versão com `{title, subtitle}` — ex: "Cenário Econômico Brasileiro Difícil" + "Selic em 15% encarece capital de giro"
- **Causa:** interpretei "tópico solto" como permissivo
- **Correção:** refatorei `ITEMS` para `string[]`
- **Aprendizado:** "tópico solto" = uma linha de texto, ponto. Sem subtítulo, contexto, descrição extra.

#### Erro #18 — CTA do Slide 7 não amarrava com Slide 4
- **Original:** "Como faremos isso?" (genérico)
- **Final:** "Como quebramos o ciclo vicioso?" (referência direta + verbo de ação)
- **Aprendizado:** CTAs entre slides funcionam como ponte. Nomear explicitamente o problema do slide anterior é mais forte que pergunta genérica.

#### Erro #19 — Script Puppeteer navegou pro slide errado
- **Sintoma:** screenshot capturou Slide 12 em vez de Slide 4
- **Causa:** script enviou 12 ArrowRight. No slide 4 com revealed completo, seta avança pro próximo. Últimas 3 setas escaparam.
- **Correção:** `page.click('button[aria-label="Ir para slide 4"]')` no dot do indicator + cliques no centro pra revelar
- **Aprendizado:** scripts Puppeteer pra slides com handlers de teclado precisam de "rotas seguras" (clique direto no dot).

### Padrões de erro (ouro do passe)

**Padrão 1 — "Aumentei valor sem diagnosticar" (3x):** Erros #3, #5, #7. Frente a sintoma persistente, aumentei LABEL_OFFSET, SIZE, RADIUS. Funcionou parcialmente quando era calibração; falhou quando era bug binário (transform sobrescrito).
> **Regra:** se aumento marginal de parâmetro deveria resolver e não resolve, pare. Há algo binário (aplicado/não-aplicado) escondido. Diagnose antes de continuar tunando.

**Padrão 2 — "Validei no olho em vez de medir" (2x):** Erros #4, #5. Screenshot, thumbnail, declarei OK. Debug script `getBoundingClientRect()` revelou problema instantaneamente.
> **Regra:** alinhamento geométrico = medição. Sempre escrever debug script Puppeteer + `page.evaluate()` quando tolerância visual é < 50px.

**Padrão 3 — "Inflei copy sem questionar concisão" (3x):** Erros #8, #9, #11. Headlines longas, cards extras, palavras desnecessárias.
> **Regra:** depois de escrever copy de slide, cortar pelo menos 30% antes de mostrar. Slide ≠ documento.

**Padrão 4 — "Interpretei pedido genericamente em vez de literalmente" (3x):** Erros #16, #17, #18. "Cover de proposta" virou Cover informativo. "Tópico solto" virou tópico+subtítulo. "Como faremos" virou genérico.
> **Regra:** pedidos de copy/conteúdo seguem interpretação literal restritiva. Em ambiguidade entre minimalista e expandida, escolher minimalista por default e perguntar.

**Padrão 5 — "Background task git/auth sem GIT_TERMINAL_PROMPT=0" (1x grave):** Erro #13.
> **Regra:** nenhum `git` em background sem `$env:GIT_TERMINAL_PROMPT = "0"` precedendo, ou sem credentials cached confirmadas.

**Padrão 6 — "Assumi shell stateless quando era stateful" (2x):** Erro #15.
> **Regra:** nunca confiar em working directory persistido. Sempre `Push-Location <absolute>` ... `Pop-Location` por escopo.

### Bug-mor: Erro #6 (transformTemplate)

> **Lição que sobrevive ao projeto:** bibliotecas que gerenciam transform (Framer Motion, GSAP, react-spring) assumem controle exclusivo quando há props animadas. Sempre pesquisar a API de "transform composition" da biblioteca (`transformTemplate`, `style.x/y`, motion values) antes de usar `style.transform` inline.

### Validação contra o repo

**Validado ✅:**

| Erro | Evidência |
|------|-----------|
| #1 (suppressHydrationWarning) | [layout.tsx:36](../rondave/components/../app/layout.tsx#L36) |
| #2 (viewBox em vez de useEffect) | [ViciousCycle.tsx:22-28](../rondave/components/ViciousCycle.tsx#L22-L28) — SIZE/CENTER/RADIUS constantes, sem `useRef` de container |
| #6 (transformTemplate com comentário CRITICAL) | [ViciousCycle.tsx:340-345](../rondave/components/ViciousCycle.tsx#L340-L345) — comentário no código documenta o bug exato |
| #7 (LABEL_OFFSET final = 58) | [ViciousCycle.tsx:25](../rondave/components/ViciousCycle.tsx#L25) — `LABEL_OFFSET = 58` |
| #8 (headline curta) | [Calculator.tsx:132-133](../rondave/components/Calculator.tsx#L132-L133) — "Quanto custa o seu tempo de verdade?" |
| #9 (sem upside) | grep "upside" → 0 matches |
| #10 (compactação) | [Calculator.tsx:204, 239, 141](../rondave/components/Calculator.tsx#L141) — `p-7`, `clamp(52px,8vw,108px)`, `gap-5`. py-10 confirmado em [page.tsx:46](../rondave/app/page.tsx#L46) |
| #11 ("Investimento.") | [Investimento.tsx:123](../rondave/components/Investimento.tsx#L123) |
| #12 (Lucas + divider + cores diferentes) | [ProximosPassos.tsx:194-233](../rondave/components/ProximosPassos.tsx#L194-L233) — Eduardo `text-brand-blueSoft`, Lucas `text-brand-violetSoft`, divider vertical entre eles |
| #14 (autor commit) | git log: `Eduardo Salles <eduardo@vektoz.com.br>` |
| #16 (Cover sem entregáveis) | [Cover.tsx](../rondave/components/Cover.tsx) — só logos + frase ambiente |
| #17 (ITEMS string[]) | [Diagnostico.tsx:5-12](../rondave/components/Diagnostico.tsx#L5-L12) — array de strings simples |
| #18 (CTA "Como quebramos...") | [SolutionOverview.tsx:185](../rondave/components/SolutionOverview.tsx#L185) |
| #19 (handleClick avança quando complete) | [ViciousCycle.tsx:65-68](../rondave/components/ViciousCycle.tsx#L65-L68) — `if (revealed < N) reveal++; else onAdvanceSlide?.()` |

**Divergência encontrada 🟡:**

- **Erro #3 menciona threshold `cosA ±0.20`** mas código atual usa **`cosA > 0.25`** ([ViciousCycle.tsx:85-86](../rondave/components/ViciousCycle.tsx#L85-L86)). Houve um ajuste posterior de 0.20 → 0.25 que **nenhum dos 19 erros captura**. Provável fine-tuning visual depois do bug-mor estar resolvido. Não é erro material, mas é a única edição não-documentada que encontrei.

**Não verificável pelo código (apenas plausibilidade):**

- Erros #4, #5 (processo de validação visual) — coerentes com a existência do bug-mor #6 e o comentário CRITICAL no código.
- Erros #13, #15, #19 (shell/git/Puppeteer) — coerentes com regras Windows/PowerShell já estabelecidas.

### Lacunas identificadas

Praticamente nenhuma. O passe 2 está em qualidade máxima — categorias claras, iterações contadas, padrões agrupados, regra prática extraída.

**Pequena lacuna a perguntar (opcional):**
- Erro #3 vs código: como/quando o threshold cosA mudou de 0.20 → 0.25?
- Houve outros fine-tunings visuais pós-bug-mor que não viraram "erro" mas valem documentar (gap de cor, tamanho de halo, etc)?

→ Não vale fazer adendo. Resgatamos via leitura do código durante a consolidação final.

---

## Passe 3 — Sistema visual exato

> Prompt usado:
> "Extraia o sistema visual exato usado na versão final: paleta completa com hex, tipografia (família, pesos, tamanhos, line-heights), espaçamentos, border-radius, sombras, animações (timing, easing, duração), breakpoints. Tire direto do CSS final, não da memória."

### Output bruto

**1. PALETA**

Cores nomeadas — tailwind.config.ts:8–29

| Token | Hex | Contextos de uso |
|-------|-----|------------------|
| ink-1000 | #05070E | vignette rgba(5,7,14,0.8) em MeshBackground |
| ink-950 | #080C18 | bg-ink-950 em MeshBackground (base da tela); html,body em globals.css |
| ink-900 | #0B1424 | .glass inner bg stop; nav bar bg-ink-900/75; ViciousCycle label node |
| ink-850 | #111A2E | não localizado em componentes |
| ink-800 | #18233A | .glass outer bg stop: rgba(24,35,58,0.55) |
| ink-700 | #2A3653 | AgenteLicitacao card "descartar" bg |
| ink-600 | #3E4A6B | AgenteLicitacao border; ProximosPassos dividers |
| ink-500 | #626B85 | PlanoAcao setas; labels secundários |
| ink-400 | #8A92A6 | breadcrumb/topbar (TODOS os slides); step labels |
| ink-300 | #B1B7C5 | body text; Calculator labels |
| ink-200 | #D4D8E0 | PlanoAcao frase; AgenteLinkedIn post body |
| ink-100 | #EDEFF3 | html,body color; LinkedIn post header |
| brand-blue | #2B5FFF | arco ViciousCycle; badges "6 encontros"; slider progress |
| brand-blueSoft | #5B82FF | .text-gradient (50%); arco mid; orbit light; node fill |
| brand-violet | #7C3AED | arco (100%); SolutionOverview B; .glass-hero glow |
| brand-violetSoft | #A78BFA | .text-gradient (100%); orbit light |
| brand-copper | #E08B63 | SolutionOverview C; AgenteLicitacao badges "descartar" |
| brand-mint | #7ED4B8 | Investimento payback; progress start; AgenteLicitacao "ideal" |

**2. TIPOGRAFIA**

Famílias — layout.tsx:5–21
- Inter: 300, 400, 500, 600, 700 (var: --font-inter)
- Space Grotesk: 400, 500, 600, 700 (var: --font-display)
- IBM Plex Mono: 300, 400, 500, 600 (var: --font-mono)

Escalas clamp: PlanoAcao.tsx:29 (56px–148px), Diagnostico.tsx:34 (40px–80px), ViciousCycle.tsx:140 (28px–48px), Calculator.tsx:131 (34px–64px), Calculator.tsx:239 (número 52px–108px), Investimento.tsx:209 (total 64px–120px), Investimento.tsx:262 (payback 56px–104px), ProximosPassos.tsx:79 (h2 36px–64px).

Padrões mono recorrentes (TODOS os slides):
- font-mono text-[11px] uppercase tracking-[0.22em] — breadcrumb topbar
- font-mono text-[10px] uppercase tracking-[0.22em] — sub-labels
- font-mono text-xs uppercase tracking-[0.3em] — prefix seção
- font-mono text-[10px] uppercase tracking-[0.32em] — "objetivo"/"destino final"

**3. ESPAÇAMENTO**

Padding de section: px-8 (Cover, PlanoAcao), px-8 py-16 (Diagnostico, CustoOportunidade, SolutionOverview, Consultoria), px-4 py-8 (ViciousCycle), px-8 py-10 (CalculatorSlide), px-8 py-12 (AgenteLicitacao, AgenteLinkedIn, Investimento), px-8 py-16 (ProximosPassos).

Max-width: max-w-6xl padrão em maioria, max-w-7xl em SolutionOverview/Consultoria/AgenteLicitacao/AgenteLinkedIn.

Cards: .glass p-6 (Diagnostico, ProximosPassos, SolutionOverview), .glass-hero p-7 (Calculator, AgenteLinkedIn), .glass-hero p-8 (Investimento).

Badges: px-3 py-1.5 (PlanoAcao pills), px-4 py-2 (Consultoria "6 encontros"), px-2 py-1 (AgenteLicitacao "checagem").

**4. BORDER-RADIUS**

CSS hardcoded:
- .glass: 24px (globals.css:134)
- .glass-hero: 28px (globals.css:169)

Tailwind (sobrescrito por .glass):
- rounded-xl 12px: ViciousCycle labels, Calculator cards
- rounded-full 9999px: Pills, badges, progress bars, orbit lights

Único literal: rounded-[28px] 28px em AgenteLinkedIn.tsx:176 (LinkedIn mock inner card).

**5. SOMBRAS**

Utilitárias tailwind.config.ts:37–43:
- shadow-float: 5 layers (inset white 0.08 + ring 0.06 + drops + blue glow 0.25)
- shadow-floatHi: 5 layers (inset white 0.12 + ring 0.08 + drops + violet glow 0.35)
- shadow-glow: 1 layer (blue glow 0.5)

Ad-hoc: 20+ valores inline por componente (Consultoria.tsx:52 shadow-[0_0_20px_rgba(43,95,255,0.25)], ViciousCycle.tsx:356–358 labels, SolutionOverview arcos, etc).

.glass composição: inset 0 1px 0 0 rgba(255,255,255,0.1) + 0 0 0 1px rgba(255,255,255,0.06) + drops 8/30/60px + blue glow rgba(43,95,255,0.28).

.glass-hero composição: inset 0 1px 0 0 rgba(255,255,255,0.14) + 0 0 0 1px rgba(255,255,255,0.08) + drops 12/40/80px + violet glow rgba(124,58,237,0.4).

**6. ANIMAÇÕES**

@keyframes globais (globals.css:35–83):
- floatA 22s ease-in-out infinite (blob -6%,-4% ↔ 6%,6%)
- floatB 28s ease-in-out infinite (blob 8%,10% ↔ -6%,-8%)
- floatC 32s ease-in-out infinite (blob -4%,16% ↔ 6%,-2%)
- blink 1.1s steps(1) infinite (.caret)
- cycleOrbit offset-distance 0%→100% 9s linear (ViciousCycle lights)

Framer Motion: easing [0.22,1,0.36,1] dominante (~45x), durações 0.3–1.2s, stagger cascata 0.45+i*0.13 (Diagnostico), 0.7+i*0.1 (CustoOportunidade), 0.55+i*0.09 (Consultoria — mais rápido).

Arc SVG (ViciousCycle.tsx:206): transition: stroke-dashoffset 0.85s cubic-bezier(0.22,1,0.36,1).

**7. BACKGROUNDS**

.noise (globals.css:52–60): SVG fractalNoise inline, baseFrequency 0.9, numOctaves 2, opacity 0.05, mix-blend-mode overlay. Presente em TODOS os 12 slides.

.grid-bg (globals.css:63–69): linhas 72px × 72px, rgba(255,255,255,0.035), máscara radial (center 25% black, 78% transparent). Aplicado em MeshBackground.

MeshBackground (MeshBackground.tsx): 6 camadas — radial estático (blue+violet), grid-bg, blob-a (blur 90px), blob-b (blur 110px), blob-c (blur 100px), vignette (radial ellipse, transparent→rgba(5,7,14,0.8)).

**8. EFEITOS DE PROFUNDIDADE**

.glass (globals.css:128–162): bg linear-gradient(180deg, rgba(24,35,58,0.55)→rgba(11,20,36,0.65)), backdrop-filter blur 32px saturate 180%, border-radius 24px, 5-layer box-shadow, pseudo-border ::before gradient 135deg white→blue, transition 0.3s cubic-bezier(0.22,1,0.36,1).

.glass-hero (globals.css:164–191): bg escuro rgba(17,26,46,0.75)→rgba(11,20,36,0.85), blur 40px saturate 200%, radius 28px, glow violet rgba(124,58,237,0.4), pseudo-border highlight rgba(255,255,255,0.22) accent violet.

.text-gradient (globals.css:194–199): linear 120deg #ffffff 0% → #5B82FF 50% → #A78BFA 100%, background-clip text, color transparent.

**9. BREAKPOINTS**

Usados: sm (640px), md (768px), lg (1024px), xl (1280px).

lg:1024px — 5 componentes: CustoOportunidade/Consultoria/Calculator (grid-cols-5, left col-span-2, right col-span-3), AgenteLinkedIn (lg:grid-cols-12), Cover (h-36).

md:768px — 7 componentes: SolutionOverview (grid-cols-3), Diagnostico (grid-cols-2), AgenteLicitacao mockups (grid-cols-3), Investimento prices (grid-cols-3), ProximosPassos (grid-cols-3), Cover logos (md:gap-20, h-32), Consultoria "→ resultado" (hidden→md:block).

sm:640px — AgenteLinkedIn features (grid-cols-1→sm:grid-cols-2).

xl:1280px — AgenteLinkedIn col-span-6→xl:col-span-7 (left).

### Validação contra o repo

**Validação completada:**

✅ **tailwind.config.ts** (linhas 8–29, 37–43) — Cores e shadows 100% match
✅ **globals.css** (linhas 35–83, 52–60, 63–69, 128–199) — @keyframes, .noise, .grid-bg, .glass, .glass-hero, .text-gradient 100% match
✅ **layout.tsx** (linhas 5–21) — Fonts Inter, Space Grotesk, IBM Plex Mono com pesos exatos 100% match
✅ **ViciousCycle.tsx** (linhas 161–169, 206–207, 340–345) — Arc gradients, filter, transformTemplate bug 100% match
✅ **PlanoAcao.tsx** (linhas 29, 36–40) — h1 clamp, divider animation 100% match
✅ **Diagnostico.tsx** (linha 34) — h2 clamp 100% match
✅ **Calculator.tsx** (linha 239) — Número economia clamp 100% match
✅ **ProximosPassos.tsx** (linha 79) — h2 final clamp 100% match
✅ **Cover.tsx** (linha 8) — Padding px-8 100% match
✅ **Consultoria.tsx** (linha 52) — Badge shadow 100% match

**Resultado: 0 divergências em 20+ referências arquivo:linha. Documento totalmente acurado.**

### Lacunas identificadas

✅ **Nenhuma lacuna.** Passe 3 cobre:
- Paleta completa com contextos de uso em 18 tokens (ink + brand)
- Tipografia: 3 famílias, pesos, 12+ escalas clamp com arquivo:linha
- Espaçamento: padding de section, max-width, cards, badges, listas, gap/space-y
- Border-radius: valores CSS hardcoded + Tailwind, conflito .glass bem documentado
- Sombras: utilitárias + 20+ ad-hoc com arquivo:linha
- Animações: @keyframes + Framer Motion padrões + arc SVG
- Backgrounds: .noise, .grid-bg, MeshBackground 6 camadas
- Efeitos: .glass / .glass-hero composição completa
- Breakpoints: sm, md, lg, xl com 15+ regras de grid/coluna por breakpoint

Output pronto para documentação em skill.

---

## Passe 4 — Padrões de slide

> Prompt usado:
> "Para cada um dos 12 slides: tipo de frame, estrutura visual, hierarquia tipográfica, regra de copy, animação de entrada (com delays explícitos), e por que funcionou. No final: padrões transversais (layout, tipografia, copy, animação, glassmorphism)."

### Output bruto

**SLIDE 1 — COVER**
- Tipo: capa ambiente (sem informação, só identidade)
- Estrutura: fullscreen flex center, topbar absoluta, logos em flex gap-10 md:gap-20, divider vertical h-32→md:h-40, frase + caret, bottom hint absoluto
- Copy: zero títulos, zero bullets. Única função: contexto ("reunião de apresentação") + instrução ("→ para iniciar")
- Animação: Rondave 0.3s (x:-50, blur(12px)) → Vektoz 0.5s (x:+50, blur(12px)) → divider 0.9s (scaleY) → frase 1.4s → hint 2.2s
- Por que funcionou: pattern interrupt — tela limpa com animação cinematográfica cria expectativa de que vai ser algo diferente antes de qualquer argumento

**SLIDE 2 — PLANO DE AÇÃO**
- Tipo: agenda / estrutura da jornada
- Estrutura: max-w-6xl, single column left-aligned, 5 blocos empilhados (label → h1 massivo → divider → frase display light → pills row)
- Copy: título = nome do documento (3 palavras + 1 gradient). Não é promessa nem pergunta — é declaração de identidade. Pills = sequência lógica.
- Animação: label 0.15s → h1 blur(10px) 0.35s → divider width:0→96px 1.0s → subtítulo 1.15s → pills 1.4s
- Por que funcionou: chunking + redução de ansiedade — cliente sabe o que vai acontecer antes de ver qualquer diagnóstico

**SLIDE 3 — DIAGNÓSTICO**
- Tipo: diagnóstico / espelho da realidade
- Estrutura: max-w-6xl, header coluna única, grid md:grid-cols-2 gap-4 com 6 cards .glass, footer hint com caret
- Copy: título 3 palavras com verbo passado ("O que identificamos."). Itens factuais sem adjetivos negativos, ordem: contexto externo → interno
- Animação: header 0s → cards 0.45s+i*0.13s (scale 0.96→1) → footer hint 1.6s
- Por que funcionou: mirror technique — mostrar realidade do cliente cria ressonância antes de qualquer solução

**SLIDE 4 — CICLO VICIOSO**
- Tipo: visualização interativa / causa-efeito
- Estrutura: fullscreen, header absoluto top-20, container aspect-square (min(76vh,920px)), SVG viewBox 0 0 1000 1000 + HTML overlay em %, orbit lights ao completar
- Copy: título = afirmação-pergunta 6 palavras. Labels = fragmentos sem ponto final. Headline questiona, conteúdo responde visualmente
- Animação: header y:-16 (único a entrar de cima). Nodes por clique: node 0.08s, label 0.15s. Arc = CSS transition 0.85s (não Framer). Orbit: cycleOrbit linear ao completar
- Por que funcionou: progressive disclosure + aha moment — o cliente vê conexões se formando e chega sozinho à conclusão "EM LOOP"

**SLIDE 5 — CALCULADORA**
- Tipo: ferramenta interativa / custo oculto
- Estrutura: max-w-6xl, header, grid lg:grid-cols-5 (col-span-2: sliders, col-span-3: resultado)
- Copy: título = pergunta 9 palavras. "De verdade" cria tensão implícita. Nenhum copy de resultado — cálculo fala.
- Animação: nenhuma animação de entrada deliberada nos elementos — slide entra ready-to-use. AnimatedNumber conta ao mudar. whileHover y:-4
- Por que funcionou: specificity + self-generated urgency — cálculo com dados do próprio cliente impossível de contestar

**SLIDE 6 — CUSTO DE OPORTUNIDADE**
- Tipo: reframe conceitual / transição problema→solução
- Estrutura: max-w-7xl, grid lg:grid-cols-5 (esq col-span-2, dir col-span-3), lista + card "Vender." .glass-hero
- Copy: título = negação direta de objeção implícita. Padrão: objeção → reframe → prova → conclusão em 1 palavra
- Animação: label→h2 blur(8px) 0.2s → subtítulo 0.45s → card eficiência 0.7s → lista 0.7s+i*0.1s → "Vender." 1.35s (scale 0.9→1, único com scale distinto)
- Por que funcionou: reframe antes da solução — elimina a objeção "minha equipe já trabalha muito" antes de ser verbalizada

**SLIDE 7 — SOLUTION OVERVIEW**
- Tipo: visão geral da solução / revelação estruturada
- Estrutura: max-w-7xl, header text-center, grid md:grid-cols-3 gap-6 com 3 cards .glass iguais, CTA com seta animada
- Copy: título = quantidade+adjetivo (3 palavras). Cards: máximo 12 palavras, 1 afirmação de resultado. Código A/B/C como marca d'água opacity-30
- Animação: header 0s → card A 0.5s, B 0.68s, C 0.86s (y:50, blur(10px)) → CTA 1.3s
- Por que funcionou: alívio estruturado após tensão — primeiro positivo após 3 slides de problema. A/B/C sinaliza sistema, não serviços avulsos

**SLIDE 8 — CONSULTORIA**
- Tipo: entregável A / processo detalhado
- Estrutura: max-w-7xl, grid lg:grid-cols-5 (esq col-span-2, dir col-span-3), lista ol 7 items, badge "6 encontros" com dot pulsante
- Copy: badge quantifica o compromisso antes de descrever conteúdo. Steps: substantivos+objeto direto, sem verbos de processo
- Animação: label→h2 blur(8px) 0.2s → badge 0.45s → steps x:30→0 (entra da direita) delay 0.55+i*0.09 (mais rápido: 90ms gap)
- Por que funcionou: redução de incerteza via processo visível — 7 etapas específicas transforma intangível em tangível

**SLIDE 9 — AGENTE DE LICITAÇÃO**
- Tipo: entregável B / demonstração funcional com mockup
- Estrutura: max-w-7xl, flex column, 4 seções: header + flow 5 etapas horizontal + grid md:grid-cols-3 mockups + nota cobre
- Copy: mockups com dados reais (Vale S.A., Eletrobras Furnas, Pref. Maceió). 3 níveis ideal/conferir/descartar mostram nuance
- Animação: flow items 0.6s+i*0.12s (scale 0.8→1) + conectores scaleX:0→1 (conectam após ícones) → cards mockup 1.4s+i*0.15s → nota 1.9s
- Por que funcionou: show don't tell com proof por especificidade — cliente imagina recebendo aquele email com aqueles dados reais

**SLIDE 10 — AGENTE LINKEDIN**
- Tipo: entregável C / demonstração via artefato
- Estrutura: max-w-7xl, grid lg:grid-cols-12 (6/6 → xl 7/5), esq: header+flow+features+objetivo, dir: mockup LinkedIn .glass-hero com bg #1B1F2E
- Copy: P nomeia ICP explícito (decisores de mineradoras, energia, setor público). Post mockup = copy real (Formato 2 Vektoz)
- Animação: features x:-20→0 delay 0.75+i*0.1 (únicos da esquerda) → mockup LinkedIn y:40, scale 0.97→1 delay 0.7s (maior entrada card único)
- Por que funcionou: artefato como prova — cliente vê exemplo real de post com formato LinkedIn, não precisa imaginar o output

**SLIDE 11 — INVESTIMENTO**
- Tipo: precificação com revelação progressiva
- Estrutura: max-w-6xl, flex column, header + grid md:grid-cols-3 (3 cards preço) + card total glass-hero + card payback (revelado por ação)
- Copy: título = 1 palavra. Cards: só categoria+valor, sem headline. "A partir do segundo contrato fechado pelo agente, tudo é lucro." — 12 palavras destroem objeção de preço
- Animação: cards A/B/C 0.4s/0.55s/0.7s blur(8px) → total 0.95s scale:0.96 → payback on-demand height:0→"auto" → progress bar +0.5s after payback (0→87%)
- Por que funcionou: anchoring + inoculation — ver partes individuais faz o total parecer inevitável; payback oculto incula objeção antes de ser verbalizada

**SLIDE 12 — PRÓXIMOS PASSOS**
- Tipo: CTA / fechamento emocional
- Estrutura: max-w-6xl, text-center, header + grid md:grid-cols-3 (3 cards com setas conectoras absolutas) + CTA grande + footer identidade
- Copy: título = 5 palavras orientadas ao tempo. Steps = resultado da etapa (não processo). CTA com nome do cliente "Rondave" + "juntos?". Footer = identidade real, sem pitch
- Animação: cards y:40 blur(8px) 0.45s+i*0.18s → CTA blur(10px) 1.2s → footer y:20 1.5s (entra por último — é suporte)
- Por que funcionou: momentum + friction removal — 3 steps triviais mapeiam o "sim" em ações concretas; "juntos?" coloca cliente como co-construtor

---

**PADRÕES TRANSVERSAIS**

Layout (12/12 slides):
- Topbar absoluta com breadcrumb "▸ slide XX · nome" + "vektoz × rondave" — cliente nunca perde contexto
- Glow radial decorativo (pointer-events-none, radial-gradient + blur 28-50px) no canto de cards hero em 8/12 slides
- max-w-6xl ou max-w-7xl como container interno — 100%

Tipografia (12/12 slides):
- Label mono "// seção" com tracking-[0.3em]: sem exceção. No ViciousCycle entra y:-16 (de cima); todos os outros y:20 (de baixo)
- Exatamente 1 palavra/frase em .text-gradient no h2 — sempre o conceito mais denso semanticamente
- Numeração = font-mono tabular-nums em 100% das listas numeradas

Copy (10/12 slides):
- Título de 3-5 palavras com ponto final — sem exceção nos h2. Sem interrogação exceto Calculator (intencional como hook)
- Estrutura "declaração / suporte / detalhe": label mono → h2 → p → conteúdo

Animação (12/12 slides):
- Easing [0.22,1,0.36,1] dominante. Exceções: blobs (ease-in-out), orbit (linear) — apenas backgrounds
- Blur de entrada no h2: blur(8px)→0 em 9/12 slides. PlanoAcao usa blur(10px), ProximosPassos blur(10px), Calculator não tem
- Stagger de listas: i*0.09 (Consultoria, 7 items — mais rápido), i*0.1 (CustoOportunidade, 5 items), i*0.13 (Diagnostico, 6 items), i*0.18 (ProximosPassos, 3 items — mais lento)

Glassmorphism (11/12 slides):
- Cover é a única exceção (sem card)
- Regra implícita: se tem >1 card, o mais importante vira .glass-hero; os outros ficam .glass
- Separação visual "suporte vs destaque" feita exclusivamente por .glass vs .glass-hero, não por cor ou border

### Validação contra o repo

✅ **Cover.tsx** — delays 0.3s/0.9s/0.5s, x:-50 Rondave, x:+50 Vektoz confirmados
✅ **ViciousCycle.tsx:128–144** — header y:-16 (único a entrar de cima) confirmado
✅ **Diagnostico.tsx:77–84** — footer hint delay 1.6s confirmado
✅ **SolutionOverview.tsx:121–128** — y:50, blur(10px), delay 0.5+i*0.18, whileHover y:-8 confirmados
✅ **Consultoria.tsx:118–125** — steps x:30→0, delay 0.55+i*0.09 confirmados
✅ **Consultoria.tsx:38–40** — h2 blur(8px), delay 0.2s confirmados
✅ **AgenteLinkedIn.tsx:100–106** — features x:-20, delay 0.75+i*0.1 confirmados
✅ **Investimento.tsx:228–231** — payback height:0→"auto" confirmado
✅ **ProximosPassos.tsx:180–183** — footer delay 1.5s confirmado
✅ **CustoOportunidade.tsx:110** — "Vender." scale 0.9→1 confirmado

**Resultado: 0 divergências em 15+ referências arquivo:linha.**

### Lacunas identificadas

✅ Nenhuma lacuna material. Todos os 12 slides documentados com estrutura, copy, animação e raciocínio. Padrões transversais cobrem layout, tipografia, copy, animação e glassmorphism.

---

## Passe 5 — Preferências do Eduardo

> Prompt usado:
> "Liste as minhas preferências que você identificou ao longo dessa conversa — gostos, vetos, padrões de feedback recorrente, palavras que rejeitei, estilos que rejeitei. Estrutura: preferência / alternativa rejeitada / como soube / motivo. Categorias: estética, copy, processo, tolerância a erro, critério de qualidade. No final: 'Perfil de Decisor' — 5 frases que descrevem como Eduardo toma decisões de design e copy."

### Output bruto

**ESTÉTICA E VISUAL**

- **Glassmorphism profundo real** (5-layer shadow, backdrop-blur 32–40px, pseudo-border gradient, radius 24/28px) vs versão superficial (border simples + blur leve). Aprovação pelo silêncio — o sistema .glass/.glass-hero nunca foi questionado em 12 slides. Inferido: coerente com identidade de tecnologia/IA da Vektoz.

- **LABEL_OFFSET = 58 (posição "5/10")** vs mais próximo (sobreposição) ou mais distante (saindo da viewport). Feedback explícito com framing métrico: "em uma escala de 0 a 10, sendo 0 o círculo e 10 o label, coloque a distância em 5." Eduardo usou escala numérica em vez de "mais próximo/menos" — pensa em proporção, não em absolutos. EVIDÊNCIA NO CÓDIGO: comentário `// posição "5/10" entre círculo (0) e mais distante (10=115)` no ViciousCycle.tsx:25.

- **Logo Rondave em alta resolução** (600×200, arquivo maior) vs logo menor/pixelada. Pediu explicitamente atualização. Logo fica em tela cheia no slide 1 — detalhe visual crítico.

- **3 cores de accent semanticamente distintas** (blue=primário, violet=sofisticado, copper=humano/warm, mint=sucesso) vs monocromático. Aprovação pelo silêncio. Cada cor carrega carga semântica legível sem explicação.

- **Apresentação web interativa** vs Google Slides/PDF. Perguntou ativamente sobre ambas as alternativas; ao saber que seriam degradações, escolha foi imediata. Critério: fidelidade visual total — "sem perder absolutamente nada? Efeitos, transições, cores, etc?"

**COPY E LINGUAGEM**

- **Títulos declarativos de 1–3 palavras com ponto final** ("Investimento.") vs frame negativo camuflado ("O que custa destravar"). Feedback explícito pedindo troca. Motivo inferido: "O que custa destravar" coloca frame em "você está travado". "Investimento." nomeia sem diagnosticar.

- **Dados reais e específicos nos mockups** (Vale S.A., Eletrobras Furnas, Pref. de Maceió) vs exemplos genéricos. Aprovação pelo silêncio. Especificidade cria verossimilhança — o cliente da Rondave consegue visualizar a cena.

- **Segunda pessoa direta** ("o seu tempo de verdade") vs copy descritivo em terceira pessoa ("calculadora de custo oculto"). Pediu explicitamente a mudança. "Seu" cria tensão pessoal; "de verdade" implica que o cliente conhece um número errado.

- **Copy de resultado emocional curto** ("Vender." — uma palavra com ponto final) vs versões explicativas multi-frase. Aprovação pelo silêncio. Consistente: menos palavras = mais peso.

- **ICP nomeado com especificidade** ("decisores de mineradoras, energia e setor público") vs ICP genérico. Aprovação pelo silêncio. Eduardo é vendedor B2B — sabe que mensagem que nomeia o cliente chega mais que a que descreve o produto.

**PROCESSO DE TRABALHO**

- **Documentação técnica com file:line** como referência permanente vs descrição vaga. Pediu proativamente na primeira mensagem da sessão de extração. Motivo explícito: citou 4 erros meus de memória (logo 4.4MB era 4.21MB, threshold 0.20 era 0.25, "default easing" era [0.22,1,0.36,1], "sempre com blur" tinha exceção slide 3).

- **Explicação da causa raiz do erro, não apenas a correção**. Feedback explícito: "Analise e veja EXATAMENTE o porque vc tá errando isso." A correção sem diagnóstico não tem valor — pode ser revertida acidentalmente porque a causa ficou desconhecida.

- **Opções numeradas quando a escolha é dele** vs recomendação única. Padrão inferido: respondeu "Opção 3." diretamente, sem deliberação visível. CEO que toma muitas decisões por dia prefere menus a argumentos.

- **Produção técnica completa antes de apresentar** vs esboço+iteração. Padrão de entrega: slides 7–12 foram apresentados como bloco completo. Feedback foi pontual (Lucas no footer, headline Investimento, card upside).

- **Documentação retrospectiva profunda ao final** vs wrap-up informal. Comportamento desta sessão: os últimos 4 prompts foram extrações sistemáticas de sistema visual, descartados, slides e preferências. Não foi pedido no meio do projeto — foi pedido depois de tudo pronto. Eduardo está construindo playbook reutilizável, não documentando esta proposta.

**TOLERÂNCIA A ERRO E ITERAÇÃO**

- **Corrigir na primeira tentativa ou diagnosticar antes de tentar**. Gerou atrito: tuning incremental sem diagnóstico (LABEL_OFFSET 78→110→sem resultado). Feedback literal: "we're losing time on the same problem, fix it definitively." Exigência: diagnóstico, não rapidez.

- **Zero auto-aprovação sem verificação**. Gerou atrito: declarei "alinhamento OK" sem medir. Feedback: "still misaligned, validate with your own eyes." A falha de processo foi o problema, não apenas o resultado.

- **Tolerado sem atrito**: mudanças menores de 1 iteração (logo, headline, card upside). 1 pedido → 1 correção → aprovação implícita.

- **Tolerado**: aprovação pelo silêncio para blocos inteiros (slides 7–12 sem nenhum ajuste; sistema visual nunca questionado).

**CRITÉRIO DE QUALIDADE IMPLÍCITO**

- Precisão geométrica verificável > aproximação visual. Único momento de aprovação com múltipla exclamação foi após fix validado com Puppeteer. "Agora sim! Perfeito!!!!!" Iterações com "visualmente ok" foram rejeitadas.

- Especificidade técnica nos entregáveis de documentação. Instrução de abertura desta sessão listou 9 seções, exigiu file:line, citou 4 erros meus de memória. "Boa documentação" = pode substituir a conversa como referência, reutilizável sem o Claude.

- Coerência narrativa entre slides (conjunto como argumento). Aprovação em blocos temáticos, comentários de ajuste foram pontuais — nunca sobre estrutura narrativa.

- Resultado pronto para usar de forma independente. Perguntas sobre offline/email/edição revelam critério de conclusão: não "tecnicamente funcional" mas "eu consigo usar isso de forma independente."

**PERFIL DE DECISOR**

1. **Decide por princípio, não por preferência.** Não disse "prefiro glassmorphism" — aprovou sistema internamente consistente e descartou variações que quebrariam coerência. Aplica a mesma lógica ao copy: rejeitou "O que custa destravar" porque o frame era inconsistente com o objetivo.

2. **Usa métricas onde outros usariam instinto.** "Escala de 0 a 10, coloque em 5" elimina ambiguidade e iteração. Catalogou 4 erros meus por memória antes de pedir a extração. Transforma intuições em critérios verificáveis.

3. **Aprova pelo silêncio, corrige pelo específico.** Nenhum elogio a slides ou paleta. Feedback surgiu somente quando algo estava errado — e era cirúrgico. Silêncio = sinal de qualidade, não neutralidade.

4. **Não tolera o mesmo erro duas vezes, mas tolera o primeiro.** Modelo: 1ª falha = custo esperado, 2ª = sinal de processo errado, 3ª = inaceitável → exige diagnóstico de causa raiz. Alta tolerância para novidade, zero para repetição.

5. **Pensa em sistema, não em peças.** Os últimos prompts desta sessão não são revisão — são construção de playbook. Critério final: "eu consigo replicar isso sem depender de você."

### Validação contra o repo

Validação por coerência interna (não código):

- ✅ **LABEL_OFFSET=58** confirmado em ViciousCycle.tsx:25 com comentário `"5/10"` documentado no próprio código
- ✅ **4 erros citados por Eduardo** coerentes com divergências identificadas nos passes 1, 2 e adendo
- ✅ **Aprovação pelo silêncio em slides 7–12**: não há registro de nenhum pedido de ajuste nesse bloco — coerente com Passe 1
- ✅ **"Vender." aprovado sem revisão**: Passe 4 confirma card com scale 0.9→1 como elemento especial — nunca questionado
- ✅ **Perfil de decisor "5 frases"**: consistente com 100% do que foi documentado nos passes anteriores

### Lacunas identificadas

✅ Nenhuma lacuna material. Observação: o documento cita que o headline original da Calculator não foi recuperado (anterior à compactação) — mas isso é limitação da sessão original, não do Passe 5.

---

## Passe 6 — O que NÃO funcionou (descartado)

> Prompt usado:
> "Liste tudo que foi tentado e descartado. Estrutura: o que foi tentado / estágio / por que foi tentado / sintoma específico que fez descartar / o que substituiu / custo. Categorias: layouts visuais, approaches técnicos, copys, animações, componentes, bibliotecas. Top 5 lições do descartado."

### Output bruto

**LAYOUTS VISUAIS TESTADOS E REVERTIDOS**

**#1 — Arquitetura scroll-snap deck vertical**
- O que foi: scroll-snap-type: y mandatory no .deck, navegação por scroll nativo
- Estágio: início
- Por que: mais simples, zero JS, browser faz scroll snap nativamente
- Sintoma: incompatível com slides interativos (ViciousCycle/Investimento precisam interceptar setas antes da navegação). whileInView com scroll rápido criava timing irregular — animação atrasada em relação ao conteúdo visível
- Substituiu: AnimatePresence mode="wait" + motion.div variants + keydown com handlerRef
- Custo: 1 iteração de arquitetura descartada cedo. CSS .deck nunca limpo — ainda em globals.css:19–32 (morto em produção)

**#2 — Slide.tsx como wrapper genérico com whileInView**
- O que era: <Slide id label> com motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-20%" }}, encapsulava breadcrumb + topbar + max-w-6xl
- Estágio: início
- Por que: DRY — evitar copiar padrão de animação em cada componente
- Sintoma: quando mudou para AnimatePresence, whileInView tornou-se irrelevante (slide ocupa 100vh, está sempre "em view"). Re-triggers desnecessários nas transições. Layouts distintos não cabiam no max-w-6xl padrão (ViciousCycle usa aspect-square, SolutionOverview usa max-w-7xl)
- Substituiu: cada componente monta seu próprio <section> — repetição deliberada
- Custo: componente não removido — mantido intacto (Slide.tsx ainda existe)

**APPROACHES TÉCNICOS QUE FALHARAM**

**#3 — useEffect + getBoundingClientRect para labels do ViciousCycle**
- O que foi: medir bounding rect do SVG após mount e recalcular posições lx, ly em pixels absolutos
- Estágio: meio
- Por que: abordagem óbvia de "converter coordenadas SVG → posição HTML"
- Sintoma: race condition — useEffect disparava antes do browser finalizar layout do SVG. Labels em posições erradas no primeiro render, corrigiam só após segundo render ou resize. Inconsistência dependia de hardware
- Substituiu: coordenadas fixas em viewBox (SIZE=1000, CENTER=500, RADIUS=225). Labels HTML usam left: ${(lx/SIZE)*100}% e top: ${(ly/SIZE)*100}% — determinístico
- Custo: 1 iteração completa

**#4 — style.transform direto no motion.div para offset dos labels**
- O que foi: motion.div com style={{ transform: translate(${xTransform}, ${yTransform}) }} + animate={{ scale: 1 }}
- Estágio: meio-fim (iterações 3 e 4)
- Por que: translate(-50%, -50%) é o idioma padrão para centralizar elemento absoluto
- Sintoma: Framer Motion substitui integralmente style.transform quando executa qualquer animação (scale, rotate, x, y). Translate descartado silenciosamente — sem erro, sem warning. Cards renderizados no canto superior-esquerdo. Diagnosticado apenas com Puppeteer getBoundingClientRect(): discrepância exata de 150px (dimensões do card) revelou o ignore
- Substituiu: transformTemplate={(_, generated) => `translate(${xT}, ${yT}) ${generated}`}
- Custo: 3 iterações cegas + 1 com Puppeteer para diagnosticar

**#5 — Tuning incremental de LABEL_OFFSET sem diagnosticar causa raiz**
- O que foi: LABEL_OFFSET 78 → 110, validação "no olho" em screenshot thumbnail
- Estágio: meio
- Por que: interpretação errada — "labels perto demais" vs "bug de coordinate system"
- Sintoma: Eduardo: "ainda está desalinhado, valide com seus próprios olhos". A terceira tentativa ainda estava errada. O tuning de LABEL_OFFSET nunca iria resolver porque o translate estava sendo ignorado — o offset muda origem mas sem âncora não adianta
- Substituiu: diagnóstico Puppeteer + getBoundingClientRect. Revelou label 8 com folga -45px (dentro do círculo). Valor final LABEL_OFFSET=58 chegou DEPOIS do fix real
- Custo: 2 iterações de tuning inútil (~40min + 2 ciclos feedback desperdiçados)

**#6 — <foreignObject> SVG para labels HTML dentro do SVG**
- O que foi: <foreignObject width="175" height="60" x={lx-87.5} y={ly-30}> para manter tudo no sistema de coordenadas SVG
- Estágio: início do slide 4 (descartado na fase de planejamento)
- Por que: elegante — zero conversão de coordenadas
- Sintoma: foreignObject quebra backdrop-filter: blur() em Chrome e Safari quando SVG está em motion.div com transformações. Glassmorphism dos labels renderia como cinza sólido. Framer Motion não suporta motion.div dentro de foreignObject confiravelmente
- Substituiu: HTML overlay absoluto em % sobre o SVG (dois sistemas sincronizados via (lx/SIZE)*100%)
- Custo: zero de implementação (descartado na fase de design)

**#7 — <animateMotion> SVG para órbitas**
- O que foi: <animateMotion dur="9s" repeatCount="indefinite"> + <mpath href="#cycleCirclePath"> para partículas de órbita
- Estágio: fim (design das órbitas)
- Por que: método SVG-nativo, suporte amplo, sem dependências
- Sintoma: partículas precisam de box-shadow rgba() para glow. box-shadow não existe em SVG — drop-shadow() é muito mais limitado. animateMotion só funciona em elementos SVG — incompatibilidade de domínio
- Substituiu: div HTML com offset-path: circle(22.5% at 50% 50%) + @keyframes cycleOrbit { offset-distance: 0% → 100% }
- Custo: zero de implementação (descartado na fase de design)

**#8 — git push em background sem GIT_TERMINAL_PROMPT=0**
- O que foi: git push origin main em background (run_in_background: true)
- Estágio: fim (deploy inicial)
- Por que: "push é operação rápida, não preciso esperar"
- Sintoma: Git Credential Manager no Windows aguarda GUI dialog de autenticação. Em background, processo ficava pendurado indefinidamente sem output, sem timeout, sem erro visível
- Substituiu: $env:GIT_TERMINAL_PROMPT = "0" antes do push + rodar síncrono
- Custo: 1 hang + investigação do processo travado (~10min)

**#9 — git commit sem identidade configurada**
- Sintoma: erro "Please tell me who you are. fatal: unable to auto-detect email address"
- Substituiu: git -c user.name="Eduardo Salles" -c user.email="eduardo@vektoz.com.br" commit -m "..."
- Custo: 1 commit falhado. Trivial

**#10 — Set-Location sem paths absolutos entre tool calls**
- O que foi: cd <path> em cada bloco Bash assumindo que shell mantinha estado
- Sintoma: shell entre tool calls é stateless — paths concatenados errados, git commands no diretório errado
- Substituiu: Push-Location <abs-path> + Pop-Location dentro do mesmo bloco
- Custo: 2 ocorrências, 1 command falhado cada

**#11 — Validação visual "no olho" para alinhamento geométrico**
- Sintoma: Eduardo disse "ainda está desalinhado" após EU ter dito OK. Folga negativa de -45px invisível em thumbnail por glass effect — borda do card e curva se confundiam
- Substituiu: script Puppeteer com getBoundingClientRect() calculando folga geométrica. Critério de aceite: folga ≥ 20px em todos os 9 labels
- Custo: 1 ciclo de feedback falso + a frase "Analise e veja EXATAMENTE o porque vc tá errando isso."

**COPYS DESCARTADOS**

**#12 — Investimento h2: "O que custa destravar."**
- Por que foi tentado: ângulo pergunta+resposta
- Sintoma que descartou: Eduardo pediu mudança. "Destravar" coloca frame em "você está travado" (negativo). Compradores não querem sentir que estão comprando solução para problema vergonhoso
- Substituiu: Investimento. — uma palavra, sem frame negativo

**#13 — Calculator headline original**
- Literal: não recuperável (anterior à compactação)
- Substituiu: "Quanto custa o seu tempo de verdade?" — frame emocional, segunda pessoa, "de verdade" cria tensão

**COMPONENTES CRIADOS E DEPOIS REMOVIDOS**

**#14 — Calculator — card "upside" (quarto card de resultado)**
- O que era: quarto card mostrando ganho potencial / ROI do agente de licitação
- Sintoma que descartou: card forçava scroll vertical em slide de 100vh. "Upside" projetado seria número sem base (calculadora não tem inputs suficientes para estimar ganho de vendas)
- Substituiu: três cards compactos em grid-cols-3 (Calculator.tsx:249–264)

**BIBLIOTECAS/FERRAMENTAS CONSIDERADAS E NÃO USADAS**

**#15 — Puppeteer (debug, não runtime)**
- Status: npm install --no-save — não em package.json. Script debug-cycle.js executado uma vez, confirmou diagnóstico, descartado

**#16 — Google Slides**
- Descartado: backdrop-filter, gradientes CSS, Framer Motion, @keyframes, offset-path — nada existe em Google Slides
- Ficou: apresentação web como fonte canônica. Para apresentar: browser. Para enviar: link Vercel

**#17 — next build com output: 'export'**
- Avaliado para offline. Problema: assets com dependência de internet no primeiro load
- Substituiu: npm run build && npm start como servidor local
- Status: next.config.mjs sem output: 'export'

**#18 — PDF de alta resolução**
- Avaliado para envio por e-mail
- Descartado: page.pdf() via Puppeteer requer print CSS + controle de page breaks + animações não fazem sentido em PDF estático
- Ficou como opção futura. Melhor opção atual: link Vercel

**TOP 5 LIÇÕES DO DESCARTADO**

1. **transformTemplate é obrigatório** quando Framer Motion anima qualquer prop de transform em elementos com translate fixo. style.transform é silenciosamente descartado sem erro ou warning. Custo: 4 iterações — o bug mais caro da sessão.

2. **Alinhamento geométrico nunca valida "no olho"**. Sobreposição de 5-10px é invisível em thumbnail. Sempre getBoundingClientRect() ou Puppeteer para posicionamento baseado em cálculo.

3. **Decidir scroll vs AnimatePresence ANTES de criar qualquer componente**. Este choice determina a estrutura de animação de cada slide. Decidir depois = reescrever tudo.

4. **Tuning numérico sem diagnosticar bug binário é sempre ineficiente**. Quando ajuste incremental não resolve: o problema é binário, não quantitativo. Pare de tunar, diagnostique a causa.

5. **Git push em background no Windows sempre precisa de GIT_TERMINAL_PROMPT=0**. GCM é GUI-based — sem tela, o processo pende indefinidamente sem output.

### Validação contra o repo

Evidências verificadas diretamente no código:

- ✅ **globals.css:19–32** — .deck CSS morto (`scroll-snap-type: y mandatory`) ainda presente
- ✅ **Slide.tsx existe** em components/ com `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: false, margin: "-20%" }}` nas linhas 27–34
- ✅ **next.config.mjs:1–6** — apenas `reactStrictMode: true`, sem `output: 'export'`
- ✅ **Calculator.tsx:249–264** — 3 cards em `grid-cols-3` (horas/mês, economia mensal, custo atual/ano)
- ✅ **package.json** — zero matches para "puppeteer"

Resultado: **0 divergências**. Todas as evidências de "ruínas" confirmadas no código.

### Lacunas identificadas

✅ Nenhuma lacuna material. Observação: copys descartados (#13) — headline original da Calculator anterior à compactação não foi recuperado. Aceitável — o que ficou (headline atual) está documentado no Passe 3/Passe 1.

---

## Próximos passos (após os 6 passes)

1. Consolidar em `.claude/skills/proposta-comercial-rondave/`:
   - `SKILL.md` (instrução acionável)
   - `design-system.md`
   - `padroes-slide.md`
   - `decisoes.md`
   - `erros-comuns.md`
   - `preferencias.md`
2. Mover este arquivo de extração para `archives/` (não deletar — CLAUDE.md).
3. Validar a skill criando uma apresentação de teste curta com ela.
