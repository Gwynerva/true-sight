import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-03-05',
  devtools: { enabled: true },
  css: ['./assets/style.css'],
  runtimeConfig: {
    authLogin: '',
    authPassword: '',
    adminPanelUrl: '',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
