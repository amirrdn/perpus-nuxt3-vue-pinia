<template>
  <aside
    id="default-sidebar"
    class="fixed top-12 left-0 bg-white z-40 w-64 h-screen max-sm:min-h-max pe-3 shadow-xl duration-300 ease-in-out transition-transform -translate-x-full sm:translate-x-0 border-2"
    aria-label="Sidebar"
    v-if="authenticated && users"
  >
    <div class="flex items-center space-x-4 p-4">
      <img
        class="w-20 h-20 rounded-full"
        src="http://back-end.e-procurement.abdi.co.id/storage/files/2024/06/05/Admin-16-52-53.png"
        alt="James Bhatta"
      />
      <div>
        <h4
          class="font-semibold text-sm text-gray-700 capitalize font-poppins tracking-wide"
        >
          {{ users!.name }}
        </h4>
        <span class="text-sm tracking-wide flex items-center space-x-1">
          <span class="text-gray-600 text-xs mt-1">{{ users!.roles!.name }}</span>
        </span>
      </div>
    </div>
    <div class="divide-y dark:divide-gray-300 pl-4 mt-2">
      <ul class="pt-2 pb-4 space-y-1 text-sm">
        <li class="bg-red-700 text-white hover:bg-red-200">
          <nuxt-link
            rel="noopener noreferrer"
            to="/"
            class="flex items-center py-2 px-1 space-x-3 rounded-md"
            ><svg
              width="161px"
              class="w-6 h-6 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                  stroke="#ffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                  stroke="#ffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                  stroke="#ffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                  stroke="#ffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g></svg
            ><span>Dashboard</span></nuxt-link
          >
        </li>
        <li class="hover:bg-red-200" v-if="users!.roles!.id === 1">
          <nuxt-link
            rel="noopener noreferrer"
            class="flex items-center py-2 px-1 space-x-3 rounded-md"
            to="/books"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              ></path></svg
            ><span>Buku</span></nuxt-link
          >
        </li>
        <li class="z-20" v-if="users!.roles!.id === 1">
          <nuxt-link
            rel="noopener noreferrer"
            class="flex items-center py-2 px-1 space-x-3 rounded-md"
            to="/students"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              ></path></svg
            ><span>Mahasiswa</span></nuxt-link
          >
        </li>
        <li class="z-20">
          <nuxt-link
            rel="noopener noreferrer"
            class="flex items-center py-2 px-1 space-x-3 rounded-md"
            to="/book"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              ></path></svg
            ><span>Daftar Buku</span></nuxt-link
          >
        </li>
        <li class="z-20">
          <nuxt-link
            rel="noopener noreferrer"
            class="flex items-center py-2 px-1 space-x-3 rounded-md"
            to="/transaction"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              ></path></svg
            ><span>Pinjaman</span></nuxt-link
          >
        </li>
      </ul>
      <ul class="fixed bottom-20 pt-4 pb-2 w-[88%] space-y-1 text-sm z-1">
        <li class="hover:bg-red-200 cursor-pointer">
          <button class="flex items-center p-2 space-x-3 rounded-md" @click="logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-gray-600"
            >
              <path
                d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"
              ></path>
              <rect width="32" height="64" x="256" y="232"></rect></svg
            ><span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script lang="ts" setup>
interface Vusers {
  created_at: string;
  email: string;
  name: string;
  roles: Vroles | null;
}
interface Vroles {
  id: number;
  name: string;
}

import { useAuthStore } from "~/store/auth";
import { useCartStore } from "~/store/cart";

const router = useRouter();
const { logUserOut } = useAuthStore();
const cartStore = useCartStore();

definePageMeta({
  middleware: "auth",
});
const { authenticated } = storeToRefs(useAuthStore());
const { users } = storeToRefs(useAuthStore());

const logout = () => {
  cartStore.removeAll();
  logUserOut();
  router.push("/login");
};
</script>
