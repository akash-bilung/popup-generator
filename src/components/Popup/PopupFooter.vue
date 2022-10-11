<template>
  <p :style="{ color: popupStyle.content.text }">
    {{ popupContent.footerText }}
  </p>
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
