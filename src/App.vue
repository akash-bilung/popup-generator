<template>
  <main>
    <TheSidebar />
    <router-view />
  </main>
</template>
<script>
import TheSidebar from "@/components/Layout/TheSidebar.vue";
export default {
  components: {
    TheSidebar,
  },
};
</script>
