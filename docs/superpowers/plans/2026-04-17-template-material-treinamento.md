# Template Material de Apoio — Treinamento de IA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar dois arquivos HTML a partir do template existente — um preenchido com conteúdo completo do treinamento de IA da Vektoz, e um vazio (estrutura + placeholders apenas).

**Architecture:** Cópia do `template-material-apoio.html` existente, com JS de navegação expandido de 7 para 16 seções, header e sidebar atualizados para 5 atos, e cada `<section>` preenchida com conteúdo real dos módulos do treinamento. O arquivo vazio replica a estrutura sem conteúdo nos blocos.

**Tech Stack:** HTML5 + CSS custom properties + JavaScript vanilla (sem dependências externas). Fonte: Google Fonts Inter. Todos os componentes já existem no template base.

**Spec:** `docs/superpowers/specs/2026-04-17-template-treinamento-design.md`

**Git strategy:** Commits diretos na branch atual (`master`). Um commit por task. Não é necessário PR — o trabalho é local e revisado pelo Eduardo após conclusão.

---

## File Map

| Ação | Arquivo |
|---|---|
| Criar | `projects/treinamentos/templates/template-material-apoio-filled.html` |
| Criar | `projects/treinamentos/templates/template-material-apoio-empty.html` |
| Ler (não modificar) | `projects/treinamentos/template-material-apoio.html` |
| Ler | `projects/treinamentos/content/base-curriculum.md` |

---

## Task 1: Scaffold — Copiar template e atualizar meta

**Files:**
- Create: `projects/treinamentos/templates/template-material-apoio-filled.html`

- [ ] **Step 1:** Ler `projects/treinamentos/template-material-apoio.html` integralmente

- [ ] **Step 2:** Criar `projects/treinamentos/templates/template-material-apoio-filled.html` com o conteúdo do template, substituindo apenas:
  - `<title>` → `Implementação de IA para Empresas — Material de Apoio`
  - `<meta name="description">` → `Material de apoio do treinamento de IA generativa para empresas — Vektoz`
  - Comentário no topo do HTML → atualizar para refletir estrutura de 5 atos

- [ ] **Step 3:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: scaffold template-material-apoio-filled.html"
```

---

## Task 2: Atualizar JS de navegação (SECTIONS, DAY_SECTIONS, TITLES)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html` — bloco `<script>`

- [ ] **Step 1:** Localizar o bloco `<script>` no arquivo (linha ~600)

- [ ] **Step 2:** Substituir os arrays JS:

```javascript
const SECTIONS = [
  'home',
  'd1-b1', 'd1-b2', 'd1-b3',
  'd2-b1', 'd2-b2', 'd2-b3',
  'd3-b1', 'd3-b2', 'd3-b3',
  'd4-b1', 'd4-b2', 'd4-b3',
  'd5-b1', 'd5-b2'
];

const DAY_SECTIONS = {
  '1': ['d1-b1', 'd1-b2', 'd1-b3'],
  '2': ['d2-b1', 'd2-b2', 'd2-b3'],
  '3': ['d3-b1', 'd3-b2', 'd3-b3'],
  '4': ['d4-b1', 'd4-b2', 'd4-b3'],
  '5': ['d5-b1', 'd5-b2']
};

const TITLES = {
  'home':  'Início',
  'd1-b1': 'Ato 1 / A Revolução da IA',
  'd1-b2': 'Ato 1 / Evolução e Mercado',
  'd1-b3': 'Ato 1 / IA e Profissões',
  'd2-b1': 'Ato 2 / Como a IA Funciona',
  'd2-b2': 'Ato 2 / Glossário',
  'd2-b3': 'Ato 2 / Níveis de Uso',
  'd3-b1': 'Ato 3 / Tipos de Prompt',
  'd3-b2': 'Ato 3 / Framework de Prompt',
  'd3-b3': 'Ato 3 / Técnicas Avançadas',
  'd4-b1': 'Ato 4 / Casos por Área',
  'd4-b2': 'Ato 4 / Assistentes Personalizados',
  'd4-b3': 'Ato 4 / Contexto e RAG',
  'd5-b1': 'Ato 5 / N8N e Automações',
  'd5-b2': 'Ato 5 / Próximos Passos'
};
```

- [ ] **Step 3:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: expandir arrays de navegação para 5 atos"
```

---

## Task 3: Atualizar header, sidebar e Home

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

### Header

- [ ] **Step 1:** Substituir o bloco `.header-day-toggle`:
```html
<div class="header-day-toggle">
  <button class="header-day-btn" data-day="home">Início</button>
  <button class="header-day-btn active" data-day="1">Ato 1</button>
  <button class="header-day-btn" data-day="2">Ato 2</button>
  <button class="header-day-btn" data-day="3">Ato 3</button>
  <button class="header-day-btn" data-day="4">Ato 4</button>
  <button class="header-day-btn" data-day="5">Ato 5</button>
</div>
```

### Sidebar

- [ ] **Step 2:** Substituir o conteúdo da `<aside class="sidebar">`:
```html
<aside class="sidebar" id="sidebar">
  <div class="sidebar-brand">VEKTOZ <span>TREINAMENTOS</span></div>

  <div class="sidebar-group">
    <div class="sidebar-item" data-target="home">
      <span class="sidebar-item-num">●</span>
      Início
    </div>
  </div>

  <div class="sidebar-group">
    <div class="sidebar-group-title">Ato 1 — Contexto</div>
    <div class="sidebar-item" data-target="d1-b1">
      <span class="sidebar-item-num">01</span>
      A Revolução da IA
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d1-b2">
      <span class="sidebar-item-num">02</span>
      Evolução e Mercado
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d1-b3">
      <span class="sidebar-item-num">03</span>
      IA e Profissões
      <span class="sidebar-item-badge">20 min</span>
    </div>
  </div>

  <div class="sidebar-group">
    <div class="sidebar-group-title">Ato 2 — Fundamentos</div>
    <div class="sidebar-item" data-target="d2-b1">
      <span class="sidebar-item-num">01</span>
      Como a IA Funciona
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d2-b2">
      <span class="sidebar-item-num">02</span>
      Glossário
      <span class="sidebar-item-badge">15 min</span>
    </div>
    <div class="sidebar-item" data-target="d2-b3">
      <span class="sidebar-item-num">03</span>
      Níveis de Uso
      <span class="sidebar-item-badge">25 min</span>
    </div>
  </div>

  <div class="sidebar-group">
    <div class="sidebar-group-title">Ato 3 — Comunicar com IA</div>
    <div class="sidebar-item" data-target="d3-b1">
      <span class="sidebar-item-num">01</span>
      Tipos de Prompt
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d3-b2">
      <span class="sidebar-item-num">02</span>
      Framework de Prompt
      <span class="sidebar-item-badge">25 min</span>
    </div>
    <div class="sidebar-item" data-target="d3-b3">
      <span class="sidebar-item-num">03</span>
      Técnicas Avançadas
      <span class="sidebar-item-badge">20 min</span>
    </div>
  </div>

  <div class="sidebar-group">
    <div class="sidebar-group-title">Ato 4 — IA no Trabalho</div>
    <div class="sidebar-item" data-target="d4-b1">
      <span class="sidebar-item-num">01</span>
      Casos por Área
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d4-b2">
      <span class="sidebar-item-num">02</span>
      Assistentes Personalizados
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d4-b3">
      <span class="sidebar-item-num">03</span>
      Contexto e RAG
      <span class="sidebar-item-badge">20 min</span>
    </div>
  </div>

  <div class="sidebar-group">
    <div class="sidebar-group-title">Ato 5 — Próximos Passos</div>
    <div class="sidebar-item" data-target="d5-b1">
      <span class="sidebar-item-num">01</span>
      N8N e Automações
      <span class="sidebar-item-badge">20 min</span>
    </div>
    <div class="sidebar-item" data-target="d5-b2">
      <span class="sidebar-item-num">02</span>
      Roadmap 30 dias
      <span class="sidebar-item-badge">15 min</span>
    </div>
  </div>
