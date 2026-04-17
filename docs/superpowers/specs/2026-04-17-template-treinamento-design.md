# Spec: Template Material de Apoio — Treinamento de IA (Vektoz)

**Data:** 2026-04-17  
**Projeto:** `projects/treinamentos/`  
**Output esperado:** HTML template preenchido + HTML template vazio (duplicata)

---

## Objetivo

Expandir e preencher o template HTML `template-material-apoio.html` com o conteúdo do treinamento de IA da Vektoz, organizado em 5 atos com 2–3 blocos cada. O resultado deve ser:

1. **`template-material-apoio-filled.html`** — conteúdo completo com placeholders para dados do cliente
2. **`template-material-apoio-empty.html`** — duplicata estruturalmente idêntica, sem conteúdo (só placeholders)

Ambos ficam em `projects/treinamentos/templates/`.

---

## Fontes de Conteúdo

- `projects/treinamentos/content/base-curriculum.md` — 13 módulos (fonte principal)
- `projects/treinamentos/templates/material-apoio-template.md` — versão MD atualizada
- PDF `Compressed - Apresentação Rondave.pdf` — 64 slides da apresentação usada em sala
- Modelos de IA atualizados para abril de 2026: GPT-4o / o3 / GPT-5, Gemini 2.5 Pro, Claude Sonnet 4.6

---

## Estrutura de Navegação

```
Home (capa + instruções de uso do material)
├── Ato 1: Contexto (3 blocos)
│   ├── B1 — A Revolução da IA
│   ├── B2 — Evolução e Mercado
│   └── B3 — IA e Profissões
├── Ato 2: Fundamentos (3 blocos)
│   ├── B1 — Como a IA Funciona
│   ├── B2 — Glossário Visual
│   └── B3 — Níveis de Uso
├── Ato 3: Comunicar com IA (3 blocos)
│   ├── B1 — Tipos de Prompt
│   ├── B2 — Framework de Prompt (PACEF / 6 blocos)
│   └── B3 — Técnicas Avançadas + Mão na Massa
├── Ato 4: IA no Trabalho (3 blocos)
│   ├── B1 — Casos por Área  ← PERSONALIZÁVEL
│   ├── B2 — Assistentes Personalizados
│   └── B3 — Contexto e RAG
└── Ato 5: Próximos Passos (2 blocos)
    ├── B1 — Nível 4: N8N e Automações
    └── B2 — Roadmap 30 dias + Recursos
```

**Total de seções JS:** 16 (`home` + `d1-b1` … `d5-b2`)

---

## Conteúdo por Bloco

### Home
- Nome da empresa, logo, data, formato, duração
- Instrução de uso do material digital
- Placeholders: `[SUBSTITUIR: NOME_EMPRESA]`, `[SUBSTITUIR: LOGO_URL]`, `[SUBSTITUIR: DATA]`

### Ato 1 — Contexto

**B1 — A Revolução da IA**
- O que é IA generativa (definição simples)
- Por que agora? (custo caiu 280x, modelos menores com desempenho de gigantes)
- Analogia: a IA como novo tipo de colaborador
- Componente: `.callout` de abertura + card com dado de impacto global

**B2 — Evolução e Mercado**
- Timeline 2023–2026 (tabela): ChatGPT → GPT-4o → GPT-5, Gemini 1.0 → 2.5 Pro, Claude 1 → 4.x
- Dados Brasil: IBGE/Pintec 41,9%, Sebrae/FGV 96%/15%, Bain +14% produtividade
- Dado de mercado do setor do cliente
- Placeholders: `[SUBSTITUIR: SETOR]`, `[SUBSTITUIR: DADO_MERCADO]`
- Componente: `<table>` + `.card` com número grande

**B3 — IA e Profissões**
- Quais profissões mudam e como (não substituição, mas transformação do trabalho)
- Nível de exposição por função (tabela: rotineiro → criativo → relacional)
- Mensagem: quem usa IA bem é mais valioso, não substituído
- Componente: `<table>` + `.callout` motivacional

### Ato 2 — Fundamentos

**B1 — Como a IA Funciona**
- LLMs: o que são, como funcionam (tokens, probabilidade)
- Janela de contexto, temperatura
- Fluxo: prompt → tokens → geração → resposta
- Componente: `.stepper` com 4 passos + `.callout` "não existe mágica, existe estatística"

**B2 — Glossário Visual**
- 12 termos principais em cards/tabela: IA generativa, LLM, Token, Contexto, Temperatura, Prompt, Prompt engineering, Persona, Embeddings, RAG, Alucinação, Agente
- Componente: `<table>` com coluna termo + explicação simples + `<details>` para expandir exemplos

**B3 — Níveis de Uso**
- Os 4 níveis (tabela): Google turbinado → Analista assistido → Copiloto de processo → Orquestração
- "Onde você está agora" → calibrar expectativa
- **Mão na massa #1:** abrir ChatGPT/Gemini e escrever primeiro prompt sobre o trabalho
- Componente: `<table>` + `.checklist` com passos do exercício

### Ato 3 — Comunicar com IA

**B1 — Tipos de Prompt**
- Zero-shot: instrução direta sem exemplo
- Few-shot: instrução + exemplos
- Chain-of-thought: "pense passo a passo"
- Comparação dos 3 com exemplo de cada
- Componente: 3 `.card` lado a lado + `.prompt-block` para cada exemplo

