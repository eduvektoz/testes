# Projeto Treinamentos — Plano de Implementação

> **Para execução:** Use superpowers:subagent-driven-development (recomendado) ou superpowers:executing-plans para executar tarefa por tarefa. Steps usam sintaxe checkbox (`- [ ]`) para rastreamento.

**Goal:** Criar a infraestrutura de conteúdo e duas skills (`/treinamento-material` e `/treinamento-slides`) que geram material de apoio e slides personalizados por empresa, com base num currículo fixo de "Implementação de IA para Empresas" (4–6h, presencial ou online).

**Architecture:** Conteúdo base + dados de mercado ficam em `projects/treinamentos/content/`. Templates em `projects/treinamentos/templates/`. As duas skills compartilham o mesmo briefing (salvo em `briefings/`). `/treinamento-material` cria um Google Doc com o material completo. `/treinamento-slides` duplica o Google Slides template via MCP e edita apenas os slides não-padrão (capa, agenda, exemplos do setor). Briefings salvos em `projects/treinamentos/briefings/`.

**Tech Stack:** Claude Code skills (SKILL.md via `/writing-skills`), Google Drive MCP (read_file_content + create_file), Markdown

---

## Estrutura de Arquivos

```
projects/treinamentos/
  plano-implementacao.md              # este arquivo
  CLAUDE.md                           # contexto do projeto para o Claude
  content/
    base-curriculum.md                # currículo completo (10 módulos)
    dados-mercado.md                  # estatísticas de adoção de IA no Brasil
  templates/
    material-apoio-template.md        # template completo do material de apoio
    slides-mapa.md                    # mapa dos slides: quais são padrão vs personalizáveis
  briefings/                          # um arquivo por empresa (gerado pela skill)
  outputs/                            # links dos Google Docs/Slides gerados
  Pesquisa de IA - Perplexity/        # PDFs de referência

.claude/skills/treinamento-material/
  SKILL.md

.claude/skills/treinamento-slides/
  SKILL.md
```

---

## Task 1: Salvar currículo base e dados de mercado

**Files:**
- Create: `projects/treinamentos/content/base-curriculum.md`
- Create: `projects/treinamentos/content/dados-mercado.md`

- [ ] **Step 1: Criar base-curriculum.md com os 10 módulos completos**

Usar o conteúdo dos 10 módulos fornecido por Eduardo no chat. Manter a estrutura original com emojis e headers como referência interna — o Claude vai adaptar ao gerar o material final.

- [ ] **Step 2: Criar dados-mercado.md**

```markdown
# Dados de Mercado — IA no Brasil (2025–2026)

## Adoção
- 41,9% das indústrias brasileiras usam IA (IBGE, 2024) — eram 16,9% em 2022
- 25% das empresas têm ao menos um caso de uso com IA — em 2024 eram 12% (Bain, 2025)
- 74% das MPMEs brasileiras já usam IA no dia a dia (Microsoft, 2025)
- Custo dos LLMs caiu ~95% desde 2022 (Bain)

## Impacto
- +14% produtividade média com IA
- +9% crescimento financeiro com IA
- 94% das empresas veem impacto positivo na produtividade
- 91% relatam melhora na qualidade do trabalho
- 77,5% dos trabalhadores que usam IA reportam maior satisfação no trabalho (FGV IBRE)

## Prioridade estratégica
- 67% das empresas brasileiras consideram IA prioridade estratégica (Bain)
- 17% já têm IA como foco principal de investimentos
- 90% das que usam IA generativa priorizam produtividade

## Benefícios percebidos pelas empresas
- Eficiência e produtividade: 72%
- Melhoria no atendimento ao cliente: 58%
- Redução de custos: 46%

## Desafios
- Infraestrutura tecnológica: 39%
- Escassez de talentos: 39%

## Áreas com maior adoção
- Marketing: ~24%
- Atendimento ao cliente: ~24%

## Fontes
- IBGE, Pesquisa de Inovação 2024
- Bain & Company, 4ª ed. pesquisa IA generativa, 2025
- Microsoft News Center Brasil, 2025
- FGV IBRE, 2025
```

- [ ] **Step 3: Commit**

