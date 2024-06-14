<script setup>
import { useNewsStore } from "~/stores/news";

definePageMeta({
  layout: "default",
});
const newsStore = useNewsStore();
const currentPage = ref(1);

const totalPages = ref(17);


// onMounted(async() => {
//   newsStore.fetchNewsData();
// });

onServerPrefetch(async () => {
  await newsStore.fetchNewsData();
});

const showBody = ref({});

function toggleBody(id) {
  showBody.value[id] = !showBody.value[id];
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}

function formatMonth(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return monthNames[date.getMonth()];
}
</script>

<template>
  <div class="mx-auto w-1/2 mt-12">
    <div>
      <div v-for="item in newsStore.newsItems" :key="item.id">
        <div class="relative">
          <img
            :src="`/_nuxt/assets/img/${item.image_url}`"
            class="w-full h-80 mt-2"
            :alt="item.title"
            style="object-fit: cover"
          />
          <div
            class="ml-4 absolute top-64 bottom-0 left-0 w-32 h-24 bg-cover bg-center transform flex flex-col items-center justify-center text-white"
            style="background-image: url('/_nuxt/assets/img/date-bg.png')"
          >
            <span class="text-3xl font-semibold">{{
              formatDate(item.created_at)
            }}</span>
            <span class="text-xl">{{ formatMonth(item.created_at) }}</span>
          </div>
        </div>

        <div class="h-12 flex flex-row justify-end items-end p-2">
          <a href="/" class="text-gray-800 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              class="mr-2"
            >
              <path
                fill="currentColor"
                d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"
              />
            </svg>
            SHARE
          </a>
        </div>
        <hr />

        <p class="text-red-600">{{ item.author }}</p>
        <h3 class="text-4xl text-gray-800 font-bold mb-4">{{ item.title }}</h3>
        <p
          class="font-bold text-gray-800 text-sm underline cursor-pointer"
          @click="toggleBody(item.id)"
        >
          Read Article
        </p>
        <p class="text-sm" v-if="showBody[item.id]">{{ item.body }}</p>
      </div>
      <div class="mt-4 pagination space-x-1 text-xs flex flex-wrap items-center">
        <button
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
          class="p-2 bg-white border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              d="m15 6l-6 6l6 6"
            />
          </svg>
        </button>
        <span
          class="page-number p-2 bg-white border-2"
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
          >{{ page }}</span
        >
        <button
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
          class="p-2 bg-white border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
