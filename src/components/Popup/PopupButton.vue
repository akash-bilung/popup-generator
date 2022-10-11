<template>
  <button
    type="submit"
    :style="{ backgroundColor: popupStyle.form.btn }"
    class="pt_popup_input_submit"
  >
    {{ popupContent.btnText }}
  </button>
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