```bash
rtk git add projects/treinamentos/content/
rtk git commit -m "feat: adicionar curriculo base e dados de mercado do projeto treinamentos"
```

---

## Task 2: Criar template do material de apoio

**Files:**
- Create: `projects/treinamentos/templates/material-apoio-template.md`

O material de apoio é o documento entregue para os alunos (Google Doc). Deve ter:
- Capa com nome da empresa e data
- Resumo de cada módulo
- Glossário completo
- Exemplos práticos por área (com placeholders por setor)
- Playbook de prompts aplicado ao setor
- Recursos e referências
- Espaço para anotações

Placeholders usam o formato `[PLACEHOLDER]` para o Claude identificar e substituir.

- [ ] **Step 1: Criar material-apoio-template.md completo**

Incluir o conteúdo real de todos os 10 módulos — não apenas a estrutura. Este arquivo é o que o Claude vai ler e personalizar, não um esqueleto.

- [ ] **Step 2: Commit**

```bash
rtk git add projects/treinamentos/templates/material-apoio-template.md
rtk git commit -m "feat: adicionar template completo do material de apoio"
```

---

## Task 3: Criar mapa dos slides

**Files:**
- Create: `projects/treinamentos/templates/slides-mapa.md`

Este arquivo não contém o conteúdo dos slides — esse fica no Google Slides template (criado por Eduardo). Contém apenas o mapa de quais slides são padrão (não mexer) e quais são personalizáveis por empresa.

- [ ] **Step 1: Criar slides-mapa.md**

```markdown
# Mapa de Slides — Treinamento de IA

**Template Google Slides ID:** [ID_DO_TEMPLATE] ← preencher após Eduardo criar o template

## Slides Padrão (não alterar por empresa)
Estes slides têm conteúdo fixo e não precisam de personalização:

| Nº | Título | Motivo |
|----|--------|--------|
| 3  | O que é IA | conteúdo técnico universal |
| 4  | O que são LLMs | conteúdo técnico universal |
| 5  | Como funcionam (simplificado) | conteúdo técnico universal |
| 6  | Glossário | termos universais |
| 7  | Evolução da IA 2023→2026 | linha do tempo universal |
| 12 | Estrutura do Prompt Perfeito | framework universal |
| 16 | Como criar GPTs/Gems | passo a passo universal |
| 20 | Pulos do Gato | comandos avançados universais |
| 21 | Vídeos e Referências | referências universais |

## Slides Personalizáveis (alterar por empresa)
Estes slides precisam de conteúdo específico da empresa:

| Nº | Título | O que personalizar |
|----|--------|-------------------|
| 1  | Capa | Nome da empresa, data |
| 2  | Por Que IA Agora? | Dado de impacto mais relevante pro setor |
| 8  | Agenda do Dia | Módulos a cobrir (ajustar por duração) |
| 9  | Níveis de Uso — Exemplos | Exemplos do setor no lugar dos genéricos |
| 13 | Exemplo Completo de Prompt | Exemplo aplicado ao setor |
| 14 | Exemplos de Uso por Área | Foco nas áreas que participam |
| 15 | Contexto = Game Changer | Exemplo de contexto do setor |
| 17 | Caso de Uso [SETOR] | Case ou cenário específico da empresa |
| 22 | Próximos Passos | Ações práticas para o setor |

## Como a skill usa este mapa
1. Ler o mapa para saber quais slides editar
2. Duplicar o template via Google Drive MCP
3. Para cada slide personalizável: gerar o conteúdo novo e registrar no output
4. Eduardo faz o paste manual dos conteúdos gerados nos slides duplicados
   (enquanto não tiver API do Google Slides disponível via MCP)
```

**Nota:** O Google Drive MCP atual (read_file_content, create_file) não suporta edição direta de slides individuais. A skill gera o conteúdo personalizado slide a slide e cria o Google Slides duplicado — Eduardo faz o paste. Se o MCP evoluir para suportar edição de slides, a skill é atualizada.

- [ ] **Step 2: Commit**

```bash
rtk git add projects/treinamentos/templates/slides-mapa.md
rtk git commit -m "feat: adicionar mapa de slides personalizaveis vs padrao"
```

---

