<template>
  <div class="py-8" :dir="[lang == 'he' ? 'rtl' : 'ltr']">
    <portal to="page-title">Wikipedia</portal>
    <h1>
      ברוכים הבאים למגרש המשחקים שלנו!
      <select v-model="lang" class="px-2 py-1 mx-2 border rounded">
        <option value="he">עברית</option>
        <option value="en">English</option>
      </select>
    </h1>
    <input
      @keyup.enter="searchWikipedia"
      v-model="query"
      class="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-md shadow"
      placeholder="חפש כל מה שעולה על דעתך..."
    />

    <section class="mt-4 wiki">
      <div class="p-3 mt-2 overflow-x-auto text-white bg-gray-700 rounded-lg shadow">
        <div v-if="!!result.parse" v-html="result.parse.text && result.parse.text['*']"></div>
        <div
          v-else-if="!!result.error"
          v-html="result.error.info"
          class="my-16 text-sm text-center text-red-500"
        ></div>
        <div v-else class="my-16 text-center text-gray-400">התוצאות יוצגו כאן</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Wikipedia",
  data() {
    return {
      lang: "he",
      query: "",
      result: {}
    };
  },
  methods: {
    async searchWikipedia() {
      let res = await (
        await fetch(
          `https://${this.lang}.wikipedia.org/w/api.php?
            action=parse&
            page=${this.query}&
            format=json&
            utf8=1&
            prop=text&
            maxlag=500&
            origin=*`,
          {
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Origin: "http://localhost:3000/wikipedia"
            }
          }
        )
      ).json();
      this.result = res;
    }
  }
};
</script>

<style lang="scss">
.wiki {
  a {
    @apply text-blue-300;
  }
}
</style>
