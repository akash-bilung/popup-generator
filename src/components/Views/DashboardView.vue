<template>
  <main>
    <Wrapper>
      <template #header>
        <h2 class="text-black">Popups</h2>
        <router-link to="/popups/create" class="btn btn-black">
          Create New
        </router-link>
      </template>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>Share URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-if="newList.length">
            <tr v-for="popup in newList" :key="popup.Slug">
              <td>{{ popup.Name }}</td>
              <td>{{ popup.createdAt }}</td>
              <td>
                <input
                  type="text"
                  readonly
                  :value="popup.Url"
                  class="form-control"
                />
              </td>
              <td>
                <a
                  href="#"
                  class="clipboard"
                  @click.prevent="copy(popup.Url, $event)"
                >
                  <i class="ti-clipboard"></i>
                  <span>Copy to clipboard</span>
                </a>
              </td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="4">
              <div class="p-2 text-center">
                Currently you don't have any popups.
                <router-link
                  class="text-primary text-underline"
                  to="/popups/create"
                  >Click here</router-link
                >
                to create one.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  </main>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
import Wrapper from "@/components/Base/BaseWrapper.vue";
export default {
  components: {
    Wrapper,
  },
  mounted() {
    this.$store.dispatch("list/fetchItems");
  },
  methods: {
    copy(url, e) {
      const copiedText = "Copied to clipboard";
      const copyText = "Copy to clipboard";
      if (e.target.nodeName === "I") {
        e.target.nextSibling.innerHTML = copiedText;
        setTimeout(() => {
          e.target.nextSibling.innerHTML = copyText;
        }, 1000);
      }
      if (e.target.nodeName === "A") {
        e.target.querySelector("span").innerHTML = copiedText;
        setTimeout(() => {
          e.target.querySelector("span").innerHTML = copyText;
        }, 1000);
      }
      navigator.clipboard.writeText(url);
    },
  },
  computed: {
    ...mapGetters({
      listPopups: "list/getItems",
    }),
    newList() {
      return this.listPopups.map((e) => {
        const { Name, Slug, createdAt } = (e || {}).attributes || {};
        return {
          Name,
          Slug,
          createdAt: moment(createdAt).format("MMM Do YYYY, h:mm a"),
          Url: `https://proj-021.azurewebsites.net/${Slug}.js`,
        };
      });
    },
  },
};
</script>
