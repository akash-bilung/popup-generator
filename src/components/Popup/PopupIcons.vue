<template>
  <div class="pt_popup_icons" :class="iconsPositionClass">
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
    position: {
      type: Number,
      default: null,
    },
    popupStyle: {
      type: Object,
      default: () => {},
    },
    popupContent: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    iconsPositionClass() {
      let cls;
      if (this.position === 0) {
        cls = "icons-top";
      } else if (this.position === 4) {
        cls = "icons-bottom";
      } else {
        cls = "";
      }
      return cls;
    },
  },
};
</script>

<style></style>
