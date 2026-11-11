// All site copy in one place: Portuguese (default, at /) and English (at /en/).
export type Lang = 'pt' | 'en';

export const REPO = 'https://github.com/Ilmenyx-Technology/ilmenyx-controller';
export const RELEASES = `${REPO}/releases`;
export const ORG = 'https://github.com/Ilmenyx-Technology';
export const KOFI = 'https://ko-fi.com/ilmenyxtechnology';
export const EMAIL = 'ilmenyx.technology@gmail.com';
export const PIX = 'ad7075cc-cca1-4f12-9e11-f0d10890456a';

export const t = {
  pt: {
    htmlLang: 'pt-BR',
    shotDir: '/img/',
    other: { label: 'EN', href: '/en/', controller: '/en/ilmenyx-controller/', name: 'English' },
    home: '/', controllerPage: '/ilmenyx-controller/',
    nav: { brand: 'A marca', products: 'Produtos', principles: 'Princípios', support: 'Apoie', contact: 'Contato' },
    skip: 'Pular para o conteúdo',
    meta: {
      title: 'Ilmenyx Technology — estrutura para criar, liberdade para explorar',
      description: 'Ilmenyx Technology cria software, serviços digitais e jogos onde engenharia e criatividade se complementam. Criadora do Ilmenyx Controller, para Linux.',
    },
    hero: {
      eyebrow: 'Ilmenyx Technology',
      title: 'Estrutura para criar. Liberdade para explorar.',
      lead: 'Criamos software, serviços digitais e jogos em que engenharia e criatividade se complementam: tecnologia útil, bem construída, clara e explorável.',
      cta: 'Conheça o Ilmenyx Controller', cta2: 'Ver no GitHub',
      gemAlt: 'A Gema, símbolo da Ilmenyx Technology',
    },
    brand: {
      eyebrow: '02 / A marca', title: 'Engenharia e criatividade que se complementam',
      lead: 'O nome e o símbolo vêm do bismuto: um metal que cristaliza em degraus, enrola as bordas em espirais quadradas e se cobre de uma película de óxido que reflete ouro, magenta e azul. É o que buscamos em cada projeto: estrutura rigorosa por dentro, liberdade e cor por fora.',
      cards: [
        { title: 'Propósito', text: 'Criar ferramentas e experiências digitais em que engenharia e criatividade se complementem.' },
        { title: 'Promessa', text: 'Tecnologia útil, bem construída, clara e explorável.' },
        { title: 'Personalidade', text: 'Precisa, engenhosa, acessível, exploradora e confiável.' },
      ],
    },
    products: {
      eyebrow: '03 / Produtos', title: 'O que estamos construindo',
      controller: {
        badge: 'Pré-lançamento · gratuito', name: 'Ilmenyx Controller',
        text: 'Diagnóstico, monitoramento e benchmark de hardware para Linux, com ferramentas para jogos: estimativa de FPS, "por que o jogo não abre?", instalação de jogos de Windows e correções reversíveis. Em português, inglês e espanhol.',
        more: 'Saiba mais', download: 'Ver downloads',
        shotAlt: 'Visão geral do Ilmenyx Controller mostrando CPU, GPU, memória e atividade',
      },
      soon: { title: 'Próximos projetos', text: 'Novas ferramentas, serviços e jogos estão no caminho. Acompanhe a organização no GitHub para ver primeiro.' },
    },
    principles: {
      eyebrow: '04 / Princípios', title: 'Como trabalhamos',
      items: [
        { title: 'Modularidade', text: 'Peças pequenas e claras, que podem ser testadas e trocadas sem quebrar o resto.', color: 'var(--gold)' },
        { title: 'Clareza', text: 'Texto curto e direto. Se algo não funciona, dizemos o quê e como resolver.', color: 'var(--bronze)' },
        { title: 'Transparência', text: 'Código à vista, sem telemetria e sem rede escondida. Nada sai do seu PC sem você pedir.', color: 'var(--magenta)' },
        { title: 'Cuidado técnico', text: 'Medir antes de afirmar, testar em hardware real e nunca inventar um número.', color: 'var(--indigo)' },
        { title: 'Experimentação', text: 'Explorar ideias novas, mas sempre com um caminho para desfazer.', color: 'var(--verdigris)' },
      ],
    },
    support: {
      eyebrow: '05 / Apoie', title: 'Ajude a manter o projeto',
      text: 'O Ilmenyx Controller é gratuito. Uma doação ajuda a manter o desenvolvimento e a comprar hardware para testar. É sempre opcional: nenhuma função depende dela.',
      kofi: 'Apoiar no Ko-fi', pixLabel: 'Pix (chave aleatória)', qrAlt: 'QR Code Pix da Ilmenyx Technology',
      sponsors: 'GitHub Sponsors: em breve.',
    },
    contact: {
      eyebrow: '06 / Contato', title: 'Fale com a gente',
      text: 'Dúvidas, parcerias ou imprensa: escreva por e-mail. Problemas e ideias sobre um produto: abra uma issue no GitHub, onde todo mundo pode acompanhar.',
      issues: 'Relatar um problema', security: 'Falhas de segurança: por e-mail, nunca em issue pública.',
    },
    footer: { rights: 'Ilmenyx Technology', privacy: 'Este site não usa cookies nem rastreamento.' },
    ctrl: {
      meta: {
        title: 'Ilmenyx Controller — diagnóstico e benchmark de hardware para Linux',
        description: 'App gratuito para Linux: sensores, GPU, discos, benchmarks, estimativa de FPS e ferramentas para jogos. Português, inglês e espanhol.',
      },
      eyebrow: 'Ilmenyx Controller', title: 'Entenda o seu PC com Linux. E faça os jogos rodarem.',
      lead: 'Diagnóstico, monitoramento e benchmark de hardware, com ferramentas para jogos, num app só. Gratuito, sem telemetria, em português, inglês e espanhol.',
      download: 'Ver downloads', github: 'Código e documentação',
      note: 'Pré-lançamento: validado em hardware real (Intel Iris Xe, AMD Radeon 610M, NVIDIA GeForce 940MX), mas ainda não em todas as distros e placas de vídeo.',
      featuresTitle: 'O que ele faz',
      features: [
        ['Diagnóstico ao vivo', 'Visão geral, sensores, GPU, energia, rede e processos, lidos direto do kernel; informações dos discos e leitura de relatórios SMART.'],
        ['Jogos', 'Biblioteca da Steam, Lutris e Heroic, compatibilidade (ProtonDB, anti-cheat) e estimativa de FPS calibrada no seu PC.'],
        ['Por que o jogo não abre?', 'Confere os motivos mais comuns sem mudar nada e oferece correções de um clique, que podem ser desfeitas.'],
        ['Jogos de Windows', 'Instala jogos de Windows com Proton (umu-launcher) ou com um Wine próprio, sem depender de outro app.'],
        ['Desempenho', 'Benchmarks de CPU, memória, GPU (Vulkan, incluindo ray tracing) e disco; overlay de FPS e testes de estresse com corte por temperatura.'],
        ['Ferramentas', 'ZRAM, driver NVIDIA, otimizações reversíveis, RGB pelo OpenRGB, apps de inicialização e relatórios em HTML ou JSON.'],
      ],
      galleryTitle: 'Por dentro',
      shots: [
        ['sensores.png', 'Página de sensores com temperaturas e ventoinhas'],
        ['estimativa-fps.png', 'Estimativa de FPS por jogo'],
        ['jogo-nao-abre.png', 'Diagnóstico "Por que o jogo não abre?"'],
        ['visao-geral-claro.png', 'Visão geral no tema claro'],
      ],
      downloadTitle: 'Baixar',
      table: { file: 'Arquivo', for: 'Para quem' },
      files: [
        ['AppImage', 'Recomendado. Um arquivo só, sem instalar: dê permissão de execução e abra. Todos os recursos.'],
        ['Flatpak', 'Para quem prefere Flatpak: na pasta do arquivo baixado, rode flatpak install --user Ilmenyx-Controller-*.flatpak. Alguns recursos ainda não foram testados nele.'],
        ['.tar.gz', 'Pacote em pasta, para técnicos.'],
      ],
      verify: 'Cada arquivo vem com soma SHA-256 e assinatura GPG. Impressão digital da chave:',
      principlesTitle: 'Sem surpresas',
      principles: [
        'Somente leitura ao abrir: nada no sistema muda sem o seu clique.',
        'Sem sudo escondido: o que precisa de root mostra o script antes e pede a sua senha.',
        'Sem telemetria: a internet só é usada quando você pede.',
        'Sem números inventados: se um sensor não existe, o app diz isso.',
      ],
      licenseTitle: 'Licença',
      license: 'Gratuito, com código disponível no GitHub (PolyForm Noncommercial 1.0.0 com permissão adicional): pode usar, inclusive como ferramenta em trabalho pago, e redistribuir sem modificação; não pode vender. Adaptação independente e não oficial do RESET EXPLODE, de Gustavo (GustavoReset).',
    },
  },
  en: {
    htmlLang: 'en',
    shotDir: '/img/en/',
    other: { label: 'PT', href: '/', controller: '/ilmenyx-controller/', name: 'Português' },
    home: '/en/', controllerPage: '/en/ilmenyx-controller/',
    nav: { brand: 'The brand', products: 'Products', principles: 'Principles', support: 'Support', contact: 'Contact' },
    skip: 'Skip to content',
    meta: {
      title: 'Ilmenyx Technology — structure to create, freedom to explore',
      description: 'Ilmenyx Technology builds software, digital services and games where engineering and creativity complement each other. Maker of Ilmenyx Controller, for Linux.',
    },
    hero: {
      eyebrow: 'Ilmenyx Technology',
      title: 'Structure to create. Freedom to explore.',
      lead: 'We build software, digital services and games where engineering and creativity complement each other: useful technology that is well built, clear and explorable.',
      cta: 'Meet Ilmenyx Controller', cta2: 'See it on GitHub',
      gemAlt: 'The Gem, the Ilmenyx Technology symbol',
    },
    brand: {
      eyebrow: '02 / The brand', title: 'Engineering and creativity that complement each other',
      lead: 'The name and the symbol come from bismuth: a metal that crystallizes in steps, curls its edges into square spirals and grows an oxide film that reflects gold, magenta and blue. That is what we look for in every project: rigorous structure inside, freedom and color outside.',
      cards: [
        { title: 'Purpose', text: 'To create digital tools and experiences where engineering and creativity complement each other.' },
        { title: 'Promise', text: 'Useful technology that is well built, clear and explorable.' },
        { title: 'Personality', text: 'Precise, ingenious, approachable, exploratory and reliable.' },
      ],
    },
    products: {
      eyebrow: '03 / Products', title: 'What we are building',
      controller: {
        badge: 'Pre-release · free', name: 'Ilmenyx Controller',
        text: 'Hardware diagnostics, monitoring and benchmarking for Linux, with gaming tools: FPS estimates, "why won\'t the game start?", Windows game installs and reversible fixes. In English, Portuguese and Spanish.',
        more: 'Learn more', download: 'View downloads',
        shotAlt: 'Ilmenyx Controller overview showing CPU, GPU, memory and activity',
      },
      soon: { title: 'Next projects', text: 'New tools, services and games are on the way. Follow the organization on GitHub to see them first.' },
    },
    principles: {
      eyebrow: '04 / Principles', title: 'How we work',
      items: [
        { title: 'Modularity', text: 'Small, clear pieces that can be tested and swapped without breaking the rest.', color: 'var(--gold)' },
        { title: 'Clarity', text: 'Short, direct text. When something doesn\'t work, we say what and how to fix it.', color: 'var(--bronze)' },
        { title: 'Transparency', text: 'Code in the open, no telemetry and no hidden network use. Nothing leaves your PC unless you ask.', color: 'var(--magenta)' },
        { title: 'Technical care', text: 'Measure before claiming, test on real hardware and never make up a number.', color: 'var(--indigo)' },
        { title: 'Experimentation', text: 'Explore new ideas, always with a way to undo.', color: 'var(--verdigris)' },
      ],
    },
    support: {
      eyebrow: '05 / Support', title: 'Help keep it going',
      text: 'Ilmenyx Controller is free. A donation helps keep development going and buys hardware to test. It is always optional: no feature depends on it.',
      kofi: 'Support on Ko-fi', pixLabel: 'Pix (Brazil, random key)', qrAlt: 'Ilmenyx Technology Pix QR code',
      sponsors: 'GitHub Sponsors: coming soon.',
    },
    contact: {
      eyebrow: '06 / Contact', title: 'Get in touch',
      text: 'Questions, partnerships or press: send an email. Problems and ideas about a product: open an issue on GitHub, where everyone can follow it.',
      issues: 'Report a problem', security: 'Security issues: by email, never in a public issue.',
    },
    footer: { rights: 'Ilmenyx Technology', privacy: 'This site uses no cookies and no tracking.' },
    ctrl: {
      meta: {
        title: 'Ilmenyx Controller — hardware diagnostics and benchmarks for Linux',
        description: 'Free Linux app: sensors, GPU, disks, benchmarks, FPS estimates and gaming tools. English, Portuguese and Spanish.',
      },
      eyebrow: 'Ilmenyx Controller', title: 'Understand your Linux PC. And get your games running.',
      lead: 'Hardware diagnostics, monitoring and benchmarking, plus gaming tools, in one app. Free, no telemetry, in English, Portuguese and Spanish.',
      download: 'View downloads', github: 'Code and documentation',
      note: 'Pre-release: validated on real hardware (Intel Iris Xe, AMD Radeon 610M, NVIDIA GeForce 940MX), but not yet on every distro and graphics card.',
      featuresTitle: 'What it does',
      features: [
        ['Live diagnostics', 'Overview, sensors, GPU, power, network and processes, read straight from the kernel; disk information and SMART report reading.'],
        ['Games', 'Steam, Lutris and Heroic library, compatibility (ProtonDB, anti-cheat) and FPS estimates calibrated on your PC.'],
        ['Why won\'t the game start?', 'Checks the most common causes without changing anything and offers one-click fixes you can undo.'],
        ['Windows games', 'Installs Windows games with Proton (umu-launcher) or its own Wine, without depending on another app.'],
        ['Performance', 'CPU, memory, GPU (Vulkan, including ray tracing) and disk benchmarks; FPS overlay and stress tests that stop on high temperature.'],
        ['Tools', 'ZRAM, NVIDIA driver, reversible tweaks, RGB through OpenRGB, startup apps and HTML or JSON reports.'],
      ],
      galleryTitle: 'Inside',
      shots: [
        ['sensores.png', 'Sensors page with temperatures and fans'],
        ['estimativa-fps.png', 'Per-game FPS estimate'],
        ['jogo-nao-abre.png', '"Why won\'t the game start?" diagnostics'],
        ['visao-geral-claro.png', 'Overview in the light theme'],
      ],
      downloadTitle: 'Download',
      table: { file: 'File', for: 'For' },
      files: [
        ['AppImage', 'Recommended. A single file, nothing to install: make it executable and open it. Every feature.'],
        ['Flatpak', 'If you prefer Flatpak: in the folder with the downloaded file, run flatpak install --user Ilmenyx-Controller-*.flatpak. Some features haven\'t been tested in it yet.'],
        ['.tar.gz', 'Plain folder package, for technical users.'],
      ],
      verify: 'Every file comes with a SHA-256 checksum and a GPG signature. Key fingerprint:',
      principlesTitle: 'No surprises',
      principles: [
        'Read-only when it opens: nothing on your system changes without your click.',
        'No hidden sudo: anything that needs root shows the script first and asks for your password.',
        'No telemetry: the internet is only used when you ask.',
        'No made-up numbers: if a sensor doesn\'t exist, the app says so.',
      ],
      licenseTitle: 'License',
      license: 'Free, with its source code on GitHub (PolyForm Noncommercial 1.0.0 with an additional permission): you can use it, including as a tool in paid work, and redistribute it unmodified; you can\'t sell it. An independent, unofficial adaptation of RESET EXPLODE, by Gustavo (GustavoReset).',
    },
  },
} as const;
