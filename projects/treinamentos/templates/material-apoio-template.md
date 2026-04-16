# Material de Apoio — Treinamento de IA Generativa para Empresas

**[NOME_EMPRESA]** | [DATA] | Formato: [FORMATO_PRESENCIAL_ONLINE] | Duração: [DURACAO]

Preparado por **Vektoz** para os participantes deste treinamento.

---

## Sobre este material

Este material foi preparado especialmente para a equipe da **[NOME_EMPRESA]** e contém:
- Resumo dos módulos abordados no treinamento
- Glossário dos principais termos
- Exemplos práticos aplicados ao setor de [SETOR]
- Playbook de prompts para o seu dia a dia
- Referências e recursos para continuar aprendendo

Participantes: [AREAS_PARTICIPANTES] | Nível técnico: [NIVEL_TECNICO_DESCRICAO]

---

## Por que IA Agora?

[DADO_IMPACTO_SETOR]

No Brasil:
- **41,9%** das empresas industriais com 100+ funcionários já usam IA em 2024 (vs. 16,9% em 2022) — IBGE/Pintec
- **96%** das MPEs têm familiaridade com IA generativa, mas apenas **15%** usam com frequência — Sebrae/FGV Ibre
- Empresas que implementaram IA generativa reportam em média **+14% de produtividade** e **+9% de crescimento financeiro** — Bain & Company 2025

**A ferramenta já está instalada. O uso ainda está raso. Quem aprender a usar bem agora sai na frente.**

---

## Módulo 1 — O que é IA Generativa e como ela funciona

### O que é IA

**Inteligência Artificial (IA)** é o conjunto de técnicas que permitem a sistemas realizarem tarefas que normalmente exigiriam inteligência humana — como reconhecer padrões, tomar decisões e entender linguagem.

**IA Generativa** é a subárea que cria conteúdo novo: texto, imagens, código, áudio, vídeo. É o que o ChatGPT, o Gemini e o Claude fazem.

### O que são LLMs

**LLMs (Large Language Models)** são modelos de linguagem treinados em bilhões de textos para prever a próxima palavra em uma sequência. Isso os permite escrever, resumir, responder perguntas e raciocinar em linguagem natural.

**Ideia-chave:** o modelo não "pensa" como humano. Ele calcula qual a próxima palavra mais provável, dado tudo o que já foi escrito e as instruções recebidas.

### Como funciona na prática

Quando você digita algo no ChatGPT ou Gemini:
1. Seu texto é convertido em "tokens" (pedaços de palavras)
2. O modelo analisa o contexto inteiro disponível
3. Ele gera a resposta mais provável, token a token
4. A resposta volta para você em linguagem natural

**Não existe mágica — existe estatística muito bem treinada.**

---

## Módulo 2 — Glossário

| Termo | Explicação simples |
|-------|-------------------|
| IA generativa | Modelos que criam texto, imagem, áudio ou código a partir de instruções |
| LLM | Modelo de linguagem de grande porte que conversa, escreve e raciocina |
| Token | Fragmento de texto (pedaço de palavra, símbolo) — unidade básica do modelo |
| Janela de contexto | "Memória de curto prazo" da IA — quantos tokens ela considera por vez |
| Temperatura | Ajuste de criatividade: baixa = mais previsível; alta = mais criativa |
| Prompt | Texto de instrução que você envia para a IA (pergunta + contexto + regras) |
| Prompt engineering | Técnica de estruturar prompts para obter respostas melhores |
| Persona | Papel/identidade que você atribui à IA (consultor, advogado, gerente, etc.) |
| Embeddings | Representação numérica de textos usada para buscas semânticas e RAG |
| RAG | Retrieval-Augmented Generation: IA busca em bases externas antes de responder |
| Alucinação | Quando a IA inventa fatos com confiança, sem base na realidade |
| Agente | Sistema que combina LLM + ferramentas para atuar de forma semi-autônoma |

---

## Módulo 3 — Evolução da IA (2023–2026)

| Ano | O que aconteceu |
|-----|----------------|
| 2023 | ChatGPT explode. IA generativa vai para o mainstream. Início da "corrida dos modelos" |
| 2024 | GPT-4o (texto+imagem+áudio), Gemini 1.5 (1M tokens de contexto), Claude 3. Adoção corporativa dispara |
| 2025 | GPT-5, Gemini 2.x/3, Claude 3.5+. Modelos menores com desempenho de gigantes |
| 2026 | Consolidação: GPT-5.x, Gemini 3.x, Claude 4.x lideram. Custos caem ~280x. Foco muda de "capacidade do modelo" para "integração em processos" |

**O que isso significa para você:** a tecnologia está madura. A barreira não é mais acesso — é saber usar bem.

---

## Módulo 4 — Níveis de Uso da IA

### Os 4 Níveis