## Task 4: Criar CLAUDE.md do projeto treinamentos

**Files:**
- Create: `projects/treinamentos/CLAUDE.md`

- [ ] **Step 1: Criar CLAUDE.md**

```markdown
# Projeto Treinamentos

Treinamentos presenciais e online de "Implementação de IA para Empresas" pela Vektoz.
Duração: 4–6h. Público: equipes de PMEs brasileiras.

## Skills disponíveis
- `/treinamento-material` — gera o material de apoio (Google Doc) personalizado por empresa
- `/treinamento-slides` — duplica o template de slides e gera conteúdo para os slides personalizáveis

## Arquivos de referência
- `content/base-curriculum.md` — currículo completo (10 módulos)
- `content/dados-mercado.md` — estatísticas de IA no Brasil
- `templates/material-apoio-template.md` — template do material para alunos
- `templates/slides-mapa.md` — mapa de slides padrão vs personalizáveis + ID do template

## Fluxo de uso
1. Executar `/treinamento-material` → gera Google Doc com material personalizado
2. Executar `/treinamento-slides` → se briefing já existe, usa o salvo; senão, faz o briefing
3. Abrir o Google Slides duplicado e fazer paste dos conteúdos gerados

## Briefings
Cada empresa tem um arquivo em `briefings/[nome-empresa-slug]-[YYYY-MM-DD].md`.
Nunca sobrescrever — criar novo arquivo por execução.

## Outputs
Links e conteúdos gerados ficam em `outputs/[nome-empresa-slug]-[YYYY-MM-DD].md`.
```

- [ ] **Step 2: Commit**

```bash
rtk git add projects/treinamentos/CLAUDE.md
rtk git commit -m "feat: adicionar CLAUDE.md do projeto treinamentos"
```

---

## Task 5: Criar skill `/treinamento-material` via `/writing-skills`

**Files:**
- Create: `.claude/skills/treinamento-material/SKILL.md`

**Importante:** Usar o skill `/writing-skills` para escrever este SKILL.md. Não escrever manualmente.

- [ ] **Step 1: Verificar se Google Drive MCP suporta criação de Google Doc**

```
Invocar: mcp__claude_ai_Google_Drive__create_file
Parâmetros: name="Teste Material Treinamento", mimeType="application/vnd.google-apps.document"
```

Resultado esperado: link do Google Doc criado. Se falhar, usar Notion MCP como fallback.

- [ ] **Step 2: Invocar `/writing-skills` com o spec abaixo**

Passar como input para o `/writing-skills`:

```
Skill: treinamento-material
Trigger: quando Eduardo executar /treinamento-material

O que faz:
1. Verifica se já existe briefing salvo em projects/treinamentos/briefings/ para a empresa.
   - Se sim: pergunta "Usar briefing de [data]?" e pula as perguntas se confirmado.
   - Se não: faz o briefing completo (perguntas abaixo).

2. Perguntas do briefing (se necessário):
   - Nome da empresa
   - Setor/segmento (ex: clínica, construtora, escola, financeira, varejo)
   - Nº aproximado de funcionários
   - Data e formato do treinamento (presencial/online, duração planejada)
   - Perfil dos participantes: cargos + nível técnico (0=nunca usou IA / 1=usa às vezes / 2=usa regularmente)
   - Áreas que participarão (Financeiro, Comercial, RH, Marketing, Operações, Diretoria)
   - Principal dor ou objetivo com o treinamento
   - Processos ou ferramentas que usam (CRM, ERP, WhatsApp, planilha, etc.)
   - Algum case ou exemplo interno que posso usar? (opcional)

3. Salva briefing em: projects/treinamentos/briefings/[slug]-[YYYY-MM-DD].md

4. Gera o material de apoio:
   - Lê projects/treinamentos/templates/material-apoio-template.md
   - Lê projects/treinamentos/content/base-curriculum.md
   - Lê projects/treinamentos/content/dados-mercado.md
   - Substitui todos os [PLACEHOLDER] com dados do briefing
   - Aplica tabela de exemplos por setor (clínica/imobiliária/escola/financeira)
   - Ajusta linguagem conforme nível técnico dos participantes
   - Enfatiza módulo 7 com foco nas áreas confirmadas
   - Insere dado de impacto mais relevante pro setor no destaque da intro

5. Cria Google Doc via mcp__claude_ai_Google_Drive__create_file
   - Nome: "Material de Apoio — [Nome Empresa] — [Data]"
   - Conteúdo: material personalizado completo

6. Salva output em projects/treinamentos/outputs/[slug]-[YYYY-MM-DD].md com link do doc

7. Apresenta ao Eduardo: link do Google Doc + 3 principais personalizações feitas + campos [A CONFIRMAR] em aberto

Tabela de exemplos por setor (usar na personalização):
| Setor      | Financeiro                      | Comercial                  | RH                          |
|------------|--------------------------------|----------------------------|-----------------------------|
| Clínica    | fluxo de caixa de procedimentos | scripts de agendamento     | seleção de recepcionistas   |
| Imobiliária| DRE por empreendimento          | follow-up de leads         | triagem de corretores       |
| Escola     | orçamento por turma             | captação de alunos         | contratação de professores  |
| Financeira | análise de crédito              | prospecção                 | compliance de colaboradores |
| Varejo     | controle de estoque/margem      | reativação de clientes     | gestão de turno             |
```