</aside>
```

### Home

- [ ] **Step 3:** Substituir o `<div class="section" data-section="home">` completo:
```html
<div class="section" data-section="home" data-day="home">
  <div class="hero">
    <div class="hero-badge">
      <span class="badge">Treinamento Presencial · Vektoz</span>
    </div>
    <h1 class="hero-title">Implementação de<br><span>IA para Empresas.</span></h1>
    <p class="hero-subtitle">Material de apoio preparado especialmente para a equipe da <strong>[SUBSTITUIR: NOME_EMPRESA]</strong>.</p>
    <button class="hero-cta" onclick="goToSection('d1-b1')">Começar agora →</button>
  </div>

  <div style="text-align:center; margin: 24px 0 8px;">
    <p style="font-size:14px; color: var(--text-sec);"><strong>[SUBSTITUIR: DATA]</strong> · Formato: Presencial · Duração: 5h</p>
    <p style="font-size:13px; color: var(--text-ter);">Preparado por <strong>Vektoz</strong> — www.vektoz.com.br</p>
  </div>

  <div class="callout callout-tip" style="text-align:left; margin-top:32px;">
    <strong>Como usar este material</strong>
    <ul style="margin-top:8px; margin-bottom:0;">
      <li>Use os botões <strong>Ato 1 a 5</strong> no topo para navegar entre os módulos.</li>
      <li>Blocos com <strong>PROMPT</strong> têm botão <strong>Copiar</strong> — cole direto no ChatGPT, Gemini ou Claude.</li>
      <li>Os exercícios <strong>Mão na Massa</strong> são para fazer durante o treinamento, com seu computador aberto.</li>
      <li>Este material fica com você — use como referência depois do treinamento.</li>
    </ul>
  </div>

  <div class="day-cards">
    <div class="day-card" onclick="goToSection('d1-b1')">
      <div class="day-card-num">Ato 1 — Contexto</div>
      <div class="day-card-title">Por que IA agora?</div>
      <div class="day-card-desc">Revolução da IA, evolução do mercado e impacto nas profissões.</div>
      <div class="day-card-meta">
        <span class="badge badge-outline">3 blocos</span>
        <span class="badge badge-outline">~60 min</span>
      </div>
    </div>
    <div class="day-card" onclick="goToSection('d2-b1')">
      <div class="day-card-num">Ato 2 — Fundamentos</div>
      <div class="day-card-title">Como a IA funciona?</div>
      <div class="day-card-desc">LLMs, glossário essencial e os 4 níveis de uso.</div>
      <div class="day-card-meta">
        <span class="badge badge-outline">3 blocos</span>
        <span class="badge badge-outline">~60 min</span>
      </div>
    </div>
    <div class="day-card" onclick="goToSection('d3-b1')">
      <div class="day-card-num">Ato 3 — Comunicar com IA</div>
      <div class="day-card-title">Como pedir bem?</div>
      <div class="day-card-desc">Tipos de prompt, framework PACEF e técnicas avançadas.</div>
      <div class="day-card-meta">
        <span class="badge badge-outline">3 blocos</span>
        <span class="badge badge-outline">~65 min</span>
      </div>
    </div>
    <div class="day-card" onclick="goToSection('d4-b1')">
      <div class="day-card-num">Ato 4 — IA no Trabalho</div>
      <div class="day-card-title">Como aplicar no dia a dia?</div>
      <div class="day-card-desc">Casos por área, assistentes personalizados e RAG.</div>
      <div class="day-card-meta">
        <span class="badge badge-outline">3 blocos</span>
        <span class="badge badge-outline">~60 min</span>
      </div>
    </div>
    <div class="day-card" onclick="goToSection('d5-b1')">
      <div class="day-card-num">Ato 5 — Próximos Passos</div>
      <div class="day-card-title">E agora?</div>
      <div class="day-card-desc">N8N e automações, roadmap de 30 dias e recursos para continuar.</div>
      <div class="day-card-meta">
        <span class="badge badge-outline">2 blocos</span>
        <span class="badge badge-outline">~35 min</span>
      </div>
    </div>
  </div>

  <hr>
  <h2>Antes de começar</h2>
  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text"><strong>Abra o ChatGPT ou Gemini</strong> — você vai precisar durante os exercícios</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text"><strong>Crie uma conta gratuita</strong> se ainda não tiver — chat.openai.com ou gemini.google.com</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text"><strong>Tenha papel e caneta</strong> — ou abra um bloco de notas para anotar insights</span>
    </li>
  </ul>
</div>
```

- [ ] **Step 4:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: atualizar header, sidebar e home com estrutura de 5 atos"
```

---

## Task 4: Ato 1 — Contexto (3 blocos)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

Substituir o bloco do Ato 1 (d1-b1, d1-b2, d1-b3) e adicionar os novos (d2 a d5) após o fechamento do `</main>` antigo — mas antes de fazê-lo, substituir primeiro as sections existentes.

> Atenção: o arquivo de origem tem `data-section="d1-b1"` com `class="section active"`. No filled.html, a seção ativa inicial deve ser `home` (renderizada pelo JS), então remover o `active` do d1-b1.

### d1-b1 — A Revolução da IA

- [ ] **Step 1:** Substituir `<div class="section active" data-section="d1-b1" ...>`:
```html
<!-- ATO 1 / BLOCO 1 -->
<div class="section" data-section="d1-b1" data-day="1" data-block="1">
  <div class="section-kicker">Ato 1 · Bloco 1</div>
  <div class="section-title">A Revolução da IA.</div>
  <div class="section-subtitle">Por que isso está mudando tudo agora</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>O que é Inteligência Artificial Generativa</h2>
  <p><strong>Inteligência Artificial (IA)</strong> é o conjunto de técnicas que permitem a sistemas realizarem tarefas que normalmente exigiriam inteligência humana — reconhecer padrões, tomar decisões, entender linguagem.</p>
  <p><strong>IA Generativa</strong> é a subárea que <em>cria</em> conteúdo novo: texto, imagens, código, áudio, vídeo. É o que o ChatGPT, o Gemini e o Claude fazem.</p>

  <div class="card card-accent">
    <h3>A analogia mais útil</h3>
    <p>Pense na IA como um <strong>estagiário extremamente capaz</strong> que leu tudo que já foi escrito na internet, fala todos os idiomas, nunca cansa e responde em segundos — mas precisa de instruções claras para entregar o que você quer.</p>
    <p>Quem sabe dar boas instruções vai extrair resultados que parecem de um especialista. Quem não sabe vai receber respostas genéricas.</p>
  </div>

  <h2>Por que agora?</h2>
  <p>A IA existe há décadas. O que mudou em 2022–2024 foi a convergência de três fatores:</p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Fator</th>
          <th>O que mudou</th>
          <th>Impacto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Custo</strong></td>
          <td>Custo por token caiu ~280x entre 2020 e 2026</td>
          <td>Qualquer empresa pode usar — não precisa de budget de big tech</td>
        </tr>
        <tr>
          <td><strong>Acesso</strong></td>
          <td>Interface de chat eliminou a barreira técnica</td>
          <td>Qualquer pessoa usa sem saber programar</td>
        </tr>
        <tr>
          <td><strong>Qualidade</strong></td>
          <td>Modelos menores performam como gigantes de 2022</td>
          <td>GPT-4o, Gemini 2.5 Pro e Claude Sonnet 4 são ferramentas de trabalho reais</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="callout callout-warn">
    <strong>A janela de vantagem está aberta agora</strong>
    96% das empresas brasileiras conhecem IA generativa, mas apenas 15% usam com frequência. Quem aprender a usar bem agora sai na frente — essa vantagem não vai durar para sempre.
  </div>
</div>
```

### d1-b2 — Evolução e Mercado

