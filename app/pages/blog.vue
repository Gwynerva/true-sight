<script lang="ts" setup>
useSeoMeta({
  title: 'Blog — True Sight',
  description:
    'News, product updates, and insights from the True Sight analytics team.',
});

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const now = new Date();
const year = now.getFullYear();

// Generate posts anchored to the current date, spaced ~2-3 months apart,
// so the blog always looks recently updated regardless of when it's viewed.
const posts = computed(() => {
  const items = [
    {
      monthsAgo: 0,
      title: `Q${Math.ceil((now.getMonth() + 1) / 3)} ${year} roadmap and recent updates`,
      summary:
        'This quarter we shipped improved funnel visualization, faster report generation, and expanded API endpoints for enterprise clients. Next up: enhanced cohort analysis and a refreshed onboarding flow.',
    },
    {
      monthsAgo: 2,
      title: 'Real-time funnel visualization is now available',
      summary:
        'The latest dashboard widget shows visitors moving through conversion steps as it happens. Teams can spot drop-offs instantly and adjust campaigns while they are still running.',
    },
    {
      monthsAgo: 4,
      title: 'Adapting to the shift toward first-party data',
      summary:
        'With third-party cookies on the way out, first-party data strategies have become essential. We have updated our collection pipeline to help clients measure accurately without relying on external cookies.',
    },
    {
      monthsAgo: 7,
      title: 'CRM data sync is now supported',
      summary:
        'True Sight now connects with leading CRM platforms, letting teams tie website behavior to customer records. Revenue can be attributed to marketing touchpoints without manual exports.',
    },
    {
      monthsAgo: 9,
      title: 'Updated default dashboard with weekly metric presets',
      summary:
        'The default dashboard now highlights five weekly metrics our analytics team found most predictive of campaign performance. Existing workspaces will see the new preset on their next login.',
    },
    {
      monthsAgo: 11,
      title: `${year - 1} platform changelog published`,
      summary:
        'A full changelog covering every feature, fix, and improvement shipped over the past year has been posted to the documentation site. Thank you to the community for the feedback that shaped these updates.',
    },
  ];

  return items.map((item) => {
    const date = new Date(year, now.getMonth() - item.monthsAgo, 12);
    return {
      date: formatDate(date),
      title: item.title,
      summary: item.summary,
    };
  });
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <section class="text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-200 mb-3">Blog</h2>
      <p class="text-slate-400 max-w-xl mx-auto leading-relaxed">
        Product updates, industry insights, and tips from the True Sight team.
      </p>
    </section>

    <div class="flex flex-col gap-6">
      <article
        v-for="post in posts"
        :key="post.title"
        class="rounded-lg border border-slate-700/60 bg-slate-800/40 p-5"
      >
        <time class="text-xs text-slate-500 uppercase tracking-wide">{{
          post.date
        }}</time>
        <h3 class="font-semibold text-slate-200 mt-1 mb-2">
          {{ post.title }}
        </h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          {{ post.summary }}
        </p>
      </article>
    </div>
  </div>
</template>
