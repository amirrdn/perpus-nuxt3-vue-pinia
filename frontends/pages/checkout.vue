<template>
  <div class="flex flex-col my-6 mx-4 rounded-2xl shadow-xl bg-white shadow-gray-200">
    <div class="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
      <div
        class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:sticky sm:top-0 lg:min-w-[370px] max-sm:min-w-[300px]"
      >
        <div class="relative h-full">
          <div class="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
            <div class="space-y-4">
              <div
                class="flex items-start gap-4"
                v-for="(b, index) in cartStore.cart"
                :key="index"
              >
                <div
                  class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md"
                >
                  <img :src="b.cover_image" class="w-full object-contain" />
                </div>
                <div class="w-full">
                  <h3 class="text-base text-white">{{ b.name }}</h3>
                  <ul class="text-xs text-gray-300 space-y-2 mt-2">
                    <li class="flex flex-wrap gap-4">
                      Quantity <span class="ml-auto">{{ b.qty }}</span>
                    </li>
                    <li class="flex flex-wrap gap-4">
                      Total Price
                      <span class="ml-auto">Rp. {{ formatPrice(b.price) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
            <h4 class="flex flex-wrap gap-4 text-base text-white">
              Total <span class="ml-auto">Rp. {{ formatPrice(totalprice) }}</span>
            </h4>
          </div>
        </div>
      </div>

      <div class="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
        <h2 class="text-2xl font-bold text-gray-800">Complete your order</h2>
        <form class="mt-8">
          <div>
            <h3 class="text-base text-gray-800 mb-4">Personal Details</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  v-model="users!.name"
                  class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  disabled
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  v-model="users!.email"
                  class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  disabled
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="NIM"
                  v-model="users!.roles!.name"
                  class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="flex gap-4 max-md:flex-col mt-8">
              <button
                type="button"
                class="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
              >
                Cancel
              </button>
              <button
                type="button"
                @click="submitForm"
                class="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from "~/store/cart";
import { useAuthStore } from "~/store/auth";
import { useTransactionStroe } from "~/store/transaction";
import moment from "moment";
const { $swal } = useNuxtApp();

definePageMeta({
  middleware: "auth",
});

const cartStore = useCartStore();
const { users } = storeToRefs(useAuthStore());
const { insertData } = useTransactionStroe();
const tb = useTransactionStroe();
const loading = ref(false);

const totalprice = computed(() => {
  return cartStore.cart.reduce((total, v) => total + v.price, 0);
});
const formatPrice = (value: number) => {
  if (isNaN(value)) {
    return 0;
  }
  const val = (value / 1).toFixed(2).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const submitForm = async () => {
  loading.value = true;
  const currentDate = moment();
  const futureDate = currentDate.add(14, "days");

  const vdata = {
    student_id: cartStore.cart[0].user_id,
    loan_date: moment().format("YYYY-MM-DD"),
    return_date: futureDate.format("YYYY-MM-DD"),
    transaction_detail: cartStore.cart,
  };
  await insertData(vdata);
  if (tb.success) {
    $swal.fire("Data berhasil disimpan!");
    cartStore.removeAll();
  } else {
    $swal.fire("Data tidak dapat disimpan!");
  }
  loading.value = tb.loading;
};
</script>