- [ ] **Step 2:** Substituir `<div class="section" data-section="d1-b2" ...>`:
```html
<!-- ATO 1 / BLOCO 2 -->
<div class="section" data-section="d1-b2" data-day="1" data-block="2">
  <div class="section-kicker">Ato 1 · Bloco 2</div>
  <div class="section-title">Evolução e Mercado.</div>
  <div class="section-subtitle">O que aconteceu e onde estamos</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>A timeline de 2023 a 2026</h2>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Ano</th>
          <th>O que aconteceu</th>
          <th>Modelos principais</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>2023</strong></td>
          <td>ChatGPT explode. IA generativa vai para o mainstream. Início da corrida dos modelos</td>
          <td>GPT-3.5 / GPT-4, Bard, Claude 1</td>
        </tr>
        <tr>
          <td><strong>2024</strong></td>
          <td>Modelos multimodais (texto + imagem + áudio). Contextos de 1M+ tokens. Adoção corporativa dispara</td>
          <td>GPT-4o, Gemini 1.5 Pro, Claude 3</td>
        </tr>
        <tr>
          <td><strong>2025</strong></td>
          <td>Modelos menores com desempenho de gigantes. Agentes autônomos. Raciocínio avançado</td>
          <td>GPT-o3, Gemini 2.0, Claude 3.5+</td>
        </tr>
        <tr>
          <td><strong>2026</strong></td>
          <td>Consolidação. Custo caiu ~280x. Foco muda de capacidade do modelo para integração em processos</td>
          <td><strong>GPT-4o / o3 / GPT-5, Gemini 2.5 Pro, Claude Sonnet 4.6</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="callout callout-tip">
    <strong>O que isso significa para você</strong>
    A tecnologia está madura. A barreira não é mais acesso — é saber usar bem. Estamos todos na mesma linha de partida.
  </div>

  <h2>O Brasil em números</h2>

  <div class="card card-accent">
    <h3>41,9%</h3>
    <p>das empresas industriais com 100+ funcionários já usam IA em 2024 — vs. 16,9% em 2022. <span style="color:var(--text-ter);font-size:12px;">Fonte: IBGE/Pintec</span></p>
  </div>

  <div class="card">
    <h3>96% conhecem. Só 15% usam com frequência.</h3>
    <p>Das micro e pequenas empresas brasileiras, 96% têm familiaridade com IA generativa — mas apenas 15% usam com frequência. <span style="color:var(--text-ter);font-size:12px;">Fonte: Sebrae/FGV Ibre</span></p>
  </div>

  <div class="card">
    <h3>+14% de produtividade. +9% de crescimento financeiro.</h3>
    <p>Média reportada por empresas que implementaram IA generativa nos processos de trabalho. <span style="color:var(--text-ter);font-size:12px;">Fonte: Bain & Company 2025</span></p>
  </div>

  <hr>
  <h2>No setor de [SUBSTITUIR: SETOR]</h2>
  <div class="card card-accent">
    [SUBSTITUIR: DADO_MERCADO]
  </div>
</div>
```

### d1-b3 — IA e Profissões

- [ ] **Step 3:** Substituir `<div class="section" data-section="d1-b3" ...>`:
```html
<!-- ATO 1 / BLOCO 3 -->
<div class="section" data-section="d1-b3" data-day="1" data-block="3">
  <div class="section-kicker">Ato 1 · Bloco 3</div>
  <div class="section-title">IA e Profissões.</div>
  <div class="section-subtitle">O que muda e o que não muda</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>A pergunta que todo mundo tem</h2>
  <p>A IA vai substituir o meu trabalho?</p>
  <p>A resposta honesta: <strong>algumas funções vão mudar. Poucas vão desaparecer. A maioria vai ser transformada.</strong> E quem souber usar IA vai ser mais valioso — não substituído.</p>

  <h2>Como classificar o impacto</h2>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Tipo de tarefa</th>
          <th>Exemplos</th>
          <th>Impacto da IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Rotineira e repetitiva</strong></td>
          <td>Classificar e-mails, preencher formulários, gerar relatórios padrão</td>
          <td><span class="badge" style="background:#e63946;">Alto</span> — IA faz mais rápido e mais barato</td>
        </tr>
        <tr>
          <td><strong>Analítica e criativa</strong></td>
          <td>Redigir propostas, analisar dados, criar conteúdo</td>
          <td><span class="badge" style="background:#f4a261;">Médio</span> — IA é copiloto, humano aprova e ajusta</td>
        </tr>
        <tr>
          <td><strong>Relacional e estratégica</strong></td>
          <td>Negociar, liderar equipes, tomar decisões complexas, cuidar de pessoas</td>
          <td><span class="badge" style="background:#2a9d8f;">Baixo</span> — IA apoia, mas humano é insubstituível</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="callout callout-tip">
    <strong>A lógica é simples</strong>
    Quem usa IA faz mais em menos tempo. Quem não usa compete com quem usa. A escolha não é "usar ou não usar" — é quando começar.
  </div>

  <h2>O perfil profissional que ganha valor</h2>
  <ul>
    <li><strong>Sabe dar contexto:</strong> explica o problema de forma clara, com detalhes relevantes</li>
    <li><strong>Avalia criticamente:</strong> não aceita qualquer resposta — revisa, questiona, ajusta</li>
    <li><strong>Combina domínio técnico com IA:</strong> conhece o negócio e usa a IA como alavanca</li>
    <li><strong>Aprende rápido:</strong> ferramentas mudam todo mês — quem tem curiosidade sai na frente</li>
  </ul>

  <div class="callout callout-warn">
    <strong>O erro mais comum</strong>
    Tratar a IA como um buscador. Pergunta genérica = resposta genérica. Quem usa IA como Google não colhe os resultados reais. O treinamento de hoje muda isso.
  </div>
</div>
```

- [ ] **Step 4:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: adicionar conteúdo do Ato 1 (Contexto)"
```

---

## Task 5: Ato 2 — Fundamentos (3 blocos)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

### d2-b1 — Como a IA Funciona

- [ ] **Step 1:** Substituir `<div class="section" data-section="d2-b1" ...>`:
```html
<!-- ATO 2 / BLOCO 1 -->
<div class="section" data-section="d2-b1" data-day="2" data-block="1">
  <div class="section-kicker">Ato 2 · Bloco 1</div>
  <div class="section-title">Como a IA Funciona.</div>
  <div class="section-subtitle">Sem mistério: LLMs, tokens e probabilidade</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>O que são LLMs</h2>
  <p><strong>LLMs (Large Language Models)</strong> são modelos de linguagem treinados em bilhões de textos para prever a próxima palavra em uma sequência.</p>
  <p>Isso os permite escrever, resumir, responder perguntas e raciocinar em linguagem natural. O modelo não "pensa" como humano — ele calcula qual a próxima palavra mais provável, dado tudo o que foi escrito e as instruções recebidas.</p>

  <div class="callout callout-warn">
    <strong>Não existe mágica — existe estatística muito bem treinada</strong>
    O ChatGPT não entende o mundo como você entende. Ele prevê padrões em texto. Isso é incrivelmente poderoso — e tem limitações claras. Saber disso evita frustrações.
  </div>

  <h2>O que acontece quando você digita algo</h2>
  <ol class="stepper">
    <li class="step">
      <h4>Você escreve o prompt</h4>
      <p>Seu texto é enviado ao modelo. A qualidade da instrução determina a qualidade da resposta.</p>
    </li>
    <li class="step">
      <h4>O texto é convertido em tokens</h4>
      <p><strong>Token</strong> = fragmento de texto (pedaço de palavra, símbolo). A palavra "treinamento" pode virar 3 tokens. O modelo processa tokens, não palavras.</p>
    </li>
    <li class="step">
      <h4>O modelo analisa o contexto completo</h4>
      <p>Tudo que você escreveu — e o histórico da conversa — entra na <strong>janela de contexto</strong>. É a "memória de curto prazo" do modelo.</p>
    </li>
    <li class="step">
      <h4>A resposta é gerada token a token</h4>
      <p>O modelo escolhe o próximo token mais provável, repete isso até completar a resposta, e você vê o texto sendo "digitado".</p>
    </li>
  </ol>

  <h2>Dois conceitos que você vai ouvir</h2>
  <div class="card">
    <h3>Janela de contexto</h3>
    <p>É quanto texto o modelo consegue considerar de uma vez — o tamanho da sua "memória". Modelos modernos (Gemini 2.5 Pro, GPT-4o) têm janelas de 128k a 1M tokens. Para referência: 1M tokens ≈ 750 mil palavras.</p>
  </div>
  <div class="card">
    <h3>Temperatura</h3>
    <p>Controla o nível de "criatividade" da resposta. <strong>Temperatura baixa</strong> = respostas mais previsíveis e precisas. <strong>Alta</strong> = mais criativa e variada. Para tarefas de negócio, baixa é geralmente melhor.</p>
  </div>
