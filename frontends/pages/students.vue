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
                  >Mahasiswa</span
                >
              </div>
            </li>
          </ol>
        </nav>
        <h1 class="text-xl font-semibold text-red-700 sm:text-2xl">Daftar Mahasiswa</h1>
      </div>
      <div class="block items-center sm:flex md:divide-x md:divide-gray-100">
        <form class="mb-4 sm:pr-3 sm:mb-0" action="#" method="GET">
          <label for="products-search" class="sr-only">Pencarian</label>
          <div class="relative mt-1 max-sm:w-64 xl:w-80">
            <input
              type="search"
              name="email"
              id="products-search"
              class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="Pencarian mahasaiswa"
            />
          </div>
        </form>
        <div class="lg:flex items-center w-full sm:justify-end">
          <button
            type="button"
            @click="showModal(true)"
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
                Nama
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Email
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                NIM
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Jurusan
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Tahun Ajaran
              </th>
              <th scope="col" class="p-4 text-sm font-medium text-left uppercase lg:p-5">
                Role
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
                {{ b!.name }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.email }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.nim }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.major }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.student_year }}
              </td>
              <td
                className="p-4 text-sm space-x-2 whitespace-nowrap lg:p-5 cursor-pointer"
              >
                {{ b!.roles?.name }}
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
  <Modal :setModal="showModal" :activeModal="ismodal">
    <div class="flex bg-red-700 justify-between items-start p-5 rounded-t border-b">
      <h3 class="text-xl text-white font-semibold">Mahasiswa</h3>
      <button
        @click="clossModal"
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
              >Nama</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="text"
              v-model="vform!.name"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Email</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="email"
              v-model="vform!.email"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Password</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="password"
              v-model="vform!.password"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >NIM</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="text"
              v-model="vform!.nim"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Jurusan</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="text"
              v-model="vform!.major"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Angkatan</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              name="payment_in_terms"
              class="pl-0 mt-1 block text-sm w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              id="payment_in_terms"
              type="number"
              min="1"
              v-model="vform!.student_year"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-sm text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
              for="inline-full-name"
              >Role</label
            >
          </div>
          <div class="md:w-2/3">
            <select
              id="roles"
              @change="changeSelect"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Pilih Role</option>
              <template v-for="(b, index) in optroles" :key="index">
                <option :value="b.id" :selected="b.id === vform.role_id">
                  {{ b.name }}
                </option>
              </template>
            </select>
          </div>
        </div>
        <div class="p-6 rounded-b border-t border-gray-200 clear-both mb-5">
          <div class="float-end">
            <button
              type="button"
              @click="clossModal"
              class="me-2 py-2 px-2 text-xs font-medium text-center text-red-700 rounded-lg border border-red-700 hover:scale-[1.02]"
            >
              Batal
            </button>
            <button
              type="button"
              @click="submitForm"
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
definePageMeta({
  middleware: "auth",
});
import { ref } from "vue";
import { useStudentStore } from "~/store/students";
import { useRoleStore } from "~/store/roles";
const { $swal } = useNuxtApp();

interface StudentPayload {
  id: number | null;
  name: string;
  email: string;
  nim: string;
  major: string;
  student_year: number | null;
  password: string | null;
  role_id: number | null;
  created_at: string;
  updated_at: string;
  user_id: number | null;
  roles: any;
}
interface RolePayload {
  id: number;
  name: string;
}

const { fetchData } = useStudentStore();
const { fetchRoles } = useRoleStore();
const { insertData } = useStudentStore();
const { updateData } = useStudentStore();

const items = ref<StudentPayload[]>([]);
const page = ref(1);
const from = ref(0);
const total = ref(0);
const loading = ref(true);
const current_page = ref(1);
const search = ref("");
const vform = ref<StudentPayload | null>(null);
const ismodal = ref(false);
const optroles = ref<RolePayload[]>([]);
const actions = ref("");

const vdata = useStudentStore();
const vroles = useRoleStore();

onMounted(() => {
  fetchUser();
  getRoles();
});
const fetchUser = async () => {
  loading.value = true;
  await fetchData(current_page.value, search.value);
  items.value = vdata.items;
  from.value = vdata.form;
  total.value = vdata.total;
  loading.value = vdata.loading;
  ismodal.value = false;
};
const getRoles = async () => {
  await fetchRoles();
  optroles.value = vroles.roles;
};
const showModal = (val: boolean) => {
  vform.value = {
    id: null,
    name: "",
    email: "",
    nim: "",
    major: "",
    student_year: null,
    password: "",
    role_id: null,
    created_at: "",
    updated_at: "",
    user_id: null,
    roles: null,
  };
  actions.value = "create";
  ismodal.value = val;
};
const changeSelect = (e: any) => {
  vform.value!.role_id = e.target.value;
};
const showDetail = (obj: any) => {
  actions.value = "update";
  vform.value = obj;
  vform.value!.user_id = obj.id;
  vform.value!.password = "";
  ismodal.value = true;
};
const clossModal = () => {
  actions.value = "";
  ismodal.value = false;
};
const submitForm = async () => {
  loading.value = true;
  if (actions.value === "create") {
    await insertData(vform.value);
    if (vdata.success) {
      $swal.fire("Data berhasil disimpan!");
      fetchUser();
    } else {
      $swal.fire("Data tidak berhasil disimpan!");
    }
  } else if (actions.value === "update") {
    await updateData(vform.value);
    if (vdata.success) {
      fetchUser();
      $swal.fire("Data berhasil disimpan!");
    } else {
      $swal.fire("Data tidak berhasil disimpan!");
    }
  }
};
</script>
