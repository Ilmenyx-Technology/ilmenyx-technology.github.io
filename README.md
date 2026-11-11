# ilmenyx-technology.github.io

Site da **Ilmenyx Technology**: https://ilmenyx-technology.github.io (português) e https://ilmenyx-technology.github.io/en/ (inglês).

Feito com [Astro](https://astro.build), estático, sem cookies, sem rastreamento e com as fontes servidas pelo próprio site.
Cores, fontes e símbolo seguem o manual de identidade visual v4.0.

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

- Textos (português e inglês): `src/i18n/strings.ts`
- Páginas: `src/components/Home.astro` (a marca) e `src/components/Controller.astro` (Ilmenyx Controller)
- Estilos com os tokens da marca: `src/styles/global.css`
- Cada push na `main` publica no GitHub Pages (`.github/workflows/publicar.yml`).

© Ilmenyx Technology. O nome, o símbolo e o logotipo são marcas da Ilmenyx Technology e não podem ser usados sem autorização.
