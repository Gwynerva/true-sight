<script lang="ts" setup>
useSeoMeta({
  title: 'True Sight — Web Analytics Solutions',
  description:
    'Data-driven insights for modern businesses. Track, analyze, and optimize your digital presence with True Sight.',
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <section class="text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-200 mb-3">
        Data-Driven Insights for Modern Businesses
      </h2>
      <p class="text-slate-400 max-w-xl mx-auto leading-relaxed">
        True Sight helps teams understand their audience, measure what matters,
        and make confident decisions backed by real-time data.
      </p>
    </section>

    <section class="grid sm:grid-cols-3 gap-6">
      <div class="rounded-lg border border-slate-700/60 bg-slate-800/40 p-5">
        <h3 class="font-semibold text-slate-200 mb-2">Real-Time Dashboard</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Monitor visitors, page views, and engagement metrics as they happen
          with our live analytics dashboard.
        </p>
      </div>
      <div class="rounded-lg border border-slate-700/60 bg-slate-800/40 p-5">
        <h3 class="font-semibold text-slate-200 mb-2">Audience Segmentation</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Group users by behavior, geography, device, and custom attributes to
          uncover actionable patterns in your traffic.
        </p>
      </div>
      <div class="rounded-lg border border-slate-700/60 bg-slate-800/40 p-5">
        <h3 class="font-semibold text-slate-200 mb-2">Seamless Integrations</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Connect with popular CRMs, ad platforms, and marketing tools to
          centralize your data in one place.
        </p>
      </div>
    </section>

    <section class="text-center">
      <p class="text-slate-400 mb-4">
        Explore what True Sight can do for your organization.
      </p>
      <div class="flex justify-center gap-4 text-sm font-medium">
        <NuxtLink
          to="/services"
          class="px-4 py-2 rounded bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors"
        >
          Our Services
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="px-4 py-2 rounded border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Read the Blog
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
