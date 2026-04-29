# Decisões — Defaults e Convenções Globais

Decisões tomadas uma vez e que viram default para todas as próximas propostas. Cada decisão tem o **que ficou**, o **que foi descartado**, e o **porquê** — pra permitir reabrir caso o contexto mude radicalmente.

## Stack e infraestrutura

### Next.js 16.2 + Turbopack
- **Decidido**: manter Next.js 16.2 com Turbopack
- **Descartado**: downgrade para 15.1.6
- **Por quê**: a versão 16 já estava no repo de referência. Atualização é o caminho certo, não regressão.

### React 19 + Framer Motion 11
- **Decidido**: React 19.0.0 + Framer Motion 11.15.0
- **Descartado**: React 18, GSAP, react-spring
- **Por quê**: Framer Motion 11 funciona com React 19 sem patches. As animações de variantes (`AnimatePresence`, `motion.div`) e a API `transformTemplate` (crítica pro Ciclo Vicioso) são nativas dessa combinação.

### TypeScript + Tailwind 3.4
- **Decidido**: TS 5.7.3, Tailwind 3.4.17, PostCSS 8.5
- **Descartado**: Tailwind 4 (instabilidade no momento da decisão), styled-components, CSS modules
- **Por quê**: Tailwind 3 + plugin nenhum é suficiente. Tokens via `theme.extend` no config dão tudo que o sistema precisa.

### `suppressHydrationWarning` no `<body>`
- **Decidido**: manter
- **Descartado**: remover, achando que era bug do app
- **Por quê**: extensões de browser (DivX/CRX-style) injetam atributos `bis_skin_checked` e `bis_register` antes do React hidratar. Hydration warning não-fatal com `bis_*` é SEMPRE extensão. Suprimir é o uso pretendido da prop.

## Hospedagem e deploy

### Vercel
- **Decidido**: Vercel
- **Descartado**: Netlify, GitHub Pages, Cloudflare Pages
- **Por quê**: Vercel é da própria Next.js — deploy zero-config. Free tier generoso. Redeploy mantém URL.

### Repo na raiz, não subdiretório
- **Decidido**: cada proposta fica em seu próprio repo (ou um repo único com todas, configuração a confirmar com Eduardo no momento)
- **Descartado**: monorepo com subdiretórios
- **Por quê**: simplifica configuração Vercel — sem precisar configurar root directory.

### URL pública sem proteção (default)
- **Decidido**: deploy aberto por padrão; ativar Deployment Protection só se Eduardo pedir
- **Descartado**: senha desde o primeiro deploy
- **Por quê**: link compartilhável fácil. Pode ativar proteção depois se for envio pré-reunião sensível.

### Identidade git via `-c` flag
- **Decidido**: `git -c user.name="Eduardo Salles" -c user.email="eduardo@vektoz.com.br" commit ...`
- **Descartado**: `git config --global user.email`
- **Por quê**: regra do CLAUDE.md proíbe alterar config global. `git -c key=value <command>` é o atalho seguro para commits de sessão sem persistir state.

### Backup offline: `npm start` no laptop
- **Decidido**: `npm run build && npm start` localmente como plan B
- **Descartado**: export estático com `output: 'export'`
- **Por quê**: laptop já tem Node. `npm start` é mais simples e mantém Next/Image otimizado. Export estático tinha problemas com assets dependendo de fetch no primeiro load.

### Não migrar para Google Slides nem PDF
- **Decidido**: apresentação web é a fonte canônica. Pra apresentar, abrir browser. Pra enviar, link Vercel.
- **Descartado**: Google Slides, PDF de alta resolução
- **Por quê**: Slides perde glassmorphism, animações, interatividade, motion paths e SVG dinâmico. PDF perde animações e interatividade — é snapshot estático.

## Identidade visual

### Identidade customizada por cliente, não Vektoz puro
- **Decidido**: paleta e detalhes adaptados ao cliente da proposta
- **Descartado**: aplicar identidade Vektoz da `context/brand.md` rigidamente
- **Por quê**: é uma proposta PRA o cliente, não um material institucional Vektoz. A estrutura (glassmorphism, sistema de tokens, easing, cascata) fica; cores e logos adaptam.

### Glassmorphism profundo, não superficial
- **Decidido**: 5-layer shadow + `backdrop-blur 32–40px` + pseudo-border gradient + radius 24/28px
- **Descartado**: efeito sutil com border + blur leve
- **Por quê**: identidade de tecnologia/IA da Vektoz pede peso visual. Sistema `.glass` e `.glass-hero` em [design-system.md](design-system.md).

