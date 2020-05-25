<template>
  <div class="text-gray-100 bg-gray-800">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <div class="items-center justify-center lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="text-center lg:text-right">
          <h4
            class="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase"
          >Solutions</h4>
          <ul class="mt-4">
            <li>
              <a
                href="https://indesign.yiddishe-kop.com/"
                target="_blank"
                class="text-base leading-6 text-gray-500 hover:text-gray-100 hover:underline"
              >InDesign Scripts</a>
            </li>
            <li class="mt-4">
              <a
                href="https://torah.yiddishe-kop.com/"
                target="_blank"
                class="text-base leading-6 text-gray-500 hover:text-gray-100 hover:underline"
              >Torah</a>
            </li>
          </ul>
        </div>
        <div
          class="flex items-center justify-center mt-6 space-x-3 lg:mt-0 lg:justify-start xl:col-span-1"
        >
          <logo class="w-10" />
          <p class="mt-2 text-base leading-6 text-gray-500">
            Making the world a better place
            <br />by using the Yiddishe Kop.
          </p>
        </div>
      </div>
      <div class="pt-8 mt-12 border-t border-gray-700">
        <p class="text-xs leading-6 text-gray-400 xl:text-center">
          &copy; {{ new Date().getFullYear() }}
          <a
            href="https://yiddishe-kop.com/"
            target="_blank"
            class="hover:underline"
          >Yiddishe Kop</a>, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  name: "Footer",
  components: { Logo }
};
</script>

<style>
</style>
