<template>
  <div class="app-wrapper">
    <div class="container">
      <div class="app-card">
        <div class="app-card-title">
          <h2 class="text-black">Popups</h2>
          <router-link to="/popups/create" class="btn btn-black">
            Create New
          </router-link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created At</th>
              <th>Share URL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="popup in newList" :key="popup.Slug">
              <td>{{ popup.Name }}</td>
              <td>{{ popup.createdAt }}</td>
              <td>
                <a
                  :href="`https://proj-021.azurewebsites.net/${popup.Slug}.js`"
                  download
                  class="btn btn-primary"
                >
                  Download snippet
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("list/fetchItems");
  },
  computed: {
    ...mapGetters({
      listPopups: "list/getItems",
    }),
    newList() {
      return this.listPopups.map((e) => {
        const { Name, Slug, createdAt } = (e || {}).attributes || {};
        return { Name, Slug, createdAt };
      });
    },
  },
};
</script>

<style></style>
