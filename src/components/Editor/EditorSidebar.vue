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
        <button type="submit" class="btn btn-primary btn-block">Save</button>
      </div>
    </form>
  </aside>
</template>

<script>
import BaseFormInput from "@/components/Base/BaseFormInput.vue";
import Tab from "@/components/Editor/EditorSidebarTab.vue";
import EditorSidebarDesign from "@/components/Editor/EditorSidebarDesign.vue";
import EditorSidebarContent from "@/components/Editor/EditorSidebarContent.vue";

import { mapGetters } from "vuex";
import axios from "axios";
export default {
  emits: ["formSaved"],
  components: {
    BaseFormInput,
    Tab,
    EditorSidebarContent,
    EditorSidebarDesign,
  },
  data() {
    return {
      popupName: "",
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

      const myDataObj = {
        popupName: this.popupName,
        file: this.slugify(this.popupName),
      };
      // const formData = new FormData();

      // for (let key in myDataObj) {
      //   formData.append(key, myDataObj[key]);
      // }

      axios
        .post("/process-form.php", myDataObj, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          baseURL: "https://proj-021.azurewebsites.net",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
