<script lang="ts" setup>
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.webp' }],
});

useSeoMeta({
  ogTitle: 'True Sight',
  ogDescription: 'Web Analytics Solutions',
  ogImage: {
    url: '/logotype.webp',
    width: 380,
    height: 380,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
