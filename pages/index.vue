<template>
  <div>
    <portal to="page-title">Home</portal>
    <section class="text-gray-700 body-font">
      <div class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >Knausgaard typewriter readymade marfa</h1>
          <p
            class="mt-4 mb-8 leading-relaxed"
          >Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
          <div class="flex justify-center w-full md:justify-start">
            <input
              class="w-2/4 px-4 mr-4 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-indigo-500 lg:w-full xl:w-1/2 md:w-full"
              placeholder="Placeholder"
              type="text"
            />
            <button
              class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >Button</button>
          </div>
          <p class="w-full mt-2 mb-8 text-xs text-gray-500">Neutra shabby chic ramps, viral fixie.</p>
          <div class="flex lg:flex-row md:flex-col">
            <button
              class="inline-flex items-center px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path
                  d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                />
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs text-gray-600">GET IT ON</span>
                <span class="font-medium title-font">Google Play</span>
              </span>
            </button>
            <button
              class="inline-flex items-center px-5 py-3 mt-0 ml-4 bg-gray-200 rounded-lg lg:ml-4 md:ml-0 md:mt-4 lg:mt-0 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path
                  d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                />
                <path
                  d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                />
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs text-gray-600">Download on the</span>
                <span class="font-medium title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="~/static/img/learn@0.5x.jpg"
          />
        </div>
      </div>
    </section>

    <div class="container px-5 py-24 mx-auto">
      <h2
        class="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >Weekly Programming Articles</h2>
      <p
        class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
      >Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
      <recent-articles :articles="pages" />
    </div>
  </div>
</template>

<script>
import RecentArticles from "~/components/RecentArticles";

export default {
  components: { RecentArticles },
  async asyncData({ $content }) {
    const pages = await $content("docs").fetch();

    return {
      pages
    };
  }
};
</script>
