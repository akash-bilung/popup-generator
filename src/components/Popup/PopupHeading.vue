<template>
  <h2 class="pt_popup_title" :style="{ color: popupStyle.content.heading }">
    {{ popupContent.heading }}
  </h2>
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
