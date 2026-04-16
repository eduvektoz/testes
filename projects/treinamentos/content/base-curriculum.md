# Currículo Base — Treinamento Prático de IA Generativa e LLMs para PMEs

> Fonte: pesquisa Perplexity consolidada (PDFs em `Pesquisa de IA - Perplexity/`)
> Duração: 4–6h | Formato: presencial ou online | Público: equipes de PMEs brasileiras (leigos)

---

## Visão geral e objetivos

Treinamento que leva o aluno leigo em IA generativa ao nível intermediário, com foco em aplicação prática em empresas (especialmente PMEs brasileiras).

**Foco:** entender o que é IA/LLMs, como usar bem (Níveis 1–3) e enxergar o potencial de automação avançada (Nível 4 com n8n), sempre ancorado em casos de negócio reais e dados de adoção no Brasil.

**Objetivos pedagógicos:**
- Tirar o medo/mito de IA (explicar de forma simples como funciona)
- Ensinar o aluno a usar IA de forma produtiva no dia a dia (Níveis 1–3)
- Mostrar o que é possível quando IA é acoplada em automação (Nível 4 com n8n)
- Dar exemplos claros por área (Comercial, Financeiro, RH, Marketing)
- Ancorar tudo em resultados: produtividade, redução de custo e impacto real

---

## Módulo 1 — Fundamentos de IA Generativa e LLMs

### 1.1 Conceitos básicos

- **Inteligência Artificial (IA):** técnicas que permitem a sistemas realizar tarefas que exigiriam inteligência humana (reconhecimento de padrões, decisão, linguagem, etc.)
- **IA generativa:** modelos que geram novos conteúdos (texto, imagem, código, áudio, vídeo) a partir de exemplos vistos em treinamento
- **LLMs (Large Language Models):** modelos de linguagem de grande porte, treinados em grandes volumes de texto para prever o próximo token em uma sequência; isso permite responder perguntas, escrever textos, resumir e raciocinar em linguagem natural

**Ideia-chave para explicar em sala:**
> O modelo não "pensa" como humano — ele calcula qual a próxima palavra mais provável, dado tudo o que já foi escrito e as instruções recebidas.

### 1.2 Como funcionam os LLMs (Transformer)

- LLMs modernos usam a arquitetura **Transformer**, cuja peça central é a **atenção (attention)**: o modelo aprende a "prestar atenção" em partes específicas do texto ao gerar cada token
- Cada bloco Transformer tem:
  - **Camada de atenção (self-attention):** calcula quanto cada token deve influenciar outro
  - **Camada feed-forward (MLP):** ajusta a representação de cada token individualmente
- O treinamento é feito com bilhões de exemplos de texto, minimizando o erro em prever o próximo token; depois, o modelo é ajustado (RLHF, instruções) para seguir melhor comandos humanos

### 1.3 Conceitos operacionais importantes

| Termo | Explicação simples |
|-------|-------------------|
| Token | Pedaço de texto (pedaço de palavra, símbolo, pontuação) — unidade básica que o modelo enxerga |
| Janela de contexto | Quantidade máxima de tokens que o modelo consegue considerar por vez; modelos recentes chegam a milhões |
| Temperatura | Controla quão criativa/aleatória será a resposta (baixa = mais previsível; alta = mais criativa) |
| Top-k / Top-p | Técnicas para limitar quais tokens podem ser escolhidos, reduzindo respostas muito aleatórias |
| Inferência | Fase em que o modelo já treinado recebe um prompt e gera saída; o custo caiu mais de 200x entre 2022 e 2024 |

---

## Módulo 2 — Glossário Essencial (para leigos de negócio)