</div>
```

### d2-b2 — Glossário Visual

- [ ] **Step 2:** Substituir `<div class="section" data-section="d2-b2" ...>`:
```html
<!-- ATO 2 / BLOCO 2 -->
<div class="section" data-section="d2-b2" data-day="2" data-block="2">
  <div class="section-kicker">Ato 2 · Bloco 2</div>
  <div class="section-title">Glossário.</div>
  <div class="section-subtitle">Os 12 termos que você precisa dominar</div>
  <span class="badge badge-time">15 minutos</span>
  <hr>

  <p>Esses termos aparecem em artigos, ferramentas e conversas sobre IA. Não precisa decorar — use como referência.</p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Termo</th>
          <th>Explicação simples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>IA Generativa</strong></td>
          <td>Modelos que criam texto, imagem, áudio ou código a partir de instruções</td>
        </tr>
        <tr>
          <td><strong>LLM</strong></td>
          <td>Large Language Model — modelo de linguagem que conversa, escreve e raciocina</td>
        </tr>
        <tr>
          <td><strong>Token</strong></td>
          <td>Fragmento de texto (pedaço de palavra, símbolo) — unidade básica que o modelo processa</td>
        </tr>
        <tr>
          <td><strong>Janela de contexto</strong></td>
          <td>"Memória de curto prazo" da IA — quantos tokens ela considera por vez</td>
        </tr>
        <tr>
          <td><strong>Temperatura</strong></td>
          <td>Ajuste de criatividade: baixa = mais previsível; alta = mais criativa</td>
        </tr>
        <tr>
          <td><strong>Prompt</strong></td>
          <td>Texto de instrução que você envia para a IA (pergunta + contexto + regras)</td>
        </tr>
        <tr>
          <td><strong>Prompt engineering</strong></td>
          <td>Técnica de estruturar prompts para obter respostas melhores</td>
        </tr>
        <tr>
          <td><strong>Persona</strong></td>
          <td>Papel/identidade que você atribui à IA ("você é um especialista em...")</td>
        </tr>
        <tr>
          <td><strong>Embeddings</strong></td>
          <td>Representação numérica de textos usada para buscas semânticas e RAG</td>
        </tr>
        <tr>
          <td><strong>RAG</strong></td>
          <td>Retrieval-Augmented Generation: IA busca em bases externas antes de responder</td>
        </tr>
        <tr>
          <td><strong>Alucinação</strong></td>
          <td>Quando a IA inventa fatos com confiança — sem base na realidade</td>
        </tr>
        <tr>
          <td><strong>Agente</strong></td>
          <td>Sistema que combina LLM + ferramentas para atuar de forma semi-autônoma</td>
        </tr>
      </tbody>
    </table>
  </div>

  <details class="toggle">
    <summary>Os modelos principais em 2026 e onde cada um se destaca</summary>
    <div class="toggle-content">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Modelo</th><th>Empresa</th><th>Ponto forte</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>GPT-4o</strong></td><td>OpenAI</td><td>Multimodal (texto, imagem, áudio), mais usado no Brasil</td></tr>
            <tr><td><strong>o3</strong></td><td>OpenAI</td><td>Raciocínio complexo, matemática, código</td></tr>
            <tr><td><strong>GPT-5</strong></td><td>OpenAI</td><td>Modelo mais capaz da OpenAI (2025+)</td></tr>
            <tr><td><strong>Gemini 2.5 Pro</strong></td><td>Google</td><td>Contexto de 1M tokens, integrado ao Google Workspace</td></tr>
            <tr><td><strong>Claude Sonnet 4.6</strong></td><td>Anthropic</td><td>Textos longos, análise, raciocínio estruturado</td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:13px; color:var(--text-ter);">Para uso cotidiano em empresas brasileiras, <strong>ChatGPT (GPT-4o)</strong> e <strong>Gemini</strong> são os mais acessíveis. Claude se destaca para análise de documentos longos.</p>
    </div>
  </details>
</div>
```

### d2-b3 — Níveis de Uso

- [ ] **Step 3:** Substituir `<div class="section" data-section="d2-b3" ...>`:
```html
<!-- ATO 2 / BLOCO 3 -->
<div class="section" data-section="d2-b3" data-day="2" data-block="3">
  <div class="section-kicker">Ato 2 · Bloco 3</div>
  <div class="section-title">Níveis de Uso.</div>
  <div class="section-subtitle">Do Google turbinado à automação total</div>
  <span class="badge badge-time">25 minutos</span>
  <hr>

  <h2>Os 4 níveis de uso da IA</h2>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Nível</th>
          <th>Nome</th>
          <th>Como é</th>
          <th>Exemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="badge badge-outline">1</span></td>
          <td><strong>Google turbinado</strong></td>
          <td>Perguntas pontuais, sem contexto</td>
          <td>Pedir definição, traduzir texto, resumir artigo</td>
        </tr>
        <tr>
          <td><span class="badge badge-outline">2</span></td>
          <td><strong>Analista assistido</strong></td>
          <td>Contexto curto + análise ou criação</td>
          <td>Resumir reunião, revisar proposta, criar e-mail de cobrança</td>
        </tr>
        <tr>
          <td><span class="badge badge-outline">3</span></td>
          <td><strong>Copiloto de processo</strong></td>
          <td>Contexto rico + co-criação</td>
          <td>Criar playbook de atendimento, política interna, fluxo de processo</td>
        </tr>
        <tr>
          <td><span class="badge badge-outline">4</span></td>
          <td><strong>Orquestração com N8N</strong></td>
          <td>IA integrada a sistemas, roda sozinha</td>
          <td>Lead chega → IA qualifica → CRM atualiza automaticamente</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="callout callout-tip">
    <strong>Onde você provavelmente está agora</strong>
    A maioria das pessoas está no Nível 1. Este treinamento vai te levar ao Nível 2–3. O Nível 4 é o próximo passo — veremos no Ato 5.
  </div>

  <hr>
  <h2>Mão na Massa #1 — Primeiro Prompt</h2>

  <div class="callout callout-exercise">
    <strong>Exercício — 10 minutos</strong>
    Abra o ChatGPT (chat.openai.com) ou Gemini (gemini.google.com) agora. Vamos fazer o seu primeiro prompt de trabalho real.
  </div>

  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Abra o ChatGPT ou Gemini no seu computador</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Pense em uma tarefa repetitiva que você faz toda semana no trabalho</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Peça para a IA fazer essa tarefa — da forma como você pediu naturalmente</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Veja o resultado. Está bom? Está ruim? Anote o que faltou.</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Guarde este prompt — vamos reescrever ele no Ato 3 usando o framework PACEF</span>
    </li>
  </ul>

  <div class="callout callout-tip">
    <strong>A pergunta certa para avaliar o resultado</strong>
    Se um estagiário me entregasse isso, eu aceitaria? Se a resposta for não — vamos aprender a pedir melhor no próximo ato.
  </div>
</div>
```

- [ ] **Step 4:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: adicionar conteúdo do Ato 2 (Fundamentos)"
```

---

## Task 6: Ato 3 — Comunicar com IA (3 blocos)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

Adicionar as sections d3-b1, d3-b2, d3-b3 após o fechamento de d2-b3 e antes do `</main>`.

### d3-b1 — Tipos de Prompt

