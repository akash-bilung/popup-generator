<template>
  <main>
    <Wrapper />
    <TheSidebar />
  </main>
</template>
<script>
import TheSidebar from "@/components/Layout/TheSidebar.vue";
import Wrapper from "@/components/Base/BaseWrapper.vue";
export default {
  components: {
    TheSidebar,
    Wrapper,
  },
};
</script>