- [ ] **Step 3: Revisar o SKILL.md gerado pelo /writing-skills**

Confirmar que a skill:
- Detecta briefing existente antes de perguntar
- Tem a tabela de exemplos por setor embutida
- Cria o Google Doc via MCP
- Salva briefing e output em arquivo

- [ ] **Step 4: Commit**

```bash
rtk git add .claude/skills/treinamento-material/
rtk git commit -m "feat: criar skill treinamento-material via writing-skills"
```

---

## Task 6: Criar skill `/treinamento-slides` via `/writing-skills`

**Files:**
- Create: `.claude/skills/treinamento-slides/SKILL.md`

**Importante:** Usar o skill `/writing-skills` para escrever este SKILL.md.

- [ ] **Step 1: Eduardo cria o Google Slides template**

Antes de criar a skill, Eduardo precisa:
1. Criar o Google Slides com o design padrão (todos os slides, layout visual)
2. Copiar o ID do arquivo (da URL: `docs.google.com/presentation/d/[ID]/edit`)
3. Preencher o campo `Template Google Slides ID` em `templates/slides-mapa.md`

- [ ] **Step 2: Verificar se Google Drive MCP consegue duplicar o template**

```
Invocar: mcp__claude_ai_Google_Drive__read_file_content
Parâmetros: fileId=[ID_DO_TEMPLATE]
```

Se retornar conteúdo: a skill pode ler o template. Criar a cópia via `create_file`.
Se não retornar: a skill gera apenas o conteúdo em texto; Eduardo duplica manualmente.

- [ ] **Step 3: Invocar `/writing-skills` com o spec abaixo**

```
Skill: treinamento-slides
Trigger: quando Eduardo executar /treinamento-slides

O que faz:
1. Verifica se já existe briefing salvo em projects/treinamentos/briefings/ para a empresa.
   - Se sim: lista briefings disponíveis e pergunta qual usar.
   - Se não: faz o briefing completo (mesmo conjunto de perguntas do treinamento-material).

2. Lê projects/treinamentos/templates/slides-mapa.md para identificar:
   - ID do Google Slides template
   - Quais slides são padrão (não mexer)
   - Quais slides são personalizáveis e o que personalizar em cada um

3. Para cada slide personalizável, gera o conteúdo novo:
   - Slide 1 (Capa): nome da empresa + data
   - Slide 2 (Por Que IA Agora?): dado de impacto mais relevante pro setor
   - Slide 8 (Agenda): ajusta módulos conforme duração planejada
   - Slide 9 (Níveis de Uso): exemplos do setor
   - Slide 13 (Exemplo de Prompt): prompt aplicado ao contexto da empresa
   - Slide 14 (Exemplos por Área): foco nas áreas que participam
   - Slide 15 (Contexto): exemplo com dados do setor
   - Slide 17 (Caso de Uso): cenário ou case da empresa/setor
   - Slide 22 (Próximos Passos): 3 ações práticas para o setor

4. Tenta duplicar o template via Google Drive MCP:
   - mcp__claude_ai_Google_Drive__read_file_content no template
   - mcp__claude_ai_Google_Drive__create_file com o conteúdo
   - Se falhar: registra no output e informa Eduardo para duplicar manualmente

5. Apresenta ao Eduardo:
   - Link do Google Slides duplicado (ou instrução para duplicar manualmente)
   - Conteúdo gerado para cada slide personalizável (numerado, pronto para paste)
   - Formato: "SLIDE [Nº] — [Título]: [conteúdo]"

6. Salva output em projects/treinamentos/outputs/[slug]-[YYYY-MM-DD].md
```

