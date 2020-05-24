<template>
  <div class="min-h-screen p-6 bg-gray-200">
    <div class="max-w-6xl p-4 mx-auto">
      <logo class="w-16" />
      <h1 class="text-2xl font-bold">YK Docs</h1>
      <h2 class="text-sm text-gray-600">Yiddishe-Kop docs (scripts, blog posts, etc)</h2>

      <nuxt />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: { Logo },
  mounted() {}
};
</script>
