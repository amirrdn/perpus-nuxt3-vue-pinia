<template>
  <div
    class="block justify-between items-center p-4 mx-4 mt-4 mb-6 bg-white rounded-2xl shadow-xl shadow-gray-200 lg:p-5 sm:flex"
  >
    <div class="mb-1 w-full p-4">
      <div class="mb-4">
        <nav class="flex mb-5" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a
                class="inline-flex items-center text-gray-700 hover:text-gray-900"
                href="/"
                ><svg
                  class="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path></svg
                >Beranda</a
              >
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg
                ><span
                  class="ml-1 text-sm font-medium text-gray-400 md:ml-2"
                  aria-current="page"
                  >Pinjaman</span
                >
              </div>
            </li>
          </ol>
        </nav>
        <h1 class="text-xl font-semibold text-red-700 sm:text-2xl">
          Daftar Pinjaman Buku
        </h1>
      </div>
    </div>
  </div>
  <div class="flex flex-col my-6 mx-4 rounded-2xl shadow-xl bg-white shadow-gray-200">
    <div class="overflow-x-auto">
      <div class="table-wrp block max-h-[480px] min-w-full align-middle">
        <table class="w-full divide-y divide-gray-200">
          <thead class="sticky top-0 bg-red-700 text-white z-10">
            <tr>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                No.
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Peminjam
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Tgl. Pinjaman
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Tgl. Selesai
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100" v-if="loading">
              <td>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                </div>
              </td>
              <td>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                </div>
              </td>
              <td>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                </div>
              </td>
              <td>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                </div>
              </td>
              <td>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                </div>
              </td>
            </tr>
            <tr
              class="hover:bg-gray-100"
              v-for="(b, index) in items"
              :key="index"
              v-if="!loading"
            >
              <td class="p-4 text-sm w-4 lg:p-5">{{ index + from }}</td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b.user!.name }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ moment(b.loan_date).format("DD MMM YYYY") }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ moment(b.return_date).format("DD MMM YYYY") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
import { ref } from "vue";
import { useTransactionStroe } from "~/store/transaction";
import moment from "moment";
const { $swal } = useNuxtApp();

interface transactionPayload {
  id: number;
  student_id: number;
  loan_date: string;
  return_date: string;
  details: any;
  user: any;
}
const tbb = useTransactionStroe();
const { getListData } = useTransactionStroe();

const items = ref<transactionPayload[]>([]);
const loading = ref(false);

const current_page = ref(1);
const from = ref(0);
const total = ref(0);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  loading.value = true;
  await getListData(current_page.value);
  const itemsv: transactionPayload[] = tbb.vdataitems;
  items.value = itemsv;
  from.value = tbb.form;
  total.value = tbb.total;
  loading.value = tbb.loading;
};
</script>
