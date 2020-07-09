<template>
  <div>
    <portal to="page-title">Docs</portal>

    <div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Weekly Programming Articles</h2>
        <p
          class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
        >Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
        <input id="search" v-model="q" placeholder="Search..." />
        <recent-articles :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
import RecentArticles from "~/components/RecentArticles";

export default {
  components: { RecentArticles },
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
