<template>
  <div>
    <h2 class="mt-4 text-xl font-bold text-center">Weekly Programming Articles</h2>

    <input id="search" v-model="q" placeholder="Search..." />

    <ul class="grid grid-cols-3 gap-4 my-6">
      <li
        v-for="article in articles"
        :key="article.slug"
        class="bg-white rounded-md shadow hover:shadow-lg"
      >
        <nuxt-link
          :to="{ name: 'docs-slug', params: { slug: article.slug } }"
          class="block p-3"
        >{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;
    let query = $content("docs").sortBy("date", "desc");
    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }
    const articles = await query.fetch();
    return {
      q,
      articles
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    }
  }
};
</script>
