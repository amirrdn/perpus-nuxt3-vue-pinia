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
                  >Buku</span
                >
              </div>
            </li>
          </ol>
        </nav>
        <h1 class="text-xl font-semibold text-red-700 sm:text-2xl">
          Daftar Pustaka Buku
        </h1>
      </div>
      <div class="block items-center sm:flex md:divide-x md:divide-gray-100">
        <form class="mb-4 sm:pr-3 sm:mb-0" action="#" method="GET">
          <label for="products-search" class="sr-only">Pencarian</label>
          <div class="relative mt-1 max-sm:w-64 xl:w-80">
            <input
              type="search"
              @input="getSearch"
              @keyup="getSearch"
              name="email"
              id="products-search"
              class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="Pencarian pengadaan barang / jasa"
            />
          </div>
        </form>
        <div class="lg:flex items-center w-full sm:justify-end">
          <button
            type="button"
            @click="addNewdata"
            class="py-2 px-3 text-sm font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
          >
            Tambah
          </button>
        </div>
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
                Judul
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Pengarang
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Penerbit
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Tahun Penerbit
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Stok
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Keterangan
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
              v-for="(b, index) in booksarr"
              :key="index"
              v-if="!loading"
            >
              <td class="p-4 text-sm w-4 lg:p-5">{{ index + from }}</td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.title }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.creator }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.publisher }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.publication_year }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                <span class="float-left">{{ b!.inventories[0]?.qty }}</span>
                <svg
                  class="relative left-2 w-5 h-5"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  @click="(inventory = b.inventories[0], inventory!.title = b.title, inventory!.book_id = b.id), inventoryShow(true)"
                  v-if="b.inventories.length > 0"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      stroke="#1616d0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M22 3h7v7M27.5 4.5L20 12M17 5H8a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-9"
                    ></path>
                  </g>
                </svg>
                <button
                  type="button"
                  @click="addStock(b)"
                  class="float-left text-red-700 hover:text-white border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 text-base font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-medium rounded-lg text-sm"
                  v-else
                >
                  Tambah Stok
                </button>
              </td>
              <td className="p-4 text-sm space-x-2 whitespace-wrap lg:p-5 cursor-pointer">
                {{ truncateText(b!.description, 150) }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                <button
                  type="button"
                  @click="showDetail(b)"
                  class="float-left text-red-700 hover:text-white border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 text-base font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-medium rounded-lg text-sm"
                >
                  Detail
                </button>
                <button
                  type="button"
                  @click="deleteBook([b.id])"
                  class="float-left text-red-700 hover:text-white border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 text-base font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-medium rounded-lg text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div
    class="p-4 my-4 mx-4 bg-white rounded-2xl shadow-xl shadow-gray-200 max-sm:flex max-sm:justify-between overflow-x-auto"
  >
    <div class="flex justify-between items-center gap-4">
      <Paginate
        :totalItems="total"
        :itemsPerPage="per_page"
        :currentPage="current_page"
        @page-change="handlePageChange"
        class="mt-4"
      />
    </div>
  </div>
  <div
    tabindex="-1"
    aria-hidden="true"
    :class="ismodal ? '' : 'hidden'"
    class="fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
  >
    <div
      class="relative p-4 w-full max-h-full px-4 w-full max-w-2xl h-full md:h-auto border-slate-500"
    >
      <div class="relative bg-white rounded-2xl shadow-lg">
        <div class="flex bg-red-700 justify-between items-start p-5 rounded-t border-b">
          <h3 class="text-xl text-white font-semibold">Tambah Barang</h3>
          <button
            @click="ismodal = false"
            class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form class="p-6 space-y-6" v-if="vform">
          <div class="relative top-5 mb-5">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Judul Buku</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  name="payment_in_terms"
                  class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="payment_in_terms"
                  type="text"
                  v-model="vform!.title"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Pengarang</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  name="payment_in_terms"
                  class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="payment_in_terms"
                  type="text"
                  v-model="vform!.creator"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Penerbit</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  name="payment_in_terms"
                  class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="payment_in_terms"
                  type="text"
                  v-model="vform!.publisher"
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Tahun Terbit</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  name="payment_in_terms"
                  class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="payment_in_terms"
                  type="number"
                  min="1"
                  v-model="vform!.publication_year"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Keterangan</label
                >
              </div>
              <div class="md:w-2/3">
                <textarea
                  name="payment_in_terms"
                  class="pl-0 mt-1 block text-sm w-full h-32 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="payment_in_terms"
                  type="text"
                  v-model="vform!.description"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Cover Image</label
                >
              </div>
              <div class="md:w-2/3">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    v-on:change="onFileChange"
                    class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3 file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none"
                    type="file"
                    id="formFile"
                  />
                </div>
                <img :src="vform!.cover_image" class="w-[20%]" />
              </div>
            </div>
            <div class="p-6 rounded-b border-t border-gray-200 clear-both mb-5">
              <div class="float-end">
                <button
                  type="button"
                  @click="closeModal"
                  class="me-2 py-2 px-2 text-xs font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
                >
                  Batal
                </button>
                <button
                  type="button"
                  @click="saveOrUpdate"
                  class="me-2 py-2 px-2 text-xs font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Modal :setModal="inventoryShow" :activeModal="showInventory">
    <div class="flex bg-red-700 justify-between items-start p-5 rounded-t border-b">
      <h3 class="text-xl text-white font-semibold">Inventory</h3>
      <button
        @click="inventoryShow(false)"
        class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <form class="p-6 space-y-6" v-if="inventory">
      <div class="relative top-5 mb-5">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Judul Buku</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="text"
              v-model="inventory!.title"
              disabled
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Stok</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="number"
              min="1"
              v-model="inventory!.qty"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Harga</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="number"
              min="1"
              v-model="inventory!.price"
            />
          </div>
        </div>
        <div class="p-6 rounded-b border-t border-gray-200 clear-both mb-5">
          <div class="float-end">
            <button
              type="button"
              @click="inventoryShow(false)"
              class="me-2 py-2 px-2 text-xs font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
            >
              Batal
            </button>
            <button
              type="button"
              @click="submitInventories"
              class="me-2 py-2 px-2 text-xs font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </form>
  </Modal>
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
import { ref } from "vue";
import { useBookStore } from "~/store/book";
import { useInventoryStore } from "~/store/inventory";
const { $swal } = useNuxtApp();

const { getAllbooks } = useBookStore();
const { SaveBooks } = useBookStore();
const { insertBooks } = useBookStore();
const { DeleteBooks } = useBookStore();

const { insertInventories } = useInventoryStore();

const booksarr = ref<BooksPayload[]>([]);
const page = ref(1);
const from = ref(0);
const total = ref(0);
const loading = ref(true);
const ismodal = ref(false);
const vform = ref<BooksPayload | null>(null);
const actions = ref("");
const search = ref("");
const current_page = ref(1);
const per_page = ref(5);
const inventory = ref<InventoryPayload | null>(null);
const showInventory = ref(false);
const bookid = ref(0);

onMounted(() => {
  fetchData();
});
const tb = useBookStore();
const vinventories = useInventoryStore();

const fetchData = async () => {
  loading.value = true;
  const databook = await getAllbooks(current_page.value, search.value);
  const items: BooksPayload[] = tb.items;
  booksarr.value = items;
  from.value = tb.form;
  total.value = tb.total;
  loading.value = tb.loading;
};
const addNewdata = () => {
  actions.value = "create";
  vform.value = {
    id: 0,
    title: "",
    creator: "",
    publisher: "",
    publication_year: "",
    cover_image: "",
    description: "",
    created_at: "",
    updated_at: "",
    book_id: 0,
    inventories: null,
  };
  ismodal.value = true;
};
const showDetail = (data: BooksPayload) => {
  actions.value = "update";
  ismodal.value = true;
  vform.value = data;
  vform.value.book_id = data.id;
};
const closeModal = () => {
  actions.value = "";
  vform.value = null;
  ismodal.value = false;
};
const saveOrUpdate = async () => {
  if (actions.value === "update") {
    await SaveBooks(vform.value);
  } else {
    await insertBooks(vform.value);
  }
  actions.value = "";
  ismodal.value = false;
  fetchData();
};

const getSearch = (e: any) => {
  search.value = e.target.value;
  loading.value = true;
  fetchData();
};
const onFileChange = (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files[0]);
};
const createImage = (file: Blob) => {
  let reader = new FileReader();
  let vm = this;
  reader.onload = (e) => {
    vform.value!.cover_image = e.target!.result!.toString();
  };
  reader.readAsDataURL(file);
};
const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
};
const handlePageChange = (page: number) => {
  current_page.value = page;
  fetchData();
};
const deleteBook = async (ids: any) => {
  $swal
    .fire({
      title: "Anda yakin ingin menghapus data ini?",
      input: "text",
      text: "Confirm: delete",
      icon: "info",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't save`,
    })
    .then(async (result) => {
      if (result.isConfirmed && result.value === "delete") {
        await DeleteBooks(ids);
        fetchData();
        $swal.fire("File berhasil dihapus!", "", "success");
      } else if (result.value === "") {
        $swal.fire("Keterangan tidak boleh kosong!");
      } else if (result.value !== "delete") {
        $swal.fire("Keterangan tidak sama!");
      } else if (result.isDenied) {
        $swal.fire("Changes are not saved", "", "info");
      }
    });
};
const inventoryShow = (val: boolean) => {
  showInventory.value = val;
};
const addStock = (obj: any) => {
  inventory.value = {
    book_id: obj.id,
    qty: 0,
    price: 0,
    title: obj.title,
    id: 0,
  };
  showInventory.value = true;
};
const submitInventories = async () => {
  if (inventory.value!.qty === null || inventory.value!.qty === 0) {
    $swal.fire("Stok tidak boleh kosong!");
    return false;
  }
  if (inventory.value!.price === null || inventory.value!.price === 0) {
    $swal.fire("Harga tidak boleh kosong!");
    return false;
  }
  await insertInventories(inventory.value);
  if (vinventories.success) {
    $swal.fire("Data berhasil disimpan!");
    showInventory.value = false;
    fetchData();
  }
};
definePageMeta({
  middleware: "auth",
});
</script>