### 3 cores de accent semanticamente distintas
- **Decidido**: blue (primário), violet (sofisticado), copper (warm/humano), mint (sucesso)
- **Descartado**: monocromático azul
- **Por quê**: cada cor carrega carga semântica legível sem explicação. Quando atribuída a um entregável em Solution Overview, persiste em todos os slides daquele entregável.

## Convenções globais (todos os slides)

Aplicar SEM exceção. São o que torna a proposta coerente.

### Easing canônico
- **Valor**: `[0.22, 1, 0.36, 1]` (cubic-bezier)
- **Onde**: TODAS as transições principais com Framer Motion
- **Exceções permitidas**: blobs do MeshBackground (`ease-in-out`), orbit lights (`linear`), arc SVG do Ciclo (mesma cubic-bezier mas via CSS transition, não Framer)

### Topbar absoluta
- **Esquerda**: `▸ slide XX · <nome-em-lowercase>` em mono uppercase tracking-[0.22em] cor `text-ink-400`. Posição `absolute left-8 top-8`.
- **Direita**: `<vektoz × cliente>` mesmo estilo, `absolute right-8 top-8`.
- Cliente nunca perde contexto de onde está e de qual proposta é.

### Header tag
- Antes de cada H2: `// <seção>` em `font-mono text-xs uppercase tracking-[0.3em] text-brand-blue`.
- Cor herda do accent do entregável quando aplicável (slides 8/9/10).

### Container interno
- `max-w-6xl` ou `max-w-7xl` com `relative z-10`
- 100% dos slides têm container — nunca deixar conteúdo solto na section.

### Glass uniforme
- `.glass` em cards normais (`backdrop-blur(32px) saturate(180%)`, radius 24px, multi-shadow blue glow)
- `.glass-hero` em destaques (`backdrop-blur(40px) saturate(200%)`, radius 28px, multi-shadow violet glow)
- Separação "suporte vs principal" feita exclusivamente por glass tier, NUNCA por cor de fundo ou border.

### Cascata de entrada
- Header (delay 0s) → conteúdo principal (0.2–0.7s) → suporte (0.7–1.4s) → hint footer (1.5–2.2s)
- Total por slide: 2–3s. Acima disso vira espera.

### Padrões de animação por elemento
- **Headlines**: `opacity 0 → 1`, `y: 30–50 → 0`, `filter: blur(8–10px) → blur(0px)` ("foco entrando")
- **Itens de lista**: `x: 30 → 0` (slide-in da direita)
- **Cards principais (entregáveis, total, "Vender")**: `scale: 0.9–0.96 → 1` ("popping in")
- **Glow + blur decorativo**: overlay absoluto com `pointer-events-none`

### Stagger calibrado por quantidade
- 3 cards: `delay 0.5 + i*0.18` (lento, dá peso)
- 5 itens: `delay 0.7 + i*0.1`
- 6 itens: `delay 0.45 + i*0.13`
- 7 itens: `delay 0.55 + i*0.09` (rápido, evita arrastar com 7 cards)

## Navegação

### Setas de teclado, não scroll
- **Decidido**: `keydown` listener com ArrowLeft/ArrowRight + nav bar inferior com prev/next/dots
- **Descartado**: scroll vertical com `scroll-snap-type: y mandatory`
- **Por quê**: scroll-snap é incompatível com slides interativos (Ciclo Vicioso, Investimento) que precisam interceptar setas antes da navegação. Apresentação fullscreen com setas é o padrão de pitch deck.

### `AnimatePresence mode="wait"`
- **Decidido**: `mode="wait"` com `key={current}` no `motion.div`
- **Descartado**: `mode="sync"`
- **Por quê**: evita 2 slides simultâneos durante a transição. `wait` espera o exit antes do enter.

### Transição entre slides
- `opacity 0 → 1`
- `x: ±60 → 0` (sentido depende de direction)
- `filter: blur(12px) → blur(0px)`
- Duração: 0.55s
- Easing: `[0.22, 1, 0.36, 1]`

### `handlerRef` pattern para slides interceptarem setas

Slides interativos (Ciclo Vicioso, Investimento) precisam consumir ArrowRight antes do navegador padrão avançar de slide. Padrão:

```tsx
// app/page.tsx
const handlerRef = useRef<SlideHandler>({
  next: () => false,
  prev: () => false,
});

useEffect(() => {
  function onKey(e: KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const consumed = handlerRef.current.next();
      if (!consumed) goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const consumed = handlerRef.current.prev();
      if (!consumed) goPrev();
    }
  }
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [goNext, goPrev]);

// Slide interativo:
export type SlideHandler = {
  next: () => boolean; // retorna true se consumiu
  prev: () => boolean;
};

useEffect(() => {
  if (!handlerRef) return;
  handlerRef.current = {
    next: () => {
      if (revealed < N) {
        setRevealed((r) => r + 1);
        return true; // consumiu
      }
      return false; // deixa avançar slide
    },
    prev: () => {
      if (revealed > 0) {
        setRevealed((r) => r - 1);
        return true;
      }
      return false;
    },
  };
}, [revealed, handlerRef]);
```

