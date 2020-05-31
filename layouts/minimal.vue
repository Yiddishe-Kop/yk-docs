<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <section class="px-10 py-6 bg-gray-700 rounded">
      <nuxt />
    </section>
    <section class="absolute bottom-0 left-0 right-0">
      <div class="flex items-center justify-center px-6 py-3 m-3 bg-gray-300 rounded">
        <logo class="dark" />
        <p class="ml-2 text-sm text-gray-600">Powered by the Yiddishe Kop</p>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: { Logo },
  name: "Minimal"
};
</script>

<style>
</style>
