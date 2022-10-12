<template>
  <aside class="app-sidebar">
    <a href="#" @click.prevent="toggleSidebar" class="app-sidebar-toggle">
      <i class="ti-menu"></i>
    </a>
    <router-link to="/" class="app-sidebar-logo">
      <img
        src="https://www.poptin.com/wp-content/uploads/2018/10/Purple-text-and-image-1.svg"
        alt=""
      />
    </router-link>
    <nav class="app-sidebar-nav">
      <router-link to="/popups">
        <i class="ti-files"></i> <span>Popups</span>
      </router-link>
      <router-link to="/popups/view">
        <i class="ti-eye"></i> <span>Rendered View</span>
      </router-link>
      <router-link to="/popups/create">
        <i class="ti-pencil-alt"></i> <span>Create</span>
      </router-link>
    </nav>
  </aside>
</template>
<script>
import { mapGetters } from "vuex";

export default {
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
