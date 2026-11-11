// Human-facing content: who is behind Ilmenyx, why use it, where it was tested and what's new.
// The author speaks as "eu"/"I"; the brand's values and wishes as "nós"/"we".
import type { Lang } from './strings';

export interface NewsItem { date: string; tag: string; title: string; text: string; href?: string }

export const content = {
  pt: {
    home: {
      why: { label: '02 / Por que Ilmenyx', hint: 'O que você ganha', title: 'Feito para quem quer entender o próprio PC.' },
      tested: { label: '03 / Testado em hardware real', hint: 'Não só no papel', title: 'Rodou em PCs de verdade.', lead: 'Cada versão é testada em máquinas reais antes de sair. Tem um PC, distro ou placa de vídeo diferente? Você pode ajudar.', cta: 'Ajude a testar' },
      news: { label: '04 / Novidades', hint: 'O que mudou', title: 'O que há de novo.', all: 'Todas as novidades' },
      author: { label: '05 / Quem está por trás', hint: 'Autor', quote: 'Quando cheguei no Linux, tudo era novo: instalar um jogo de Windows, entender Proton e Wine, saber como meu PC estava de verdade. O Ilmenyx nasceu para facilitar esse caminho para quem vem depois.', name: 'Flávio Henrique', role: 'Autor da Ilmenyx Technology', more: 'Leia a história completa' },
    },
    why: [
      { title: 'Gratuito e aberto', text: 'Baixe, use e veja como funciona por dentro. Sem conta, sem assinatura, sem pegadinha.', color: 'var(--gold)' },
      { title: 'Para quem está começando', text: 'A gente explica o que está acontecendo no seu PC em linguagem simples e mostra o caminho para resolver.', color: 'var(--bronze)' },
      { title: 'Nada muda sem você', text: 'Antes de qualquer correção, você vê exatamente o que vai ser feito. E dá para desfazer depois.', color: 'var(--magenta)' },
      { title: 'Leve de verdade', text: 'Parado, o Ilmenyx Controller usa cerca de 3% de um núcleo do processador. Ele fica de olho no PC sem pesar nele.', color: 'var(--indigo)' },
      { title: 'No seu idioma', text: 'Português, inglês e espanhol, no app e na linha de comando. Ele segue o idioma do seu sistema.', color: 'var(--verdigris)' },
      { title: 'Seus dados ficam com você', text: 'Nada é enviado sem você pedir. E cada download é assinado, para você conferir que veio da gente.', color: 'var(--gold-pale)' },
    ],
    hardware: [
      { name: 'HP 250 G8', spec: 'Intel Core i5-1135G7 · Iris Xe', os: 'CachyOS · KDE Plasma (Wayland)' },
      { name: 'Notebook AMD', spec: 'AMD Radeon 610M (gráfico integrado)', os: 'Linux' },
      { name: 'Dell Inspiron 7460', spec: 'Intel HD 620 + NVIDIA GeForce 940MX', os: 'Linux Mint 22.3 · nouveau e driver NVIDIA 580' },
    ],
    vms: 'O pacote também foi conferido em máquinas virtuais com Ubuntu 24.04, Debian 13, Fedora 44, openSUSE Tumbleweed e Arch Linux.',
    news: [
      { date: '11 nov. 2026', tag: 'Ilmenyx Controller 0.33.1', title: 'Agora ele se atualiza sozinho', text: 'Quando sair uma versão nova, um clique baixa, confere a assinatura e instala. Quem já usa o Ilmenyx atualiza à mão só esta última vez.' },
      { date: '11 nov. 2026', tag: 'Ilmenyx Controller 0.33', title: 'Útil também no dia a dia', text: 'Uma primeira tela simples que diz se o PC está bem, processos como num monitor do sistema (com Encerrar), sensores e discos explicados para quem está começando, formatar pendrive e uma página para liberar espaço com segurança.' },
      { date: '11 nov. 2026', tag: 'Ilmenyx Controller 0.32', title: 'Código aberto e avisos inteligentes', text: 'O código agora está aberto no GitHub. O app pode ficar na área de notificação, avisar quando a CPU esquentar de verdade e quando sair uma versão nova. Tudo opcional.' },
      { date: '11 nov. 2026', tag: 'Ilmenyx Technology', title: 'Nasce o site da Ilmenyx', text: 'Um lugar para reunir os nossos projetos, as novidades e as formas de ajudar.' },
      { date: '10 nov. 2026', tag: 'Ilmenyx Controller 0.31.1', title: 'Mais leve', text: 'Parado, o app passou a gastar cerca de 37% menos processador e bem menos memória. Nenhuma função mudou.' },
      { date: '10 nov. 2026', tag: 'Ilmenyx Controller 0.31', title: 'Novo nome e três idiomas', text: 'O app virou Ilmenyx Controller, ganhou inglês e espanhol, uma estimativa de FPS calibrada no seu PC e a página "Por que o jogo não abre?".' },
      { date: '07 nov. 2026', tag: 'Ilmenyx Controller 0.30', title: 'Primeira versão de teste', text: 'Diagnóstico, monitoramento e benchmark num app só, com pacotes AppImage e Flatpak.' },
    ] as NewsItem[],
    newsPage: { meta: { title: 'Novidades — Ilmenyx Technology', description: 'O que mudou nos projetos da Ilmenyx Technology, em linguagem simples.' }, label: 'Novidades', title: 'O que há de novo.', lead: 'As mudanças nos nossos projetos, explicadas sem jargão. As notas técnicas completas de cada versão ficam no GitHub.', releases: 'Notas técnicas no GitHub' },
    about: {
      meta: { title: 'Sobre — Ilmenyx Technology', description: 'Quem está por trás da Ilmenyx Technology, de onde vem o nome e o que nós queremos construir.' },
      label: 'Sobre', title: 'Uma organização feita por quem já foi iniciante.',
      lead: 'A Ilmenyx Technology junta o mundo open source com apps, serviços e jogos. Começou com um app para Linux e a vontade de facilitar a vida de quem está chegando.',
      story: {
        label: '01 / Quem está por trás', hint: 'Autor', name: 'Flávio Henrique', role: 'Autor da Ilmenyx Technology',
        paragraphs: [
          'Sempre tive um fascínio pelo Linux: um sistema leve, que dá para personalizar do jeito que eu quiser e onde dá para jogar com liberdade. Junto com isso, sempre tive vontade de fazer jogos e de ter meus próprios apps, com a minha cara e a minha estética.',
          'Mas o começo não foi fácil. Eu era completamente leigo, e tudo no Linux era novo: instalar um jogo de Windows, entender como funcionavam Proton e Wine, descobrir por que algo não abria, saber como meu PC estava de verdade e quanto ele rendia em comparação com o Windows e com outros PCs. Era muita aba aberta, muito fórum e muito teste e erro.',
          'Um dia vi um vídeo do canal RESET mostrando o RESET EXPLODE, que juntava num lugar só a solução para vários problemas chatos do Windows. Pensei: e se existisse algo assim para o Linux, pensado para quem está começando? Foi daí que nasceu o Ilmenyx Controller, uma adaptação independente do RESET EXPLODE.',
          'E com ele veio a vontade de algo maior: uma organização, e quem sabe um dia uma empresa, para continuar criando o que eu mais gosto de fazer. Soluções, serviços, automações e jogos. Um dia, quem sabe, até um sistema operacional próprio.',
        ],
      },
      name: { label: '02 / O nome', hint: 'De onde vem', title: 'Ilmenyx vem da ilmenita.', text: 'O nome é uma variação inventada de ilmenita, um mineral escuro e brilhante de onde sai o titânio. Gostamos da ideia de algo que parece simples por fora e guarda força por dentro. O símbolo, a Gema, se inspira em cristais de minério que crescem em degraus e refletem cores, e é dele que vêm o dourado, o bronze, o magenta e o índigo que você vê por aqui.' },
      wishes: { label: '03 / O que nós queremos', hint: 'Nossa direção', title: 'Projetos pequenos e grandes, sem prender ninguém.' },
      wishList: [
        { title: 'Fazer o que ajuda e diverte', text: 'Apps e softwares que ajudam as pessoas no dia a dia, e jogos que divertem todo mundo.' },
        { title: 'Ficar perto do open source', text: 'Gostamos muito da comunidade. Código aberto sempre que der, e o essencial de graça.' },
        { title: 'Ganhar dinheiro com honestidade', text: 'Serviços e extras opcionais para sustentar os projetos. Nada de ecossistema fechado ou preço absurdo.' },
        { title: 'Explicar em vez de esconder', text: 'Textos claros para quem está começando, e sempre um jeito de entender e desfazer o que mudou.' },
      ],
    },
    history: { label: '05 / Histórico', hint: 'Versões até aqui', title: 'Do primeiro teste ao código aberto.' },
    events: [
      { date: 'out. 2026', title: 'O começo', text: 'O porte do RESET EXPLODE para Linux começa como projeto independente.' },
      { date: '07 nov. 2026', title: 'v0.30', text: 'Primeira versão de teste, com pacotes AppImage, Flatpak e assinatura GPG.' },
      { date: '10 nov. 2026', title: 'v0.31', text: 'Nasce o Ilmenyx Controller: três idiomas, nova estimativa de FPS e um app mais leve.' },
      { date: '11 nov. 2026', title: 'v0.32', text: 'Código aberto. Área de notificação, aviso de CPU quente e de versão nova.' },
      { date: '11 nov. 2026', title: 'v0.33', text: 'Modo simples, processos, sensores e discos para leigos, partições e limpeza de espaço. Na 0.33.1, atualização pelo próprio app.' },
    ],
    next: { status: 'Em breve', name: 'Mais por vir', text: 'O Controller é o primeiro. Quando houver novidade, ela aparece aqui.', more: 'Acompanhar no GitHub' },
  },
  en: {
    home: {
      why: { label: '02 / Why Ilmenyx', hint: 'What you get', title: 'Made for people who want to understand their own PC.' },
      tested: { label: '03 / Tested on real hardware', hint: 'Not just on paper', title: 'It ran on real PCs.', lead: 'Every version is tested on real machines before it ships. Got a different PC, distro or graphics card? You can help.', cta: 'Help us test' },
      news: { label: '04 / What\'s new', hint: 'What changed', title: 'What\'s new.', all: 'All updates' },
      author: { label: '05 / Who\'s behind it', hint: 'Author', quote: 'When I came to Linux, everything was new: installing a Windows game, understanding Proton and Wine, knowing how my PC was really doing. Ilmenyx was born to make that path easier for whoever comes next.', name: 'Flávio Henrique', role: 'Author of Ilmenyx Technology', more: 'Read the full story' },
    },
    why: [
      { title: 'Free and open', text: 'Download it, use it and see how it works inside. No account, no subscription, no catch.', color: 'var(--gold)' },
      { title: 'For people just starting', text: 'We explain what is going on in your PC in plain language and show you the way to fix it.', color: 'var(--bronze)' },
      { title: 'Nothing changes without you', text: 'Before any fix, you see exactly what will be done. And you can undo it later.', color: 'var(--magenta)' },
      { title: 'Truly lightweight', text: 'Sitting idle, Ilmenyx Controller uses about 3% of one processor core. It keeps an eye on your PC without weighing it down.', color: 'var(--indigo)' },
      { title: 'In your language', text: 'English, Portuguese and Spanish, in the app and on the command line. It follows your system language.', color: 'var(--verdigris)' },
      { title: 'Your data stays with you', text: 'Nothing is sent unless you ask. And every download is signed, so you can check it came from us.', color: 'var(--gold-pale)' },
    ],
    hardware: [
      { name: 'HP 250 G8', spec: 'Intel Core i5-1135G7 · Iris Xe', os: 'CachyOS · KDE Plasma (Wayland)' },
      { name: 'AMD laptop', spec: 'AMD Radeon 610M (integrated graphics)', os: 'Linux' },
      { name: 'Dell Inspiron 7460', spec: 'Intel HD 620 + NVIDIA GeForce 940MX', os: 'Linux Mint 22.3 · nouveau and NVIDIA 580 driver' },
    ],
    vms: 'The package was also checked in virtual machines running Ubuntu 24.04, Debian 13, Fedora 44, openSUSE Tumbleweed and Arch Linux.',
    news: [
      { date: 'Nov 11, 2026', tag: 'Ilmenyx Controller 0.33.1', title: 'Now it updates itself', text: 'When a new version is out, one click downloads it, checks the signature and installs it. Current users update by hand just this last time.' },
      { date: 'Nov 11, 2026', tag: 'Ilmenyx Controller 0.33', title: 'Useful day to day too', text: 'A simple first screen that tells you whether the PC is fine, processes like a system monitor (with End), sensors and disks explained for beginners, USB stick formatting and a page to free up space safely.' },
      { date: 'Nov 11, 2026', tag: 'Ilmenyx Controller 0.32', title: 'Open source and smarter alerts', text: 'The code is now open on GitHub. The app can live in the notification area, warn you when the CPU really heats up and when a new version is out. All optional.' },
      { date: 'Nov 11, 2026', tag: 'Ilmenyx Technology', title: 'The Ilmenyx website is born', text: 'One place for our projects, updates and ways to help.' },
      { date: 'Nov 10, 2026', tag: 'Ilmenyx Controller 0.31.1', title: 'Lighter', text: 'Sitting idle, the app now uses about 37% less processor and much less memory. No feature changed.' },
      { date: 'Nov 10, 2026', tag: 'Ilmenyx Controller 0.31', title: 'New name and three languages', text: 'The app became Ilmenyx Controller and gained English and Spanish, an FPS estimate calibrated on your PC and the "Why won\'t the game start?" page.' },
      { date: 'Nov 7, 2026', tag: 'Ilmenyx Controller 0.30', title: 'First test release', text: 'Diagnostics, monitoring and benchmarks in one app, with AppImage and Flatpak packages.' },
    ] as NewsItem[],
    newsPage: { meta: { title: 'What\'s new — Ilmenyx Technology', description: 'What changed in Ilmenyx Technology projects, in plain language.' }, label: 'What\'s new', title: 'What\'s new.', lead: 'The changes in our projects, explained without jargon. Full technical notes for each version live on GitHub.', releases: 'Technical notes on GitHub' },
    about: {
      meta: { title: 'About — Ilmenyx Technology', description: 'Who is behind Ilmenyx Technology, where the name comes from and what we want to build.' },
      label: 'About', title: 'An organization made by someone who was once a beginner.',
      lead: 'Ilmenyx Technology brings together the open source world with apps, services and games. It started with a Linux app and the wish to make life easier for newcomers.',
      story: {
        label: '01 / Who\'s behind it', hint: 'Author', name: 'Flávio Henrique', role: 'Author of Ilmenyx Technology',
        paragraphs: [
          'I have always been fascinated by Linux: a light system you can customize any way you like and where you can play freely. Along with that, I always wanted to make games and have my own apps, with my own look and style.',
          'But the start wasn\'t easy. I was a complete beginner, and everything on Linux was new: installing a Windows game, understanding how Proton and Wine worked, finding out why something wouldn\'t open, knowing how my PC was really doing and how it performed compared to Windows and to other PCs. It meant a lot of open tabs, a lot of forums and a lot of trial and error.',
          'One day I watched a video from the RESET channel showing RESET EXPLODE, which brought together the fix for many annoying Windows problems in one place. I thought: what if something like that existed for Linux, built for people who are just starting? That is how Ilmenyx Controller was born, an independent adaptation of RESET EXPLODE.',
          'And with it came the wish for something bigger: an organization, and maybe one day a company, to keep creating what I love to make. Solutions, services, automations and games. One day, who knows, even an operating system of our own.',
        ],
      },
      name: { label: '02 / The name', hint: 'Where it comes from', title: 'Ilmenyx comes from ilmenite.', text: 'The name is an invented variation of ilmenite, a dark, shiny mineral that titanium comes from. We like the idea of something that looks simple on the outside and holds strength inside. The symbol, the Gem, is inspired by ore crystals that grow in steps and reflect colors, and that is where the gold, bronze, magenta and indigo you see here come from.' },
      wishes: { label: '03 / What we want', hint: 'Our direction', title: 'Small and big projects, without locking anyone in.' },
      wishList: [
        { title: 'Make what helps and entertains', text: 'Apps and software that help people every day, and games that are fun for everyone.' },
        { title: 'Stay close to open source', text: 'We love the community. Open code whenever possible, and the essentials for free.' },
        { title: 'Earn money honestly', text: 'Optional services and extras to keep projects going. No closed ecosystem or absurd prices.' },
        { title: 'Explain instead of hiding', text: 'Clear text for people who are just starting, and always a way to understand and undo what changed.' },
      ],
    },
    history: { label: '05 / History', hint: 'Versions so far', title: 'From the first test to open source.' },
    events: [
      { date: 'Oct 2026', title: 'The start', text: 'The Linux port of RESET EXPLODE begins as an independent project.' },
      { date: 'Nov 7, 2026', title: 'v0.30', text: 'First test release, with AppImage and Flatpak packages and GPG signatures.' },
      { date: 'Nov 10, 2026', title: 'v0.31', text: 'Ilmenyx Controller is born: three languages, a new FPS estimate and a lighter app.' },
      { date: 'Nov 11, 2026', title: 'v0.32', text: 'Open source. Notification area, hot CPU and new version alerts.' },
      { date: 'Nov 11, 2026', title: 'v0.33', text: 'Simple mode, processes, sensors and disks for beginners, partitions and space cleanup. In 0.33.1, in-app updates.' },
    ],
    next: { status: 'Coming soon', name: 'More to come', text: 'Controller is the first one. When there is news, it shows up here.', more: 'Follow on GitHub' },
  },
} satisfies Record<Lang, unknown>;
