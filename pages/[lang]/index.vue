<template>
  <div>
    <Index />
  </div>
</template>
<script setup>
const Index = defineAsyncComponent(() => import("./[slug].vue"));
definePageMeta({
  middleware: ["lang", "global", "cleanup"],
  layout: false,
});
</script>
