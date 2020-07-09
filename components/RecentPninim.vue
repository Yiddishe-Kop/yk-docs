<template>
  <ul
    class="grid gap-6 pt-12 border-t-2 border-gray-100 lg:gap-16 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12"
    dir="rtl"
  >
    <li
      v-for="pnina in pninim"
      :key="pnina.id"
      class="relative flex flex-col p-6 transition border border-gray-200 rounded-lg group hover:border-gray-300 hover:bg-gray-80"
    >
      <h2
        class="pt-2 mb-6 text-4xl font-bold leading-7 text-justify text-gray-600 font-siddur"
      >{{ pnina.title }}</h2>
      <div
        class="space-y-2 overflow-y-auto text-lg leading-snug max-h-60 font-sbl"
        v-html="formattedPnina(pnina.content)"
      ></div>
      <p class="mt-1 text-sm text-left text-gray-700 font-sbl">({{ pnina.ref }})</p>
      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-between p-1 mx-8 transition transform translate-y-1/2 bg-gray-200 rounded-full group-hover:bg-gray-300"
      >
        <div class="flex items-center font-heebo">
          <avatar :user="{ name: pnina.username, photoUrl:pnina.avatar }" />
          <div class="flex flex-col leading-4">
            <span class="mx-2 font-bold">{{ pnina.username }}</span>
            <span class="mx-2 mt-1 text-sm text-gray-700">{{ pnina.created_at }}</span>
          </div>
        </div>
        <reactions :reactions="pnina.reactions" class="ml-2" />
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "~/components/ui/Avatar";
import Reactions from "~/components/ui/Reactions";

export default {
  name: "RecentPninim",
  props: ["pninim"],
  components: { Avatar, Reactions },
  methods: {
    formattedPnina(md) {
      return md
        .replace(
          /\*{2}(.+?)\*{2}/g,
          '<strong class="text-xl leading-3 text-gray-900 font-siddur">$1</strong>'
        ) // **bold**
        .replace(
          /(\(.+?\))/g,
          '<small class="text-sm text-gray-700">$1</small>'
        ) // סוגריים
        .split("\n")
        .map(p => `<p>${p}</p>`)
        .join("");
    }
  }
};
</script>

<style>
</style>
