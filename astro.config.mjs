import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = (repository || '').split('/');
export default defineConfig({
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : undefined),
  base: process.env.BASE_PATH || (repo && repo.toLowerCase() !== `${owner}.github.io`.toLowerCase() ? `/${repo}` : '/'),
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
});