- [ ] **Step 1:** Inserir após `</div><!-- fim d2-b3 -->`:
```html
<!-- ═══════════════ ATO 3 ══════════════════════════════════ -->

<!-- ATO 3 / BLOCO 1 -->
<div class="section" data-section="d3-b1" data-day="3" data-block="1">
  <div class="section-kicker">Ato 3 · Bloco 1</div>
  <div class="section-title">Tipos de Prompt.</div>
  <div class="section-subtitle">Três estratégias com resultados completamente diferentes</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <p>A mesma tarefa pode ser pedida de três formas — e o resultado muda completamente. Conhecer os tipos de prompt é o primeiro passo para usar IA de forma estratégica.</p>

  <h2>Zero-shot — Instrução direta</h2>
  <div class="card">
    <p>Você pede a tarefa sem dar exemplos. A IA usa o que aprendeu no treinamento para responder.</p>
    <p><strong>Quando usar:</strong> tarefas simples e bem definidas, quando você não tem exemplos prontos.</p>
  </div>
  <div class="prompt-block">
    <span class="code-block-label">PROMPT — ZERO-SHOT</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>Escreva um e-mail de cobrança amigável para um cliente com fatura em atraso há 15 dias. Tom: profissional e cordial.</p>
  </div>

  <h2>Few-shot — Instrução com exemplos</h2>
  <div class="card">
    <p>Você mostra exemplos do que quer antes de pedir. A IA aprende o padrão e replica.</p>
    <p><strong>Quando usar:</strong> quando você quer um estilo específico ou tem um padrão interno da empresa.</p>
  </div>
  <div class="prompt-block">
    <span class="code-block-label">PROMPT — FEW-SHOT</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>Classifique os feedbacks abaixo como Positivo, Neutro ou Negativo.<br><br>Exemplos:<br>"Atendimento rápido e eficiente" → Positivo<br>"Demorou um pouco, mas resolveu" → Neutro<br>"Péssima experiência, não voltarei" → Negativo<br><br>Agora classifique:<br>1. "Gostei do atendimento, mas a fila estava grande"<br>2. "Resolveram meu problema em minutos"<br>3. "Nunca mais venho aqui"</p>
  </div>

  <h2>Chain-of-thought — Pense passo a passo</h2>
  <div class="card">
    <p>Você pede que a IA mostre o raciocínio antes de responder. Melhora muito a qualidade em tarefas complexas.</p>
    <p><strong>Quando usar:</strong> análises, decisões, diagnósticos — qualquer tarefa onde o processo importa tanto quanto a resposta.</p>
  </div>
  <div class="prompt-block">
    <span class="code-block-label">PROMPT — CHAIN-OF-THOUGHT</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>Analise a seguinte situação e pense passo a passo antes de dar sua recomendação:<br><br>Uma clínica tem 3 recepcionistas. Cada uma atende em média 40 ligações por dia. 30% das ligações são confirmações de consulta que poderiam ser automatizadas. O custo de uma ferramenta de automação é R$300/mês.<br><br>Qual é o impacto estimado em horas de trabalho economizadas por mês? Vale a pena implementar? Mostre seu raciocínio.</p>
  </div>
</div>
```

### d3-b2 — Framework de Prompt (PACEF)

- [ ] **Step 2:** Inserir após d3-b1:
```html
<!-- ATO 3 / BLOCO 2 -->
<div class="section" data-section="d3-b2" data-day="3" data-block="2">
  <div class="section-kicker">Ato 3 · Bloco 2</div>
  <div class="section-title">Framework de Prompt.</div>
  <div class="section-subtitle">O método de 6 blocos que transforma perguntas em resultados</div>
  <span class="badge badge-time">25 minutos</span>
  <hr>

  <h2>Por que o prompt importa</h2>
  <p>Um prompt mal estruturado = resposta genérica.<br>Um prompt bem estruturado = resposta que parece de um especialista.</p>
  <p>A diferença está na estrutura, não na ferramenta.</p>

  <h2>O Framework PACEF — 6 blocos</h2>
  <ol class="stepper">
    <li class="step">
      <h4>P — Papel</h4>
      <p>Defina quem a IA está sendo. Uma persona específica entrega resultados muito mais relevantes do que um modelo genérico.</p>
      <p><em>"Você é um especialista em atendimento ao cliente com 10 anos de experiência em clínicas de saúde..."</em></p>
    </li>
    <li class="step">
      <h4>A — Ação / Objetivo</h4>
      <p>Declare o resultado esperado com clareza. Uma tarefa por prompt.</p>
      <p><em>"Seu objetivo é criar um script de confirmação de consulta por WhatsApp..."</em></p>
    </li>
    <li class="step">
      <h4>C — Contexto</h4>
      <p>Dê o máximo de contexto relevante. Empresa, setor, público, produto, restrições.</p>
      <p><em>"Contexto: clínica odontológica com 15 funcionários, atendemos planos e particular, pacientes têm perfil familiar..."</em></p>
    </li>
    <li class="step">
      <h4>E — Exemplos</h4>
      <p>Mostre o padrão que você quer. Um bom exemplo vale mais que três parágrafos de explicação.</p>
      <p><em>"Exemplo de mensagem que aprovamos: 'Olá [Nome], lembramos que sua consulta é amanhã às 14h com o Dr. Silva...'"</em></p>
    </li>
    <li class="step">
      <h4>F1 — Formato de Saída</h4>
      <p>Especifique como quer receber a resposta. Lista, tabela, e-mail, roteiro, etc.</p>
      <p><em>"Entregue como 3 variações de mensagem WhatsApp, cada uma com no máximo 4 linhas..."</em></p>
    </li>
    <li class="step">
      <h4>F2 — Filtros / Restrições</h4>
      <p>Diga o que evitar. Tom, linguagem, coisas que não devem aparecer.</p>
      <p><em>"Tom: cordial e direto. Evite: linguagem muito formal, emojis em excesso, promessas que não podemos cumprir."</em></p>
    </li>
  </ol>

  <h2>Prompt completo com PACEF</h2>
  <div class="prompt-block">
    <span class="code-block-label">PROMPT — PACEF COMPLETO</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>Você é um especialista em comunicação empresarial com foco em pequenas e médias empresas brasileiras. [PAPEL]<br><br>Seu objetivo é escrever um modelo de mensagem de cobrança por WhatsApp para clientes com pagamento em atraso. [OBJETIVO]<br><br>Contexto: empresa de serviços com ticket médio de R$500. Clientes são pessoas físicas. Relacionamento é informal mas profissional. A cobrança é o primeiro contato — não houve inadimplência antes. [CONTEXTO]<br><br>Formato: 3 versões da mensagem, numeradas, com até 5 linhas cada. [FORMATO]<br><br>Restrições: tom cordial, sem ameaças ou linguagem agressiva. Não use termos jurídicos. Inclua um link fictício para pagamento no final de cada versão. [RESTRIÇÕES]</p>
  </div>

  <hr>
  <h2>Prompt personalizado — [SUBSTITUIR: SETOR]</h2>
  <div class="prompt-block">
    <span class="code-block-label">PROMPT — EXEMPLO DO SETOR</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>[SUBSTITUIR: PROMPT_EXEMPLO]</p>
  </div>
</div>
```

### d3-b3 — Técnicas Avançadas

