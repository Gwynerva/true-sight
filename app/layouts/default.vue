<template>
  <div class="min-h-dvh flex flex-col items-center">
    <header class="w-full flex flex-col items-center pt-10 pb-6">
      <NuxtLink to="/" class="flex flex-col items-center gap-4 no-underline">
        <div class="w-[80px] sm:w-[100px] relative">
          <div
            class="absolute top-1/2 left-1/2 -translate-1/2 size-[min(100dvw,800px)] pointer-events-none [--glowStart:color-mix(in_hsl,var(--color-slate-400),transparent_92%)] [background:radial-gradient(ellipse_closest-side,var(--glowStart),transparent)]"
          ></div>
          <img src="/logotype.webp" alt="True Sight" class="block relative" />
        </div>
        <div class="text-center relative">
          <h1 class="font-bold text-xl sm:text-2xl text-slate-200">
            True Sight
          </h1>
          <p class="text-sm sm:text-base text-slate-400 font-medium">
            Web Analytics Solutions
          </p>
        </div>
      </NuxtLink>
      <nav class="flex gap-6 mt-5 text-sm font-medium">
        <NuxtLink
          to="/"
          class="text-slate-500 hover:text-slate-100 transition-colors duration-200"
          active-class="!text-slate-200"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="text-slate-500 hover:text-slate-100 transition-colors duration-200"
          active-class="!text-slate-200"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="text-slate-500 hover:text-slate-100 transition-colors duration-200"
          active-class="!text-slate-200"
        >
          Blog
        </NuxtLink>
      </nav>
    </header>

    <main class="flex-1 w-full max-w-3xl px-6 py-8">
      <slot />
    </main>

    <footer class="w-full py-6 text-center text-sm text-slate-500">
      <NuxtLink
        to="/sign-in"
        class="text-slate-500 hover:text-slate-300 transition-colors"
      >
        Client Sign In
      </NuxtLink>
      <span class="mx-2">&middot;</span>
      <span>&copy; {{ new Date().getFullYear() }} True Sight</span>
    </footer>
  </div>
</template>
