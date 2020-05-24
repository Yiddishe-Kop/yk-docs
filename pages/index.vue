<template>
  <div class="max-w-6xl mx-auto my-4 p-4">
    <logo />
    <h1 class="title">YK Docs</h1>
    <h2 class="subtitle">Yiddishe-Kop docs (scripts, blog posts, etc)</h2>
    <h1 class="mt-8">Content</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();

    return {
      page
    };
  },
  components: {
    Logo
  }
};
</script>
