<template>
  <aside class="sidebar">
    <Tab
      :tabs="['Popup Design', 'Popup Content']"
      @setActiveTab="setActiveTab"
      :activeTab="activeTab"
    />

    <form @submit.prevent="submitForm" class="sidebar-form">
      <div class="sidebar-form-fieldset">
        <EditorSidebarDesign v-if="activeTab === 'popup-design'" />
        <EditorSidebarContent v-if="activeTab === 'popup-content'" />
      </div>

      <div class="sidebar-form-btn">
        <button type="submit" class="btn btn-primary btn-block">Save</button>
      </div>
    </form>
  </aside>
</template>

<script>
import Tab from "@/components/Editor/EditorSidebarTab.vue";
import EditorSidebarDesign from "@/components/Editor/EditorSidebarDesign.vue";
import EditorSidebarContent from "@/components/Editor/EditorSidebarContent.vue";

import { mapGetters } from "vuex";

export default {
  emits: ["formSaved"],
  components: {
    Tab,
    EditorSidebarContent,
    EditorSidebarDesign,
  },
  data() {
    return {
      activeTab: "popup-design",
    };
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
    }),
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    submitForm() {
      this.$emit("formSaved");
    },
  },
};
</script>

<style></style>
