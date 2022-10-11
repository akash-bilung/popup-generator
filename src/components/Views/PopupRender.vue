<template>
  <div id="popup-viewport"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
      popupItems: "popup/getPopupOrder",
    }),
  },
  watch: {
    popupStyle: {
      // eslint-disable-next-line no-unused-vars
      handler(val) {
        this.renderPopup();
      },
      deep: true,
    },
    popupContent: {
      // eslint-disable-next-line no-unused-vars
      handler(val) {
        this.renderPopup();
      },
      deep: true,
    },
    popupItems: {
      // eslint-disable-next-line no-unused-vars
      handler(val) {
        this.renderPopup();
      },
      deep: true,
    },
  },
  mounted() {
    this.renderPopup();
  },
  methods: {
    renderPopup() {
      const container = document.querySelector("#popup-viewport");
      container.innerHTML = "";
      container.appendChild(this.generatePopup());
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
        {
          id: "pt-icons",
          item: () => {
            const container = createElement({
              elem: "DIV",
              className: "icons-top pt_popup_icons",
            });
            for (let i = 0; i < this.popupContent.stars; i++) {
              container.innerHTML += star;
            }
            return container;
          },
        },
        {
          id: "pt-heading",
          item: () => {
            return createElement({
              elem: "H2",
              className: "pt_popup_title",
              style: `color: ${this.popupStyle.content.heading}`,
              innerHTML: this.popupContent.heading,
            });
          },
        },
        {
          id: "pt-input",
          item: () => {
            return createElement({
              elem: "INPUT",
              type: "text",
              className: "pt_popup_input form-control",
              style: `
            background-color: ${this.popupStyle.form.input};
            color: ${this.popupStyle.form.inputText};
          `,
              placeholder: this.popupContent.emailPlaceholder,
            });
          },
        },
        {
          id: "pt-button",
          item: () => {
            return createElement({
              elem: "BUTTON",
              type: "submit",
              className: "pt_popup_input_submit",
              style: `background-color: ${this.popupStyle.form.btn};`,
              innerHTML: this.popupContent.btnText,
            });
          },
        },
        {
          id: "pt-footer",
          item: () => {
            return createElement({
              elem: "p",
              style: `color: ${this.popupStyle.content.text};`,
              innerHTML: this.popupContent.footerText,
            });
          },
        },
      ];

      // Popup Inner
      let popupContent = createElement({
        elem: "DIV",
        className: "pt_popup_content",
      });
      [...children]
        .map((t1) => ({
          ...t1,
          ...this.popupItems.find((t2) => t2.id === t1.id),
        }))
        .sort((a, b) => a.order - b.order)
        .forEach((e) => {
          popupContent.appendChild(e.item());
        });
      popup.appendChild(popupContent);
      return popup;
    },
  },
};
</script>

<style scoped>
#popup-viewport {
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
