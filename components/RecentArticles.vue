<template>
  <ul
    class="grid gap-16 pt-12 border-t-2 border-gray-100 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12"
  >
    <li v-for="article in articles" :key="article.slug">
      <div>
        <a href="#" class="inline-block">
          <span
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
          >Article</span>
        </a>
      </div>
      <nuxt-link :to="{ name: 'docs-slug', params: { slug: article.slug } }" class="block">
        <h3 class="mt-4 text-xl font-semibold leading-7 text-gray-900">{{ article.title }}</h3>
        <p class="mt-3 text-base leading-6 text-gray-500">{{ article.excerpt }}</p>
      </nuxt-link>
      <div class="flex items-center mt-6">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="w-10 h-10 rounded-full"
              src="https://halpern.yiddishe-kop.com/img/users/NQ5WccXhHPSqLDUbsKWQN6VGMTgMA6dRAJvsRzB9.jpeg/656455b5e11f1cb983323323506df3e213b27167921c9ff70ab04a333d60adfb/NQ5WccXhHPSqLDUbsKWQN6VGMTgMA6dRAJvsRzB9.jpg?w=40&h=40&fit=crop"
              alt
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium leading-5 text-gray-900">
            <a href="#">Yehuda Neufeld</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
            <span class="mx-1">&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RecentArticles",
  props: ["articles"]
};
</script>

<style>
</style>
