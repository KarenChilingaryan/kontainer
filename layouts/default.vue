<template>
  <div class="default">
    <OffcanvasMenu />
    <nuxt />
    <div class="page-leave-overlay" />
    <FooterComponent />
    <BookDemoModal />
  </div>
</template>

<script>
const OffcanvasMenu = defineAsyncComponent(() =>
  import("~/components/molecules/offcanvas/index.vue")
);
const BookDemoModal = defineAsyncComponent(() =>
  import("~/components/molecules/book-demo/index.vue")
);
const FooterComponent = defineAsyncComponent(() =>
  import("~/components/organisms/footer/index.vue")
);

export default {
  components: {
    OffcanvasMenu,
    BookDemoModal,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
.default {
  //overflow: hidden;
}
</style>
