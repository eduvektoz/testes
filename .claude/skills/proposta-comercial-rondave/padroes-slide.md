# Padrões de Slide

Os 12 frames canônicos da proposta comercial. Cada frame tem um **propósito narrativo** específico — não são slides intercambiáveis. A ordem é narrativa: ambiente → contexto → diagnóstico → conexão → ferramenta → reframe → solução → entregáveis → preço → fechamento.

Este arquivo descreve o tipo de frame, não o conteúdo da Rondave. Quando aparecer "exemplo Rondave", é só ilustração — em cada nova proposta, esse conteúdo é redefinido.

## Padrões transversais (aplicar a TODOS os slides)

Antes dos 12 frames, o que está em comum:

- **Topbar absoluta**: esquerda `▸ slide XX · <nome>` + direita `<vektoz × cliente>`. Ambos `font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400`. Posição `absolute left-8 top-8` / `absolute right-8 top-8`.
- **Header tag**: `// <seção>` em `font-mono text-xs uppercase tracking-[0.3em] text-brand-blue` antes do H2.
- **Container interno**: `max-w-6xl` ou `max-w-7xl` com `relative z-10`.
- **Section wrapper**: `relative noise flex ... w-full`. A classe `noise` aplica o overlay SVG sutil (definido em `globals.css`).
- **Cascata de entrada**: header (delay 0s) → conteúdo principal → suporte → hint footer. Total 2–3s.
- **Easing canônico**: `[0.22, 1, 0.36, 1]`. Sem exceção em transições principais.
- **Headlines com blur**: `filter: blur(8–10px) → blur(0px)` no initial. Cria sensação de "foco entrando".
- **Itens de lista**: entram de `x: 30` (slide-in da direita). Headlines entram de `y: 30–50` (slide-up). Diferenciação proposital.
- **Cards principais**: `scale: 0.9–0.96 → 1` no initial — efeito de "popping in".
- **Glow + blur**: sempre como overlay absoluto com `pointer-events-none`.
- **Glass uniforme**: `.glass` em cards normais, `.glass-hero` em destaque. A separação "suporte vs principal" é feita exclusivamente por glass tier, não por cor ou border.
- **1 palavra em `.text-gradient` por título** — a mais densa semanticamente.
- **Numeração**: sempre `font-mono tabular-nums`.

---

## Frame 1 — Cover (capa ambiente)

**Propósito**: pattern interrupt. Tela limpa que cria expectativa antes de qualquer argumento. Fica exposta enquanto pessoas chegam pra reunião.

**Estrutura**:
- Fullscreen flex center
- Topbar absoluta com indicador de status à esquerda (dot pulsante + "aguardando início") e ano à direita
- Logos lado a lado com gap responsivo (`gap-10 md:gap-20`)
- Logo do cliente à esquerda (imagem), Vektoz à direita (texto display, não imagem)
- Divider luminoso vertical entre os dois (h-32 → md:h-40, gradient via white com glow)
- Frase ambiente abaixo (não título): tag "// reunião de apresentação" entre traços decorativos + caret piscando
- Bottom hint absoluto: "→ para iniciar"

**Copy**:
- ZERO títulos, ZERO bullets, ZERO informação
- Única função: contexto ("reunião de apresentação") + instrução ("→ para iniciar")
- **Não escrever**: "Proposta Comercial", entregáveis, "preparado para X", data da reunião. O cover é AMBIENTE, não SLIDE INFORMATIVO.

**Animação**:
- Logo cliente: `delay 0.3s, x:-50 → 0, blur(12px) → 0`, duração 1.2s
- Vektoz: `delay 0.5s, x:+50 → 0, blur(12px) → 0`
- Divider: `delay 0.9s, scaleY 0 → 1`
- Frase ambiente: `delay 1.4s, y:24 → 0`
- Bottom hint: `delay 2.2s, opacity 0 → 1`

**Por que funciona**: cliente entra na sala com tela cinematográfica rodando — primeira impressão é "vai ser algo diferente" antes de ouvir qualquer palavra.

---

## Frame 2 — Plano de Ação (agenda)

**Propósito**: chunking + redução de ansiedade. Cliente sabe o que vai acontecer antes de ver qualquer diagnóstico.

