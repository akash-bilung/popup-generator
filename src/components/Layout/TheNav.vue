<template>
  <nav class="app-sidebar-nav">
    <router-link :to="menu.path" v-for="menu in menus" :key="menu.path">
      <i :class="menu.icon"></i> <span>{{ menu.title }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Popups",
          icon: "ti-files",
          path: "/popups",
        },
        {
          title: "Rendered View",
          icon: "ti-eye",
          path: "/popups/view",
        },
        {
          title: "Create",
          icon: "ti-pencil-alt",
          path: "/popups/create",
        },
      ],
    };
  },
};
</script>

<style></style>
