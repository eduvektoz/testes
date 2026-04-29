# Erros Comuns

Erros que apareceram no projeto de referência, agrupados por categoria. Cada item: **sintoma** → **causa raiz** → **correção** → **regra prática**. Ler antes de mexer em qualquer área correspondente.

## Bugs técnicos críticos

### 1. Framer Motion sobrescreve `style.transform` (BUG-MOR)

- **Sintoma**: card posicionado em coordenada errada, mesmo com `style={{ transform: 'translate(-50%, -50%)' }}`. Sem erro, sem warning. Cards renderizam no canto top-left em vez do centro.
- **Causa raiz**: `motion.div` com qualquer prop animada de transform (`animate={{ scale }}`, `x`, `y`, `rotate`) gera seu próprio `transform`, que sobrescreve integralmente o `style.transform` inline.
- **Correção**: usar `transformTemplate` para mesclar:
  ```tsx
  <motion.div
    transformTemplate={(_, generated) =>
      `translate(${xT}, ${yT}) ${generated}`
    }
  />
  ```
- **Regra**: bibliotecas que gerenciam transform (Framer Motion, GSAP, react-spring) assumem controle exclusivo quando há props animadas envolvendo transform. SEMPRE pesquisar a API de "transform composition" da biblioteca antes de usar `style.transform` inline. Em Framer Motion, é `transformTemplate`.

### 2. `useEffect + getBoundingClientRect` para coordenadas críticas

- **Sintoma**: nodes/labels desalinhados em relação à curva no primeiro render. Corrige só após segundo render ou resize. Inconsistência depende de hardware.
- **Causa raiz**: `useEffect` dispara antes do browser finalizar layout. State inicial (ex: 640) diverge do tamanho real (ex: 760+). Em `AnimatePresence`, race condition gera flicker.
- **Correção**: coordenadas FIXAS em viewBox SVG; HTML overlay em % das mesmas coordenadas:
  ```tsx
  const SIZE = 1000;
  // posição do label em px na coord SVG:
  const lx = CENTER + (RADIUS + LABEL_OFFSET) * Math.cos(angleRad);
  // posição do label em CSS:
  style={{ left: `${(lx / SIZE) * 100}%` }}
  ```
- **Regra**: nunca depender de `useEffect + setState` para coordenadas críticas. SVG `viewBox` + percentages é determinístico.

### 3. `<foreignObject>` quebra glassmorphism

- **Sintoma**: backdrop-filter renderiza como cinza sólido ou não aplica em Chrome/Safari quando SVG está em `motion.div` com transformações.
- **Causa raiz**: `<foreignObject>` dentro de SVG quebra `backdrop-filter` em vários browsers. Framer Motion não suporta `motion.div` dentro de `foreignObject` confiavelmente.
- **Correção**: HTML overlay absoluto em % SOBRE o SVG (dois sistemas sincronizados via `(lx/SIZE)*100%`).
- **Regra**: nunca misturar HTML interativo com glassmorphism dentro de `<foreignObject>`. Manter SVG e HTML em layers separadas, sincronizadas por percentages.

### 4. `<animateMotion>` SVG não suporta `box-shadow`

- **Sintoma**: partículas de órbita sem glow ao usar `<animateMotion>` + `<mpath>`.
- **Causa raiz**: `box-shadow` é propriedade CSS — não existe em SVG. `drop-shadow()` filter é muito mais limitado. `animateMotion` só funciona em elementos SVG.
- **Correção**: `div` HTML com `offset-path: circle(% at 50% 50%)` + `@keyframes cycleOrbit { offset-distance: 0% → 100% }`. `box-shadow` funciona normal em HTML.
- **Regra**: efeitos atmosféricos (glow, neon, blur) precisam de HTML+CSS, não SVG.

### 5. Hydration mismatch falsamente diagnosticado como interno do Next

- **Sintoma**: console "Hydration failed: server rendered HTML didn't match client"; tela não renderiza.
- **Causa raiz**: extensões do browser injetam `bis_skin_checked` ou `bis_register` no DOM antes do React hidratar. Não é bug do app.
- **Correção**: `<body suppressHydrationWarning>`.
- **Regra**: hydration warning não-fatal com `bis_*` é SEMPRE extensão do browser. Antes de mexer em SSR/SSG, ler o diff específico do warning.

## Process / validação

### 6. Validar geometria "no olho" via screenshot