| Nível | Nome | Como é | Exemplo |
|-------|------|--------|---------|
| 1 | Google turbinado | Perguntas pontuais, sem contexto | Pedir definição, traduzir texto, resumir artigo |
| 2 | Analista assistido | Contexto curto + análise/resumo | Resumir reunião, revisar proposta, analisar planilha |
| 3 | Copiloto de processo | Contexto rico + co-criação de processos | Criar playbook, políticas, fluxos de atendimento |
| 4 | Orquestração com n8n | IA integrada a sistemas, roda sozinha | Lead chega → IA qualifica → CRM atualiza automaticamente |

### Onde você provavelmente está agora

A maioria das pessoas está no **Nível 1**. O treinamento de hoje vai te levar ao **Nível 2–3**.

### Exemplos por Nível — [SETOR]

**Nível 1 (o que você provavelmente já faz):**
[EXEMPLO_NIVEL1_SETOR]

**Nível 2 (o que você vai conseguir depois deste treinamento):**
[EXEMPLO_NIVEL2_SETOR]

**Nível 3 (o objetivo de médio prazo):**
[EXEMPLO_NIVEL3_SETOR]

---

## Módulo 5 — Engenharia de Prompt

### Por que o prompt importa

Um prompt mal estruturado = resposta genérica.
Um prompt bem estruturado = resposta que parece de um especialista.

A diferença está na estrutura, não na ferramenta.

### O Framework em 6 Blocos

```
1. PAPEL
"Você é um [especialista/cargo/perfil]..."

2. OBJETIVO
"Seu objetivo é [resultado esperado]..."

3. CONTEXTO
"Contexto: [empresa, produto, público, restrições]..."

4. TAREFAS
"1. [tarefa 1]
 2. [tarefa 2]
 3. [tarefa 3]"

5. FORMATO DE SAÍDA
"Entregue como [lista numerada / tabela / e-mail / roteiro]..."

6. RESTRIÇÕES
"Tom: [direto/formal/descontraído]. Evite: [jargões/promessas não verificáveis/repetição]."
```

### Exemplo Aplicado — [SETOR]

[EXEMPLO_PROMPT_SETOR]

### Erros Comuns

- Pedir "melhorar" sem dizer para quem, com qual tom, qual objetivo
- Misturar 4–5 tarefas diferentes em um único prompt
- Não revisar o que a IA entrega (confiar cegamente)
- Desistir no primeiro resultado ruim em vez de ajustar o prompt

---

## Módulo 6 — Assistentes Personalizados (Custom GPTs e Gems)

### O que são

São versões do ChatGPT ou Gemini configuradas especificamente para uma função da sua empresa. Em vez de dar contexto toda vez, você configura uma vez e usa sempre.

**Analogia:** é como contratar um funcionário virtual que já conhece a empresa, os produtos, o tom de voz e o que fazer — sem precisar explicar de novo toda vez.

### Como criar um Custom GPT (OpenAI)
1. Acesse **chatgpt.com/create**
2. Defina objetivo e persona ("Você é um assistente comercial da [NOME_EMPRESA]...")
3. Escreva instruções detalhadas (tom, escopo, formato padrão)
4. Anexe documentos da empresa (playbook, manual, FAQ)
5. Teste com perguntas reais do dia a dia
6. Publique (privado para o time)

### Como criar um Gem (Gemini)
1. Acesse **gemini.google.com** → Gerenciador de Gems
2. Preencha: Persona, Task, Context, Format
3. Anexe documentos relevantes
4. Teste e ajuste

### Ideias de Assistentes para [SETOR]

[EXEMPLO_ASSISTENTES_SETOR]

---

## Módulo 7 — IA na Prática por Área

### [AREAS_PARTICIPANTES] — Casos de Uso

[EXEMPLOS_POR_AREA_SETOR]

#### Comercial / Vendas
- Gerar e-mails de prospecção personalizados com base em dados do lead
- Criar roteiros de ligação e reunião (frameworks SPIN, NEPQ)
- Diagnosticar gargalos do funil a partir de descrições ou dados exportados
- Scripts de follow-up, upsell e reativação

#### Financeiro
- Classificar lançamentos a partir de extratos
- Gerar resumos financeiros mensais em linguagem simples para sócios
- Simular cenários (impacto de mudança de preço, churn, margem)
- Criar checklists de rotinas (fechamento, conciliação, provisões)

#### RH / Pessoas
- Redigir anúncios de vaga alinhados à cultura da empresa
- Criar roteiros de entrevista com perguntas situacionais por cargo
- Elaborar planos de onboarding personalizados
- Gerar planos de desenvolvimento individual (PDI) e feedback estruturado

#### Marketing
- Criar calendários editoriais por persona e estágio de funil
- Reescrever anúncios e posts para testes A/B
- Analisar KPIs de campanhas e sugerir otimizações (com dados fornecidos)
- Rascunhar landing pages baseadas em oferta e personas

---

