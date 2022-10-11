<template>
  <TheSidebar />
  <router-view />
</template>
<script>
import TheSidebar from "@/components/Layout/TheSidebar.vue";
export default {
  components: {
    TheSidebar,
  },
};
</script>