- [ ] **Step 3:** Inserir após d3-b2:
```html
<!-- ATO 3 / BLOCO 3 -->
<div class="section" data-section="d3-b3" data-day="3" data-block="3">
  <div class="section-kicker">Ato 3 · Bloco 3</div>
  <div class="section-title">Técnicas Avançadas.</div>
  <div class="section-subtitle">Os pulos do gato que transformam a IA em copiloto real</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>Pulos do Gato</h2>
  <p>Técnicas simples de adicionar ao prompt que mudam completamente a qualidade da resposta:</p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Técnica</th>
          <th>Como usar no prompt</th>
          <th>Para que serve</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Advogado do diabo</strong></td>
          <td>"Liste primeiro os riscos e objeções antes de sugerir melhorias"</td>
          <td>Evitar otimismo ingênuo — a IA tende a validar o que você apresenta</td>
        </tr>
        <tr>
          <td><strong>Honestidade brutal</strong></td>
          <td>"Seja brutalmente honesto. Se a ideia for ruim, diga diretamente"</td>
          <td>A IA sem essa instrução tende a ser condescendente e não critica de verdade</td>
        </tr>
        <tr>
          <td><strong>Perguntar antes de responder</strong></td>
          <td>"Antes de sugerir soluções, faça até 5 perguntas para entender melhor o problema"</td>
          <td>Evita respostas baseadas em suposições erradas</td>
        </tr>
        <tr>
          <td><strong>Raciocínio passo a passo</strong></td>
          <td>"Mostre seu raciocínio antes de chegar à conclusão"</td>
          <td>Aumenta qualidade em tarefas analíticas — e facilita identificar erros</td>
        </tr>
        <tr>
          <td><strong>Gerar alternativas</strong></td>
          <td>"Gere 3 alternativas com prós e contras em tabela"</td>
          <td>Evita ficar preso à primeira opção — expande o espaço de soluções</td>
        </tr>
        <tr>
          <td><strong>Restrições explícitas</strong></td>
          <td>"Não use linguagem motivacional. Não invente dados. Não repita a pergunta"</td>
          <td>Elimina vícios de resposta que a IA tem por padrão</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Erros mais comuns</h2>
  <ul>
    <li>Pedir "melhorar" sem dizer para quem, com qual tom, qual objetivo</li>
    <li>Misturar 4–5 tarefas diferentes em um único prompt</li>
    <li>Não revisar o que a IA entrega — confiar cegamente</li>
    <li>Desistir no primeiro resultado ruim em vez de ajustar o prompt</li>
    <li>Não dar contexto da empresa — a IA responde como se fosse para qualquer empresa do mundo</li>
  </ul>

  <div class="callout callout-warn">
    <strong>A regra de ouro</strong>
    Quem usa IA toda hora fica bom em IA. Quem usa uma vez por semana não evolui. O segredo é volume de tentativas — não perfeição no primeiro prompt.
  </div>

  <hr>
  <h2>Mão na Massa #2 — Reescrever com PACEF</h2>

  <div class="callout callout-exercise">
    <strong>Exercício — 10 minutos</strong>
    Lembra do prompt que você escreveu no Ato 2? Vamos reescrevê-lo usando o framework PACEF.
  </div>

  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Abra a conversa que você fez no Ato 2 (ou comece uma nova)</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Reescreva o mesmo pedido usando os 6 blocos do PACEF</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Compare o resultado com o primeiro prompt — a diferença é visível?</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Adicione um "pulo do gato" (ex: "liste os riscos antes de recomendar") e veja o que muda</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Salve o prompt melhorado — ele já é um ativo reutilizável do seu trabalho</span>
    </li>
  </ul>
</div>
```

- [ ] **Step 4:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: adicionar conteúdo do Ato 3 (Comunicar com IA)"
```

---

## Task 7: Ato 4 — IA no Trabalho (3 blocos)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

Inserir sections d4-b1, d4-b2, d4-b3 após d3-b3.

### d4-b1 — Casos por Área (personalizável)

- [ ] **Step 1:** Inserir após d3-b3:
```html
<!-- ═══════════════ ATO 4 ══════════════════════════════════ -->

<!-- ATO 4 / BLOCO 1 — PERSONALIZÁVEL -->
<div class="section" data-section="d4-b1" data-day="4" data-block="1">
  <div class="section-kicker">Ato 4 · Bloco 1</div>
  <div class="section-title">IA na [SUBSTITUIR: SETOR].</div>
  <div class="section-subtitle">Casos de uso reais para a sua área</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <p>Os casos abaixo foram selecionados especificamente para as áreas da <strong>[SUBSTITUIR: NOME_EMPRESA]</strong>. São tarefas que podem ser feitas hoje, com as ferramentas gratuitas que você já tem acesso.</p>

  [SUBSTITUIR: CASOS_AREA_1]

  [SUBSTITUIR: CASOS_AREA_2]

  <div class="callout callout-tip">
    <strong>Como escolher por onde começar</strong>
    Escolha a tarefa que você mais odeia fazer manualmente. Provavelmente é repetitiva, tem um padrão claro e a IA pode assumir boa parte dela. Comece por aí.
  </div>
</div>
```

### d4-b2 — Assistentes Personalizados

- [ ] **Step 2:** Inserir após d4-b1:
```html
<!-- ATO 4 / BLOCO 2 -->
<div class="section" data-section="d4-b2" data-day="4" data-block="2">
  <div class="section-kicker">Ato 4 · Bloco 2</div>
  <div class="section-title">Assistentes Personalizados.</div>
  <div class="section-subtitle">Custom GPTs e Gems — IA que já conhece sua empresa</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>O que são</h2>
  <p>São versões do ChatGPT ou Gemini configuradas especificamente para uma função da sua empresa. Em vez de dar contexto toda vez, você configura uma vez e usa sempre.</p>

  <div class="card card-accent">
    <h3>A analogia certa</h3>
    <p>É como contratar um funcionário virtual que já conhece a empresa, os produtos, o tom de voz e o que fazer — sem precisar explicar de novo toda vez. O custo: 30 minutos de configuração inicial.</p>
  </div>

  <h2>Como criar um Custom GPT (OpenAI)</h2>
  <ol class="stepper">
    <li class="step">
      <h4>Acesse chatgpt.com/create</h4>
      <p>Você precisa de conta ChatGPT. A versão gratuita permite criar GPTs básicos.</p>
    </li>
    <li class="step">
      <h4>Defina o objetivo e a persona</h4>
      <p>Ex: "Você é um assistente de atendimento da [empresa]. Responda sempre no tom cordial da marca. Nunca prometa prazos sem confirmar com a equipe."</p>
    </li>
    <li class="step">
      <h4>Escreva instruções detalhadas</h4>
      <p>Tom, escopo do que pode responder, o que fazer quando não souber, formato padrão de resposta.</p>
    </li>
    <li class="step">
      <h4>Anexe documentos da empresa</h4>
      <p>Playbook, manual de atendimento, FAQ, tabela de preços. O GPT vai usar como base de conhecimento.</p>
    </li>
    <li class="step">
      <h4>Teste com perguntas reais e publique</h4>
      <p>Compartilhe o link internamente com o time. Só quem tem o link consegue acessar.</p>
    </li>
  </ol>

  <h2>Como criar um Gem (Gemini)</h2>
  <ol class="stepper">
    <li class="step">
      <h4>Acesse gemini.google.com → Gerenciador de Gems</h4>
      <p>Disponível em contas Google. Integra com Google Drive, Gmail e Workspace.</p>
    </li>
    <li class="step">
      <h4>Preencha: Persona, Tarefa, Contexto, Formato</h4>
      <p>Use a mesma lógica do PACEF. Mais contexto = resultado melhor.</p>
    </li>
    <li class="step">
      <h4>Anexe documentos e teste</h4>
      <p>Documentos do Google Drive podem ser conectados diretamente.</p>
    </li>
  </ol>

  <h2>Ideias de assistentes para PMEs</h2>
  <div class="card">
    <h3>Assistente de Atendimento</h3>
    <p>Responde dúvidas frequentes de clientes usando o FAQ e política da empresa. Nunca improvisa — sempre consulta a base de conhecimento.</p>
  </div>
  <div class="card">
    <h3>Assistente Financeiro</h3>
    <p>Classifica lançamentos, gera resumos mensais em linguagem simples, simula cenários de fluxo de caixa com base em dados fornecidos.</p>
  </div>
  <div class="card">
    <h3>Assistente de RH</h3>
    <p>Redige vagas, cria roteiros de entrevista, gera planos de onboarding e PDI com base na cultura e nos cargos da empresa.</p>
  </div>
  <div class="card">
    <h3>Assistente Comercial</h3>
    <p>Cria e-mails de prospecção, roteiros de ligação, scripts de follow-up e análise de objeções com base no produto e ICP da empresa.</p>
  </div>
