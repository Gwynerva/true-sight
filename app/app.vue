<script lang="ts" setup>
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.webp' }],
});

useSeoMeta({
  title: 'True Sight',
  ogTitle: 'True Sight',
  description: 'Web Analytics Solutions 👀',
  ogDescription: 'Web Analytics Solutions 👀',
  ogImage: {
    url: '/logotype.webp',
    width: 380,
    height: 380,
  },
});

const login = ref('');
const password = ref('');
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
const statusMessage = ref('');

async function handleSubmit() {
  status.value = 'loading';
  statusMessage.value = 'Signing in...';

  try {
    const { redirectUrl } = await $fetch('/api/auth', {
      method: 'POST',
      body: { login: login.value, password: password.value },
    });
    status.value = 'success';
    statusMessage.value = 'Signed in successfully!';
    if (redirectUrl) {
      await navigateTo(redirectUrl, { external: true });
    }
  } catch (error: any) {
    status.value = 'error';
    statusMessage.value = error?.data?.statusMessage || 'Something went wrong!';
  }
}
</script>

<template>
  <main class="w-[min(100%,300px)] flex flex-col items-center">
    <div class="w-[140px] sm:w-[200px] relative">
      <div
        class="absolute top-1/2 left-1/2 -translate-1/2 size-[min(100dvw,1000px)] pointer-events-none [--glowStart:color-mix(in_hsl,var(--color-slate-400),transparent_90%)] [background:radial-gradient(ellipse_closest-side,var(--glowStart),transparent)]"
      ></div>
      <img src="/logotype.webp" alt="Logotype" class="block relative" />
    </div>
    <section class="flex flex-col gap-6 items-center relative w-full">
      <h1 class="font-bold text-2xl sm:text-4xl text-slate-200">True Sight</h1>
      <div class="font-semibold text-xl sm:text-2xl text-slate-400">
        Web Analytics Solutions
      </div>
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <input
          v-model="login"
          type="text"
          placeholder="Login"
          :disabled="status === 'loading'"
          class="p-2 w-full rounded bg-slate-700 border border-slate-500 outline-none disabled:opacity-50 ring-2 ring-transparent focus:ring-slate-100/25 transition-shadow"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          :disabled="status === 'loading'"
          class="p-2 w-full rounded bg-slate-700 border border-slate-500 outline-none disabled:opacity-50 ring-2 ring-transparent focus:ring-slate-100/25 transition-shadow"
        />
        <button
          type="submit"
          :disabled="status === 'loading'"
          class="p-2 w-full rounded bg-slate-600 text-slate-200 font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 outline-none not-disabled:focus:bg-slate-500 not-disabled:hover:bg-slate-500 transition-colors"
        >
          Sign In
        </button>
        <p
          v-show="status !== 'idle'"
          class="text-sm text-center"
          :class="{
            'text-slate-400': status === 'loading',
            'text-green-400': status === 'success',
            'text-red-400': status === 'error',
          }"
        >
          {{ statusMessage }}
        </p>
      </form>
    </section>
  </main>
</template>