- **Sintoma**: declarei "alinhamento OK"; cliente: "ainda está desalinhado, valide com seus próprios olhos". Sobreposição de 5–10px invisível em thumbnail.
- **Causa raiz**: glass effect borra a borda do card e curva — eles se confundem em escala pequena.
- **Correção**: script Puppeteer + `page.evaluate()` extraindo `getBoundingClientRect()` de cada label, calculando distância do canto até centro. Critério de aceite: folga ≥ 20px em todos os labels.
- **Regra**: alinhamento geométrico = medição. Sempre escrever debug script com `getBoundingClientRect()` quando tolerância visual for < 50px. Screenshot é evidência insuficiente.

### 7. Tunar parâmetros sem diagnosticar bug binário

- **Sintoma**: `LABEL_OFFSET = 78 → 110 → 145`, e o problema continua. Eduardo: "we're losing time on the same problem, fix it definitively".
- **Causa raiz**: o problema não era de calibração (quantitativo), era binário (transformTemplate ignorado). Aumentar offset move origem, mas sem âncora não adianta.
- **Correção**: parar de tunar, escrever debug script, identificar o bug binário (Erro #1), aplicar correção arquitetural.
- **Regra**: se aumento marginal de parâmetro DEVERIA resolver e NÃO resolve, pare. Há algo binário (aplicado/não-aplicado) escondido. Diagnose antes de continuar tunando.

### 8. Cards com texto variável e altura imprevisível

- **Sintoma**: card 09 do Ciclo Vicioso (5 linhas) sobreposto à curva mesmo com offset razoável.
- **Causa raiz**: `LABEL_OFFSET` foi calibrado pra altura média; o card maior tem ~99px de altura.
- **Correção**: calibrar `LABEL_OFFSET` considerando o card MAIS ALTO, não a média. Adicionar `alignY` baseado em `sin(angle)` com threshold conservador (0.55) para cards crescerem PRA FORA quando próximos do topo/fundo.
- **Regra**: parâmetros de layout devem ser dimensionados pelo extremo, não pela média. Se 1 item tem altura excepcional, o offset acomoda esse item.

### 9. Resíduos de debug viram dívida visual

- **Sintoma**: depois de corrigir bug subjacente, `LABEL_OFFSET` ficou em 145 (valor inflado durante tentativas). Cards muito longe da curva — folga 82–104px.
- **Correção**: revisar parâmetros depois do fix real e voltar a valores razoáveis (LABEL_OFFSET 145 → 115 → 58 = "5/10").
- **Regra**: depois de corrigir bug binário, sempre revisar parâmetros inflados durante tentativas-cegas. Resíduos de debug viram dívida visual.

### 10. Decidir scroll vs `AnimatePresence` DEPOIS de criar componentes

- **Sintoma**: arquitetura inicial em scroll-snap, slides interativos quebrando quando a navegação muda pra setas.
- **Causa raiz**: scroll-snap é incompatível com slides interativos que precisam interceptar setas.
- **Correção**: decidir arquitetura ANTES de criar qualquer componente. `AnimatePresence mode="wait"` + `handlerRef` pattern é a escolha pra propostas comerciais (ver [decisoes.md](decisoes.md)).
- **Regra**: arquitetura de animação é decisão de fundação, não de detalhe. Decidir depois = reescrever tudo.

### 11. `whileInView` é irrelevante com `AnimatePresence`

- **Sintoma**: animações `whileInView` de cards re-disparam em transições, criando timing irregular.
- **Causa raiz**: com `AnimatePresence mode="wait"`, cada slide ocupa 100vh — está sempre em view. `whileInView` não faz sentido nesse contexto.
- **Correção**: remover `whileInView` em componentes de slide. Usar `initial`/`animate` direto, com delays no `transition`.
- **Regra**: `whileInView` é pra páginas com scroll. `AnimatePresence` é pra deck. Não misturar.

## Copy / conteúdo

### 12. Headline longa demais

- **Sintoma**: "Quanto o tempo do seu time custa de verdade?" (8 palavras, 3 linhas)
- **Correção**: "Quanto custa o seu tempo de verdade?" (6 palavras, 2 linhas)
- **Regra**: headlines de slide são manchete, não frase explicativa. Cortar pelo menos 30% antes de aprovar. Slide ≠ documento.

### 13. Card extra "ressoa com slide N+1" = ruído

- **Sintoma**: card "upside" no Calculator duplicava mensagem do slide 6 (Custo de Oportunidade); ocupava 25% da viewport e empurrava UI.
- **Correção**: remover card; manter Calculator com 1 mensagem.
- **Regra**: cada slide tem UMA mensagem. Se o conteúdo extra "ressoa com slide N+1", já é ruído. Remover.

### 14. Headline com frame negativo em slide de número

- **Sintoma**: "O que custa destravar." no slide de Investimento. "Destravar" coloca frame em "você está travado".
- **Correção**: "Investimento." — uma palavra, sem frame negativo.
- **Regra**: em slide de número/preço, headline é a CATEGORIA, não poesia. Compradores não querem sentir que estão comprando solução pra problema vergonhoso.

### 15. Interpretar "tópico solto" como permissivo

- **Sintoma**: 1ª versão do Diagnóstico com `{title, subtitle}` (ex: "Cenário Econômico Brasileiro Difícil" + "Selic em 15% encarece capital de giro").
- **Causa raiz**: interpretei "tópico solto" como tendo subtítulo permitido.
- **Correção**: refatorar `ITEMS` para `string[]`. Uma linha, ponto.
- **Regra**: pedidos de copy/conteúdo seguem interpretação literal restritiva. Em ambiguidade entre minimalista e expandida, escolher minimalista por default e perguntar.

### 16. CTA genérico entre slides

- **Sintoma**: "Como faremos isso?" (genérico) no Solution Overview, sem amarrar com slide 4 (Ciclo Vicioso).
- **Correção**: "Como quebramos o ciclo vicioso?" — referência direta + verbo de ação.
- **Regra**: CTAs entre slides funcionam como ponte. Nomear explicitamente o problema do slide anterior é mais forte que pergunta genérica.

### 17. Cover virou slide informativo

- **Sintoma**: 1ª versão do Cover tinha 3 cards de entregáveis, título "Vektoz × Rondave — Proposta Comercial", footer "preparado para Rondave".
- **Causa raiz**: assumi briefing comum sem perguntar contexto de USO. Cover ficaria exposto enquanto pessoas chegam — slide ambiente.
- **Correção**: removi entregáveis, removi "proposta comercial", só logos + frase "reunião de apresentação".
- **Regra**: perguntar uso do slide, não só conteúdo. Slide ambiente vs slide de abertura ativa têm requisitos opostos.

### 18. Footer com sócios incompleto

- **Sintoma**: 1ª versão do slide 12 só com Eduardo Salles. Lucas Veiga (CEO) faltando.
- **Causa raiz**: usuário não havia informado existência do Lucas no briefing inicial.
- **Correção**: adicionar Lucas (CEO, email, telefone) com divider vertical; cores diferenciando cargos (`text-brand-blueSoft`, `text-brand-violetSoft`).
- **Regra**: rodapé de proposta com sócios deve ter espaço pra ambos desde o início se a empresa tem fundadores múltiplos. Perguntar ANTES no briefing — não esperar aparecer no slide 12.

## Layout / viewport

### 19. Calculator cortado verticalmente em 1080p

- **Sintoma**: footer cortado abaixo da viewport com `py-16`, fonte resultado 140px clamp, padding `p-10`.
- **Correção**: `py-16 → py-10`, fonte `140px → 108px`, `p-10 → p-7`, `gap-6 → gap-5`, `max-w-7xl → max-w-6xl`.
- **Regra**: presentation slides são restritos por ALTURA, não largura. Sempre testar em 1080p com header (topbar 60px) + footer (nav 50px) reservados — sobra ~970px úteis.

### 20. Componente wrapper genérico que não acomoda layouts diversos

- **Sintoma**: `Slide.tsx` com `whileInView` + `max-w-6xl` fixo não cabia ViciousCycle (aspect-square) nem SolutionOverview (max-w-7xl).
- **Correção**: cada slide monta seu próprio `<section>` — repetição deliberada > abstração apertada.
- **Regra**: 12 slides com layouts variados não compartilham wrapper. Top-level structure (topbar, header tag, container) é repetida em cada componente.

## Shell / git Windows

### 21. `git push` em background sem `GIT_TERMINAL_PROMPT=0`

- **Sintoma**: push em background sem output por minutos. `ls-remote` confirma remoto vazio. Processo travado.
- **Causa raiz**: Git Credential Manager (Windows) abre dialog GUI no 1º push em repo novo. Em background não-TTY, dialog não exibe — comando espera indefinidamente.
- **Correção**: `$env:GIT_TERMINAL_PROMPT = "0"` antes do push (força falha rápida) OU rodar síncrono no terminal interativo.
- **Regra**: nenhum `git push` em background no Windows sem `GIT_TERMINAL_PROMPT=0`, ou sem credentials cached confirmadas. Se task ficar 30s sem output, presumir auth pendente.

### 22. `git commit` falha por falta de identidade

- **Sintoma**: `fatal: unable to auto-detect email address (got 'eduar@Edu.(none)')`.
- **Causa raiz**: novo repo não herdou `user.email`. CLAUDE.md proíbe `git config --global`.
- **Correção**: `git -c user.name="Eduardo Salles" -c user.email="eduardo@vektoz.com.br" commit -m "..."`
- **Regra**: `git -c key=value <command>` é o atalho seguro pra commits de sessão sem persistir state.

### 23. PowerShell `Set-Location` acumulando paths relativos

- **Sintoma**: `Set-Location "projects/propostas/rondave"` falha — path duplicado entre execuções.
- **Causa raiz**: PowerShell tool mantém working directory entre execuções inconsistentemente.
- **Correção**: `Push-Location <abs path>` + `Pop-Location` em par dentro do mesmo bloco; ou variáveis com caminho absoluto.
- **Regra**: nunca paths relativos em `Set-Location` no Windows. Sempre `Push-Location <absolute>` + `Pop-Location` por escopo.

### 24. Puppeteer scripts navegando pelo slide errado

- **Sintoma**: script enviou 12 ArrowRight pra capturar slide 4; capturou slide 12 (no slide 4 com revealed completo, seta avança pro próximo, e setas escapam).
- **Correção**: navegar via `page.click('button[aria-label="Ir para slide 4"]')` (dot do indicator) + cliques no centro pra revelar.
- **Regra**: scripts Puppeteer pra slides com handlers de teclado precisam de "rotas seguras" (clique direto no dot da nav bar), não sequência de setas.

## Pattern dos erros (meta-padrões)

Lições que sobrevivem a este projeto:

### Padrão 1 — "Aumentei valor sem diagnosticar"
Erros #7, #8, #9. Frente a sintoma persistente, aumentei parâmetros. Funcionou parcialmente quando era calibração; falhou quando era bug binário.
> **Regra prática**: ajuste incremental que não resolve = bug binário escondido. Pare. Diagnose.

### Padrão 2 — "Validei no olho em vez de medir"
Erros #6, #7. Screenshot, thumbnail, declarei OK. `getBoundingClientRect()` revelou problema instantaneamente.
> **Regra prática**: alinhamento geométrico = medição. Tolerância visual < 50px → debug script obrigatório.

### Padrão 3 — "Inflei copy sem questionar concisão"
Erros #12, #13, #14. Headlines longas, cards extras, palavras desnecessárias.
> **Regra prática**: cortar pelo menos 30% de qualquer copy de slide antes de mostrar. Slide ≠ documento.

### Padrão 4 — "Interpretei pedido genericamente em vez de literalmente"
Erros #15, #16, #17. "Cover de proposta" virou Cover informativo. "Tópico solto" virou tópico+subtítulo.
> **Regra prática**: pedidos de copy/conteúdo são literais e restritivos. Em ambiguidade, escolher minimalista e perguntar.

### Padrão 5 — "Background task git/auth sem precaução"
Erro #21.
> **Regra prática**: `git` em background no Windows sempre com `GIT_TERMINAL_PROMPT=0` ou credentials cached confirmadas.

### Padrão 6 — "Assumi shell stateless quando era stateful"
Erro #23.
> **Regra prática**: nunca confiar em working directory persistido. `Push-Location <absolute>` + `Pop-Location` por escopo.

## Checklist antes de apresentar

Rodar este antes de chamar uma proposta de "pronta":

- [ ] Renderizei em 1080p? Headers e footers reservados? Nada cortado.
- [ ] Cards do Ciclo Vicioso totalmente FORA do círculo? Medi com `getBoundingClientRect`?
- [ ] Cover sem dados, sem "proposta comercial" no título, sem entregáveis?
- [ ] Slide 12 com TODOS os sócios informados no briefing, com cores diferentes diferenciando cargos?
- [ ] Sem datas nos próximos passos?
- [ ] Headlines com 1–5 palavras, ponto final, sem perguntas (exceto Calculator)?
- [ ] Headline do Investimento = categoria ("Investimento.") e não frame negativo?
- [ ] Slide de Investimento revela payback DEPOIS do click/seta, não tudo de uma vez?
- [ ] Mockups com dados reais e plausíveis do ICP do cliente do cliente?
- [ ] Engagement do mockup LinkedIn = realista (centenas, não milhares)?
- [ ] Solução com `transformTemplate` em qualquer `motion.div` que mistura `style.transform` com prop animada de transform?
- [ ] Cortei 30% da copy antes de aprovar?
- [ ] CTAs entre slides amarram explicitamente o problema do slide anterior?
- [ ] Sliders, animações e interatividade funcionam com seta direita E clique?

Se passou em todos: pode apresentar. Se algum falhou: corrigir antes.
