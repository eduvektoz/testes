# Preferências do Eduardo

Padrões de gosto, veto e processo identificados ao construir a proposta de referência. Cada preferência tem o que **funcionou**, o que foi **rejeitado** ou **mal recebido**, e o **porquê inferido**. Tratar como guia ao replicar — Eduardo aprova pelo silêncio e corrige pelo específico, então se algo aqui não funcionar com a próxima proposta, perguntar antes de presumir.

## Estética

### Glassmorphism profundo, não superficial
- **Funcionou**: 5-layer shadow + `backdrop-blur 32–40px` + pseudo-border gradient + radius 24/28px. Sistema `.glass` e `.glass-hero`.
- **Rejeitado**: efeito sutil com border simples + blur leve.
- **Por quê**: identidade de tecnologia/IA da Vektoz pede peso visual. Aprovação foi pelo silêncio — sistema nunca questionado em 12 slides.
- **Como aplicar**: copiar tokens [design-system.md](design-system.md) literais. Não enxugar.

### 3 accent colors semanticamente distintas, não monocromático
- **Funcionou**: blue (primário), violet (sofisticado), copper (humano/warm), mint (sucesso). Cada cor com carga semântica.
- **Rejeitado**: monocromático azul ou paleta única.
- **Por quê**: cores carregam significado lido sem explicação. Cor atribuída a um entregável persiste pela apresentação.

### Logos em alta resolução
- **Funcionou**: logo do cliente em 600×200, arquivo grande (até 4MB).
- **Rejeitado**: logo pequeno ou pixelado.
- **Por quê**: logo aparece em tela cheia no Cover. Detalhe visual crítico.
- **Como aplicar**: pedir logo em alta resolução no briefing. Se cliente só tem versão pequena, pedir pra ele recuperar a original ou usar Photoshop pra refinar.

### Apresentação web > Google Slides ou PDF
- **Funcionou**: web interativa como fonte canônica. Pra apresentar: browser. Pra enviar: link Vercel.
- **Rejeitado**: Google Slides (perde glassmorphism, animações, motion paths). PDF (perde animações, interatividade).
- **Por quê**: Eduardo perguntou ativamente sobre alternativas; ao saber das degradações, escolha foi imediata. Critério explícito: "sem perder absolutamente nada? Efeitos, transições, cores, etc?"

### Métricas em vez de instinto pra decisões visuais
- **Funcionou**: "em uma escala de 0 a 10, sendo 0 o círculo e 10 o label, coloque a distância em 5"
- **Rejeitado**: feedback ambíguo tipo "mais perto" ou "menos longe"
- **Por quê**: Eduardo pensa em proporção, não em absolutos. Catalogou 4 erros meus por memória antes de pedir extração.
- **Como aplicar**: quando tiver dúvida de calibração, oferecer escala 0-10 com referências fixas, não pedir descrição livre.

## Copy e linguagem

### Títulos declarativos de 1–3 palavras com ponto final
- **Funcionou**: "Investimento.", "Vender.", "Como esses problemas se conectam." (sem ?)
- **Rejeitado**: "O que custa destravar." (passivo, abstrato), perguntas em slides de número.
- **Por quê**: declaração nomeia sem diagnosticar. Frame negativo coloca cliente em posição vergonhosa.
- **Como aplicar**: em slide de número/preço, headline é a CATEGORIA, não poesia. Cortar pelo menos 30% da copy antes de aprovar.

### Segunda pessoa direta
- **Funcionou**: "o seu tempo de verdade", "sua equipe", "Vamos construir o futuro da [Cliente] juntos?"
- **Rejeitado**: "calculadora de custo oculto" (terceira pessoa descritiva)
- **Por quê**: "seu" cria tensão pessoal; "de verdade" implica que cliente conhece um número errado.

### Dados reais e específicos nos mockups
- **Funcionou**: Vale S.A. (Carajás), Eletrobras Furnas (Itutinga), Pref. de Maceió. Tema "frota 4×4 / mineradora / 14 dias parados".
- **Rejeitado**: exemplos genéricos ("Cliente A", "Empresa X")
- **Por quê**: especificidade cria verossimilhança. Cliente da proposta consegue visualizar a cena.
- **Como aplicar**: pedir o ICP do cliente do cliente NO BRIEFING. Pesquisar empresas reais desse ICP e usar nomes plausíveis. Se não tiver tempo de pesquisar, usar nomes parecidos com clientes reais conhecidos do mercado.