**Estrutura**:
- `max-w-6xl`, single column left-aligned
- 5 blocos empilhados:
  1. Label mono (`// plano de ação`)
  2. H1 massivo `clamp(56px, 9.5vw, 148px) leading-[0.92] tracking-[-0.035em]`
  3. Divider horizontal animado (largura 0 → 96px)
  4. Subtítulo display em peso light
  5. Pills row (sequência da agenda como badges horizontais)

**Copy**:
- Título = nome do documento (3–5 palavras + 1 gradient). Não é promessa nem pergunta, é declaração de identidade.
- Pills = sequência lógica: "diagnóstico → soluções → investimento → próximos passos" ou similar. Sem números.
- Sem autoria no rodapé (autoria fica pro slide 12).

**Animação (cascata)**:
- `tag → 0.15s`
- `H1 → 0.35s, blur(10px) → 0, y:50 → 0`
- `divider → 1.0s, width 0 → 96px`
- `subtítulo → 1.15s`
- `pills → 1.4s`

---

## Frame 3 — Diagnóstico

**Propósito**: mirror technique. Mostrar a realidade do cliente cria ressonância antes de qualquer solução.

**Estrutura**:
- `max-w-6xl`, header coluna única (tag + H2 + parágrafo)
- Grid `md:grid-cols-2 gap-4` com 5–7 cards `.glass`
- Footer hint com caret animado

**Copy**:
- Título: 3 palavras com verbo passado (ex: "O que identificamos.", "O que vemos.", "O que pesa hoje.")
- Itens: factuais SEM adjetivos negativos. Cada item é UMA linha de texto. Sem subtítulo, sem explicação.
- Ordem: contexto externo (macro/mercado) → interno (estrutura/operação)
- **Exemplo Rondave**: "Selic 15% encarece capital de giro" → externo. "Equipe enxuta sobrecarregada" → interno. Estrutura `string[]`, não `{title, subtitle}[]`.

**Animação**:
- `header → 0s`
- `cards → 0.45s + i*0.13s, scale 0.96 → 1`
- `footer hint → 1.6s`
- `whileHover y: -4 / 0.25s` com glow gradient blue→violet (blur-md)

**Por que funciona**: cliente reconhece o mundo dele antes de ouvir solução. Cria base emocional pra aceitar diagnóstico.

---

## Frame 4 — Ciclo Vicioso (visualização interativa)

**Propósito**: progressive disclosure + aha moment. Cliente vê conexões se formando e chega sozinho à conclusão "EM LOOP".

**Estrutura**:
- Fullscreen, header absoluto top-20 (entra de cima — único slide assim, `y:-16 → 0`)
- Container `aspect-square` com `width: min(76vh, 920px)` (altura governa, não largura)
- SVG `viewBox 0 0 1000 1000` com circle dashed de fundo + arco animado por reveal
- Coordenadas FIXAS (SIZE 1000, CENTER 500, RADIUS 225, LABEL_OFFSET 58, CARD_W 175)
- HTML overlay para labels em % do container (`left: ${(lx/SIZE)*100}%`)
- 3 orbit lights ao completar (CSS `offset-path: circle(22.5% at 50% 50%)`)
- Center label estático ("CICLO VICIOSO" + nome do cliente)
- Bottom hint dinâmico: "clique ou pressione → para revelar" → "N/9 — continue" → "→ avançar"

**Copy**:
- Título-pergunta-afirmação: "Como esses problemas se conectam." (sem ?)
- Cada nó = fragmento sem ponto final
- 7–9 etapas no ciclo (mínimo 7 pra parecer ciclo, máximo 9 senão lota o círculo)
- Headline questiona, conteúdo responde visualmente
- **Exemplo Rondave**: equipe enxuta → sobrecarga → falta de tempo de prospectar → baixo volume de vendas → faturamento abaixo → margem comprimida → ... → loop de volta. Encadeamento causa-efeito.

**Comportamento**:
- Clique no slide OU seta direita → revelar próximo nó
- Quando completo, clique/seta avança pra próximo slide
- Implementação via `handlerRef` pattern (ver [decisoes.md](decisoes.md))

**Animação**:
- Header `y:-16 → 0`
- Nodes por reveal: `node 0.08s, label 0.15s, scale 0 → 1`
- Arc: CSS transition `stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1)` com `drop-shadow(0 0 10px rgba(91,130,255,0.7))`
- Orbit lights: `cycleOrbit 9s linear infinite` (3 partículas com delays escalonados)

