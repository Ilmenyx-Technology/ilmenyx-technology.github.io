// Copy for the Ilmenyx Studios site (the games division), in Portuguese (/studios/) and English (/en/studios/).
// Support and contact reuse the Ilmenyx Technology content for now; only their page titles change.
import { paths, EMAIL, KOFI, ORG, type Lang } from './strings';

export type StudioPage = 'home' | 'about' | 'games' | 'support' | 'contact';

export const spaths: Record<Lang, Record<StudioPage, string>> = {
  pt: { home: '/studios/', about: '/studios/sobre/', games: '/studios/jogos/', support: '/studios/apoie/', contact: '/studios/contato/' },
  en: { home: '/en/studios/', about: '/en/studios/about/', games: '/en/studios/games/', support: '/en/studios/support/', contact: '/en/studios/contact/' },
};

/** A released or announced game. The list stays empty until the first one is ready to be shown. */
export interface Game { name: string; status: string; text: string; image?: string; href?: string; }
export const games: Record<Lang, Game[]> = { pt: [], en: [] };

export const st = {
  pt: {
    nav: { about: 'Sobre', games: 'Jogos', support: 'Apoie', contact: 'Contato', main: 'Ilmenyx Studios', home: 'Início da Ilmenyx Studios' },
    footer: {
      blurb: 'A divisão de jogos da Ilmenyx Technology.',
      tagline: 'Mundos para explorar.',
      cols: [
        { title: 'Ilmenyx Studios', links: [['Sobre', 'about'], ['Jogos', 'games'], ['Apoie', 'support'], ['Contato', 'contact']] },
        { title: 'Ilmenyx Technology', links: [['Site da Ilmenyx', paths.pt.home], ['Projetos', paths.pt.projects], ['Novidades', paths.pt.news]] },
        { title: 'Comunidade', links: [['GitHub', ORG], ['Ko-fi', KOFI], ['E-mail', `mailto:${EMAIL}`]] },
      ],
      privacy: 'Este site não usa cookies nem rastreamento.', name: 'Rodapé',
    },
    home: {
      meta: { title: 'Ilmenyx Studios — mundos para explorar', description: 'Ilmenyx Studios, a divisão de jogos da Ilmenyx Technology. O primeiro jogo está em desenvolvimento.' },
      kicker: 'ILMENYX STUDIOS', title: 'Mundos para explorar.',
      lead: 'A divisão de jogos da Ilmenyx Technology. O primeiro jogo está em desenvolvimento.',
      press: 'PRESS START · EM BREVE', primary: 'VER JOGOS', secondary: 'SOBRE',
      readout: ['SISTEMA', 'ATIVO', 'JOGO 01', 'CARREGANDO'],
    },
    about: {
      meta: { title: 'Sobre — Ilmenyx Studios', description: 'Quem é a Ilmenyx Studios, a divisão de jogos da Ilmenyx Technology, e como fazemos jogos.' },
      label: 'SOBRE', title: 'Um estúdio para criar mundos.',
      lead: 'A Ilmenyx Studios é a divisão de jogos da Ilmenyx Technology. Nasceu da mesma ideia que guia toda a marca: estrutura para criar, liberdade para explorar.',
      valuesHead: { label: '01 / O que nos move', hint: 'Em todo jogo' },
      values: [
        { title: 'Diversão em primeiro lugar', text: 'Cada decisão começa por uma pergunta: isso deixa o jogo melhor de jogar?' },
        { title: 'Cuidado técnico', text: 'O mesmo rigor do nosso software: medido, testado em hardware real e sem atalhos.' },
        { title: 'Feito com quem joga', text: 'Testes abertos, conversa direta e atenção ao que a comunidade diz.' },
      ],
      parentHead: { label: '02 / Parte da Ilmenyx', hint: 'Uma marca, várias frentes' },
      parent: { title: 'Ilmenyx Technology', text: 'A Studios faz parte da Ilmenyx Technology, que também cria software e serviços digitais, como o Ilmenyx Controller para Linux.', cta: 'Conhecer a Ilmenyx Technology' },
    },
    games: {
      meta: { title: 'Jogos — Ilmenyx Studios', description: 'Os jogos da Ilmenyx Studios. O primeiro está em desenvolvimento.' },
      label: 'JOGOS', title: 'Nossos jogos.',
      lead: 'O primeiro está em desenvolvimento. Quando estiver pronto para ser mostrado, ele aparece aqui.',
      slots: [
        { tag: 'JOGO 01', title: 'Em desenvolvimento', text: 'Nosso primeiro jogo está sendo construído.', on: true },
        { tag: 'JOGO 02', title: 'Em breve', text: 'Ainda em segredo.', on: false },
        { tag: 'JOGO 03', title: 'Em breve', text: 'Ainda em segredo.', on: false },
      ],
      more: 'Ver o jogo',
    },
    support: { meta: { title: 'Apoie — Ilmenyx Studios', description: 'Como apoiar a Ilmenyx: doações por Ko-fi ou Pix, testes, relatos e divulgação.' } },
    contact: { meta: { title: 'Contato — Ilmenyx Studios', description: 'Fale com a Ilmenyx Studios: e-mail, issues no GitHub e falhas de segurança.' } },
  },
  en: {
    nav: { about: 'About', games: 'Games', support: 'Support', contact: 'Contact', main: 'Ilmenyx Studios', home: 'Ilmenyx Studios home' },
    footer: {
      blurb: 'The games division of Ilmenyx Technology.',
      tagline: 'Worlds to explore.',
      cols: [
        { title: 'Ilmenyx Studios', links: [['About', 'about'], ['Games', 'games'], ['Support', 'support'], ['Contact', 'contact']] },
        { title: 'Ilmenyx Technology', links: [['Ilmenyx website', paths.en.home], ['Projects', paths.en.projects], ['What\'s new', paths.en.news]] },
        { title: 'Community', links: [['GitHub', ORG], ['Ko-fi', KOFI], ['Email', `mailto:${EMAIL}`]] },
      ],
      privacy: 'This site uses no cookies and no tracking.', name: 'Footer',
    },
    home: {
      meta: { title: 'Ilmenyx Studios — worlds to explore', description: 'Ilmenyx Studios, the games division of Ilmenyx Technology. The first game is in development.' },
      kicker: 'ILMENYX STUDIOS', title: 'Worlds to explore.',
      lead: 'The games division of Ilmenyx Technology. The first game is in development.',
      press: 'PRESS START · COMING SOON', primary: 'SEE GAMES', secondary: 'ABOUT',
      readout: ['SYSTEM', 'ONLINE', 'GAME 01', 'LOADING'],
    },
    about: {
      meta: { title: 'About — Ilmenyx Studios', description: 'Who Ilmenyx Studios is, the games division of Ilmenyx Technology, and how we make games.' },
      label: 'ABOUT', title: 'A studio for building worlds.',
      lead: 'Ilmenyx Studios is the games division of Ilmenyx Technology. It was born from the same idea that guides the whole brand: structure to create, freedom to explore.',
      valuesHead: { label: '01 / What drives us', hint: 'In every game' },
      values: [
        { title: 'Fun comes first', text: 'Every decision starts with one question: does this make the game better to play?' },
        { title: 'Technical care', text: 'The same rigor as our software: measured, tested on real hardware and no shortcuts.' },
        { title: 'Made with players', text: 'Open playtests, direct conversation and attention to what the community says.' },
      ],
      parentHead: { label: '02 / Part of Ilmenyx', hint: 'One brand, several fronts' },
      parent: { title: 'Ilmenyx Technology', text: 'The Studios is part of Ilmenyx Technology, which also builds software and digital services, like Ilmenyx Controller for Linux.', cta: 'Meet Ilmenyx Technology' },
    },
    games: {
      meta: { title: 'Games — Ilmenyx Studios', description: 'Games by Ilmenyx Studios. The first one is in development.' },
      label: 'GAMES', title: 'Our games.',
      lead: 'The first one is in development. Once it is ready to be shown, it will appear here.',
      slots: [
        { tag: 'GAME 01', title: 'In development', text: 'Our first game is being built.', on: true },
        { tag: 'GAME 02', title: 'Coming soon', text: 'Still a secret.', on: false },
        { tag: 'GAME 03', title: 'Coming soon', text: 'Still a secret.', on: false },
      ],
      more: 'See the game',
    },
    support: { meta: { title: 'Support — Ilmenyx Studios', description: 'How to support Ilmenyx: donations via Ko-fi or Pix, testing, reports and spreading the word.' } },
    contact: { meta: { title: 'Contact — Ilmenyx Studios', description: 'Talk to Ilmenyx Studios: email, GitHub issues and security reports.' } },
  },
};
