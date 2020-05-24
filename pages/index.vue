<template>
  <div>
    <nuxt-link to="/wikipedia" class="inline-block mt-6 text-teal-500 underline">וויקיפדיה</nuxt-link>
    <nuxt-link to="/docs" class="inline-block mt-6 text-teal-500 underline">documentation</nuxt-link>

    <h1 class="mt-8 text-xl font-semibold">Content</h1>

    <nuxt-link v-for="page in pages" :key="page.slug" :to="page.path">
      <nuxt-content :document="page" class="p-6 my-12 bg-white rounded-lg shadow" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content("docs").fetch();

    return {
      pages
    };
  },
  components: {}
};
</script>