**Tecnicidades críticas**:
- `transformTemplate` no `motion.div` dos labels (Framer Motion sobrescreve `style.transform` — ver [erros-comuns.md](erros-comuns.md))
- `alignX` baseado em `cosA` (>0.25 left, <-0.25 right, else center) para cards crescerem PRA FORA do círculo
- `alignY` baseado em `sinA` (>0.55 top, <-0.55 bottom, else center) — threshold conservador pra não estourar header/footer

---

## Frame 5 — Calculadora (ferramenta interativa)

**Propósito**: specificity + self-generated urgency. Cálculo com dados do próprio cliente é impossível de contestar.

**Opcional**: usar só se faz sentido pra calcular custo oculto na operação do cliente. Se a oferta não tem ângulo de "tempo perdido / custo escondido", pular este frame.

**Estrutura**:
- `max-w-6xl`, header tag + H2
- Grid `lg:grid-cols-5`: col-span-2 sliders, col-span-3 resultado
- Sliders: salário, número de pessoas, minutos/dia (ou variáveis equivalentes)
- Card `.glass-hero` com número grande animado e cards de breakdown
- Slider tech (gradient blue→violet) — ver [design-system.md](design-system.md)

**Copy**:
- Título = pergunta com 6–9 palavras + "de verdade" (cria tensão implícita)
- **Exemplo Rondave**: "Quanto custa o seu tempo de verdade?"
- Nenhum copy de resultado — o cálculo fala
- 2ª pessoa SEMPRE ("o seu tempo", "sua equipe")

**Animação**:
- Slide entra ready-to-use (sem animação de entrada deliberada)
- `AnimatedNumber` conta ao mudar input (Framer `useMotionValue` + `useTransform`)
- Cards com `whileHover y: -4`

**Cuidado de viewport**:
- 1080p é a resolução de referência. Padding `py-10` (não `py-16`).
- Fonte do número grande: `clamp(52px, 8vw, 108px)` (não 140px — não cabe).
- `max-w-6xl` (não 7xl).
- Testar em 1080p com header+footer reservados antes de aprovar.

---

## Frame 6 — Custo de Oportunidade (reframe)

**Propósito**: reframe antes da solução. Eliminar a objeção "minha equipe já trabalha muito" antes de ser verbalizada.

**Estrutura**:
- `max-w-7xl`, grid `lg:grid-cols-5` (esq col-span-2, dir col-span-3)
- Esquerda: tag + H2 + subtítulo + card glass com definição (ex: definição de "eficiência")
- Direita: lista vertical de 4–5 itens (pequenas perdas) + card final `.glass-hero` com 1 palavra ("Vender.", "Crescer.", o destino final)
- 2 glows internos: blue top-right + violet bottom-left (decorativos, blur 40px)

**Copy**:
- Título = negação direta de objeção implícita (ex: "Não é falta de trabalho.")
- Padrão: objeção → reframe → prova → conclusão em 1 palavra
- Subtítulo em card hero = definição literal do conceito-chave (ex: definição de "eficiência")
- Card final: 1 palavra com ponto final, com mais peso visual (`scale: 0.9 → 1` na entrada)

**Animação**:
- `tag → 0s`
- `H2 → 0.2s, blur(8px) → 0`
- `subtítulo → 0.45s`
- `card eficiência → 0.7s`
- `lista → 0.7s + i*0.1s`
- `Vender. → 1.35s, scale 0.9 → 1` (+0.15s extra de pausa após o último item)

---

## Frame 7 — Solution Overview (3 entregáveis)

**Propósito**: alívio estruturado após tensão. Primeiro positivo após 3 slides de problema. A/B/C sinaliza sistema, não serviços avulsos.

**Estrutura**:
- `max-w-7xl`, header text-center
- Grid `md:grid-cols-3 gap-6` com 3 cards `.glass` iguais em tamanho
- Cada card: código A/B/C como marca d'água `opacity-30` + nome curto + 1 frase de benefício
- CTA com seta animada no final ("Como quebramos o ciclo vicioso?")

**Copy**:
- Título: quantidade + adjetivo (3 palavras): "Três frentes claras.", "Três alavancas."
- Cards: máximo 12 palavras, 1 afirmação de RESULTADO (não funcionalidade)
- CTA: deve amarrar com slide anterior. **Erro recorrente**: "Como faremos isso?" (genérico) → trocar por referência direta ao problema do slide 4.
- Cores: A=blue, B=violet, C=copper (essa atribuição vai persistir nos slides 8/9/10)

