// Ilmenyx Technology site: static, no trackers, fonts served from this site.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ilmenyx-technology.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