### Copy de resultado emocional curto
- **Funcionou**: "Vender." — 1 palavra com ponto final
- **Rejeitado**: versões explicativas multi-frase
- **Por quê**: menos palavras = mais peso. Cliente preenche o significado mentalmente.

### ICP nomeado com especificidade
- **Funcionou**: "decisores de mineradoras, energia e setor público"
- **Rejeitado**: ICP genérico ("empresas que vendem para B2B")
- **Por quê**: Eduardo é vendedor B2B — sabe que mensagem que NOMEIA o cliente chega mais que a que descreve o produto.

### Engagement plausível, não inflado
- **Funcionou**: 187 reações, 43 comentários, 12 reposts (mockup LinkedIn)
- **Rejeitado**: zerado ou enormes (5000+)
- **Por quê**: realismo sustenta credibilidade. Mockup tem que parecer um post real do ICP.

## Processo de trabalho

### Briefing completo antes de codar
- **Funcionou**: perguntar dores, ICP do cliente do cliente, sócios, preços, ticket médio ANTES de tocar em código.
- **Rejeitado**: começar a codar e perguntar conforme aparece (Lucas Veiga foi descoberto só no slide 12 — atrito).
- **Por quê**: rodar reorganização de layout no fim é caro.
- **Como aplicar**: lista numerada de perguntas no início. Não começar até ter resposta de todas.

### Documentação técnica com file:line
- **Funcionou**: referências `[ViciousCycle.tsx:340-345](...)` em diagnósticos e documentação
- **Rejeitado**: descrição vaga ("está em algum lugar do componente")
- **Por quê**: Eduardo citou 4 erros meus de memória ao pedir extração. Documentação que não permite verificação não tem valor.
- **Como aplicar**: ao apontar bug ou explicar implementação, sempre file path + linha. Ao apresentar entrega, citar file:line dos pontos críticos pra Eduardo poder validar.

### Causa raiz, não apenas correção
- **Funcionou**: "transformTemplate é necessário porque Framer Motion sobrescreve style.transform quando há props animadas"
- **Rejeitado**: "ajustei e está funcionando agora"
- **Por quê**: feedback explícito do Eduardo: "Analise e veja EXATAMENTE o porque vc tá errando isso." Correção sem diagnóstico pode ser revertida acidentalmente porque a causa ficou desconhecida.

### Opções numeradas quando a escolha é dele
- **Funcionou**: "Opção 1: X / Opção 2: Y / Opção 3: Z" → resposta direta "Opção 3."
- **Rejeitado**: recomendação única ou texto pedindo deliberação
- **Por quê**: CEO que toma muitas decisões por dia prefere menus a argumentos.
- **Como aplicar**: ao apresentar alternativas, sempre numeradas com 1 frase de contexto. Não recomendar uma "óbvia" — deixar Eduardo escolher.

### Bloco completo antes de feedback, não esboço iterativo
- **Funcionou**: slides 7–12 apresentados como bloco completo. Feedback foi pontual (Lucas no footer, headline Investimento, card upside).
- **Rejeitado**: esboço minimalista pedindo aprovação por item.
- **Por quê**: Eduardo quer ver o produto em estado avaliável. Esboço gera ruído de feedback.
- **Como aplicar**: produzir entrega tecnicamente completa. Aplicar checklist de qualidade (em [erros-comuns.md](erros-comuns.md)) antes de mostrar.

### Documentação retrospectiva profunda ao final
- **Funcionou**: 6 passes de extração depois da entrega — sistema visual, decisões, descartados, slides, preferências, erros
- **Rejeitado**: wrap-up informal ou apenas commit message
- **Por quê**: Eduardo está construindo PLAYBOOK reutilizável, não documentando esta proposta específica.
- **Como aplicar**: ao final de cada projeto não-trivial, sugerir extração estruturada se não foi pedido. Mas só sugerir — Eduardo escolhe se quer rodar agora ou depois.

## Tolerância a erro e iteração

### Corrigir na primeira tentativa OU diagnosticar antes de tentar
- **Atrito gerado**: tuning incremental sem diagnóstico (`LABEL_OFFSET 78 → 110 → sem resultado`)
- **Feedback literal**: "we're losing time on the same problem, fix it definitively"
- **Como aplicar**: se ajuste numérico não resolve, parar e diagnosticar. Não tentar terceira vez.

