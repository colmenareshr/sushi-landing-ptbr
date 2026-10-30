# 🍣 Kuro Contemporary Sushi — Landing Page Inmersiva & Omakase

Landing page de alta conversão para o restaurante fictício **Kuro Contemporary Sushi** (localizado no bairro Batel, Curitiba — PR).

Construída com **Astro 5** e **Tailwind CSS**, aplicando o conceito de **Scroll World** (fundo cinematográfico sincronizado com o scroll do usuário) inspirado no método de Midudev e nas diretrizes de design da skill `landing-page-design`.

---

## ⚡ Tecnologias e Arquitetura

* **Framework:** [Astro 5](https://astro.build) (Velocidade e Core Web Vitals extremos, 0 JavaScript desnecessário).
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com) com `@tailwindcss/vite`.
* **Mecanismo de Scroll:** Sincronização via `<canvas>` e `requestAnimationFrame` para transição entre ambientes.
* **Idioma & Copywriting:** Português do Brasil (PT-BR) com foco em gastronomia contemporânea de luxo.
* **SEO & Dados Estruturados:** `Schema.org/Restaurant` nativo em JSON-LD.

---

## 🎨 Inteligência Artificial & Assets Visuais

Consulte o arquivo [`PROMPTS_GOOGLE_FLOW.md`](./PROMPTS_GOOGLE_FLOW.md) para acessar:
1. **Prompts para Nano Banana (Google Flow):** Fotografias arquitetônicas e gastronômicas com lente 35mm e iluminação Yakisugi.
2. **Prompts para Omni 1.1 Flash (Google Flow):** Clips contínuos em *Steady Gimbal* sem cortes e sem deformações para alimentar o background em scroll.

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/colmenareshr/sushi-landing-ptbr.git
   cd sushi-landing-ptbr
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:4321` no navegador.

4. Compilar para produção:
   ```bash
   npm run build
   ```

---

## 📸 Caso de Estudo para Instagram (Build in Public)

Este projeto foi concebido como um caso prático de demonstração técnica da **ColmenaDev**:
- Como transformar fotos geradas por IA em uma experiência web imersiva.
- Como o design e a velocidade aumentam as reservas de restaurantes de alto ticket.
- Comparativo de performance: Astro (`< 1.2s`) vs. WordPress convencional.

---

Desenvolvido por **Humberto Colmenares** · [ColmenaDev](https://colmenadev.com)
