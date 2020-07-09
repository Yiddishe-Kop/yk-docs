<template>
  <div>
    <portal to="page-title">Pninim</portal>

    <div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Recent Pninim</h2>
        <p
          class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
        >Latest Pninim written on our Pninim platform.</p>
        <recent-pninim :pninim="pninim" class="mt-4" />
        <div class="flex items-center justify-center mt-24">
          <a href="https://pninim.yiddishe-kop.com/" target="_blank" class="btn-outline">View all</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecentPninim from "~/components/RecentPninim";

export default {
  components: { RecentPninim },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const pninim = await (
      await fetch("https://pninim.yiddishe-kop.com/api/posts")
    ).json();
    return {
      pninim
    };
  }
};
</script>
