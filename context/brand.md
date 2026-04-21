# Manual de Marca e Identidade Visual - Vektoz

## 1. Identidade

**Tagline:** "Vektoz: Inteligência Artificial que Impulsiona seu Futuro."

**Origem do nome:** "Vektoz" vem de *vetor* (do latim *vector* — "aquele que transporta", "direção"). Evoca direção, movimento, força e otimização. No contexto de IA, sugere a capacidade de direcionar dados e processos para resultados específicos. O sufixo "-oz" confere modernidade e toque tecnológico.

**Missão:** Automatizar processos e otimizar resultados com IA, oferecendo soluções sob medida que transformam negócios e geram valor real.

**Visão:** Ser a agência líder em soluções de IA no Brasil, reconhecida pela inovação, excelência e impacto positivo na eficiência e crescimento das empresas.

**Valores:** Inovação · Resultados · Agilidade · Segurança · Foco no Cliente

## 2. Logotipo

**Arquivos:**
- `context/assets/Logo.png` — logo com fundo branco (PNG)
- `context/assets/Logo_Vektoz_Transparente.png` — logo sem fundo (PNG transparente)
- `context/assets/Vektoz_Logos_Vector_SVG/Vektoz_Logo_Vector_WhiteBG.svg` — logo vetorizado com fundo branco (SVG)
- `context/assets/Vektoz_Logos_Vector_SVG/Vektoz_Logo_Vector_NoBG.svg` — logo vetorizado sem fundo (SVG)

**Paleta visual:** `context/assets/vektoz_palette.png`

**Manuais completos:**
- `context/assets/Manual_Marca_Vektoz_Final_V2.pdf`
- `context/assets/Manual_de_Marca_e_Identidade_Visual_-_Vektoz.docx`

**Descrição do símbolo:** Representação abstrata da letra "V" entrelaçada com um circuito eletrônico e uma seta apontando para cima e para a direita. Circuito = tecnologia, IA e conectividade. Seta ascendente = crescimento, progresso e otimização. Linhas formadas por gradiente de azul e cinza.

**Versões:**
- Símbolo + Wordmark: versão principal
- Apenas Símbolo: ícones, favicons, quando a marca já é reconhecida
- Apenas Wordmark: espaços limitados ou quando símbolo é redundante

**Cores aceitas:**
- Colorida: gradiente azul/cinza no símbolo + wordmark em azul escuro ou roxo
- Branca: para fundos escuros ou coloridos
- Preta: para fundos claros ou aplicações monocromáticas

**Usos proibidos:**
- Não distorcer, esticar ou alterar proporções
- Não usar cores fora da paleta oficial
- Não aplicar em fundos com baixo contraste
- Não adicionar sombras, contornos ou texturas ao logo
- Não alterar fontes, espaçamento ou capitalização do wordmark

## 3. Paleta de Cores

Identidade: moderna, tecnológica, confiável — roxo e azul vibrantes sobre fundo escuro.

### Cores Primárias

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Roxo Vektoz | #9333ea | 147, 51, 234 | Títulos, botões, destaques |
| Azul Vektoz | #22d3ee | 34, 211, 238 | Destaques, gradientes, ícones |

### Cores Neutras

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Preto Fundo | #000000 | 0, 0, 0 | Fundo principal |
| Cinza Escuro | #161618 | 22, 22, 24 | Cards, seções secundárias |
| Branco | #ffffff | 255, 255, 255 | Textos, ícones |
| Cinza Claro | #e5e7eb | 229, 231, 235 | Textos secundários |

### Cores de Destaque

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Verde WhatsApp | #25D366 | 37, 211, 102 | Botões de contato WhatsApp |

### Gradiente Principal

```css
background-image: linear-gradient(to right, #9333ea, #22d3ee);
```

Direção: esquerda para direita. Usado em títulos e elementos de destaque.

### Efeitos de Glow (CSS)

```css
/* Glow roxo */
box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
drop-shadow: 0 0 15px rgba(139, 92, 246, 0.5);

/* Glow azul */
box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);

/* Desfoque de fundo */
backdrop-filter: blur(12px); /* backdrop-blur-md */
```

### Classes Tailwind

```
Roxo: text-purple-600 / bg-purple-600
Azul: text-cyan-400 / bg-cyan-400
Fundo: bg-black / bg-gray-900
Texto: text-white / text-gray-200
```

