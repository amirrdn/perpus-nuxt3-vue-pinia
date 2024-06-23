<template>
  <div class="flex flex-col h-screen my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
    <div class="table-wrp block max-h-[480px] min-w-full align-middle">
      <Cardbook />
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>