**Animação**:
- `header → 0s`
- `card A → 0.5s, B → 0.68s, C → 0.86s` (delay = 0.5 + i*0.18)
- `y:50 → 0, blur(10px) → 0`
- `whileHover y: -8 / 0.3s` (mais agressivo que cards normais)
- `CTA → 1.3s` com seta em loop infinito `x:[0, 6, 0] / 1.6s easeInOut`

---

## Frame 8 — Entregável A (processo detalhado)

**Propósito**: redução de incerteza via processo visível. Etapas específicas transformam intangível em tangível.

Tipicamente o entregável "humano" — consultoria, treinamento, mentoria. Aplicação: o que tem natureza de processo, não de produto.

**Estrutura**:
- `max-w-7xl`, grid `lg:grid-cols-5` (esq col-span-2, dir col-span-3)
- Esquerda: tag + H2 + objetivo em card `.glass-hero`
- Direita: lista numerada (`<ol>`) com 5–7 etapas, cada uma um card `.glass` pequeno
- Header tem badge "X encontros" com dot pulsante (`animate-ping`)

**Copy**:
- Badge quantifica compromisso ANTES de descrever conteúdo (ex: "6 encontros", "12 sessões")
- Steps: substantivos + objeto direto, sem verbos de processo (não "Vamos analisar X" — "Análise de X")
- Item final pode ter etiqueta extra `→ resultado` visível só em md+

**Animação**:
- `tag → 0s`
- `H2 → 0.2s, blur(8px) → 0`
- `badge → 0.45s`
- `steps → 0.55 + i*0.09 (gap 90ms)`
- `x: 30 → 0` (entra da direita)
- `whileHover x: 4 / 0.2s`

---

## Frame 9 — Entregável B (mockup com dados reais)

**Propósito**: show don't tell. Cliente vê exemplo CONCRETO da saída do entregável.

Tipicamente o entregável "automação" — agente, sistema, tool. Aplicação: o que tem output visualizável (e-mail, dashboard, relatório).

**Estrutura**:
- `max-w-7xl`, flex column
- 4 seções verticais:
  1. Header (tag + H2 + p)
  2. Flow horizontal de 4–5 etapas (ícones + textos curtos + conectores)
  3. Grid `md:grid-cols-3` com 3 mockups (variando intensidade: bom / médio / ruim)
  4. Nota humanizadora destacada em copper

**Copy**:
- Mockups com **dados reais e plausíveis do ICP do cliente do cliente**. Especificidade cria verossimilhança.
- **Exemplo Rondave**: Vale S.A. (Carajás), Eletrobras Furnas (Itutinga), Pref. de Maceió. ICP confirmado pelo briefing = mineração / energia / setor público.
- 3 níveis de classificação (ex: ideal/conferir/descartar) mostram nuance — sistema sabe o que é bom, médio e ruim.
- Nota cobre "checagem humana" ou equivalente — quebra objeção "IA vai errar"

**Animação**:
- `flow items → 0.6s + i*0.12s, scale 0.8 → 1`
- `conectores → scaleX:0 → 1` (conectam APÓS os ícones)
- `cards mockup → 1.4s + i*0.15s`
- `nota humanizadora → 1.9s`

---

## Frame 10 — Entregável C (artefato como prova)

**Propósito**: artefato como prova. Cliente vê exemplo REAL do output, não precisa imaginar.

Tipicamente o entregável "conteúdo" ou "comunicação" — post, e-mail, página. Aplicação: o que produz peça acabada.

**Estrutura**:
- `max-w-7xl`, grid `lg:grid-cols-12 → xl:7/5`
- Esquerda (col-span-6): header + flow de etapas + lista de features + objetivo
- Direita (col-span-6): mockup do artefato em `.glass-hero` com background customizado (ex: bg LinkedIn `#1B1F2E`)
- Mockup com dados realistas (engagement plausível, copy real)

**Copy**:
- P na descrição nomeia o ICP explícito do cliente do cliente: "decisores de mineradoras, energia e setor público"
- Mockup = copy REAL produzida (ex: post LinkedIn no formato validado)
- Engagement plausível (não zerado, não inflado): 187 reações, 43 comentários, 12 reposts são realistas. 5000 reações vira ridículo, 12 reações vira fraco.

**Animação**:
- `features → 0.75 + i*0.1s, x:-20 → 0` (únicas a entrar da esquerda)
- `mockup → 0.7s, y:40 → 0, scale 0.97 → 1` (entrada com peso especial — card único)

