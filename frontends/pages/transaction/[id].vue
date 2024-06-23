<template>
  <div class="flex flex-col my-6 mx-4 rounded-2xl shadow-xl bg-white shadow-gray-200">
    <div class="table-wrp block max-h-[480px] min-w-full align-middle" v-if="items">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="items.cover_image"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {{ items.publisher }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ items.title }}
          </h1>
          <div class="flex mb-4"></div>
          <p class="leading-relaxed">
            {{ items.description }}
          </p>

          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">
              Rp. {{ formatPrice(items.inventories[0]!.price) }}
            </span>
            <button
              @click="addToCart()"
              class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
              Button
            </button>
            <button
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useBookStore } from "~/store/book";
import { useCartStore } from "~/store/cart";
import { useAuthStore } from "~/store/auth";
// import { useCookie } from "#app";
// import type { Product } from "~/types/product";

definePageMeta({
  middleware: "auth",
});
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

const route = useRoute();
const { getDetailbook } = useBookStore();
const cartStore = useCartStore();
const { users } = storeToRefs(useAuthStore());

const itemId = ref(route.params.id);
const items = ref<BooksPayload | null>(null);
const loading = ref(false);
const numbers = ref([]);
const totalpurch = ref(0);

onMounted(() => {
  fetchData();
});
const tb = useBookStore();

const fetchData = async () => {
  loading.value = true;
  await getDetailbook(Number(itemId.value));
  const item: BooksPayload | null = JSON.parse(JSON.stringify(tb.items));
  items.value = item;
  loading.value = tb.loading;
};
const formatPrice = (value: number) => {
  if (isNaN(value)) {
    return 0;
  }
  const val = (value / 1).toFixed(2).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const setQty = (e: any) => {
  totalpurch.value = e.target.value;
};
const addToCart = () => {
  const product = {
    name: items.value!.title,
    price: items.value!.inventories[0].price,
    qty: totalpurch.value,
    book_id: items.value!.id,
    user_id: users.value!.id,
    cover_image: items.value!.cover_image,
  };
  cartStore.addProductToCart(product);
};
</script>
