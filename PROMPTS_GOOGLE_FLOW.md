# Guia Oficial de Prompts: Google Flow (Nano Banana & Omni 1.1 Flash)
## Kuro Contemporary Sushi — Landing Page Inmersiva (Curitiba, PR)

Este documento contém os prompts exatos, parâmetros técnicos e regras de geração para alimentar o Google Flow com **Nano Banana** (imagens fotográficas de alta fidelidade) e **Omni 1.1 Flash** (clips de vídeo em plano sequência para o background de Scroll World).

---

## 1. Regras de Ouro Técnicas (Diretrizes Midudev & El Aya)

1. **Relação de Aspecto Estrita:** Todas as imagens e vídeos devem ser gerados em **16:9** (Horizontal).
2. **Câmera "Steady Gimbal":** Os vídeos devem simular uma caminhada em primeira pessoa com estabilizador eletrônico contínuo, sem vibrações, solavancos ou movimentos bruscos.
3. **Pares de Imagens (Keyframe Início $\rightarrow$ Fim):** Em vez de gerar um vídeo longo de 30s, gere **clips de 4 a 5 segundos entre pares de fotos consecutivas**. Se um clip precisar de ajuste, você re-renderiza apenas ele sem gastar créditos à toa.
4. **Sem Áudio:** Exporte todos os vídeos sem canal de áudio para evitar peso desnecessário na web.
5. **Prompts Negativos Obrigatórios:**
   `no morphing, no cross-fade transitions, no camera jitter, no flickering, no fast zoom, no deformed hands, no blurry faces, no glitching walls, no sudden cuts`

---

## 2. Geração de Imagens com Nano Banana (Google Flow)

### 📸 Foto 1: Fachada Externa e Entrada Minimalista
* **Objetivo:** Estabelecer o clima de exclusividade no bairro Batel, Curitiba. Noite intimista, sofisticação discreta.
* **Prompt para Nano Banana:**
  ```text
  Cinematic architectural photograph of a luxury contemporary Japanese restaurant facade at night, named "KURO". Exterior crafted in dark Yakisugi charred cedar wood slats, oversized tinted black glass door, warm 2700K recessed indirect LED floor lighting casting a soft golden glow on wet dark stone pavement. Minimalist engraved dark metal signage with subtle backlit illumination. Moody, refined atmosphere, luxury hospitality in Curitiba, 8k resolution, shot on 35mm lens, f/2.0, photorealistic, elegant editorial architectural photography --ar 16:9
  ```

---

### 📸 Foto 2: O Salão Principal e Iluminação Cênica
* **Objetivo:** Transição do exterior para a acolhida interior do restaurante.
* **Prompt para Nano Banana:**
  ```text
  Interior view walking into a luxury high-end Japanese restaurant dining room. Floor-to-ceiling dark textured slate walls, minimalist modern Japanese interior design, ambient warm pendant lanterns made of washi paper glowing softly. Polished dark concrete floor with subtle warm reflections, spacious layout with private booths along the sides. Atmospheric, serene, cinematic lighting, zero clutter, ultra-luxury aesthetic, photorealistic, architectural digest quality --ar 16:9
  ```

---

### 📸 Foto 3: A Barra Exclusiva de Omakase (Balcão Hinoki)
* **Objetivo:** O coração do restaurante: apenas 12 lugares frente ao Sushiman.
* **Prompt para Nano Banana:**
  ```text
  Eye-level perspective of an exclusive 12-seat Japanese Omakase sushi counter. Pristine solid light Hinoki wood bar counter with natural satin finish, black leather modern barstools. In the soft-focus background, an artisan itamae sushi chef in traditional black chef attire delicately preparing sushi. Narrow beam warm spotlights directly illuminating the clean wooden counter surface, textured matte dark ceramic plates placed with chopsticks. Cinematic, highly focused, intimate luxury, 8k, master craftsmanship --ar 16:9
  ```

---

### 📸 Foto 4: Mesa Íntima e Cerimônia do Saquê
* **Objetivo:** Demonstrar a experiência do cliente sentado à mesa.
* **Prompt para Nano Banana:**
  ```text
  Close-up architectural and lifestyle shot of an intimate private booth table at Kuro restaurant. Handcrafted black matte ceramic sake set with delicate steam from warm sake carafe, thin smoked crystal glassware. A small minimalist black ceramic vase holding a single delicate blooming cherry blossom twig. Warm focused spotlighting on the table center, dark velvety shadows around, luxury dining experience, photorealistic, 50mm lens, f/1.8 --ar 16:9
  ```