</div>
```

### d4-b3 — Contexto e RAG

- [ ] **Step 3:** Inserir após d4-b2:
```html
<!-- ATO 4 / BLOCO 3 -->
<div class="section" data-section="d4-b3" data-day="4" data-block="3">
  <div class="section-kicker">Ato 4 · Bloco 3</div>
  <div class="section-title">Contexto e RAG.</div>
  <div class="section-subtitle">Quanto melhor o contexto, melhor a resposta</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>Por que contexto importa</h2>
  <p>Sem contexto → a IA responde como se fosse para qualquer empresa do planeta.<br>Com contexto → a IA responde como se conhecesse profundamente o seu negócio.</p>
  <p>A diferença está no que você coloca <em>antes</em> da pergunta.</p>

  <h2>Bloco de contexto padrão — use como base</h2>
  <p>Crie um arquivo de texto com o contexto da sua empresa. Cole no início de cada conversa importante:</p>

  <div class="prompt-block">
    <span class="code-block-label">CONTEXTO PADRÃO — ADAPTE PARA SUA EMPRESA</span>
    <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
    <p>Empresa: [nome da empresa]<br>Setor: [setor de atuação]<br>Tamanho: [número de funcionários]<br>Público atendido: [perfil dos clientes]<br>Principais serviços/produtos: [lista]<br>Tom de comunicação: [formal/informal/cordial]<br>Ferramentas que usamos: [lista]<br>O que não fazer: [restrições importantes]</p>
  </div>

  <h2>Três formas de dar contexto</h2>

  <details class="toggle">
    <summary>1. No próprio prompt — a forma mais simples</summary>
    <div class="toggle-content">
      <p>Cole o bloco de contexto no início do prompt. Funciona em qualquer ferramenta. Basta criar o texto uma vez e reutilizar.</p>
    </div>
  </details>

  <details class="toggle">
    <summary>2. Via upload de documentos — para conteúdo extenso</summary>
    <div class="toggle-content">
      <p>ChatGPT e Gemini aceitam PDFs, planilhas e documentos Word. Cole o arquivo e peça para a IA usar "apenas o documento anexado como fonte". Ideal para manuais, playbooks e contratos.</p>
    </div>
  </details>

  <details class="toggle">
    <summary>3. RAG — o próximo nível (ferramentas avançadas)</summary>
    <div class="toggle-content">
      <p><strong>RAG (Retrieval-Augmented Generation)</strong> é quando ferramentas como N8N ou LangChain indexam seus documentos e a IA busca neles antes de responder — de forma automática, sem você precisar fazer upload manualmente.</p>
      <p>Evita que a IA invente políticas ou dados que não existem. É como dar uma biblioteca interna completa para o assistente.</p>
    </div>
  </details>

  <h2>O limite mais importante: alucinação</h2>

  <div class="callout callout-warn">
    <strong>A IA inventa fatos com confiança</strong>
    Quando a IA não sabe algo, ela não diz "não sei" — ela preenche o vazio com texto plausível que soa verdadeiro. Isso se chama alucinação. Nunca use dados, números ou referências geradas pela IA sem verificar nas fontes originais.
  </div>

  <h2>Quando confiar e quando verificar</h2>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Confie</th><th>Verifique sempre</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Texto redigido sobre tema que você conhece</td>
          <td>Dados numéricos, datas, nomes de pessoas</td>
        </tr>
        <tr>
          <td>Estrutura de documento, formatação</td>
          <td>Citações, referências legais, informações técnicas críticas</td>
        </tr>
        <tr>
          <td>Brainstorming de ideias e opções</td>
          <td>Qualquer coisa que vai para o cliente sem revisão</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

- [ ] **Step 4:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: adicionar conteúdo do Ato 4 (IA no Trabalho)"
```

---

## Task 8: Ato 5 — Próximos Passos (2 blocos)

**Files:**
- Modify: `projects/treinamentos/templates/template-material-apoio-filled.html`

Inserir sections d5-b1, d5-b2 após d4-b3, antes do `</main>`.

### d5-b1 — N8N e Automações

- [ ] **Step 1:** Inserir após d4-b3:
```html
<!-- ═══════════════ ATO 5 ══════════════════════════════════ -->

<!-- ATO 5 / BLOCO 1 -->
<div class="section" data-section="d5-b1" data-day="5" data-block="1">
  <div class="section-kicker">Ato 5 · Bloco 1</div>
  <div class="section-title">O Nível 4.</div>
  <div class="section-subtitle">N8N e automações — IA que trabalha enquanto você dorme</div>
  <span class="badge badge-time">20 minutos</span>
  <hr>

  <h2>O que é automação com IA</h2>
  <p>Nos atos anteriores, você aprendeu a usar IA interativamente — você faz a pergunta, ela responde. O Nível 4 é diferente: a IA fica integrada aos seus sistemas e <strong>executa tarefas automaticamente, sem intervenção humana</strong>.</p>

  <div class="card card-accent">
    <h3>A diferença entre Nível 3 e Nível 4</h3>
    <p><strong>Nível 3:</strong> você abre o ChatGPT, escreve o prompt, recebe a resposta, copia para o sistema.<br><strong>Nível 4:</strong> o trigger acontece (novo lead, e-mail recebido, formulário preenchido) → a IA processa → o resultado já aparece no CRM, no WhatsApp, na planilha — sem você tocar.</p>
  </div>

  <h2>N8N — Automação sem código</h2>
  <p><strong>N8N</strong> é uma ferramenta de automação que conecta sistemas e integra IA nos fluxos de trabalho. Sem código. Visual. Funciona como um "se isso, então aquilo" — mas com IA no meio.</p>

  <h2>Exemplo de fluxo real</h2>
  <ol class="stepper">
    <li class="step">
      <h4>Trigger: mensagem no WhatsApp</h4>
      <p>Um cliente envia uma mensagem com dúvida ou pedido de agendamento.</p>
    </li>
    <li class="step">
      <h4>IA lê e classifica a mensagem</h4>
      <p>ChatGPT ou Claude identifica se é: agendamento, dúvida, reclamação ou outro.</p>
    </li>
    <li class="step">
      <h4>Ação automática baseada na classificação</h4>
      <p>Se agendamento → abre link de calendário.<br>Se dúvida → responde com o FAQ.<br>Se reclamação → alerta o responsável.</p>
    </li>
    <li class="step">
      <h4>CRM atualizado automaticamente</h4>
      <p>A interação é registrada no sistema com categoria e status — sem a equipe precisar fazer nada.</p>
    </li>
  </ol>

  <h2>Casos de automação para PMEs</h2>
  <div class="card">
    <h3>Confirmação automática de consultas/reuniões</h3>
    <p>Sistema envia mensagem 24h antes → cliente confirma → agenda atualizada. Sem recepcionista ligando.</p>
  </div>
  <div class="card">
    <h3>Follow-up pós-atendimento</h3>
    <p>24h após o atendimento → IA envia mensagem personalizada com próximos passos e pergunta de satisfação.</p>
  </div>
  <div class="card">
    <h3>Qualificação automática de leads</h3>
    <p>Lead preenche formulário → IA analisa o perfil → classifica como quente/morno/frio → notifica o comercial com prioridade.</p>
  </div>
  <div class="card">
    <h3>Cobrança inteligente de inadimplentes</h3>
    <p>Sistema identifica vencimento → IA gera mensagem personalizada com o nome e valor → WhatsApp enviado → resposta registrada.</p>
  </div>

  <div class="callout callout-tip">
    <strong>Isso é o que a Vektoz faz</strong>
    A Vektoz implementa automações como essas em empresas brasileiras. Se quiser dar o próximo passo: www.vektoz.com.br
  </div>
