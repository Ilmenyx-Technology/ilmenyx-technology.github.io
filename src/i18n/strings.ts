// All site copy in one place: Portuguese (default, at /) and English (at /en/).
export type Lang = 'pt' | 'en';
export type Page = 'home' | 'about' | 'projects' | 'controller' | 'support' | 'contact';

export const REPO = 'https://github.com/Ilmenyx-Technology/ilmenyx-controller';
export const RELEASES = `${REPO}/releases`;
export const ORG = 'https://github.com/Ilmenyx-Technology';
export const KOFI = 'https://ko-fi.com/ilmenyxtechnology';
export const EMAIL = 'ilmenyx.technology@gmail.com';
export const PIX = 'ad7075cc-cca1-4f12-9e11-f0d10890456a';
export const ISSUES = `${REPO}/issues/new/choose`;
export const UNTESTED = `${REPO}/blob/main/Sem_teste.md`;
// Fixed-name copies attached to every release, so these always point at the newest version.
export const LATEST = `${REPO}/releases/latest/download`;
export const APPIMAGE_URL = `${LATEST}/Ilmenyx-Controller-x86_64.AppImage`;
export const FLATPAK_URL = `${LATEST}/Ilmenyx-Controller-x86_64.flatpak`;
export const APPIMAGE_CMD = `chmod +x Ilmenyx-Controller-x86_64.AppImage && ./Ilmenyx-Controller-x86_64.AppImage`;
export const FLATPAK_CMD = `curl -LO ${FLATPAK_URL} && flatpak install --user Ilmenyx-Controller-x86_64.flatpak`;

/** Address of each page in each language (the header switch keeps the reader on the same page). */
export const paths: Record<Lang, Record<Page, string>> = {
  pt: { home: '/', about: '/sobre/', projects: '/projetos/', controller: '/projetos/ilmenyx-controller/', support: '/apoie/', contact: '/contato/' },
  en: { home: '/en/', about: '/en/about/', projects: '/en/projects/', controller: '/en/projects/ilmenyx-controller/', support: '/en/support/', contact: '/en/contact/' },
};

