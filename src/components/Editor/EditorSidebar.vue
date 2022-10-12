<template>
  <aside class="sidebar">
    <Tab
      :tabs="['Popup Design', 'Popup Content']"
      @setActiveTab="setActiveTab"
      :activeTab="activeTab"
    />
    <form @submit.prevent="submitForm" class="sidebar-form" method="POST">
      <div class="sidebar-form-fieldset">
        <div class="sidebar-section">
          <BaseFormInput
            v-model="popupName"
            label="Popup Name"
            name="popup-name"
            id="popup-name"
            placeholder="Name of your Popup"
          />
        </div>
        <EditorSidebarDesign v-if="activeTab === 'popup-design'" />
        <EditorSidebarContent v-if="activeTab === 'popup-content'" />
      </div>

      <div class="sidebar-form-btn">
        <button type="submit" class="btn btn-primary btn-block">
          {{ isLoading ? "Please wait . . ." : "Save" }}
        </button>
      </div>
    </form>
  </aside>
</template>

<script>
// Components
import BaseFormInput from "@/components/Base/BaseFormInput.vue";
import Tab from "@/components/Editor/EditorSidebarTab.vue";
import EditorSidebarDesign from "@/components/Editor/EditorSidebarDesign.vue";
import EditorSidebarContent from "@/components/Editor/EditorSidebarContent.vue";

// Mixins
import popupGenerator from "@/mixins/popupGenerator.js";

// Getters
import { mapGetters } from "vuex";
export default {
  mixins: [popupGenerator],
  emits: ["formSaved"],
  components: {
    BaseFormInput,
    Tab,
    EditorSidebarContent,
    EditorSidebarDesign,
  },
  data() {
    return {
      isLoading: false,
      popupName: "",
      activeTab: "popup-design",
    };
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
      popupItems: "popup/getPopupOrder",
    }),
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async submitForm() {
      this.isLoading = true;
      this.$emit("formSaved");
      const { isSuccess } = await this.$store.dispatch("list/createItem", {
        Name: this.popupName,
        Slug: this.slugify(this.popupName),
        Code: this.generatePopup({
          popupStyle: this.popupStyle,
          popupContent: this.popupContent,
          popupItems: this.popupItems,
        })
          .init.toString()
          .replaceAll('"', "'"),
      });
      if (isSuccess) {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
