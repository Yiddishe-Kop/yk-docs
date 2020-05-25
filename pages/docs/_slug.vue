<template>
  <div>
    <portal to="page-title">{{ article.title }}</portal>
    <nuxt-link to="/docs" class="text-sm text-gray-500 underline">Back</nuxt-link>
    <div class="my-12 text-center">
      <h2 class="text-4xl font-black text-gray-600">{{ article.title }}</h2>
      <p class="text-sm text-gray-600">{{ article.description }}</p>
    </div>
    <nuxt-content :document="article" />
    <div class="flex justify-between py-2 mt-8 text-gray-600">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'docs-slug', params: { slug: prev.slug } }"
        class="flex items-center space-x-2 group"
      >
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="w-6 text-gray-600 group-hover:text-teal-400"
        >
          <path d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        <span>{{ prev.title }}</span>
      </nuxt-link>
      <i v-else></i>
      <nuxt-link
        v-if="next"
        :to="{ name: 'docs-slug', params: { slug: next.slug } }"
        class="flex items-center space-x-2 group"
      >
        <span>{{ next.title }}</span>
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="w-6 text-gray-600 group-hover:text-teal-400"
        >
          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </nuxt-link>
      <i v-else></i>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let article;
    try {
      article = await $content("docs", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Article not found" });
    }
    const [prev, next] = await $content("docs")
      .only(["title", "slug"])
      .sortBy("date", "desc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      prev,
      next
    };
  }
};
</script>