- **Descartado**: contexto global, eventos custom
- **Por quê**: simples, type-safe, e só 2 slides precisam (Ciclo Vicioso, Investimento). Quando o slide muda, o handler é resetado pra `() => false` em `goNext`/`goPrev`.

### Indicador no rodapé central
- Posição: `fixed bottom-5` com `pointer-events-auto` interno em pílula `.glass`
- Componentes: prev/next icons + contador "01/12" + dots progressivos (gradient blue→violet no atual, blueSoft no passado, white/20 no futuro)
- **Descartado**: indicador no canto superior
- **Por quê**: cantos superiores já têm topbar (label do slide + marca). Centro inferior é o lugar limpo.

## Cover (decisões específicas)

### Slide ambiente, não informativo
- **Decidido**: só logos (cliente + Vektoz) + frase ambiente "reunião de apresentação" + bottom hint
- **Descartado**: 3 cards de preview de entregáveis, título "Proposta Comercial", footer "preparado para X", data
- **Por quê**: cover fica exposto enquanto pessoas chegam. Slide ambiente vs slide de abertura ativa têm requisitos opostos.

### Vektoz como texto display, não logo image
- **Decidido**: `font-display text-7xl` com ponto azul ("Vektoz.")
- **Descartado**: logo Vektoz como imagem
- **Por quê**: Eduardo não passou logo Vektoz como asset. Texto display é mais cinematográfico que logo no Cover.

### Sem data
- **Decidido**: ano no topbar direito ("2026"), sem data específica
- **Descartado**: data da reunião visível
- **Por quê**: evita "validade" se a proposta for reapresentada em outra reunião.

## Footer (slide 12)

### Sócios com cores diferentes
- **Decidido**: cada sócio com cor distinta (ex: CMO `text-brand-blueSoft`, CEO `text-brand-violetSoft`), divider vertical entre eles
- **Descartado**: ambos na mesma cor, ou só um deles
- **Por quê**: cores diferenciam cargos sem precisar de texto extra. Perguntar sócios no briefing — adicionar segundo só no slide 12 é refazer o layout.

### Sem datas nos próximos passos
- **Decidido**: 3 cards com resultado da etapa, sem prazos
- **Descartado**: "Em 7 dias", "Em 14 dias"
- **Por quê**: evita compromisso antes do contrato. Se cliente perguntar prazo, Eduardo responde na sala.

## Calculadora (decisões específicas)

### Headlines curtas — máximo 6 palavras
- **Decidido**: "Quanto custa o seu tempo de verdade?" (6 palavras)
- **Descartado**: "Quanto o tempo do seu time custa de verdade?" (8 palavras)
- **Por quê**: headline é manchete, não frase explicativa. Cortar 1/3 antes de aprovar.

### Sem card "upside" / ROI projetado
- **Decidido**: 3 cards de breakdown (horas/mês, economia mensal, custo atual/ano)
- **Descartado**: 4º card mostrando ganho potencial em prospecção
- **Por quê**: card extra ocupava 25% da viewport empurrando UI pra baixo. ROI projetado é número sem base — calculadora não tem inputs suficientes pra estimar ganho de vendas. Cada slide tem UMA mensagem.

### Compactação para 1080p
- **Decidido**: `py-10`, fonte resultado `clamp(52px, 8vw, 108px)`, `p-7`, `gap-5`, `max-w-6xl`
- **Descartado**: `py-16`, fonte 140px, `p-10`, `max-w-7xl`
- **Por quê**: presentation slides são restritos por altura, não largura. Sempre testar em 1080p com header+footer reservados.

## Investimento (decisões específicas)

### Pagamento único à vista
- **Decidido**: cards individuais + total + payback
- **Descartado**: setup + mensalidade
- **Por quê**: manutenção é extra opcional. Slide tem que ser claro — preço único.

### 2 estados de revelação (preços+total → click → payback)
- **Decidido**: 2 estados via `revealed` state
- **Descartado**: tudo de uma vez, ou 3+ etapas
- **Por quê**: 2 estados é o mínimo pra criar quebra de objeção. Total absorve, depois payback responde.

### Headline "Investimento."
- **Decidido**: 1 palavra com ponto final
- **Descartado**: "O que custa destravar." (passivo, abstrato), "Valor do projeto."
- **Por quê**: "Destravar" coloca frame em "você está travado". Em slide de número/preço, headline é a categoria, não poesia.

## Mockups (slides 9 e 10)

