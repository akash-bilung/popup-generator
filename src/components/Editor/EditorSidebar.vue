<template>
  <aside class="sidebar">
    <Tab
      :tabs="['Popup Design', 'Popup Content']"
      @setActiveTab="setActiveTab"
      :activeTab="activeTab"
    />

    <form @submit.prevent="generateForm">
      <EditorSidebarDesign v-if="activeTab === 'popup-design'" />
      <EditorSidebarContent v-if="activeTab === 'popup-content'" />

      <div class="p-2">
        <button type="submit" class="btn btn-primary">Save</button>
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
    generatePopup() {
      // Create a element with params
      function createElement(elementObj) {
        const { elem, className, style, innerHTML, placeholder, type } =
          elementObj;
        let element = document.createElement(elem);
        Object.assign(element, {
          className: className || "",
          style: style || "",
          innerHTML: innerHTML || "",
          placeholder: placeholder || "",
          type: type || "",
        });
        return element;
      }

      let star = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${this.popupStyle.content.stars}" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg>`;

      // Popup Wrapper
      let popup = createElement({
        elem: "DIV",
        className: "pt_popup",
        style: `background-color: ${this.popupStyle.body.bgColor}`,
      });
      const children = [
        createElement({
          elem: "DIV",
          className: "pt_popup_icons",
        }),
        createElement({
          elem: "H2",
          className: "pt_popup_title",
          style: `color: ${this.popupStyle.content.heading}`,
          innerHTML: this.popupContent.heading,
        }),
        createElement({
          elem: "INPUT",
          type: "text",
          className: "pt_popup_input form-control",
          style: `
            background-color: ${this.popupStyle.form.input};
            color: ${this.popupStyle.form.inputText};
          `,
          placeholder: this.popupContent.emailPlaceholder,
        }),
        createElement({
          elem: "BUTTON",
          type: "submit",
          className: "pt_popup_input_submit",
          style: `background-color: ${this.popupStyle.form.btn};`,
          innerHTML: this.popupContent.btnText,
        }),
        createElement({
          elem: "p",
          style: `color: ${this.popupStyle.content.text};`,
          innerHTML: this.popupContent.footerText,
        }),
      ];

      for (let i = 0; i < this.popupContent.stars; i++) {
        children[0].innerHTML += star;
      }

      // Popup Inner
      let popupContent = createElement({
        elem: "DIV",
        className: "pt_popup_content",
      });
      children.forEach((e) => {
        popupContent.appendChild(e);
      });
      popup.appendChild(popupContent);
      console.log(popup);
      document.querySelector(".sidebar").appendChild(popup);
    },
    generateForm() {
      this.generatePopup();
    },
  },
};
</script>

<style></style>
