# Aprendizados — Pipeline de Conteúdo LinkedIn + Notion

Decisões, descobertas e limitações aprendidas em produção.
Atualizado manualmente ou via skill quando relevante.

---

## Fluxo validado: post + isca

1. `/post-linkedin [tema] [CTA keyword]` → escolhe copy → publica no LinkedIn
2. `/isca-linkedin` + cola a copy do post → aprova ângulo → aprova outline → aprova conteúdo → página criada no Notion
3. Finalização manual da página: capa, ícone, marcador do cal.com, screenshot real
4. `/feedback [observação]` após ver os resultados

---

## Decisões de design das skills

### Por que 3 skills separadas (post / isca / feedback)?
Cada skill tem um gatilho diferente. Post é diário. Isca é por post publicado. Feedback é por resultado observado. Misturar numa skill só quebraria os gates de aprovação e tornaria o fluxo confuso.

### Por que gates de aprovação (ângulo → outline → conteúdo)?
Sem gates, a skill gera conteúdo que não está alinhado com o post publicado. O ângulo da isca precisa ser 100% coerente com a promessa do post. Uma aprovação prematura desperdiça a isca inteira.

### Por que o `/briefing` foi deletado?
A skill pesquisava bem mas não entregava o que importa: sugestões prontas para postar. O output era um digest de pesquisa, não uma decisão. Será reconstruído do zero com foco em "o que postar hoje".

---

## Limitações técnicas descobertas

### Notion MCP — o que não funciona via API
- **Embed interativo** (`<embed>`): não suportado no spec do MCP. Fica como texto literal.
- **Upload de arquivo local**: impossível. Notion só aceita URL externa para capa e ícone.
- **Google Drive como host de imagem**: bloqueado. Google redireciona e o Notion não carrega.
- **Marcador (bookmark)**: não suportado via API. Precisa ser adicionado manualmente.

### Notion MCP — o que funciona
- Criação de página com conteúdo completo (callouts, tabelas, checklists, código, divisórias)
- Capa e ícone via URL pública (Imgur ou similar funciona)
- Atualização de conteúdo existente via `update_content`

### Hosting de imagens
- Google Drive: não funciona como URL direta para Notion
- Imgur: funciona, links não expiram, gratuito
- Solução adotada: Eduardo faz upload manual de capa e ícone após criação da página

---

## Padrão de CTA da isca

Estrutura obrigatória no final de toda página:
1. Texto de ponte: "Você aprendeu X → a mesma lógica se aplica a [operação da empresa]"
2. Apresentação do Eduardo + Vektoz
3. Marcador do cal.com (adicionado manualmente): `https://cal.com/vektoz-ed/bate-papo`

---

## O que o `/feedback` faz e quando usar

Salva observações de performance em `memoria-editorial.md` com data.
As skills de post e isca leem esse arquivo e incorporam nas sugestões.

Usar quando: resultado de um post surpreendeu (positivo ou negativo).
Não usar quando: resultado foi dentro do esperado.

Exemplos úteis:
- `posts com checklist no final geram mais compartilhamentos`
- `hook com número específico performa melhor que pergunta`
- `tema de WhatsApp converte mais DM que tema de design`
