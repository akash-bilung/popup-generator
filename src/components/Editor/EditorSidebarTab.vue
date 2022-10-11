<template>
  <div class="sidebar-tab">
    <ul class="sidebar-tab-list">
      <li
        v-for="tab in tabsWithIds"
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
      >
        <a href="#" @click.prevent="setActiveTab(tab.id)">{{ tab.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["setActiveTab"],
  props: {
    activeTab: {
      type: String,
      required: true,
      default: "",
    },
    tabs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    tabsWithIds() {
      const vm = this;
      const arr = [];
      this.tabs.forEach((e) => {
        arr.push({ id: vm.slugify(e), title: e });
      });
      return arr;
    },
  },
  methods: {
    slugify(string) {
      return string.toLowerCase().replace(/ /g, "-");
    },
    setActiveTab(tab) {
      this.$emit("setActiveTab", tab);
    },
  },
};
</script>

<style></style>