**B2 — Framework de Prompt (PACEF / 6 blocos)**
- Os 6 blocos: Papel, Objetivo, Contexto, Tarefas, Formato, Restrições
- Exemplo completo aplicado (genérico, sem setor específico)
- Placeholder: `[SUBSTITUIR: PROMPT_EXEMPLO]` para versão com setor do cliente
- Componente: `.stepper` com 6 passos + `.prompt-block` do exemplo

**B3 — Técnicas Avançadas**
- Tabela de pulos do gato: Advogado do diabo, Honestidade brutal, Perguntar antes de responder, Raciocínio passo a passo, Gerar alternativas, Restrições explícitas
- Erros comuns (lista)
- **Mão na massa #2:** reescrever o prompt do exercício anterior usando o framework PACEF
- Componente: `<table>` + `.checklist` com passos do exercício

### Ato 4 — IA no Trabalho

**B1 — Casos por Área** ← PERSONALIZÁVEL
- Casos de uso por área da empresa cliente
- Placeholders: `[SUBSTITUIR: CASOS_AREA_1]`, `[SUBSTITUIR: CASOS_AREA_2]`
- Estrutura fixa: nome da área como subtítulo + lista de 3–5 casos
- Componente: `.card` por área

**B2 — Assistentes Personalizados**
- O que são Custom GPTs e Gems
- Analogia: "funcionário virtual que já conhece a empresa"
- Passo a passo de criação (Custom GPT e Gem)
- Ideias genéricas de assistentes para PMEs
- Componente: `.stepper` de criação + lista de ideias

**B3 — Contexto e RAG**
- Por que contexto importa
- Como dar contexto no prompt (bloco de texto padrão)
- Upload de documentos
- RAG como próximo nível
- Limite da IA: alucinação, quando não confiar
- Componente: `.prompt-block` com bloco de contexto padrão + `.callout` de aviso sobre alucinação

### Ato 5 — Próximos Passos

**B1 — Nível 4: N8N e Automações**
- O que é automação com IA (sem código)
- Exemplo de fluxo N8N: WhatsApp → IA qualifica → CRM atualiza
- Casos de uso para PMEs (3–4 exemplos)
- Posicionado como "o próximo nível" sem CTA explícito
- Componente: `.stepper` de fluxo + `.card` com exemplos

**B2 — Roadmap 30 dias + Recursos**
- Checklist Semana 1–4 (do template MD)
- Recursos: cursos gratuitos, vídeos, ferramentas
- Sobre a Vektoz (fixo): automações e IA para PMEs brasileiras — www.vektoz.com.br / contato@vektoz.com.br
- Componente: `.checklist` por semana + lista de recursos

---

## Placeholders por Arquivo

| Placeholder | Seção | Quem preenche |
|---|---|---|
| `[SUBSTITUIR: NOME_EMPRESA]` | Home, cabeçalho, rodapé | Skill `/treinamento-material` |
| `[SUBSTITUIR: LOGO_URL]` | Home | Skill `/treinamento-material` |
| `[SUBSTITUIR: DATA]` | Home, rodapé | Skill `/treinamento-material` |
| `[SUBSTITUIR: SETOR]` | Ato 1 B2 | Skill `/treinamento-material` |
| `[SUBSTITUIR: DADO_MERCADO]` | Ato 1 B2 | Skill `/treinamento-material` |
| `[SUBSTITUIR: CASOS_AREA_1]` | Ato 4 B1 | Skill `/treinamento-material` |
| `[SUBSTITUIR: CASOS_AREA_2]` | Ato 4 B1 | Skill `/treinamento-material` |
| `[SUBSTITUIR: PROMPT_EXEMPLO]` | Ato 3 B2 | Skill `/treinamento-material` |

---

## Mudanças Técnicas no HTML

### JavaScript — arrays de navegação
```js
const SECTIONS = [
  'home',
  'd1-b1','d1-b2','d1-b3',
  'd2-b1','d2-b2','d2-b3',
  'd3-b1','d3-b2','d3-b3',
  'd4-b1','d4-b2','d4-b3',
  'd5-b1','d5-b2'
];

const DAY_SECTIONS = {
  '1': ['d1-b1','d1-b2','d1-b3'],
  '2': ['d2-b1','d2-b2','d2-b3'],
  '3': ['d3-b1','d3-b2','d3-b3'],
  '4': ['d4-b1','d4-b2','d4-b3'],
  '5': ['d5-b1','d5-b2']
};
```

### Header — botões de ato
Adicionar botões `data-day="3"`, `data-day="4"`, `data-day="5"` ao header nav.

### Sidebar
Adicionar grupos de links para Ato 3, 4 e 5 espelhando os `data-target` das seções.

### Modelos de IA atualizados (abril 2026)
- GPT-3.5 / GPT-4 → GPT-4o, o3, GPT-5
- Gemini 1.5 → Gemini 2.5 Pro
- Claude 3 → Claude Sonnet 4.6 / Claude 4.x

---

## Arquivos de Output

```
projects/treinamentos/templates/
├── template-material-apoio-filled.html   ← conteúdo completo + placeholders
└── template-material-apoio-empty.html    ← estrutura idêntica, sem conteúdo
```

O arquivo original `template-material-apoio.html` permanece intocado (referência).

---

## Fora do Escopo

- Integração com Google Docs/Slides (skill `/treinamento-material` cuida disso)
- Versão PDF do material
- Seção "Espaço para Anotações" (removida conforme solicitado)
- CTA explícito para contratar a Vektoz (Nível 4 implica, sem botão/link direto)