---

### 📸 Foto 5: Nigiri de Autor (Alta Gastronomia)
* **Objetivo:** O ápice visual — o prato que vende a reserva de R$ 380 - R$ 550 por pessoa.
* **Prompt para Nano Banana:**
  ```text
  Macro food photography of a signature gourmet sushi creation: lightly torched Bluefin Otoro nigiri topped with white truffle caviar and a microscopic touch of 24k gold leaf, resting on a coarse handcrafted charcoal black ceramic slab. Shari rice grains distinct, glistening with aged soy glaze brush. Shallow depth of field, dramatic side rim light catching the texture of the fish and smoke essence. Michelin-star dining presentation, mouth-watering, ultra-detailed, 85mm macro lens, f/2.8 --ar 16:9
  ```

---

## 3. Geração de Vídeos com Omni 1.1 Flash (Google Flow)

Use o recurso de **Image-to-Video** ou **Start/End Keyframes** ligando as fotos acima.

### 🎥 Clip 1 (Foto 1 $\rightarrow$ Foto 2): Entrada da Fachada ao Salão
* **Keyframe Inicial:** Foto 1 (Fachada Externa)
* **Keyframe Final:** Foto 2 (Salão Principal)
* **Prompt para Omni 1.1 Flash:**
  ```text
  First-person steady gimbal camera movement smoothly gliding forward through the dark glass entrance doors into the warm, moody Japanese dining room. Seamless continuous forward motion, no cuts, no head bobbing, buttery smooth stabilization, cinematic lighting transition from dark exterior to warm golden interior ambience. 16:9, no audio, realistic physics, 4k.
  ```

---

### 🎥 Clip 2 (Foto 2 $\rightarrow$ Foto 3): Do Salão à Barra de Omakase
* **Keyframe Inicial:** Foto 2 (Salão)
* **Keyframe Final:** Foto 3 (Barra Omakase)
* **Prompt para Omni 1.1 Flash:**
  ```text
  First-person steady gimbal camera moving forward and slowly panning slightly right towards the illuminated Hinoki wood omakase counter. The chef in the background is seen working with subtle, natural hand movements. Steady pace, smooth cinematic dolly forward, ambient warm lighting with glowing spotlights on the counter. No jitter, no sudden cuts, fluid motion, 16:9, no audio.
  ```

---

### 🎥 Clip 3 (Foto 3 $\rightarrow$ Foto 4): Da Barra à Mesa Íntima
* **Keyframe Inicial:** Foto 3 (Barra)
* **Keyframe Final:** Foto 4 (Mesa com Saquê)
* **Prompt para Omni 1.1 Flash:**
  ```text
  Steady cinematic camera smoothly turning towards an intimate private table booth. Gliding closer and descending slightly towards table level to reveal the artisanal black sake set and delicate centerpiece. Gentle, elegant camera deceleration arriving perfectly in front of the table. Crisp focus, smooth gimbal stabilization, 16:9, no audio.
  ```

---

### 🎥 Clip 4 (Foto 4 $\rightarrow$ Foto 5): Aproximação ao Prato Insignia
* **Keyframe Inicial:** Foto 4 (Mesa com Saquê)
* **Keyframe Final:** Foto 5 (Nigiri Otoro)
* **Prompt para Omni 1.1 Flash:**
  ```text
  Cinematic slow-motion push-in dolly forward directly centering on the exquisite gourmet Otoro nigiri. The subtle glistening texture and delicate torch flame smoke gently dissipating in the air. Masterful food presentation, ultra-smooth macro lens movement, warm dramatic lighting, 16:9, no audio.
  ```

---

## 4. Otimização para a Web (WPO Extremo)

Assim que os clips forem baixados do Google Flow:
1. Salve os arquivos originais em `public/videos/raw/`.
2. Para que o scroll vá para frente e para trás com 0 latência, converta para WebM e MP4 compactos (resolução 1080p ou 720p em 30fps):
   ```bash
   ffmpeg -i clip1.mp4 -c:v libvpx-vp9 -b:v 1500k -an public/videos/clip1.webm
   ffmpeg -i clip1.mp4 -c:v libx264 -crf 23 -preset slow -an public/videos/clip1.mp4
   ```
3. O leitor em `<canvas>` ou `<video>` do Astro fará a sincronização precisa do tempo do vídeo conforme o percentual de scroll do usuário.
