<template>
  <div class="text-center">
    <h1
      class="-mt-16 font-black leading-none text-teal-300 bounce"
      style="font-size: 100px;"
    >{{ error.statusCode }}</h1>
    <p class="mt-6 font-mono text-gray-400">{{ error.message }}</p>
    <p class="mt-12 -mb-10 text-center">
      <nuxt-link
        to="/"
        class="px-4 py-2 text-gray-600 transition bg-gray-900 rounded-md hover:text-gray-400 hover:shadow-outline-gray focus:outline-none focus:shadow-outline-blue"
      >Back to safety</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "minimal",
  head() {
    return {
      title: `YK-Docs | ${this.error.statusCode}`
    };
  }
};
</script>

<style>
.bounce {
  animation: bounce 2s ease-in-out infinite alternate;
}
@keyframes bounce {
  from {
    transform: translateY(-10px) scale(1.1);
  }
  to {
    transform: translateY(5px) scale(1);
  }
}
</style>