## Módulo 8 — Contexto = Game Changer

### Por que contexto importa

Sem contexto → IA responde como se fosse para qualquer empresa do planeta.
Com contexto → IA responde como se conhecesse profundamente o seu negócio.

**A diferença está no que você coloca antes da pergunta.**

### Como dar contexto eficiente

**No próprio prompt:**
```
Contexto: somos uma [SETOR] com [Nº] funcionários em [CIDADE].
Atendemos [PERFIL_CLIENTE]. Nosso principal diferencial é [DIFERENCIAL].
Tom de comunicação: [TOM].
```

**Via upload de documentos:**
- Playbook comercial, manual de atendimento, política de crédito
- Peça para a IA usar "apenas os documentos anexados como fonte"

**Via RAG (ferramentas mais avançadas):**
- Ferramentas que indexam seus documentos e permitem busca semântica integrada
- Evitam que a IA invente políticas ou dados que não existem

### Exemplo — [SETOR]

[EXEMPLO_CONTEXTO_SETOR]

---

## Módulo 9 — "Pulos do Gato"

Técnicas avançadas que transformam a IA em um copiloto real de decisões:

| Técnica | Como usar |
|---------|-----------|
| **Advogado do diabo** | "Liste primeiro os riscos e objeções antes de sugerir melhorias" |
| **Honestidade brutal** | "Seja brutalmente honesto. Se a ideia for ruim, diga isso diretamente" |
| **Perguntar antes de responder** | "Antes de sugerir soluções, faça até 5 perguntas para entender melhor" |
| **Raciocínio passo a passo** | "Mostre seu raciocínio antes de chegar à conclusão" |
| **Gerar alternativas** | "Gere 3 alternativas com prós e contras em tabela" |
| **Restrições explícitas** | "Não use linguagem motivacional. Não invente dados. Não repita a pergunta" |

### Combinando técnicas com níveis de uso

- **Nível 1:** "Explique como se eu tivesse 12 anos" / "Dê 3 exemplos práticos"
- **Nível 2:** "Liste riscos antes de sugerir" / "Faça perguntas antes de responder"
- **Nível 3:** Persona + contexto da empresa + RAG + pulos do gato → copiloto de decisões

---

## Caso de Uso — [SETOR]

[CASO_USO_SETOR]

---

## Próximos Passos — Seus 30 dias com IA

### Semana 1 — Familiarização (Nível 1→2)
- [ ] Usar IA pelo menos 1x por dia em tarefas reais (resumos, e-mails, análises)
- [ ] Testar o framework de 6 blocos em pelo menos 3 situações diferentes
- [ ] Anotar os 2–3 casos onde a IA mais ajudou

### Semana 2 — Aprofundamento (Nível 2)
- [ ] Criar um custom GPT ou Gem para a sua área principal
- [ ] Testar com documentos reais da empresa (playbook, manual, etc.)
- [ ] Compartilhar com o time e coletar feedback

### Semana 3–4 — Integração (Nível 2→3)
- [ ] Montar o contexto padrão da sua empresa em um arquivo de texto
- [ ] Criar 2–3 prompts reutilizáveis para tarefas recorrentes
- [ ] [PROXIMOS_PASSOS_SETOR]

**Dica:** quem usa IA toda hora fica bom em IA. Quem usa uma vez por semana não evolui. O segredo é volume de tentativas.

---

## Recursos para Continuar

### Cursos gratuitos
- **Generative AI for Everyone** — Andrew Ng (DeepLearning.AI) — ~3h, ideal para iniciantes
- **AI for Everyone** — Andrew Ng (Coursera) — foco em líderes de negócio

### Vídeos recomendados
- "Ethan Mollick on How AI is Going to Shape the Future of Work" — evidências de produtividade
- "Tokens vs Context Window + Prompt Engineering + Temperature | AWS Bedrock Demo" — fundamentos visuais
- "How to Create Custom GPT | OpenAI Tutorial" — passo a passo de Custom GPTs

### Ferramentas para começar
- ChatGPT (chat.openai.com) — mais usado no Brasil
- Gemini (gemini.google.com) — integrado ao Google Workspace
- Claude (claude.ai) — excelente para textos longos e análise

---

## Sobre a Vektoz

A Vektoz é uma agência especializada em automações e IA para empresas brasileiras. Se você quer implementar o **Nível 4** — IA integrada aos seus sistemas, rodando 24/7 sem intervenção manual — fale com a gente.

Não é "tutorial de fim de semana". É projeto profissional com integração, segurança e resultado.

📧 **[A CONFIRMAR]** | 🌐 **[A CONFIRMAR]**

---

## Espaço para Anotações

_Use este espaço durante o treinamento_

---
_
_
_
_
_
_
_
_
_
_
_
_
_
_
_

---

*Material preparado por Vektoz | [DATA] | Uso exclusivo para [NOME_EMPRESA]*