### Zero auto-aprovação sem verificação
- **Atrito gerado**: declarei "alinhamento OK" sem medir geometria
- **Feedback literal**: "still misaligned, validate with your own eyes"
- **Como aplicar**: NUNCA dizer "está OK" baseado em screenshot. Sempre medir com `getBoundingClientRect()` quando tolerância visual < 50px.

### Tolerância alta pra primeira ocorrência, zero pra repetição
- **Modelo**: 1ª falha = custo esperado, 2ª = sinal de processo errado, 3ª = inaceitável → exige diagnóstico de causa raiz
- **Como aplicar**: se mesmo erro voltar, parar processo atual e fazer extração. Não tentar de novo cegamente.

### Tolerado sem atrito
- Mudanças menores de 1 iteração (logo, headline, card upside) → 1 pedido → 1 correção → aprovação implícita
- Aprovação pelo silêncio para blocos inteiros (slides 7–12 sem nenhum ajuste; sistema visual nunca questionado)

## Critério de qualidade implícito

### Precisão geométrica > aproximação visual
- Único momento de aprovação com múltipla exclamação foi após fix validado com Puppeteer: "Agora sim! Perfeito!!!!!"
- Iterações com "visualmente ok" foram rejeitadas.

### Especificidade técnica em documentação
- Critério: "Boa documentação" = pode substituir a conversa como referência, reutilizável sem o Claude.
- Instrução típica: lista 9 seções, exigir file:line, citar erros específicos.

### Coerência narrativa entre slides
- Aprovação em blocos temáticos. Comentários de ajuste foram pontuais — nunca sobre estrutura narrativa.
- Cada slide tem UMA mensagem; o conjunto é UM argumento.

### Resultado pronto pra usar de forma independente
- Critério de conclusão: não "tecnicamente funcional" mas "eu consigo usar isso de forma independente".
- Perguntas sobre offline, email, edição revelam esse padrão.
- Como aplicar: entregar com instrução de uso (como rodar local, como apresentar, como compartilhar link, como fazer backup).

## Perfil de decisor

5 frases que descrevem como Eduardo toma decisões — útil pra antecipar reações:

### 1. Decide por princípio, não por preferência
Não disse "prefiro glassmorphism" — aprovou sistema internamente consistente e descartou variações que quebrariam coerência. Aplica a mesma lógica ao copy: rejeitou "O que custa destravar" porque o frame era inconsistente com o objetivo.

> **Implicação**: ao propor mudança, justificar por princípio (consistência narrativa, frame correto, eliminação de objeção). "Eu acho mais bonito" não é argumento.

### 2. Usa métricas onde outros usariam instinto
"Escala de 0 a 10, coloque em 5" elimina ambiguidade e iteração. Catalogou 4 erros meus por memória antes de pedir extração. Transforma intuições em critérios verificáveis.

> **Implicação**: oferecer métricas, escalas, comparações concretas. Evitar "fica melhor" — preferir "fica X% mais Y porque Z".

### 3. Aprova pelo silêncio, corrige pelo específico
Nenhum elogio a slides ou paleta. Feedback surgiu somente quando algo estava errado — e era cirúrgico. Silêncio = sinal de qualidade, não neutralidade.

> **Implicação**: não buscar elogio nem confirmação ativa. Se Eduardo não comentou, está bom. Não entender silêncio como "ele não viu ainda".

### 4. Não tolera o mesmo erro duas vezes, mas tolera o primeiro
Modelo: 1ª falha = custo esperado, 2ª = sinal de processo errado, 3ª = inaceitável → exige diagnóstico de causa raiz. Alta tolerância pra novidade, zero pra repetição.

> **Implicação**: se cometi um erro, documentar a causa raiz no ato (vira regra/skill update). Repeti = falha de processo, não falha de execução.

### 5. Pensa em sistema, não em peças
Os últimos prompts da sessão de extração não eram revisão — eram construção de playbook. Critério final: "eu consigo replicar isso sem depender de você."

> **Implicação**: ao entregar, perguntar "isso é reutilizável?" Se a resposta é não, reorganizar. Skills, decisions/log, regras documentadas são a moeda final, não outputs únicos.

## Resumo executivo

Em 1 frase: **Eduardo prioriza coerência sistêmica e verificabilidade sobre velocidade ou agradar; o critério de "pronto" é "eu consigo replicar e validar isso sem você".**