---

## Frame 11 — Investimento (precificação com revelação progressiva)

**Propósito**: anchoring + inoculation. Ver partes individuais faz o total parecer inevitável; payback oculto inocula objeção antes de ser verbalizada.

**Estrutura**:
- `max-w-6xl`, flex column
- Header tag + H2 (1 palavra)
- Grid `md:grid-cols-3` com 3 cards de preço (1 por entregável). Cards: só categoria + valor, sem headline.
- Card total `.glass-hero` com soma
- Card payback (revelado por click/seta) — height 0 → "auto", barra de progresso animada

**Copy**:
- Título = 1 palavra com ponto final ("Investimento.")
- **NÃO usar**: "O que custa destravar.", "Valor do projeto.", framings negativos. Em slide de número, headline é a CATEGORIA, não poesia.
- Cards entregável: nome + valor. Sem subtítulo. Cor herdada do Solution Overview (A=blue, B=violet, C=copper).
- Payback copy padrão: "A partir do segundo contrato fechado pelo agente, tudo é lucro." (12 palavras destroem objeção).
- Pagamento único à vista (manutenção é extra opcional, não complica o slide).

**Comportamento**:
- Slide entra com preços + total visíveis
- Click ou seta direita → revela payback
- Implementação via `handlerRef` igual ao Frame 4

**Animação**:
- `cards A/B/C → 0.4s/0.55s/0.7s, blur(8px) → 0`
- `total → 0.95s, scale 0.96 → 1`
- `payback (on-demand) → height 0 → "auto"`
- `progress bar → +0.5s after payback, 0% → COVERAGE_PCT` (em mint)

**Por que funciona**: anchoring (preços individuais antes do total) + inoculation (payback aparece DEPOIS, com pausa de absorção do total).

---

## Frame 12 — Próximos Passos (CTA + identidade)

**Propósito**: momentum + friction removal. 3 steps triviais mapeiam o "sim" em ações concretas. CTA com nome do cliente põe ele como co-construtor.

**Estrutura**:
- `max-w-6xl`, text-center
- Header tag + H2 grande
- Grid `md:grid-cols-3` com 3 cards de timeline + setas conectoras absolutas entre eles
- CTA grande abaixo (display, com nome do cliente)
- Footer com identidade real dos sócios/decisores: nome, cargo, email, telefone. Divider vertical entre eles.

**Copy**:
- Título: 5 palavras orientadas ao tempo (ex: "O que vem a seguir.")
- Steps: RESULTADO da etapa, não processo (ex: "Contrato assinado", não "Assinar contrato")
- **Sem datas nos passos** — evita compromisso antes do contrato
- CTA: pergunta com nome do cliente + "juntos?" (ex: "Vamos construir o futuro da [Cliente] juntos?")
- Footer: identidade real, sem pitch
- Sócios com **cores diferentes** diferenciando cargos (ex: CMO `text-brand-blueSoft`, CEO `text-brand-violetSoft`)

**Animação**:
- `cards → 0.45 + i*0.18s, y:40 → 0, blur(8px) → 0`
- `setas conectoras → após cards`
- `CTA → 1.2s, blur(10px) → 0`
- `footer → 1.5s, y:20 → 0` (entra por último — é suporte, não destaque)

---

## Resumo dos padrões transversais (cheat sheet)

**Layout (12/12)**:
- Topbar mono em todos os slides
- `max-w-6xl` ou `max-w-7xl` em todos
- Glow radial decorativo em 8/12 cards hero

**Tipografia (12/12)**:
- Label mono `// seção` com tracking-[0.3em]
- 1 palavra/frase em `.text-gradient` por título
- Numeração tabular-nums

**Copy (10/12)**:
- Título de 3–5 palavras com ponto final (sem ?, exceto Calculator)
- Estrutura "declaração / suporte / detalhe"
- Mockups com dados REAIS do ICP do cliente

**Animação (12/12)**:
- Easing `[0.22, 1, 0.36, 1]` dominante
- Blur de entrada em 9/12 H2s
- Stagger calibrado por quantidade (mais itens → step menor)
- Total 2–3s por slide

**Glass (11/12)**:
- Cover é a única exceção (sem card)
- Card mais importante = `.glass-hero`, demais = `.glass`
- Separação por glass tier, nunca por cor de fundo
