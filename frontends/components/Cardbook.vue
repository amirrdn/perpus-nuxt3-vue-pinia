<template>
  <div class="grid gap-4 max-sm:grid-cols-2 grid-cols-2">
    <nuxt-link
      :to="'/transaction/' + b.id"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      v-for="(b, index) in booksarr"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        :src="b.cover_image"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ b.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ truncateText(b!.description, 150) }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rp. {{ formatPrice(b.inventories[0]!.price) }}
        </p>
      </div>
    </nuxt-link>
  </div>
  <div
    class="p-4 my-4 mx-4 bg-white rounded-2xl shadow-xl shadow-gray-200 max-sm:flex max-sm:justify-between overflow-x-auto"
  >
    <div class="flex justify-between items-center gap-4">
      <Paginate
        :totalItems="total"
        :itemsPerPage="5"
        :currentPage="current_page"
        @page-change="handlePageChange"
        class="mt-4"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface BooksPayload {
  id: number;
  title: string;
  creator: string;
  publisher: string;
  publication_year: string;
  cover_image: string;
  description: string;
  created_at: string;
  updated_at: string;
  book_id: number;
  inventories: any;
}
interface InventoryPayload {
  id: number;
  book_id: number;
  qty: number;
  price: number;
  title: string;
}
definePageMeta({
  middleware: "auth",
});
import { useBookStore } from "~/store/book";
const { getAllbooks } = useBookStore();
const booksarr = ref<BooksPayload[]>([]);
const loading = ref(false);
const current_page = ref(1);
const search = ref("");
const from = ref(0);
const total = ref(0);

onMounted(() => {
  fetchData();
});
const tb = useBookStore();

const fetchData = async () => {
  loading.value = true;
  await getAllbooks(current_page.value, search.value);
  const items: BooksPayload[] = tb.items;
  booksarr.value = items;
  from.value = tb.form;
  total.value = tb.total;
  loading.value = tb.loading;
};
const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
};
const formatPrice = (value: number) => {
  if (isNaN(value)) {
    return 0;
  }
  const val = (value / 1).toFixed(2).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const handlePageChange = (page: number) => {
  current_page.value = page;
  fetchData();
};
</script>