### Dados reais e plausíveis do ICP do cliente do cliente
- **Decidido**: usar nomes reais de empresas/pessoas do ICP confirmado
- **Descartado**: dados genéricos ("Cliente A", "Empresa X")
- **Por quê**: especificidade cria verossimilhança. O cliente da proposta consegue visualizar a cena. **Exemplo Rondave**: Vale S.A. (Carajás), Eletrobras Furnas (Itutinga), Pref. de Maceió, com hooks de mineradora 4×4, 380km, 14 dias parados.

### Engagement plausível, não inflado
- **Decidido**: mockup LinkedIn com 187 reações, 43 comentários, 12 reposts
- **Descartado**: zerado, ou enormes (5000+)
- **Por quê**: realismo sustenta a credibilidade. Engagement plausível mostra que sabemos como funciona LinkedIn na vida real do ICP.

### Estrutura do post = formato validado
- **Decidido**: usar Formato 2 (Prova+Desejo) da skill `post-linkedin` quando o tema tem dado/número específico
- **Descartado**: Formato 1, ou copy genérico
- **Por quê**: formato escolhido é função do tema. Tema com número (14 dias) → Formato 2.

## Validação técnica

### `transformTemplate` para labels do Ciclo Vicioso
- **Decidido**: usar `transformTemplate={(_, generated) => translate(${xT}, ${yT}) ${generated}}`
- **Descartado**: `style.transform: translate(...)`
- **Por quê**: Framer Motion sobrescreve `style.transform` quando há props animadas envolvendo transform (`scale`, `rotate`, `x`, `y`). Bug silencioso — sem erro, sem warning. Detalhes em [erros-comuns.md](erros-comuns.md).

### Coordenadas FIXAS no SVG, não medidas em runtime
- **Decidido**: `SIZE=1000, CENTER=500, RADIUS=225, LABEL_OFFSET=58, CARD_W=175` constantes; HTML overlay em % das mesmas coordenadas
- **Descartado**: `useEffect + getBoundingClientRect` para medir container
- **Por quê**: race condition entre tamanho default e tamanho real causa cards desalinhados no primeiro render. SVG viewBox + percentages é determinístico.

### `LABEL_OFFSET = 58` (escala "5/10")
- **Decidido**: 58 (meio termo entre 0=encostado e 115=distante)
- **Descartado**: 78 (sobreposição), 110/145 (longe demais)
- **Por quê**: cards com 5 linhas de texto (ex: "Redução da capacidade de investir em pessoas e infraestrutura") têm altura imprevisível. LABEL_OFFSET considera o MAIS ALTO, não a média.

### Orbit lights via CSS `offset-path: circle(% at 50% 50%)`
- **Decidido**: `div` HTML com `offset-path: circle(22.5% at 50% 50%)` + `@keyframes cycleOrbit { offset-distance: 0% → 100% }`
- **Descartado**: SVG `animateMotion`, ou `offset-path` em px
- **Por quê**: % escala junto com container. SVG `animateMotion` não suporta `box-shadow` (necessário pro glow das partículas).

## Identidade git e PowerShell

### `Push-Location` absoluto + `Pop-Location` por escopo
- **Decidido**: paths absolutos via `Push-Location <abs>` + `Pop-Location` no mesmo bloco
- **Descartado**: `Set-Location` com path relativo, ou cd entre tool calls
- **Por quê**: PowerShell tool mantém working directory entre execuções inconsistentemente. Paths relativos acumulam, gerando paths duplicados.

### `GIT_TERMINAL_PROMPT=0` antes de push em background
- **Decidido**: `$env:GIT_TERMINAL_PROMPT = "0"` antes de qualquer `git push` em background, ou rodar síncrono
- **Descartado**: push em background sem essa variável
- **Por quê**: Git Credential Manager no Windows abre dialog GUI no 1º push em repo novo. Em background não-TTY, o dialog não exibe — comando espera indefinidamente sem timeout.

## Decisões de produto / oferta (exemplo Rondave)

Estas são específicas da proposta Rondave e servem como **modelo de raciocínio**, não como template. Em cada nova proposta, redefinir com Eduardo no briefing.

- 3 entregáveis (consultoria, agente de licitação, agente de LinkedIn) — número típico, mas pode ser 2–4
- Preços R$7k / R$10k / R$6k = total R$23k — específico do cliente
- PROJECT_TICKET R$20k = ticket médio de 1 venda da Rondave — específico do cliente, vira COVERAGE_PCT no payback
- ICP do cliente = mineradoras / energia / setor público — vira mockup
- Sócios = Eduardo (CMO) + Lucas Veiga (CEO) — específico do cliente

O que é reutilizável: **a estrutura de raciocínio**, não os números.
