<template>
  <main>
    <TheHeader />
    <router-view />
  </main>
</template>
<script>
import TheHeader from "@/components/Layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
