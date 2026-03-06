<script lang="ts" setup>
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();

useSeoMeta({
  title: 'Page Not Found — True Sight',
  description: 'The page you are looking for could not be found.',
});

function handleGoHome() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <div class="min-h-dvh grid place-items-center">
    <main class="flex flex-col items-center text-center px-6 max-w-md">
      <div class="w-[100px] sm:w-[130px] relative mb-6">
        <div
          class="absolute top-1/2 left-1/2 -translate-1/2 size-[min(100dvw,800px)] pointer-events-none [--glowStart:color-mix(in_hsl,var(--color-slate-400),transparent_92%)] [background:radial-gradient(ellipse_closest-side,var(--glowStart),transparent)]"
        ></div>
        <img src="/logotype.webp" alt="True Sight" class="block relative" />
      </div>

      <h1 class="font-bold text-6xl sm:text-8xl text-slate-200 mb-2">
        {{ error?.statusCode || 404 }}
      </h1>
      <p class="text-lg sm:text-xl text-slate-400 mb-2">
        {{
          error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong'
        }}
      </p>
      <p class="text-sm text-slate-500 mb-8 leading-relaxed">
        {{
          error?.statusCode === 404
            ? "The page you're looking for doesn't exist or has been moved."
            : 'An unexpected error occurred. Please try again later.'
        }}
      </p>

      <div class="flex gap-3">
        <button
          class="px-5 py-2 rounded bg-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-600 transition-colors cursor-pointer"
          @click="handleGoHome"
        >
          Back to Home
        </button>
        <NuxtLink
          to="/sign-in"
          class="px-5 py-2 rounded border border-slate-600 text-slate-400 text-sm font-medium hover:text-slate-200 hover:bg-slate-800 transition-colors"
        >
          Sign In
        </NuxtLink>
      </div>

      <p class="mt-12 text-xs text-slate-600">
        &copy; {{ new Date().getFullYear() }} True Sight &middot; Web Analytics
        Solutions
      </p>
    </main>
  </div>
</template>
