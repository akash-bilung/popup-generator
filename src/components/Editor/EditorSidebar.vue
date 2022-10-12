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
import popupGenerator from "@/mixins/popupGenerator.js";

import { mapGetters } from "vuex";
import axios from "axios";
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
      this.$emit("formSaved");
      const data = {
        popupStyle: this.popupStyle,
        popupContent: this.popupContent,
        popupItems: this.popupItems,
      };

      const myDataObj = {
        Name: this.popupName,
        Slug: this.slugify(this.popupName),
        Style: this.popupStyle,
        Content: this.popupContent,
        Order: this.popupItems,
        Code: this.generatePopup(data).init.toString().replaceAll('"', "'"),
      };
      myDataObj.Code = `(function(){
        let e = ${JSON.stringify(data)}
        ${myDataObj.Code.replace(
          "function(){const",
          "function initFunc(){const"
        )}
        initFunc()
      })();`;

      try {
        const { data } = await axios.post(
          "https://starfish-app-juzm3.ondigitalocean.app/api/popups",
          {
            data: myDataObj,
          }
        );
        const { Code: snippet, Slug: fileTitle } =
          ((data || {}).data || {}).attributes || {};

        // const formData = new FormData();
        // for (let key in myDataObj) {
        //   formData.append(key, myDataObj[key]);
        // }

        const res = await axios.post(
          "/process-form.php",
          { snippet, fileTitle: `${fileTitle}.js`, popupName: this.popupName },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            baseURL: "https://proj-021.azurewebsites.net",
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
