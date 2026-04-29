# BACKUP — Extração Apresentação Rondave

> Documento autocontido pra retomar em nova sessão sem perda de contexto.
> Leia este arquivo + `extracao-chat.md` (mesmo diretório) pra ter o estado completo.

## Missão

Eduardo criou uma apresentação interativa Rondave (proposta comercial Vektoz × Rondave) em outro chat com Claude. Quer documentar TUDO sem perda — paleta, fontes, animações, decisões, erros, abordagens descartadas, preferências — pra virar uma skill reutilizável em `.claude/skills/proposta-comercial-rondave/` e usar como manual pra próximas apresentações semelhantes.

## Estratégia (6 passes)

Não pedir "documente tudo" pro Claude do chat antigo — produz resumo mediano. Em vez disso: 6 prompts estruturados, um por categoria, em sequência.

Para cada passe:
1. Eduardo cola o prompt no chat antigo
2. Recebe o output bruto
3. Cola aqui na sessão atual
4. Eu (Claude) valido contra o repo Next.js (fonte da verdade) e registro em `extracao-chat.md`
5. No fim dos 6 passes, consolidamos em skill estruturada

## Localização dos arquivos

- **Repo clonado:** `projects/propostas/rondave/`
  - Origem: `https://github.com/eduvektoz/Treinamentos.git`
  - Stack: Next.js 16.2 + React 19 + Framer Motion 11 + Tailwind 3
  - Branch: `main`, commit único `a06d0e1` (autor: Eduardo Salles)
  - Vercel = mesmo código do GitHub
- **Arquivo de trabalho:** [projects/propostas/rondave-extracao/extracao-chat.md](extracao-chat.md) — outputs brutos + validação detalhada
- **Skill final (a criar):** `.claude/skills/proposta-comercial-rondave/`
  - `SKILL.md` (instrução acionável)
  - `design-system.md`
  - `padroes-slide.md`
  - `decisoes.md`
  - `erros-comuns.md`
  - `preferencias.md`

## Estado atual dos passes

| Passe | Tema | Status | Qualidade |
|-------|------|--------|-----------|
| 1 | Decisões cronológicas | ENTREGUE | ~70 decisões, alta — 28 afirmações testáveis batem com código, 4 micro-imprecisões |
| 1.5 | Adendo slides 2/3/6/7/8 (literal + animações) | ENTREGUE | 100% match com código |
| 2 | Erros e correções | ENTREGUE | 19 erros + 6 padrões + 1 bug-mor; 1 divergência menor |
| 3 | Sistema visual exato | PENDENTE | — |
| 4 | Padrões de slide | PENDENTE | — |
| 5 | Preferências | PENDENTE | — |
| 6 | Descartado / não-funcionou | PENDENTE | — |

## Ordem recomendada para os próximos passes

1. **Passe 3** (sistema visual) — pesado mas determinístico
2. **Passe 6** (descartado) — complementa o passe 2 (mesmo aprendizado, ângulo diferente)
3. **Passe 4** (padrões de slide) — exige abstração
4. **Passe 5** (preferências) — último, depende dos outros pra ele ter o material todo na cabeça

## Insights principais já capturados

