<template>
  <div class="h-100 d-flex flex-column bg-light">
    <Header></Header>
    <router-view class="flex-grow-1 flex-grow-0 flex-basis-auto" />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  name: "Main",
  components: {
    Header,
    Footer
  }
};
</script>
