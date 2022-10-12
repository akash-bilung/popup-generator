<template>
  <aside class="app-sidebar">
    <!-- Sidebar Toggle -->
    <a href="#" @click.prevent="toggleSidebar" class="app-sidebar-toggle">
      <i class="ti-menu"></i>
    </a>
    <!-- Sidebar Logo -->
    <TheLogo />
    <!-- Sidebar Navigation -->
    <TheNav />
  </aside>
</template>
<script>
import TheNav from "@/components/Layout/TheNav.vue";
import TheLogo from "@/components/Layout/TheLogo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheNav,
    TheLogo,
  },
  data() {
    return {
      isCollapased: false,
    };
  },
  computed: {
    ...mapGetters({
      sidebarState: "getSidebarState",
    }),
  },
  methods: {
    toggleSidebar() {
      this.isCollapased = !this.isCollapased;
      this.$store.dispatch("setSidebarState", this.isCollapased);
      document.body.classList.toggle("menu-open");
    },
  },
};
</script>