| Termo | Explicação simples |
|-------|-------------------|
| IA generativa | Modelos que criam texto, imagem, áudio ou código a partir de instruções, em vez de só classificar dados |
| LLM | Modelo de linguagem de grande porte que conversa, escreve e raciocina em linguagem natural |
| Token | Fragmento de texto que o modelo usa como unidade básica de processamento |
| Janela de contexto | "Memória de curto prazo" da IA — quantos tokens ela consegue considerar por vez |
| Temperatura | Ajuste de criatividade/aleatoriedade da resposta |
| Prompt | Texto de instrução que você envia para a IA (pergunta + contexto + regras) |
| Prompt engineering | Técnica de estruturar prompts para obter respostas melhores |
| Persona | Papel/identidade que você atribui à IA (consultor, advogado, gerente de vendas, etc.) |
| Embeddings | Representação numérica de textos usada para buscas semânticas e RAG |
| RAG | Retrieval-Augmented Generation: IA busca informações em bases externas antes de responder |
| Alucinação | Quando a IA inventa fatos com confiança, sem base na realidade |
| Agente | Sistema que combina LLM + ferramentas (APIs, web, banco de dados) para atuar de forma semi-autônoma |

---

## Módulo 3 — Evolução da IA Generativa (2023–2026)

### 2023 — Popularização em massa
- ChatGPT (GPT-3.5/GPT-4) explode em uso e traz IA generativa para o mainstream
- Concorrentes: Claude 2 (Anthropic), LLaMA 2 (Meta), modelos pré-Gemini no Google

### 2024 — Multimodalidade e janelas gigantes
- GPT-4 Turbo e GPT-4o (Omni) com texto, imagem e áudio, melhor em código/matemática
- Gemini 1.5 com janelas de até 1M tokens
- Claude 3 (Haiku, Sonnet, Opus) eleva a barra de qualidade
- Adoção corporativa dispara (McKinsey, State of AI: 65–78% das empresas)

### 2025 — Corrida de modelos
- GPT-5 e modelos "de raciocínio" (linha o1/o3)
- Gemini 2.x/3, LLaMA 3.x, Claude 3.5+ elevam performance geral
- Modelos menores (Phi-3.x etc.) com desempenho próximo aos gigantes

### 2026 — Consolidação e barateamento (até abril/2026)
- Famílias GPT-5.x, Gemini 3.x, Claude 4.x lideram benchmarks
- Custos de inferência caem ~280x vs GPT-3.5, viabilizando uso intensivo por PMEs
- Foco sai de "capacidade do modelo" e vai para "integração em processos"
- Principal barreira: não é mais acesso a modelos, é saber usar com frequência e profundidade

---

## Módulo 4 — Níveis de Uso da IA (1 a 4)

### Visão geral dos níveis

| Nível | Descrição | Exemplo |
|-------|-----------|---------|
| 1 — Google turbinado | Uso pontual, perguntas soltas, sem muito contexto | Pedir definição, resumo, tradução |
| 2 — Analista assistido | IA ajuda a analisar, resumir e comparar, com algum contexto | Resumir reunião, revisar proposta, analisar planilha pequena |
| 3 — Copiloto de processo | IA recebe contexto rico (empresa, ICP, políticas) e co-cria processos, playbooks e documentos | Criar playbook comercial, políticas de crédito, fluxos de atendimento |
| 4 — Orquestração com n8n | IA plugada em gatilhos e sistemas; automações executam o processo sozinhas | Lead entra → IA qualifica → n8n atualiza CRM, agenda tarefa e dispara e-mail |

### Nível 1 — IA como Google melhorado
- Perguntas básicas, quase nenhum contexto
- Casos: definição, resumo, tradução, revisão de texto
- Meta: ensinar perguntas claras e senso crítico (verificar fatos)

### Nível 2 — Analista assistido
- Objetivo + contexto curto + pedido de análise/resumo/comparação
- Exemplos:
  - Resumo de reunião com próximos passos
  - Revisão crítica de proposta comercial
  - Leitura e comentário sobre pequena planilha
- Meta: introduzir estrutura de prompt e iteração