## 4. Tipografia

**Arquivos de fonte:** `context/assets/Vektoz_Brand_Fonts_Inter/` — Inter e InterDisplay em todos os pesos (Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black), com variantes Italic e variáveis (`InterVariable.ttf`, `InterVariable-Italic.ttf`).

**Fonte:** Inter (preferencial) ou Roboto

- Títulos: Inter Bold / Semi-Bold
- Corpo: Inter Regular / Medium
- Stack fallback: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Hierarquia tipográfica** (base: 1rem = 16px):

| Elemento | px | rem | Peso | Leading | Uso |
|----------|----|-----|------|---------|-----|
| H1 | 48px | 3.0rem | Bold 700 | 1.2 (58px) | Hero / Headlines principais |
| H2 | 36px | 2.25rem | Semi-Bold 600 | 1.3 (47px) | Títulos de seção |
| H3 | 24px | 1.5rem | Semi-Bold 600 | 1.4 (34px) | Subtítulos / títulos de cards |
| H4 | 20px | 1.25rem | Medium 500 | 1.4 (28px) | Títulos menores / destaques |
| Body | 16px | 1.0rem | Regular 400 | 1.6 (26px) | Texto corrido / parágrafos |
| Small | 14px | 0.875rem | Regular 400 | 1.5 (21px) | Legendas / textos auxiliares |
| Button | 16px | 1.0rem | Semi-Bold 600 | 1.0 | Rótulos de botões / CTAs |

## 5. Elementos Gráficos

**Ícones:** estilo linha fina (outline), com efeito de brilho neon ou preenchidos com roxo/azul. Simples, modernos, reconhecíveis.

**Imagens:** alta qualidade, toque futurista/tecnológico. Incentivar integração de fotos de pessoas com elementos de interface (HUDs, hologramas) ou representações abstratas de IA — humanização da tecnologia.

## 6. Tom de Voz

**Profissional, inovador, confiante e acessível.**

- Comunicação clara, direta, focada em benefícios e resultados
- Sem jargões excessivos, mas com autoridade em IA
- Evitar gírias e linguagem excessivamente informal

## 7. Aplicações

### Dimensões para Redes Sociais

| Plataforma | Tipo | Dimensões (px) |
|------------|------|----------------|
| LinkedIn | Foto de perfil | 400 x 400 |
| LinkedIn | Capa | 1584 x 396 |
| LinkedIn | Post quadrado | 1200 x 1200 |
| LinkedIn | Post horizontal | 1200 x 627 |
| Instagram | Foto de perfil | 320 x 320 |
| Instagram | Post quadrado | 1080 x 1080 |
| Instagram | Post vertical | 1080 x 1350 |
| Instagram | Stories/Reels | 1080 x 1920 |

### Slides / Apresentações

- Fundo: preto (#000000) ou cinza escuro (#161618) com gradientes sutis de roxo/azul
- Textos: branco (#ffffff) para títulos, destaques em roxo (#9333ea) ou azul (#22d3ee)
- Logo: versão branca ou colorida, posicionado no canto superior ou inferior direito
- Tipografia: Inter ou Roboto
- Elementos gráficos: ícones de linha fina, efeitos glow/neon
- Slides limpos, foco na informação essencial

### Assinatura de E-mail (HTML)

```html
<table style="font-family: Arial, sans-serif; font-size: 12px; color: #333;">
  <tr>
    <td style="padding-right: 10px;">
      <img src="[LINK_LOGO_VEKTOZ]" alt="Vektoz Logo" style="width: 50px; height: auto;">
    </td>
    <td>
      <p style="margin: 0; font-weight: bold; color: #9333ea;">[Nome]</p>
      <p style="margin: 0;">[Cargo]</p>
      <p style="margin: 0;"><a href="https://vektoz.com.br" style="color: #22d3ee; text-decoration: none;">vektoz.com.br</a></p>
      <p style="margin: 0;">E-mail: <a href="mailto:[Email]" style="color: #333; text-decoration: none;">[Email]</a></p>
      <p style="margin: 0;">Telefone: [Telefone]</p>
    </td>
  </tr>
</table>
```

## 8. Referências

- Website: https://vektoz.com.br/
