<template>
  <div>
    <nuxt-link to="/docs" class="text-sm text-gray-500 underline">Back</nuxt-link>
    <div class="my-12 text-center">
      <h2 class="text-4xl font-black text-gray-600">{{ article.title }}</h2>
      <p class="text-sm text-gray-600">{{ article.description }}</p>
    </div>
    <nuxt-content :document="article" class="p-4 bg-white rounded-lg shadow" />
    <div class="flex justify-between mt-4 border-t-2 border-gray-300">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
      >&lt; {{ prev.title }}</nuxt-link>&nbsp;|
      <nuxt-link
        v-if="next"
        :to="{ name: 'articles-slug', params: { slug: next.slug } }"
      >{{ next.title }} &gt;</nuxt-link>
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
