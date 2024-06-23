<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    :class="activeModal ? '' : 'hidden'"
    class="fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
  >
    <div
      class="relative p-4 w-full max-h-full px-4 w-full max-w-2xl h-full md:h-auto border-slate-500"
    >
      <div class="relative bg-white rounded-2xl shadow-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  setModal: Function,
  activeModal: {
    type: Boolean,
    required: true,
  },
});
</script>