### Nível 3 — Copiloto de processo
- Contexto consistente: empresa, ICP, produtos, tom de voz, políticas
- IA desenha processos e artefatos inteiros (playbooks, SOPs, políticas, trilhas)
- Uso de uploads e RAG de maneira segura
- Exemplos: criar playbook comercial, gerar scripts de vendas, montar trilhas de treinamento

### Nível 4 — Orquestração com n8n
**Metáfora:** A IA é o motor do carro — gera texto, decide, classifica. O n8n é o piloto/computador de bordo — liga motor a volante, freio, GPS, e faz o carro andar na rota certa.

Características:
- Gatilhos automáticos (formulário, e-mail, evento em CRM/ERP)
- Nós de IA (OpenAI, Gemini, Claude etc.) classificam, resumem, decidem
- n8n age em sistemas: cria registros, manda e-mail/WhatsApp, grava em planilhas, chama APIs
- Processo roda 24/7, independente do time lembrar de abrir o chat

**Posicionamento no treinamento:** mostramos o conceito e exemplos. Implementar isso de verdade (com segurança, logs, integrações) é projeto profissional (Vektoz) — não "tutorial de fim de semana".

---

## Módulo 5 — Playbook Simples de Engenharia de Prompt

### Princípios gerais
- Instruções claras no início do prompt
- Especificidade: objetivo, público, tom, formato, limites
- Definir papel/persona
- Fornecer contexto suficiente
- Pedir estrutura na saída
- Dar exemplos quando possível
- Iterar o prompt

### Framework em 6 blocos
1. **Papel** — "Você é um [papel]..."
2. **Objetivo** — "Seu objetivo é [resultado]..."
3. **Contexto** — "Contexto: [empresa, produto, público, restrições]..."
4. **Tarefas** — lista numerada
5. **Formato** — "Entregue como [lista/tabela/roteiro/e-mail]."
6. **Restrições** — tom, tamanho, o que não fazer

### Exemplo completo
```
Você é um consultor de negócios especializado em PMEs B2B.
Seu objetivo é ajudar a melhorar nosso processo comercial.
Contexto: somos uma agência de automação atendendo empresas que faturam acima de R$25k/mês, vendemos projetos de setup + MRR.
Tarefas:
1. Diagnosticar os principais gargalos do funil de vendas descrito abaixo.
2. Sugerir até 3 ações de alto impacto e baixo esforço.
3. Propor um roteiro de perguntas consultivas para qualificação.
Formato de saída: responda em tópicos numerados, com linguagem simples.
Restrições: seja direto, sem floreios; evite jargões técnicos.
```

### Erros comuns
- Pedir "melhorar" sem objetivo nem público
- Misturar 4–5 tarefas diferentes no mesmo prompt
- Não checar o que a IA entrega (confiar cegamente)
- Parar no primeiro resultado ruim em vez de ajustar

---

## Módulo 6 — Assistentes Personalizados (Custom GPTs e Gems)

### Conceito
Custom GPTs (OpenAI) e Gems (Gemini) permitem criar assistentes com:
- Instruções fixas (persona, objetivos, limites)
- Base de conhecimento própria (PDFs, docs, planilhas, sites)
- Ferramentas específicas (web, APIs)

**Analogia:** é como ter "várias versões especializadas" do ChatGPT/Gemini para tarefas recorrentes — um GPT só para propostas, outro para finanças, outro para RH.

### Fluxo básico — Custom GPTs (OpenAI)
1. Acessar chatgpt.com/create
2. Definir objetivo/persona
3. Escrever instruções detalhadas (tom, escopo, formatos padrão)
4. Anexar docs relevantes (playbooks, manuais, FAQs)
5. Configurar ferramentas (se necessário)
6. Testar e iterar com prompts reais do dia a dia
7. Publicar (privado ou compartilhado)

