# Reorganização do Projeto IA — Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganizar o projeto IA para que cada contexto carregue só quando é relevante, sem perda de informação ou performance.

**Architecture:** CLAUDE.md raiz fica com essenciais globais. Um CLAUDE.md em `projects/criacao-de-conteudo/` carrega contexto de conteúdo só quando trabalhando nessa área. Skills de conteúdo ficam corrigidas e autocontidas.

**Tech Stack:** Claude Code CLAUDE.md hierarchy, markdown, git para safety net.

---

## Task 1: Safety net — commit estado atual

**Files:**
- Todos os arquivos untracked e modificados

- [ ] **Step 1: Verificar o que será commitado**
```bash
rtk git status
```

- [ ] **Step 2: Commitar tudo**
```bash
git add .claude/skills/isca-linkedin/SKILL.md
git add .claude/skills/autoridade-linkedin/SKILL.md
git add .claude/skills/post-linkedin/SKILL.md
git add .claude/skills/feedback/SKILL.md
git add .claude/rules/execucao.md
git add projects/criacao-de-conteudo/aprendizados.md
git add projects/criacao-de-conteudo/estrategia-linkedin-2026.md
git add references/modelo-isca-notion.md
git add references/modelo-post-linkedin.md
git add references/skill-igor-linkedin-isca.md
git add CLAUDE.md
git add projects/criacao-de-conteudo/backlog-temas.md
git add projects/criacao-de-conteudo/memoria-editorial.md
git commit -m "chore: snapshot antes da reorganização do projeto"
```

Resultado esperado: commit criado, ponto de restauração garantido.

---

## Task 2: Criar CLAUDE.md em projects/criacao-de-conteudo/

**Files:**
- Create: `projects/criacao-de-conteudo/CLAUDE.md`

Este arquivo carrega automaticamente quando Claude trabalha dentro de `projects/criacao-de-conteudo/`. Centraliza o contexto de conteúdo que hoje está espalhado no CLAUDE.md raiz e dentro das skills.

- [ ] **Step 1: Criar o arquivo**

Conteúdo do arquivo:

```markdown
# Contexto — Criação de Conteúdo Vektoz

## ICP (sempre em mente)

Público-alvo: donos e gestores de PME brasileira (clínicas, imobiliárias, escolas/cursos, financeiras pequenas, serviços locais).
- Faturamento: R$ 80k–400k/mês, 5–40 funcionários
- Canal crítico: WhatsApp
- Dores: resposta lenta, lead perdido, follow-up inconsistente, cobrança manual
- Linguagem que funciona: resultado operacional (tempo, receita, custo, escala)
- Nunca: jargão de IA, linguagem de tech, termos como "LLM", "token", "fine-tuning"

## Identidade Vektoz

- Autor: Eduardo Salles, CEO da Vektoz
- Posicionamento: "Ajudo empresários a implementarem IA de forma estratégica e assertiva"
- CTA padrão: cal.com/vektoz-ed/bate-papo
- Tom: direto, sem enrolação, frases curtas, máximo 12 palavras por frase
- Nunca mencionar: Igor Miguel, Lucas, Nexus, Nexusmind, Nexus Mind, ou qualquer player concorrente
- Nunca incluir: links de comunidade Discord de terceiros

## Arquivos de referência desta área

- `memoria-editorial.md` — aprendizados de performance. Ler antes de criar qualquer conteúdo.
- `backlog-temas.md` — temas aprovados para próximos posts
- `estrategia-linkedin-2026.md` — estratégia e diretrizes do canal
- `aprendizados.md` — registro de aprendizados gerais de conteúdo

## Skills disponíveis para esta área

- `/post-linkedin` — post LinkedIn de alto engajamento com isca (CTA de keyword)
- `/autoridade-linkedin` — post LinkedIn de autoridade sem isca (Founder Led Growth)
- `/isca-linkedin` — página Notion de isca a partir do post
- `/feedback` — registra aprendizado de performance após revisar resultados
```

- [ ] **Step 2: Verificar que o arquivo foi criado corretamente**

Ler o arquivo e confirmar que o conteúdo está correto.

- [ ] **Step 3: Commit**
```bash
git add projects/criacao-de-conteudo/CLAUDE.md
git commit -m "feat: add CLAUDE.md para contexto de criacao-de-conteudo"
```

---

## Task 3: Enxugar o CLAUDE.md raiz

**Files:**
- Modify: `CLAUDE.md`

Remover os @context que não são universais. O ICP e identidade Vektoz agora vivem no CLAUDE.md de criacao-de-conteudo. O raiz fica só com o que é verdadeiramente global.

- [ ] **Step 1: Editar CLAUDE.md raiz**

Novo conteúdo:

```markdown
# Assistente Executivo — Eduardo / Vektoz

Eduardo Salles, CEO da Vektoz — agência de automações e IA, Brasil.
Cuida de marketing, tráfego, comercial, vendas e conteúdo.
Meta imediata: 30k MRR em 3 meses com 10–12 clientes ativos.
Fuso horário: Brasília, UTC-3.
Nunca deletar arquivos — mover para `archives/`.

## Contexto global

@context/goals.md

Para contexto de time e operacional, ler `context/work.md` e `context/team.md` quando necessário.

## Skills

Skills ficam em `.claude/skills/`. Cada skill tem sua pasta com um `SKILL.md`.

### Prontas
- `post-linkedin` — post LinkedIn de alto engajamento com isca (CTA de keyword)
- `autoridade-linkedin` — post LinkedIn de autoridade sem isca (Founder Led Growth)
- `isca-linkedin` — página Notion de isca a partir do post
- `feedback` — registra aprendizado de performance

### Backlog
- `copy-anuncios` — copy para anúncios Meta
- `proposta-comercial` — proposta para prospects
- `briefing-agente` — briefing para novo agente de automação
- `setup-meta-ads` — checklist de campanha Meta Ads

## Ferramentas e Produtos

Se Eduardo citar uma ferramenta, software, IA ou produto desconhecido ou com versão incerta, pesquisar com WebSearch antes de responder. Nunca assumir versão ou funcionalidade de memória.

## Decisões

Decisões importantes: `decisions/log.md` (somente adição).
Aprendizados de conteúdo: `projects/criacao-de-conteudo/aprendizados.md`
```