export const t = {
  pt: {
    htmlLang: 'pt-BR',
    shotDir: '/img/',
    switchLabel: 'EN', switchName: 'English',
    skip: 'Pular para o conteúdo',
    nav: { about: 'Sobre', projects: 'Projetos', support: 'Apoie', contact: 'Contato', main: 'Principal' },
    footer: {
      blurb: 'Software, serviços digitais e jogos em que engenharia e criatividade se complementam.',
      cols: [
        { title: 'Ilmenyx Technology', links: [['Sobre', 'about'], ['Projetos', 'projects'], ['Apoie', 'support'], ['Contato', 'contact']] },
        { title: 'Ilmenyx Controller', links: [['Visão geral', 'controller'], ['Downloads', RELEASES], ['Código', REPO], ['Relatar um problema', ISSUES]] },
        { title: 'Comunidade', links: [['GitHub', ORG], ['Ko-fi', KOFI], ['E-mail', `mailto:${EMAIL}`]] },
      ],
      privacy: 'Este site não usa cookies nem rastreamento.', name: 'Rodapé',
    },
    home: {
      meta: {
        title: 'Ilmenyx Technology — estrutura para criar, liberdade para explorar',
        description: 'Ilmenyx Technology cria software, serviços digitais e jogos onde engenharia e criatividade se complementam. Criadora do Ilmenyx Controller, para Linux.',
      },
      hero: {
        title: 'Estrutura para criar. Liberdade para explorar.',
        lead: 'Criamos software, serviços digitais e jogos em que engenharia e criatividade se complementam: tecnologia útil, bem construída, clara e explorável.',
        primary: 'Conheça os projetos', secondary: 'Sobre a marca',
      },
      projects: { label: '01 / Projetos', hint: 'O que estamos construindo', title: 'Ferramentas que você entende e controla.', lead: 'Começamos pelo Linux: um app para entender o próprio PC e fazer os jogos rodarem. Os próximos projetos seguem a mesma linha: abertos, medidos e sem surpresas.' },
      principles: { label: '02 / Princípios', hint: 'Valem para tudo o que fazemos', title: 'Como trabalhamos.' },
      numbers: { label: '03 / Em números', hint: 'Medidos, não estimados', title: 'O Ilmenyx Controller hoje.' },
      brand: {
        label: '04 / A marca', hint: 'Por que bismuto', title: 'Um cristal que cresce em degraus.',
        text: 'O bismuto cristaliza em terraços, enrola as bordas em espirais quadradas e se cobre de uma película de óxido que reflete ouro, magenta e azul. É o que buscamos: estrutura rigorosa por dentro, liberdade e cor por fora.',
        more: 'Conheça a marca',
      },
      join: { title: 'Construa com a gente.', text: 'Teste em outra distro ou placa de vídeo, relate um problema, sugira uma ideia ou apoie o projeto.', primary: 'Relatar ou sugerir', secondary: 'Formas de apoiar' },
    },
    principles: [
      { n: '01', title: 'Modularidade', text: 'Peças pequenas e claras, que podem ser testadas e trocadas sem quebrar o resto.', color: 'var(--gold)' },
      { n: '02', title: 'Clareza', text: 'Texto curto e direto. Se algo não funciona, dizemos o quê e como resolver.', color: 'var(--bronze)' },
      { n: '03', title: 'Transparência', text: 'Código à vista, sem telemetria e sem rede escondida. Nada sai do seu PC sem você pedir.', color: 'var(--magenta)' },
      { n: '04', title: 'Cuidado técnico', text: 'Medir antes de afirmar, testar em hardware real e nunca inventar um número.', color: 'var(--indigo)' },
      { n: '05', title: 'Experimentação', text: 'Explorar ideias novas, sempre com um caminho para desfazer.', color: 'var(--verdigris)' },
    ],
    numbers: [
      { value: '3', label: 'idiomas no app e na linha de comando' },
      { value: '1.366', label: 'testes automatizados a cada mudança' },
      { value: '0', label: 'rastreadores e telemetria' },
      { value: '4', label: 'versões publicadas, todas assinadas' },
    ],
    projectsList: {
      controller: {
        status: 'Pré-lançamento', platform: 'Linux · x86_64', langs: 'PT · EN · ES',
        name: 'Ilmenyx Controller',
        text: 'Diagnóstico, monitoramento e benchmark de hardware para Linux, com ferramentas para jogos: estimativa de FPS, "por que o jogo não abre?", instalação de jogos de Windows e correções reversíveis.',
        more: 'Ver o projeto', download: 'Baixar AppImage',
        shotAlt: 'Visão geral do Ilmenyx Controller mostrando CPU, GPU, memória e atividade',
      },
      next: { status: 'Em breve', name: 'Próximos projetos', text: 'Novas ferramentas, serviços e jogos estão no caminho. Acompanhe a organização no GitHub para ver primeiro.', more: 'Seguir no GitHub' },
    },
    about: {
      meta: { title: 'Sobre — Ilmenyx Technology', description: 'A origem do nome e do símbolo da Ilmenyx Technology, o que ela promete e como trabalha.' },
      label: 'Sobre', title: 'Engenharia e criatividade que se complementam.',
      lead: 'A Ilmenyx Technology cria software, serviços digitais e jogos, com projetos comerciais e de código aberto. É um estúdio independente, nascido no Brasil, que começou pelo Linux.',
      identity: { label: '01 / Identidade', hint: 'O que nos guia' },
      cards: [
        { title: 'Propósito', text: 'Criar ferramentas e experiências digitais em que engenharia e criatividade se complementem.' },
        { title: 'Promessa', text: 'Tecnologia útil, bem construída, clara e explorável.' },
        { title: 'Personalidade', text: 'Precisa, engenhosa, acessível, exploradora e confiável.' },
      ],
      gem: { label: '02 / A Gema', hint: 'O símbolo', title: 'Uma gema de bismuto.', text: 'O símbolo reúne as três coisas que só o bismuto faz. É uma gema lapidada em quatro facetas, as cores da película de óxido, atravessada pela greca quadrada que o cristal forma nas bordas. A greca afina até o centro, como os terraços de um cristal hopper, e termina num núcleo dourado.' },
      parts: [
        { title: 'Facetas', text: 'A película de óxido: ouro, bronze, magenta e índigo.' },
        { title: 'Greca', text: 'A espiral quadrada das bordas do cristal.' },
        { title: 'Núcleo', text: 'A gema central, onde os terraços terminam.' },
      ],
      timeline: { label: '03 / Linha do tempo', hint: 'Até aqui', title: 'Do primeiro teste ao código aberto.' },
      events: [
        { date: 'out. 2026', title: 'O começo', text: 'O porte do RESET EXPLODE para Linux começa como projeto independente.' },
        { date: '07 nov. 2026', title: 'v0.30.0', text: 'Primeira versão de teste, com pacotes AppImage, Flatpak e assinatura GPG.' },
        { date: '10 nov. 2026', title: 'v0.31', text: 'Nasce o Ilmenyx Controller: três idiomas, nova estimativa de FPS e um app mais leve.' },
        { date: '11 nov. 2026', title: 'v0.32.0', text: 'Repositório público. Área de notificação, aviso de CPU quente e de versão nova.' },
      ],
    },
    projectsPage: {
      meta: { title: 'Projetos — Ilmenyx Technology', description: 'Os projetos da Ilmenyx Technology, começando pelo Ilmenyx Controller para Linux.' },
      label: 'Projetos', title: 'O que estamos construindo.', lead: 'Cada projeto nasce aberto, medido em hardware real e com um caminho para desfazer o que muda.',
    },
    controller: {
      meta: { title: 'Ilmenyx Controller — diagnóstico e benchmark de hardware para Linux', description: 'App gratuito para Linux: sensores, GPU, discos, benchmarks, estimativa de FPS e ferramentas para jogos. Português, inglês e espanhol.' },
      label: 'Ilmenyx Controller', title: 'Entenda o seu PC com Linux. E faça os jogos rodarem.',
      lead: 'Diagnóstico, monitoramento e benchmark de hardware, com ferramentas para jogos, num app só. Gratuito, sem telemetria, em português, inglês e espanhol.',
      download: 'Baixar AppImage', flatpakJump: 'Instalar com Flatpak', github: 'Código e documentação',
      note: 'Pré-lançamento: validado em hardware real (Intel Iris Xe, AMD Radeon 610M, NVIDIA GeForce 940MX), mas ainda não em todas as distros e placas de vídeo.',
      featuresHead: { label: '01 / Funções', hint: 'Num app só' },
      features: [
        ['Diagnóstico ao vivo', 'Visão geral, sensores, GPU, energia, rede e processos, lidos direto do kernel; informações dos discos e leitura de relatórios SMART.'],
        ['Jogos', 'Biblioteca da Steam, Lutris e Heroic, compatibilidade (ProtonDB, anti-cheat) e estimativa de FPS calibrada no seu PC.'],
        ['Por que o jogo não abre?', 'Confere os motivos mais comuns sem mudar nada e oferece correções de um clique, que podem ser desfeitas.'],
        ['Jogos de Windows', 'Instala jogos de Windows com Proton (umu-launcher) ou com um Wine próprio, sem depender de outro app.'],
        ['Desempenho', 'Benchmarks de CPU, memória, GPU (Vulkan, incluindo ray tracing) e disco; overlay de FPS e testes de estresse com corte por temperatura.'],
        ['Ferramentas', 'ZRAM, driver NVIDIA, otimizações reversíveis, RGB pelo OpenRGB, apps de inicialização e relatórios em HTML ou JSON.'],
      ],
      galleryHead: { label: '02 / Por dentro', hint: 'Capturas do app real' },
      shots: [
        ['sensores.png', 'Página de sensores com temperaturas e ventoinhas'],
        ['estimativa-fps.png', 'Estimativa de FPS por jogo'],
        ['jogo-nao-abre.png', 'Diagnóstico "Por que o jogo não abre?"'],
        ['visao-geral-claro.png', 'Visão geral no tema claro'],
      ],
      downloadHead: { label: '03 / Baixar', hint: 'Assinado com GPG' },
      appimage: { title: 'AppImage', badge: 'Recomendado', text: 'Um arquivo só, sem instalar nada, com todos os recursos. Depois de baixar, dê permissão de execução e abra:', cta: 'Baixar AppImage' },
      flatpak: { title: 'Flatpak', text: 'Para quem prefere instalar pelo Flatpak. Cole no terminal: o comando baixa a versão mais recente e instala só no seu usuário. Alguns recursos ainda não foram testados no Flatpak.' },
      copy: 'Copiar', copied: 'Copiado',
      others: 'Pacote em pasta (.tar.gz), versões anteriores e notas de cada versão',
      verify: 'Cada arquivo vem com soma SHA-256 e assinatura GPG. Impressão digital da chave:',
      promisesHead: { label: '04 / Sem surpresas', hint: 'Licença e garantias' },
      promises: [
        'Somente leitura ao abrir: nada no sistema muda sem o seu clique.',
        'Sem sudo escondido: o que precisa de root mostra o script antes e pede a sua senha.',
        'Sem telemetria: a internet só é usada quando você pede.',
        'Sem números inventados: se um sensor não existe, o app diz isso.',
      ],
      license: 'Gratuito, com código disponível no GitHub (PolyForm Noncommercial 1.0.0 com permissão adicional): pode usar, inclusive como ferramenta em trabalho pago, e redistribuir sem modificação; não pode vender. Adaptação independente e não oficial do RESET EXPLODE, de Gustavo (GustavoReset).',
    },
    support: {
      meta: { title: 'Apoie — Ilmenyx Technology', description: 'Como apoiar a Ilmenyx Technology: doações por Ko-fi ou Pix, testes, relatos e divulgação.' },
      label: 'Apoie', title: 'Ajude a manter o projeto.',
      lead: 'O Ilmenyx Controller é gratuito. Uma doação ajuda a manter o desenvolvimento e a comprar hardware para testar. É sempre opcional: nenhuma função depende dela.',
      donateHead: { label: '01 / Doar', hint: 'Qualquer valor ajuda' },
      kofi: { title: 'Ko-fi', text: 'Cartão ou PayPal, de qualquer país.', cta: 'Apoiar no Ko-fi' },
      pix: { title: 'Pix', text: 'Chave aleatória, para quem está no Brasil.', qrAlt: 'QR Code Pix da Ilmenyx Technology' },
      sponsors: 'GitHub Sponsors: em breve.',
      helpHead: { label: '02 / Outras formas', hint: 'Sem gastar nada' },
      help: [
        { title: 'Teste no seu PC', text: 'Distros e placas de vídeo diferentes são o que mais falta. Veja a lista do que ainda não foi testado.', cta: 'O que falta testar', href: UNTESTED },
        { title: 'Relate um problema', text: 'Diga a distro, a placa de vídeo e o que aconteceu. A página Relatório do app ajuda.', cta: 'Abrir uma issue', href: ISSUES },
        { title: 'Espalhe a palavra', text: 'Uma estrela no GitHub e uma indicação para quem joga no Linux já fazem diferença.', cta: 'Ver no GitHub', href: REPO },
      ],
    },
    contact: {
      meta: { title: 'Contato — Ilmenyx Technology', description: 'Fale com a Ilmenyx Technology: e-mail, issues no GitHub e falhas de segurança.' },
      label: 'Contato', title: 'Fale com a gente.',
      lead: 'Dúvidas, parcerias ou imprensa: escreva por e-mail. Problemas e ideias sobre um produto: abra uma issue no GitHub, onde todo mundo pode acompanhar.',
      cards: [
        { title: 'E-mail', text: 'Dúvidas, parcerias e imprensa.', cta: EMAIL, href: `mailto:${EMAIL}` },
        { title: 'Problemas e ideias', text: 'Formulários prontos para relatar um problema ou sugerir uma função.', cta: 'Abrir uma issue', href: ISSUES },
        { title: 'Segurança', text: 'Falhas de segurança vão por e-mail, nunca em issue pública. Resposta em até 7 dias.', cta: 'Política de segurança', href: `${REPO}/blob/main/SECURITY.md` },
      ],
    },
  },
  en: {
    htmlLang: 'en',
    shotDir: '/img/en/',
    switchLabel: 'PT', switchName: 'Português',
    skip: 'Skip to content',
    nav: { about: 'About', projects: 'Projects', support: 'Support', contact: 'Contact', main: 'Main' },
    footer: {
      blurb: 'Software, digital services and games where engineering and creativity complement each other.',
      cols: [
        { title: 'Ilmenyx Technology', links: [['About', 'about'], ['Projects', 'projects'], ['Support', 'support'], ['Contact', 'contact']] },
        { title: 'Ilmenyx Controller', links: [['Overview', 'controller'], ['Downloads', RELEASES], ['Code', REPO], ['Report a problem', ISSUES]] },
        { title: 'Community', links: [['GitHub', ORG], ['Ko-fi', KOFI], ['Email', `mailto:${EMAIL}`]] },
      ],
      privacy: 'This site uses no cookies and no tracking.', name: 'Footer',
    },
    home: {
      meta: {
        title: 'Ilmenyx Technology — structure to create, freedom to explore',
        description: 'Ilmenyx Technology builds software, digital services and games where engineering and creativity complement each other. Maker of Ilmenyx Controller, for Linux.',
      },
      hero: {
        title: 'Structure to create. Freedom to explore.',
        lead: 'We build software, digital services and games where engineering and creativity complement each other: useful technology that is well built, clear and explorable.',
        primary: 'See the projects', secondary: 'About the brand',
      },
      projects: { label: '01 / Projects', hint: 'What we are building', title: 'Tools you understand and control.', lead: 'We started with Linux: an app to understand your own PC and get your games running. The next projects follow the same line: open, measured and with no surprises.' },
      principles: { label: '02 / Principles', hint: 'They apply to everything we make', title: 'How we work.' },
      numbers: { label: '03 / By the numbers', hint: 'Measured, not estimated', title: 'Ilmenyx Controller today.' },
      brand: {
        label: '04 / The brand', hint: 'Why bismuth', title: 'A crystal that grows in steps.',
        text: 'Bismuth crystallizes in terraces, curls its edges into square spirals and grows an oxide film that reflects gold, magenta and blue. That is what we aim for: rigorous structure inside, freedom and color outside.',
        more: 'Meet the brand',
      },
      join: { title: 'Build it with us.', text: 'Test on another distro or graphics card, report a problem, suggest an idea or support the project.', primary: 'Report or suggest', secondary: 'Ways to support' },
    },
    principles: [
      { n: '01', title: 'Modularity', text: 'Small, clear pieces that can be tested and swapped without breaking the rest.', color: 'var(--gold)' },
      { n: '02', title: 'Clarity', text: 'Short, direct text. When something doesn\'t work, we say what and how to fix it.', color: 'var(--bronze)' },
      { n: '03', title: 'Transparency', text: 'Code in the open, no telemetry and no hidden network use. Nothing leaves your PC unless you ask.', color: 'var(--magenta)' },
      { n: '04', title: 'Technical care', text: 'Measure before claiming, test on real hardware and never make up a number.', color: 'var(--indigo)' },
      { n: '05', title: 'Experimentation', text: 'Explore new ideas, always with a way to undo.', color: 'var(--verdigris)' },
    ],
    numbers: [
      { value: '3', label: 'languages in the app and the command line' },
      { value: '1,366', label: 'automated tests on every change' },
      { value: '0', label: 'trackers and telemetry' },
      { value: '4', label: 'published releases, all signed' },
    ],
    projectsList: {
      controller: {
        status: 'Pre-release', platform: 'Linux · x86_64', langs: 'EN · PT · ES',
        name: 'Ilmenyx Controller',
        text: 'Hardware diagnostics, monitoring and benchmarking for Linux, with gaming tools: FPS estimates, "why won\'t the game start?", Windows game installs and reversible fixes.',
        more: 'See the project', download: 'Download AppImage',
        shotAlt: 'Ilmenyx Controller overview showing CPU, GPU, memory and activity',
      },
      next: { status: 'Coming soon', name: 'Next projects', text: 'New tools, services and games are on the way. Follow the organization on GitHub to see them first.', more: 'Follow on GitHub' },
    },
    about: {
      meta: { title: 'About — Ilmenyx Technology', description: 'Where the Ilmenyx Technology name and symbol come from, what it promises and how it works.' },
      label: 'About', title: 'Engineering and creativity that complement each other.',
      lead: 'Ilmenyx Technology builds software, digital services and games, with commercial and open source projects. It is an independent studio from Brazil that started with Linux.',
      identity: { label: '01 / Identity', hint: 'What guides us' },
      cards: [
        { title: 'Purpose', text: 'To create digital tools and experiences where engineering and creativity complement each other.' },
        { title: 'Promise', text: 'Useful technology that is well built, clear and explorable.' },
        { title: 'Personality', text: 'Precise, ingenious, approachable, exploratory and reliable.' },
      ],
      gem: { label: '02 / The Gem', hint: 'The symbol', title: 'A bismuth gem.', text: 'The symbol brings together the three things only bismuth does. It is a gem cut into four facets, the colors of the oxide film, crossed by the square greca the crystal forms at its edges. The greca narrows toward the center, like the terraces of a hopper crystal, and ends in a golden core.' },
      parts: [
        { title: 'Facets', text: 'The oxide film: gold, bronze, magenta and indigo.' },
        { title: 'Greca', text: 'The square spiral of the crystal\'s edges.' },
        { title: 'Core', text: 'The central gem, where the terraces end.' },
      ],
      timeline: { label: '03 / Timeline', hint: 'So far', title: 'From the first test to open source.' },
      events: [
        { date: 'Oct 2026', title: 'The start', text: 'The Linux port of RESET EXPLODE begins as an independent project.' },
        { date: 'Nov 7, 2026', title: 'v0.30.0', text: 'First test release, with AppImage and Flatpak packages and GPG signatures.' },
        { date: 'Nov 10, 2026', title: 'v0.31', text: 'Ilmenyx Controller is born: three languages, a new FPS estimate and a lighter app.' },
        { date: 'Nov 11, 2026', title: 'v0.32.0', text: 'Public repository. Notification area, hot CPU and new version alerts.' },
      ],
    },
    projectsPage: {
      meta: { title: 'Projects — Ilmenyx Technology', description: 'Ilmenyx Technology projects, starting with Ilmenyx Controller for Linux.' },
      label: 'Projects', title: 'What we are building.', lead: 'Every project is born open, measured on real hardware and with a way to undo what it changes.',
    },
    controller: {
      meta: { title: 'Ilmenyx Controller — hardware diagnostics and benchmarks for Linux', description: 'Free Linux app: sensors, GPU, disks, benchmarks, FPS estimates and gaming tools. English, Portuguese and Spanish.' },
      label: 'Ilmenyx Controller', title: 'Understand your Linux PC. And get your games running.',
      lead: 'Hardware diagnostics, monitoring and benchmarking, plus gaming tools, in one app. Free, no telemetry, in English, Portuguese and Spanish.',
      download: 'Download AppImage', flatpakJump: 'Install with Flatpak', github: 'Code and documentation',
      note: 'Pre-release: validated on real hardware (Intel Iris Xe, AMD Radeon 610M, NVIDIA GeForce 940MX), but not yet on every distro and graphics card.',
      featuresHead: { label: '01 / Features', hint: 'In one app' },
      features: [
        ['Live diagnostics', 'Overview, sensors, GPU, power, network and processes, read straight from the kernel; disk information and SMART report reading.'],
        ['Games', 'Steam, Lutris and Heroic library, compatibility (ProtonDB, anti-cheat) and FPS estimates calibrated on your PC.'],
        ['Why won\'t the game start?', 'Checks the most common causes without changing anything and offers one-click fixes you can undo.'],
        ['Windows games', 'Installs Windows games with Proton (umu-launcher) or its own Wine, without depending on another app.'],
        ['Performance', 'CPU, memory, GPU (Vulkan, including ray tracing) and disk benchmarks; FPS overlay and stress tests that stop on high temperature.'],
        ['Tools', 'ZRAM, NVIDIA driver, reversible tweaks, RGB through OpenRGB, startup apps and HTML or JSON reports.'],
      ],
      galleryHead: { label: '02 / Inside', hint: 'Screenshots of the real app' },
      shots: [
        ['sensores.png', 'Sensors page with temperatures and fans'],
        ['estimativa-fps.png', 'Per-game FPS estimate'],
        ['jogo-nao-abre.png', '"Why won\'t the game start?" diagnostics'],
        ['visao-geral-claro.png', 'Overview in the light theme'],
      ],
      downloadHead: { label: '03 / Download', hint: 'GPG-signed' },
      appimage: { title: 'AppImage', badge: 'Recommended', text: 'A single file, nothing to install, every feature. After downloading, make it executable and open it:', cta: 'Download AppImage' },
      flatpak: { title: 'Flatpak', text: 'If you prefer installing through Flatpak. Paste it in a terminal: the command downloads the newest version and installs it for your user only. Some features haven\'t been tested in Flatpak yet.' },
      copy: 'Copy', copied: 'Copied',
      others: 'Folder package (.tar.gz), previous versions and release notes',
      verify: 'Every file comes with a SHA-256 checksum and a GPG signature. Key fingerprint:',
      promisesHead: { label: '04 / No surprises', hint: 'License and guarantees' },
      promises: [
        'Read-only when it opens: nothing on your system changes without your click.',
        'No hidden sudo: anything that needs root shows the script first and asks for your password.',
        'No telemetry: the internet is only used when you ask.',
        'No made-up numbers: if a sensor doesn\'t exist, the app says so.',
      ],
      license: 'Free, with its source code on GitHub (PolyForm Noncommercial 1.0.0 with an additional permission): you can use it, including as a tool in paid work, and redistribute it unmodified; you can\'t sell it. An independent, unofficial adaptation of RESET EXPLODE, by Gustavo (GustavoReset).',
    },
    support: {
      meta: { title: 'Support — Ilmenyx Technology', description: 'How to support Ilmenyx Technology: donations through Ko-fi or Pix, testing, reports and spreading the word.' },
      label: 'Support', title: 'Help keep it going.',
      lead: 'Ilmenyx Controller is free. A donation helps keep development going and buys hardware to test. It is always optional: no feature depends on it.',
      donateHead: { label: '01 / Donate', hint: 'Any amount helps' },
      kofi: { title: 'Ko-fi', text: 'Card or PayPal, from any country.', cta: 'Support on Ko-fi' },
      pix: { title: 'Pix', text: 'Random key, for people in Brazil.', qrAlt: 'Ilmenyx Technology Pix QR code' },
      sponsors: 'GitHub Sponsors: coming soon.',
      helpHead: { label: '02 / Other ways', hint: 'Free of charge' },
      help: [
        { title: 'Test it on your PC', text: 'Different distros and graphics cards are what we need most. See the list of what hasn\'t been tested yet.', cta: 'What still needs testing', href: UNTESTED },
        { title: 'Report a problem', text: 'Tell us the distro, the graphics card and what happened. The app\'s Report page helps.', cta: 'Open an issue', href: ISSUES },
        { title: 'Spread the word', text: 'A star on GitHub and a recommendation to people who game on Linux already make a difference.', cta: 'See it on GitHub', href: REPO },
      ],
    },
    contact: {
      meta: { title: 'Contact — Ilmenyx Technology', description: 'Get in touch with Ilmenyx Technology: email, GitHub issues and security reports.' },
      label: 'Contact', title: 'Get in touch.',
      lead: 'Questions, partnerships or press: send an email. Problems and ideas about a product: open an issue on GitHub, where everyone can follow it.',
      cards: [
        { title: 'Email', text: 'Questions, partnerships and press.', cta: EMAIL, href: `mailto:${EMAIL}` },
        { title: 'Problems and ideas', text: 'Ready-made forms to report a problem or suggest a feature.', cta: 'Open an issue', href: ISSUES },
        { title: 'Security', text: 'Security issues go by email, never in a public issue. Reply within 7 days.', cta: 'Security policy', href: `${REPO}/blob/main/SECURITY.md` },
      ],
    },
  },
} as const;