</div>
```

### d5-b2 — Roadmap 30 dias + Recursos

- [ ] **Step 2:** Inserir após d5-b1:
```html
<!-- ATO 5 / BLOCO 2 -->
<div class="section" data-section="d5-b2" data-day="5" data-block="2">
  <div class="section-kicker">Ato 5 · Bloco 2</div>
  <div class="section-title">Seus 30 dias com IA.</div>
  <div class="section-subtitle">Roadmap prático para sair daqui usando de verdade</div>
  <span class="badge badge-time">15 minutos</span>
  <hr>

  <h2>Semana 1 — Familiarização (Nível 1 → 2)</h2>
  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Usar IA pelo menos 1x por dia em tarefas reais (resumos, e-mails, análises)</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Testar o framework PACEF em pelo menos 3 situações diferentes</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Anotar os 2–3 casos onde a IA mais ajudou no seu trabalho</span>
    </li>
  </ul>

  <h2>Semana 2 — Aprofundamento (Nível 2)</h2>
  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Criar um Custom GPT ou Gem para a sua área principal</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Testar com documentos reais da empresa (playbook, manual, FAQ)</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Compartilhar com o time e coletar feedback</span>
    </li>
  </ul>

  <h2>Semanas 3–4 — Integração (Nível 2 → 3)</h2>
  <ul class="checklist">
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Montar o bloco de contexto padrão da empresa em um arquivo de texto</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Criar 2–3 prompts reutilizáveis para as tarefas mais frequentes</span>
    </li>
    <li onclick="toggleCheck(this)">
      <span class="checklist-box">✓</span>
      <span class="checklist-text">Identificar 1 processo que poderia ser automatizado (Nível 4) — e apresentar para o gestor</span>
    </li>
  </ul>

  <div class="callout callout-warn">
    <strong>A regra mais importante</strong>
    Quem usa IA toda hora fica bom em IA. Quem usa uma vez por semana não evolui. O segredo é volume de tentativas — não perfeição no primeiro prompt.
  </div>

  <hr>
  <h2>Recursos para continuar</h2>

  <h3>Cursos gratuitos</h3>
  <ul>
    <li><strong>Generative AI for Everyone</strong> — Andrew Ng (DeepLearning.AI) — ~3h, ideal para iniciantes</li>
    <li><strong>AI for Everyone</strong> — Andrew Ng (Coursera) — foco em líderes de negócio</li>
  </ul>

  <h3>Ferramentas para começar hoje</h3>
  <ul>
    <li><strong>ChatGPT</strong> (chat.openai.com) — mais usado no Brasil, versão gratuita disponível</li>
    <li><strong>Gemini</strong> (gemini.google.com) — integrado ao Google Workspace</li>
    <li><strong>Claude</strong> (claude.ai) — excelente para textos longos e análise de documentos</li>
  </ul>

  <hr>
  <h2>Sobre a Vektoz</h2>
  <div class="card card-accent">
    <p>A <strong>Vektoz</strong> é uma agência especializada em automações e IA para empresas brasileiras. Se você quer implementar o <strong>Nível 4</strong> — IA integrada aos seus sistemas, rodando 24/7 sem intervenção manual — fale com a gente.</p>
    <p>Não é tutorial de fim de semana. É projeto profissional com integração, segurança e resultado.</p>
    <p>
      <a href="mailto:contato@vektoz.com.br">contato@vektoz.com.br</a> ·
      <a href="https://www.vektoz.com.br" target="_blank">www.vektoz.com.br</a>
    </p>
  </div>

  <p style="text-align:center; font-size:12px; color:var(--text-ter); margin-top:48px;">
    Material preparado por <strong>Vektoz</strong> · [SUBSTITUIR: DATA] · Uso exclusivo para <strong>[SUBSTITUIR: NOME_EMPRESA]</strong>
  </p>
</div>
```

- [ ] **Step 3:** Commit
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "feat: adicionar conteúdo do Ato 5 (Próximos Passos)"
```

---

## Task 9: Verificar navegação e renderização

**Files:**
- Read: `projects/treinamentos/templates/template-material-apoio-filled.html`

- [ ] **Step 1:** Verificar que todas as 16 seções existem no HTML (`home`, `d1-b1` a `d5-b2`)
```bash
grep -c 'data-section=' projects/treinamentos/templates/template-material-apoio-filled.html
# Expected: 16
```

- [ ] **Step 2:** Verificar que todos os `data-target` da sidebar existem como `data-section` no main
```bash
grep 'data-target=' projects/treinamentos/templates/template-material-apoio-filled.html
# Deve listar: home, d1-b1..d1-b3, d2-b1..d2-b3, d3-b1..d3-b3, d4-b1..d4-b3, d5-b1..d5-b2
```

- [ ] **Step 3:** Verificar que todos os placeholders `[SUBSTITUIR:` estão presentes
```bash
grep -o '\[SUBSTITUIR: [^]]*\]' projects/treinamentos/templates/template-material-apoio-filled.html | sort | uniq
# Expected: NOME_EMPRESA, LOGO_URL (se existir), DATA, SETOR, DADO_MERCADO, CASOS_AREA_1, CASOS_AREA_2, PROMPT_EXEMPLO
```

- [ ] **Step 4:** Abrir o arquivo no browser e navegar por todos os 5 atos verificando:
  - Header atualiza o botão ativo ao trocar de ato
  - Sidebar destaca o bloco atual
  - Progress bar avança corretamente dentro de cada ato
  - Botões Anterior/Próximo funcionam do Home ao d5-b2

- [ ] **Step 5:** Commit se houver correções
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-filled.html
rtk git commit -m "fix: corrigir problemas de navegação encontrados na verificação"
```

---

## Task 10: Criar template-material-apoio-empty.html

**Files:**
- Create: `projects/treinamentos/templates/template-material-apoio-empty.html`

O arquivo vazio mantém toda a estrutura (CSS, JS, navegação, sidebar, header) mas remove o conteúdo dos blocos. Cada section fica com: kicker + título genérico + badge de tempo + placeholder `<!-- conteúdo aqui -->`.

- [ ] **Step 1:** Ler o filled.html completo

- [ ] **Step 2:** Criar o empty.html com as seguintes regras de transformação:
  - `<title>` → `[SUBSTITUIR: Nome do Treinamento] — Material de Apoio`
  - Sidebar: manter estrutura, trocar títulos por `[SUBSTITUIR: Título Bloco X]`
  - Header: manter com botões Ato 1–5
  - Home section: substituir conteúdo por versão genérica com `[SUBSTITUIR: NOME_EMPRESA]`, `[SUBSTITUIR: DATA]` e cards de ato genéricos
  - Seções d1-b1 a d5-b2: manter `section-kicker`, `section-title` e `section-subtitle` como `[SUBSTITUIR: ...]`, badge de tempo como `XX minutos`, e um comentário `<!-- conteúdo aqui -->`
  - Manter JS completo (SECTIONS, DAY_SECTIONS, TITLES com valores reais dos IDs)
  - CSS: idêntico

Estrutura de cada section no empty:
```html
<div class="section" data-section="d1-b1" data-day="1" data-block="1">
  <div class="section-kicker">Ato 1 · Bloco 1</div>
  <div class="section-title">[SUBSTITUIR: Título do Bloco.]</div>
  <div class="section-subtitle">[SUBSTITUIR: subtítulo]</div>
  <span class="badge badge-time">XX minutos</span>
  <hr>
  <!-- conteúdo aqui -->
</div>
```

- [ ] **Step 3:** Verificar que o empty.html abre no browser e navega corretamente entre os 5 atos (sem conteúdo, mas com navegação funcional)

- [ ] **Step 4:** Commit final
```bash
rtk git add projects/treinamentos/templates/template-material-apoio-empty.html
rtk git commit -m "feat: criar template-material-apoio-empty.html (estrutura sem conteúdo)"
```

---

## Checklist Final

- [ ] `template-material-apoio-filled.html` existe em `projects/treinamentos/templates/`
- [ ] `template-material-apoio-empty.html` existe em `projects/treinamentos/templates/`
- [ ] `template-material-apoio.html` original **não foi modificado**
- [ ] Navegação funciona nos dois arquivos: Home → Ato 5 B2, prev/next, sidebar, header
- [ ] 8 placeholders `[SUBSTITUIR: ...]` presentes no filled.html nas posições corretas
- [ ] Nenhuma referência a modelos desatualizados (Gemini 1.5, GPT-4 sem sufixo, Claude 3 sem ressalva)
