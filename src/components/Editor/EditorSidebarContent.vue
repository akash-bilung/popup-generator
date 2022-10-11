<template>
  <div class="sidebar-section">
    <p class="sidebar-section-title">Popup</p>
    <BaseFormInput
      class="mb-2"
      v-model="popupContent.heading"
      label="Heading"
      id="popup-heading"
    />
    <BaseFormInput
      v-model="popupContent.footerText"
      label="Footer Text"
      id="popup-footer-text"
    />
    <BaseFormInput
      type="number"
      v-model="popupContent.stars"
      label="Stars"
      id="popup-stars"
    />
  </div>
  <div class="sidebar-section">
    <p class="sidebar-section-title">Form Fields</p>
    <BaseFormInput
      class="mb-2"
      v-model="popupContent.emailPlaceholder"
      label="Email Placeholder"
      id="popup-email-placeholder"
    />
    <BaseFormInput
      v-model="popupContent.btnText"
      label="Button Text"
      id="popup-btn-text"
    />
  </div>
</template>

<script>
import BaseFormInput from "@/components/Base/BaseFormInput.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    BaseFormInput,
  },
  computed: {
    ...mapGetters({
      popupContent: "popup/getPopupContent",
    }),
  },
  methods: {},
};
</script>

<style></style>
