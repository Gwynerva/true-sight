<script lang="ts" setup>
useSeoMeta({
  title: 'Services — True Sight',
  description:
    'Explore analytics services offered by True Sight: traffic analysis, behavior tracking, conversion optimization, A/B testing, custom reporting, and SEO monitoring.',
});

const services = [
  {
    title: 'Website Traffic Analysis',
    description:
      'Get a complete picture of where your visitors come from, which pages they view, and how long they stay. Our traffic analysis tools surface trends so you can allocate resources to the channels that matter most.',
  },
  {
    title: 'User Behavior Tracking',
    description:
      'Understand how users navigate your site with heatmaps, session recordings, and event tracking. Identify friction points and optimize the experience for higher engagement.',
  },
  {
    title: 'Conversion Rate Optimization',
    description:
      'Turn more visitors into customers. We help you map conversion funnels, pinpoint drop-off stages, and implement data-backed improvements that increase your bottom line.',
  },
  {
    title: 'A/B Testing Platform',
    description:
      'Run controlled experiments on headlines, layouts, and calls to action. Our testing engine handles traffic splitting, statistical significance calculations, and result reporting.',
  },
  {
    title: 'Custom Reporting & Dashboards',
    description:
      'Build tailored dashboards that highlight the KPIs your stakeholders care about. Schedule automated reports and share live links with your team — no spreadsheets required.',
  },
  {
    title: 'SEO Performance Monitoring',
    description:
      'Track keyword rankings, organic traffic, and backlink profiles over time. Receive alerts when metrics shift so you can respond before small changes become big problems.',
  },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <section class="text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-200 mb-3">
        Our Services
      </h2>
      <p class="text-slate-400 max-w-xl mx-auto leading-relaxed">
        A full suite of analytics tools designed to help you understand your
        audience and grow your business.
      </p>
    </section>

    <div class="grid sm:grid-cols-2 gap-5">
      <article
        v-for="service in services"
        :key="service.title"
        class="rounded-lg border border-slate-700/60 bg-slate-800/40 p-5"
      >
        <h3 class="font-semibold text-slate-200 mb-2">{{ service.title }}</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          {{ service.description }}
        </p>
      </article>
    </div>
  </div>
</template>
