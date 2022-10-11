<template>
  <div class="icons-top pt_popup_icons">
    <template v-if="!!popupContent.stars">
      <Star
        :icon="{ fill: popupStyle.content.stars }"
        v-for="n in popupContent.stars"
        :key="n"
      />
    </template>
  </div>
</template>

<script>
import Star from "@/components/Icons/IconStar.vue";

export default {
  components: {
    Star,
  },
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
