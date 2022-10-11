<template>
  <!-- Layout Styling -->
  <div class="sidebar-section">
    <p class="sidebar-section-title">Layout</p>
    <BaseColorPicker
      v-model="popupStyle.canvas.bgColor"
      id="canvas-background"
    />
  </div>
  <!-- Popup Styling -->
  <div class="sidebar-section">
    <p class="sidebar-section-title">Popup</p>
    <BaseColorPicker v-model="popupStyle.body.bgColor" id="body-background" />
  </div>
  <!-- Form Element Styling -->
  <div class="sidebar-section">
    <p class="sidebar-section-title">Form</p>
    <div class="row">
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.form.input"
          label="Input Field Background"
          id="form-input-background"
        />
      </div>
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.form.inputText"
          label="Input Field Color"
          id="form-input-border"
        />
      </div>
    </div>
  </div>
  <!-- Call To Actions Styling -->
  <div class="sidebar-section">
    <p class="sidebar-section-title">Call To Actions</p>
    <div class="row">
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.form.btn"
          label="Buttons"
          id="form-btn-background"
        />
      </div>
    </div>
  </div>
  <!-- Content Styling -->
  <div class="sidebar-section">
    <p class="sidebar-section-title">Content Style</p>
    <div class="row mb-1">
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.content.heading"
          label="Heading"
          id="heading-color"
        />
      </div>
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.content.text"
          label="Text"
          id="text-color"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <BaseColorPicker
          v-model="popupStyle.content.stars"
          label="Stars"
          id="stars-color"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseColorPicker from "@/components/Base/BaseColorPicker.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    BaseColorPicker,
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
    }),
  },
  methods: {},
};
</script>

<style></style>
