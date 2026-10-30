const { chromium } = require('C:/Users/colme/OneDrive/Documents/Claude/Projects/Branding ColmenaDev/wp-factory/node_modules/playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function run() {
  const outputDir = path.resolve(__dirname, '../reels');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Iniciando Chrome via Playwright para gravação do Reel...');
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    args: ['--enable-webgl', '--enable-accelerated-2d-canvas', '--autoplay-policy=no-user-gesture-required']
  });

  // Configuração para formato vertical de Instagram Reels (9:16)
  // O viewport e o recordVideo.size DEVEM ser estritamente idênticos (540x960)
  // para evitar qualquer borda cinza ou desalinhamento. Depois o FFmpeg escala para 1080x1920 Full HD.
  const context = await browser.newContext({
    viewport: { width: 540, height: 960 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    recordVideo: {
      dir: outputDir,
      size: { width: 540, height: 960 }
    }
  });

  const page = await context.newPage();
  console.log('📱 Navegando para http://localhost:4321/ ...');
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  // Disparar toque inicial para desbloquear decodificação de vídeo no mobile
  await page.mouse.click(200, 300);
  await page.waitForTimeout(2000);

  console.log('🎬 Iniciando coreografia de scroll cinemático...');

  // Executar a coreografia suave de scroll dentro da página
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    
    // Função de interpolação suave entre posições de scroll
    async function smoothScrollTo(targetY, durationMs) {
      const startY = window.scrollY;
      const diff = targetY - startY;
      const startTime = performance.now();

      return new Promise((resolve) => {
        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / durationMs);
          // Easing easeInOutQuad
          const ease = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
          
          window.scrollTo(0, startY + diff * ease);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            window.scrollTo(0, targetY);
            resolve();
          }
        }
        requestAnimationFrame(step);
      });
    }

    const heroSection = document.getElementById('hero-scroll');
    const heroH = heroSection ? heroSection.offsetHeight - window.innerHeight : 3000;

    // FASE 1: Pausa no Hero (A Chegada)
    await sleep(2500);

    // FASE 2: Deslizar para Cena 2 (O Salão)
    await smoothScrollTo(heroH * 0.28, 2200);
    await sleep(2200);

    // FASE 3: Deslizar para Cena 3 (O Balcão)
    await smoothScrollTo(heroH * 0.55, 2200);
    await sleep(2200);

    // FASE 4: Deslizar para Cena 4 (Pratos de Autor / Otoro)
    await smoothScrollTo(heroH * 0.85, 2200);
    await sleep(2500);

    // FASE 5: Sair do Scroll World e entrar na Seção Conceito (TaglineReveal)
    const taglineSec = document.getElementById('experiencia');
    if (taglineSec) {
      await smoothScrollTo(taglineSec.offsetTop - 40, 1800);
      await sleep(2000);
    }

    // FASE 6: Deslizar para o Cardápio Omakase (3 Menus)
    const menuSec = document.getElementById('omakase');
    if (menuSec) {
      await smoothScrollTo(menuSec.offsetTop - 20, 2000);
      await sleep(2500);
    }

    // FASE 7: Deslizar para Prova Social & Filosofia
    const socialSec = document.getElementById('avaliacoes');
    if (socialSec) {
      await smoothScrollTo(socialSec.offsetTop - 40, 2000);
      await sleep(2000);
    }

    // FASE 8: Deslizar para o CTA Final de Reserva (WhatsApp)
    const ctaSec = document.getElementById('reservar');
    if (ctaSec) {
      await smoothScrollTo(ctaSec.offsetTop, 2000);
      await sleep(3000);
    }
  });

  console.log('🏁 Coreografia concluída. Finalizando gravação...');
  const video = page.video();
  await context.close();
  await browser.close();

  if (video) {
    const rawVideoPath = await video.path();
    console.log('✅ Gravação bruta concluída em:', rawVideoPath);

    const finalMp4Path = path.resolve(outputDir, 'kuro_sushi_reel_vertical.mp4');
    console.log('🔄 Escalando para 1080x1920 Full HD com FFmpeg Lanczos...');

    const ffmpegCmd = `ffmpeg -y -i "${rawVideoPath}" -vf "scale=1080:1920:flags=lanczos" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -r 30 -movflags +faststart "${finalMp4Path}"`;
    execSync(ffmpegCmd, { stdio: 'inherit' });

    console.log('✨ Reel vertical Full HD (1080x1920) gerado com sucesso em:', finalMp4Path);
    return finalMp4Path;
  }
}

run().catch(console.error);