- [ ] **Step 2: Verificar o diff**
```bash
rtk git diff CLAUDE.md
```

- [ ] **Step 3: Commit**
```bash
git add CLAUDE.md
git commit -m "refactor: enxugar CLAUDE.md raiz, mover contexto de conteudo para subpasta"
```

---

## Task 4: Corrigir isca-linkedin skill (3 pontos críticos)

**Files:**
- Modify: `.claude/skills/isca-linkedin/SKILL.md`

Correções identificadas no code review:
1. **Sem gate de input** — skill começa sem verificar se tema e promessa foram fornecidos
2. **CTA contraditório** — padrão obrigatório (genérico) conflita com regra de produção (ponte temática)
3. **Etapa 4 sem aviso de formatação** — Notion via MCP não preserva callouts/tabelas automaticamente

- [ ] **Step 1: Adicionar gate de input no topo do fluxo**

Antes da seção "## Fluxo", adicionar:

```markdown
## Input obrigatório

Antes de iniciar qualquer etapa, verificar se Eduardo forneceu:
1. **Tema da isca** — o assunto central do guia
2. **Promessa do post** — o que o post prometeu entregar ao lead

Se algum dos dois estiver faltando, solicitar antes de continuar. Não presumir nem inventar.
```

- [ ] **Step 2: Resolver contradição do CTA**

Substituir a seção "### Padrão de CTA final (obrigatório)" pelo seguinte:

```markdown
### Padrão de CTA final (obrigatório)

O CTA não é genérico. Deve fazer a ponte entre o tema da isca e o que a Vektoz implementa. Estrutura obrigatória:

1. "Você aprendeu a fazer [X específico do tema]"
2. "A mesma lógica se aplica a [outros processos operacionais do ICP]"
3. "Isso é o que a Vektoz implementa"
4. Convite para reunião + link cal.com/vektoz-ed/bate-papo

Exemplo para isca sobre atendimento WhatsApp:
> Você aprendeu a montar um fluxo de atendimento que responde em segundos e nunca perde um lead.
> A mesma lógica se aplica a agendamentos, cobranças e follow-up de vendas.
> É exatamente isso que a Vektoz implementa nas operações dos nossos clientes.
>
> Se quiser aplicar isso no seu negócio: agende 30 minutos comigo →
> https://cal.com/vektoz-ed/bate-papo

> **Nota pós-criação:** O MCP não suporta criação de marcadores via API. Após criar a página no Notion, cole `https://cal.com/vektoz-ed/bate-papo` no final → selecione "Criar marcador". Aparece o card com nome, descrição e foto do Eduardo.
```

- [ ] **Step 3: Adicionar aviso de formatação na Etapa 4**

Após a instrução de criar a página, adicionar:

```markdown
> **Atenção formatação:** O MCP cria a página com texto estruturado, mas callouts coloridos, tabelas e checklists podem não ser preservados automaticamente. Após criar, revisar no Notion e ajustar a formatação visual conforme o padrão de excelência definido acima.
```

- [ ] **Step 4: Verificar o arquivo final**

Ler o SKILL.md completo e confirmar que:
- Gate de input está antes do fluxo
- Não existe mais o bloco de CTA genérico
- Aviso de formatação está na Etapa 4
- Nenhuma instrução foi removida por engano

- [ ] **Step 5: Commit**
```bash
git add .claude/skills/isca-linkedin/SKILL.md
git commit -m "fix: corrigir 3 pontos criticos da skill isca-linkedin"
```

---

## Task 5: Verificação final

- [ ] **Step 1: Verificar estrutura de arquivos**
```bash
rtk ls .claude/skills/
rtk ls projects/criacao-de-conteudo/
```

- [ ] **Step 2: Confirmar que não há referências ao ICP ou identidade Vektoz no CLAUDE.md raiz**
```bash
grep -n "ICP\|PME\|clínica\|imobiliária\|cal.com" CLAUDE.md
```
Resultado esperado: nenhuma ocorrência (essas informações agora vivem no CLAUDE.md de subpasta e nas skills).

- [ ] **Step 3: Confirmar que goals.md ainda é referenciado no raiz**
```bash
grep "goals" CLAUDE.md
```
Resultado esperado: `@context/goals.md` presente.

- [ ] **Step 4: Confirmar que a skill isca-linkedin tem gate de input**
```bash
grep -n "Input obrigatório\|Tema da isca\|Promessa do post" .claude/skills/isca-linkedin/SKILL.md
```
Resultado esperado: 3 ocorrências.

- [ ] **Step 5: Commit final se tudo OK**
```bash
git add -A
git commit -m "chore: reorganizacao completa — contexto por area, skills corrigidas"
```

---

## Resultado esperado ao final

| O que muda | Antes | Depois |
|---|---|---|
| Contexto carregado em toda conversa | 4 arquivos @context | 1 arquivo @context (goals) |
| Contexto de conteúdo | Misturado no CLAUDE.md raiz | Isolado em projects/criacao-de-conteudo/CLAUDE.md |
| Skill isca-linkedin | 3 pontos críticos | Corrigida e operacional |
| Ponto de restauração | Não existia | Commit antes de qualquer mudança |
| Informação perdida | — | Nenhuma — só reorganizada |