**Bug-mor da apresentação (Erro #6):** Framer Motion sobrescreve `style.transform` quando há props animadas envolvendo transform (scale, rotate, x, y). Solução: usar `transformTemplate={(_, generated) => `translate(${xT}, ${yT}) ${generated}`}`. Custou 3 iterações cegas. O comentário CRITICAL no código ([ViciousCycle.tsx:340-345](../rondave/components/ViciousCycle.tsx#L340-L345)) documenta isso.

**Padrões de erro destilados (passe 2):**
1. "Aumentei valor sem diagnosticar" (3x) — quando ajuste marginal não resolve, há bug binário escondido
2. "Validei no olho em vez de medir" (2x) — alinhamento geométrico = `getBoundingClientRect()`, não thumbnail
3. "Inflei copy sem questionar concisão" (3x) — cortar 30% antes de aprovar
4. "Interpretei pedido genericamente" (3x) — copy/conteúdo segue interpretação literal restritiva
5. Background `git` sem `GIT_TERMINAL_PROMPT=0` (1x grave)
6. PowerShell `Set-Location` mantém state — usar `Push-Location` absoluto

**Design system base (já mapeado):**
- Paleta: ink 1000-100, brand (blue `#2B5FFF`, blueSoft `#5B82FF`, violet `#7C3AED`, violetSoft `#A78BFA`, copper `#E08B63`, mint `#7ED4B8`)
- Bg base `#080C18`, fg `#EDEFF3`
- 3 fontes: Inter (sans), Space Grotesk (display), IBM Plex Mono (mono)
- Easing universal: `cubic-bezier(0.22, 1, 0.36, 1)`
- Glass effect: backdrop-blur 32px, saturate 180%, multi-layered shadows
- Mesh blobs animados (3 keyframes), noise overlay, grid bg

**Convenções globais (todos os 12 slides):**
- Topbar esquerda: `▸ slide XX · <nome>` em mono uppercase
- Topbar direita: `vektoz × rondave`
- Header tag: `// <nome>` em mono uppercase tracking-[0.3em] cor brand-blue
- Container: `max-w-6xl` ou `max-w-7xl`, `relative z-10`
- Section: `relative noise flex h-full min-h-screen w-full`

**Padrões de animação (síntese):**
- Headlines: `y: 30-50` + `blur(8-10px)` no initial
- Listas: `x: 30` no initial (slide-in da direita)
- Cards principais: `scale: 0.9-0.96` no initial (popping in)
- Cascata fórmula varia por slide: `0.45 + i*0.13` (cards), `0.7 + i*0.1` (listas curtas), `0.55 + i*0.09` (listas longas), `0.5 + i*0.18` (cards grandes)
- Hover listas: `x: 4 / 0.2-0.25s`; hover cards normais: `y: -4`; hover cards grandes: `y: -8 / 0.3s`
- Total ~2-3s por slide

## Prompts melhorados (passes 3-6) — pra colar no chat antigo

> Princípios que fazem o output vir bom: estrutura forçada (tabelas/campos fixos), granularidade explícita ("não resuma"), fonte da verdade declarada ("tire do código, não da memória"), seção de síntese no final.

### Passe 3 — Sistema visual

```
Extraia o sistema visual da versão final. NÃO interprete, NÃO resuma.
Valores exatos do código, sempre.

Estruture em 9 seções, todas obrigatórias:

1. PALETA — toda cor nomeada (tailwind config) + toda cor ad-hoc em rgba()
   ou linear-gradient(). Para cada uma: hex/rgba, nome semântico, contextos
   de uso (em quais componentes aparece).

2. TIPOGRAFIA — para cada família: nome, pesos importados, variável CSS.
   Para cada variação usada (clamp, fixed, leading, tracking): valor exato
   + qual elemento usa.

3. ESPAÇAMENTO — gaps, paddings, margins por contexto (cards, headers,
   listas, glass).

4. BORDER-RADIUS — todos os valores e onde aparecem.

5. SOMBRAS — três grupos separados:
   (a) utilitárias do tailwind config
   (b) ad-hoc inline em componentes
   (c) composição do .glass / .glass-hero do globals.css.

6. ANIMAÇÕES — duas listas:
   (a) @keyframes globais (nome + props animadas + duration + iteration)
   (b) Framer Motion inline (sintetize as durações e easings mais usados)

7. BACKGROUNDS ESPECIAIS — noise, grid-bg, mesh blobs. Mecanismo
   completo de cada um (SVG inline, mask, blend-mode).

8. EFEITOS DE PROFUNDIDADE — composição completa de glass, glass-hero,
   float, floatHi (todas as camadas de sombra/borda/blur).

9. BREAKPOINTS — quais foram usados e em que componentes.

Se uma cor ou valor aparece em mais de um lugar, mencione TODOS.
```

### Passe 4 — Padrões de slide

```
Liste os padrões que emergiram. Não me dê "slide 1 = capa, slide 2 = headline".
Quero abstrações reutilizáveis.

7 categorias, todas obrigatórias:

1. ANATOMIA TÍPICA — esqueleto compartilhado por TODOS os slides
   (topbar esquerda, topbar direita, header tag, container, footer hint).
   O que é compartilhado vs único.

2. LAYOUTS — quais layouts repetiram (1-col hero, 2-col split 2/3,
   3-col grid, etc) e em quais slides cada um foi usado e por quê.

3. INTERAÇÃO — quais slides são interativos vs passivos. Para os
   interativos: mecanismo (revealed state, handlerRef), tipo de input,
   feedback visual quando aciona.

4. CASCATA — fórmulas de delay (ex: "0.45 + i*0.13") por tipo de slide.
   Quando usar gap maior (cards principais) vs menor (listas longas).

5. COR ACCENT — quando usar azul, violeta, cobre, mint. Quando combinar
   (gradient blue→violet, etc). Quando o accent serve pra "linkar" slides
   (cores dos entregáveis A/B/C consistentes em S07/S08/S09/S10).

6. COPY — headline + gradient na palavra-chave + subtítulo. Footer hint
   com caret piscando. Tag superior `// nome`. Quais slides usam cada
   padrão de copy.

7. REGRAS DE OURO — princípios que viraram lei durante a conversa.
   Ex: "lista usa x:30, headline usa y:30+blur", "glass sempre 1px border
   gradient", "card destacado sempre scale: 0.9-0.96 inicial".

Pra cada padrão, indique slides onde foi aplicado e a justificativa.
```

### Passe 5 — Preferências

```
Liste minhas preferências que você identificou. Estrutura por preferência:

- Categoria: [estética / copy / técnica / processo / vetos]
- Preferência exata
- Frequência: quantas vezes apareceu (1x = casual, 3x+ = padrão consistente)
- Citação minha (frase EXATA que eu disse, quando possível)
- Contexto onde se aplica (só apresentações? só propostas comerciais? geral?)
- Generalização (vale pra outros tipos de trabalho?)

Inclua preferências sutis:
- Palavras que evitei (ex: corrigi "como seu sócio" pra remover)
- Formatações que pedi mais de uma vez
- Decisões que tomei sem justificar (sinal forte de preferência interna)
- Padrão de feedback ("mais limpo", "mais agressivo", "mais sutil")

Inclua preferências por NEGAÇÃO: o que rejeitei. Se rejeitei algo 3x+,
é uma regra forte — destaque essas separadamente como "Vetos firmes".

No final, faça uma seção "Sinais de preferência ainda não confirmados" —
coisas que parecem ser preferência mas só apareceram 1x. Útil pra eu
validar/refutar nas próximas conversas.
```

### Passe 6 — Descartado

```
Liste tudo que foi tentado e descartado. Estrutura por item:

- O que foi tentado (descrição técnica suficiente pra eu não tentar de novo)
- Estágio do projeto (início / meio / fim)
- Por que foi tentado (qual problema queria resolver)
- Sintoma específico que fez descartar (NÃO "não ficou bom" —
  quero "cards desalinhavam no primeiro render por race condition" ou
  "foreignObject quebrava backdrop-blur no Firefox")
- O que substituiu
- Custo (quanto tempo / quantas iterações antes de descartar)

Categorias a incluir (todas):
- Layouts visuais testados e revertidos
- Approaches técnicos que falharam (foreignObject, useEffect com size,
  animateMotion, style.transform direto, etc)
- Copys descartados (com o texto literal das versões rejeitadas)
- Animações simplificadas
- Componentes criados e depois removidos
- Bibliotecas/ferramentas consideradas e não usadas

Inclua tanto os "quase certos" quanto os "claramente errados desde o início" —
ambos ensinam. Os primeiros mostram onde quase fui mas o trade-off venceu;
os segundos mostram heurísticas pra cortar caminhos errados cedo.

No final: "Top 5 lições do descartado" — as decisões cuja reversão custou
mais e cujo aprendizado é mais reutilizável.
```

## Como retomar em nova sessão

Cole isso (ou abra esses arquivos) na nova sessão pra dar contexto:

1. Ler `BACKUP-sessao.md` (este arquivo) — visão geral
2. Ler `extracao-chat.md` (mesmo diretório) — outputs brutos + validações dos passes 1, 1.5 e 2
3. Verificar que o repo está em `projects/propostas/rondave/` (já clonado, não precisa clonar de novo)
4. Próxima ação: Eduardo cola o output do **passe 3** (sistema visual) → Claude valida contra o código → registra no `extracao-chat.md`
5. Depois passes 6, 4, 5 nessa ordem
6. No fim, consolidar em `.claude/skills/proposta-comercial-rondave/`

## Lacunas conhecidas (resgatáveis via repo, não precisam de adendo)

- Slides 4 / 9 / 10 / 11 / 12: copy literal não foi totalmente capturado nos passes 1+1.5 (adendo cobriu só 2/3/6/7/8). Resgatamos lendo direto dos componentes.
- Threshold `cosA = 0.25` no ViciousCycle ([linha 85-86](../rondave/components/ViciousCycle.tsx#L85-L86)) — único ajuste fine-tuning não documentado em nenhum erro do passe 2.
- Valores individuais R$7k/R$10k/R$6k do Investimento, frase "A partir do segundo contrato fechado, tudo é lucro" — estão no código.

## Regras gerais aplicadas durante este trabalho

- Brutal honesty, sem agradar
- Bullet points, direto, 80/20
- Sem emojis
- Pesquisar antes de perguntar (validar contra repo é o default)
- Nunca deletar — mover pra `archives/`
- Validar sempre contra fonte da verdade (repo), não confiar em memória do Claude antigo
- Cada output é validado linha por linha contra os componentes em `projects/propostas/rondave/`
