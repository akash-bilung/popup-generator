<template>
  <div
    class="pt_popup"
    :style="{
      backgroundColor: popupStyle.body.bgColor,
    }"
  >
    <div class="pt_popup_content">
      <div class="pt_popup_icons">
        <template v-if="!!popupContent.stars">
          <Star
            :icon="{ fill: popupStyle.content.stars }"
            v-for="n in popupContent.stars"
            :key="n"
          />
        </template>
      </div>
      <h2 class="pt_popup_title" :style="{ color: popupStyle.content.heading }">
        {{ popupContent.heading }}
      </h2>
      <input
        type="text"
        class="pt_popup_input form-control"
        :style="{
          backgroundColor: popupStyle.form.input,
          color: popupStyle.form.inputText,
        }"
        :placeholder="popupContent.emailPlaceholder"
      />
      <button
        type="submit"
        :style="{ backgroundColor: popupStyle.form.btn }"
        class="pt_popup_input_submit"
      >
        {{ popupContent.btnText }}
      </button>
      <p :style="{ color: popupStyle.content.text }">
        {{ popupContent.footerText }}
      </p>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Icons/IconStar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Star,
  },
  data() {
    return {
      stars: 3,
    };
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
    }),
  },
};
</script>
