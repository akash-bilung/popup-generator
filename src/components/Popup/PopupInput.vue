<template>
  <input
    type="text"
    class="pt_popup_input form-control"
    :style="{
      backgroundColor: popupStyle.form.input,
      color: popupStyle.form.inputText,
    }"
    :placeholder="popupContent.emailPlaceholder"
  />
</template>

<script>
export default {
  props: {
    popupStyle: {
      type: Object,
      default: () => {},
    },
    popupContent: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