### Fluxo básico — Gems (Gemini)
1. Acessar gemini.google.com → Gerenciador de Gems
2. Criar novo Gem com persona, task, context, format (framework do Google)
3. Anexar documentos
4. Testar e ajustar

### Ideias de assistentes para PMEs
- **Comercial:** gera argumentos, contestações, e-mails, roteiros de ligação e propostas com ICP e tonality da empresa
- **Financeiro:** explica indicadores, monta DRE simplificada, analisa cash flow, simula cenários
- **RH:** cria anúncios de vaga, roteiros de entrevista, planos de onboarding e feedback contínuo
- **Marketing:** produz calendários de conteúdo, anúncios, análises de campanhas, sugestões de A/B

---

## Módulo 7 — Exemplos de Uso por Área

### Comercial / Vendas
- Mais de 50% dos vendedores usam IA diariamente em 2025; times com IA tendem a bater metas com mais frequência

**Exemplos:**
- Prospecção: gerar ICP, listas de perguntas de qualificação e e-mails personalizados
- Roteiros de ligação (SPIN, NEPQ etc.), adaptados ao produto
- Diagnóstico de funil a partir de dados exportados ou descrições
- Scripts de follow-up, upsell e expansão de conta

### Financeiro
- IA reduz tempo de fechamento/processamento em 25–33% e aumenta eficiência em 15–20% em processos administrativos

**Exemplos:**
- Classificação de lançamentos a partir de extratos
- Resumos financeiros mensais em linguagem simples para sócios
- Simulações (margem, MRR, churn) com base em números fornecidos
- Checklists de rotinas (fechamento, conciliação, provisões)

### RH
- Uso crescente para recrutamento, onboarding, engajamento e performance

**Exemplos:**
- Anúncios de vaga alinhados à cultura
- Triagem textual de currículos (com supervisão humana)
- Roteiros de entrevista e perguntas situacionais
- Planos de onboarding e PDIs personalizados por cargo

### Marketing
- IA integrada em personalização e automação de campanhas

**Exemplos:**
- Calendários editoriais por persona e estágio de funil
- Escrita/reescrita de anúncios, posts e e-mails para testes A/B
- Análise de KPIs e sugestões de otimização (com dados fornecidos)
- Rascunhos de landing pages baseadas em ofertas e personas

---

## Módulo 8 — Contexto Personalizado e RAG

**Princípio central:** resultado bom = instrução boa + contexto bom.

Sem contexto, o modelo responde de forma genérica; com contexto rico (empresa, produto, cliente, dados internos), ele se aproxima de um consultor que conhece o negócio.

### Formas práticas de fornecer contexto
- **No próprio prompt:** descrição da empresa, ICP, produtos/serviços, diferenciais, tom de voz
- **Upload de arquivos:** playbooks, manuais, planilhas, contratos, apresentações — pedir para usar "apenas" esses documentos
- **Bases com RAG:** ferramentas que indexam documentos e permitem buscas semânticas integradas à IA (evita alucinações sobre políticas internas)

### Boas práticas
- Deixar claro de onde a IA deve tirar a informação ("Use apenas os documentos anexados como fonte principal")
- Pedir para citar trechos ou documentos que está usando
- Atualizar periodicamente os arquivos para evitar desatualização

---

## Módulo 9 — Contexto = Game Changer (RAG prático)

_Ver Módulo 8 — conteúdo idêntico; slide separado no deck para ênfase visual._

---

## Módulo 10 — "Pulos do Gato" de Prompt

Boas práticas avançadas que transformam a IA em um verdadeiro copiloto:

| Técnica | Como usar |
|---------|-----------|
| Advogado do diabo | "Liste primeiro os riscos, pontos fracos e objeções antes de sugerir melhorias" |
| Honestidade brutal | "Seja brutalmente honesto — se a ideia for ruim, diga. Não tente ser otimista" |
| Perguntar antes de responder | "Antes de sugerir soluções, faça até 5 perguntas para entender melhor o contexto" |
| Chain-of-thought | "Mostre seu raciocínio passo a passo, listando hipóteses e justificativas antes da conclusão" |
| Alternativas | "Gere 3 alternativas diferentes, com prós e contras resumidos em tabela" |
| Explícito sobre o que não fazer | "Não use linguagem motivacional, não conte histórias pessoais, não repita a pergunta" |