- [ ] **Step 4: Revisar o SKILL.md gerado**

- [ ] **Step 5: Commit**

```bash
rtk git add .claude/skills/treinamento-slides/
rtk git commit -m "feat: criar skill treinamento-slides via writing-skills"
```

---

## Task 7: Preencher os templates com conteúdo real completo

**Files:**
- Modify: `projects/treinamentos/content/base-curriculum.md`
- Modify: `projects/treinamentos/templates/material-apoio-template.md`

Os arquivos criados nas tasks anteriores precisam do conteúdo completo — não esboços.

- [ ] **Step 1: Preencher base-curriculum.md**

Copiar os 10 módulos do chat (Eduardo colou o conteúdo completo). Manter a estrutura original.

- [ ] **Step 2: Preencher material-apoio-template.md**

Expandir com:
- Conteúdo real de cada módulo (resumos densos, não bullet lists vazios)
- Placeholders claramente marcados: `[NOME_EMPRESA]`, `[SETOR]`, `[DATA]`, `[EXEMPLO_SETOR_FINANCEIRO]`, etc.
- Glossário completo dos 10 termos do módulo 2
- Playbook de prompts com estrutura + exemplos com placeholders
- Seção de recursos com referências reais

- [ ] **Step 3: Commit**

```bash
rtk git add projects/treinamentos/
rtk git commit -m "feat: preencher templates com conteudo completo dos 10 modulos"
```

---

## Task 8: Teste com empresa fictícia

**Files:**
- Create: `projects/treinamentos/briefings/clinica-sorriso-2026-04-16.md`
- Create: `projects/treinamentos/outputs/clinica-sorriso-2026-04-16.md`

- [ ] **Step 1: Executar `/treinamento-material` com dados fictícios**

- Empresa: Clínica Sorriso
- Setor: Odontologia
- Tamanho: 15 funcionários
- Áreas: Recepção, Financeiro, Gestão
- Dor: atendimento lento, perda de pacientes, follow-up não acontece
- Nível técnico: 0 (nunca usaram IA)

- [ ] **Step 2: Verificar personalizações no material**

- Exemplos de clínica (não genéricos)
- Linguagem acessível para nível 0
- Dado de impacto: atendimento/redução de custos
- Glossário sem jargão excessivo

- [ ] **Step 3: Executar `/treinamento-slides` usando o briefing salvo**

Confirmar que detecta o briefing da Clínica Sorriso e não repete as perguntas.

- [ ] **Step 4: Verificar conteúdo gerado para os slides personalizáveis**

Todos os 9 slides personalizáveis devem ter conteúdo específico de clínica odontológica.

- [ ] **Step 5: Commit final**

```bash
rtk git add projects/treinamentos/
rtk git commit -m "test: executar skills de treinamento com empresa ficticia Clinica Sorriso"
```

---

## Decisões resolvidas

| Decisão | Escolha |
|---------|---------|
| Uma ou duas skills? | Duas: `/treinamento-material` e `/treinamento-slides` |
| Slides como roteiro ou edição direta? | Gera conteúdo slide a slide + tenta duplicar via MCP; Eduardo faz paste |
| Como criar skills? | Via `/writing-skills` (Tasks 5 e 6) |
| Google Docs vs Notion? | Google Docs via MCP para material; Google Slides via MCP para slides |
| Briefing repetido entre skills? | Não — skill verifica briefing salvo antes de perguntar |

## Pendente antes de Task 6

Eduardo precisa criar o Google Slides template (design visual) e preencher o ID em `templates/slides-mapa.md`.