### Combinar pulos do gato com níveis de uso
- Nível 1: pedir exemplos, analogias e simplificação ("explique como se eu tivesse 12 anos")
- Nível 2: adicionar advogado do diabo, análise de risco, perguntas antes de responder
- Nível 3: combinar persona + contexto + RAG + pulos do gato → IA como copiloto de decisões

---

## Módulo 11 — Adoção de IA no Brasil e Impacto

_Ver arquivo `content/dados-mercado.md` para dados completos com fontes._

### Destaques para sala
- 41,9% das indústrias brasileiras com 100+ empregados usam IA em 2024 (vs 16,9% em 2022) — IBGE/Pintec
- 96% das MPEs têm familiaridade com GenAI, mas apenas 15% usam com frequência — Sebrae/FGV Ibre
- +14% produtividade e +9% em resultados financeiros em empresas brasileiras que implementaram GenAI — Bain 2025
- **Moral da história:** a ferramenta já está instalada, mas o uso ainda está em Nível 1 — quem aprender a usar bem agora sai na frente

---

## Módulo 12 — IA e Profissões

### O que os dados mostram
- McKinsey: IA pode automatizar 60–70% das atividades de trabalho, mas tende a reconfigurar tarefas, não matar cargos inteiros
- Barômetro de Empregos de IA (PwC Brasil): vagas ligadas a IA quadruplicaram (19k → 73k); ocupações expostas à IA cresceram 261% em vagas

### Frame para resposta em aula
- IA substitui **tarefas**, não profissões inteiras
- Rotinas repetitivas morrem; sobe o valor de análise, decisão, relacionamento, criatividade
- Risco real: ser trocado por alguém da sua área que sabe usar IA melhor do que você

**Frase para fechar:**
> "A IA é ótima em responder como fazer. Quem continua mandando é quem define o que fazer, por que fazer e se aquilo faz sentido pro negócio."

---

## Módulo 13 — Papel do n8n e Posicionamento (Nível 4)

### Como apresentar o n8n
- n8n conecta IA a CRM, ERP, e-mail, WhatsApp, APIs
- Há milhares de workflows de IA na comunidade n8n
- "AI + n8n" falam em redução massiva de tempo manual e aumento forte de acurácia/eficiência

### Mensagem estratégica
- Objetivo do treinamento: o aluno entender o conceito de Nível 4, não sair mexendo em n8n
- Implementar Nível 4 exige: integração com sistemas legados, segurança, logs, tratamento de erro, testes, versionamento
- Isso é **projeto de automação profissional (Vektoz)** — não "faça você mesmo"

---

## Referências e Vídeos Recomendados

### Fundamentos para leigos
- **Generative AI for Everyone** — Andrew Ng (DeepLearning.AI) — ~3h, explica como funciona e como aplicar no trabalho
- **AI for Everyone** — Andrew Ng — versão clássica atualizada para líderes de negócio

### IA e futuro do trabalho
- **"Ethan Mollick on How AI is Going to Shape the Future of Work"** — evidências de produtividade, co-inteligência humanos + IA
- **"AI and the Future of Work | The Atlantic Festival 2024"** — dados sobre ganhos de qualidade e velocidade

### Prompt engineering e uso prático
- **"Tokens vs Context Window + Prompt Engineering + Temperature | AWS Bedrock Demo"** — explicação visual de tokens, contexto, temperatura
- **"How to Create Custom GPT | OpenAI Tutorial"** — passo a passo de Custom GPTs
- **"How to Make a Custom Gem in Gemini"** — fluxo completo de criação de Gems
