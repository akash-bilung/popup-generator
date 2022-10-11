<template>
  <div
    class="pt_popup"
    :style="{
      backgroundColor: popupStyle.body.bgColor,
    }"
  >
    <div class="pt_popup_content">
      <component
        :is="item.id"
        :data-index="item.order"
        v-for="item in popupItems"
        :key="item.id"
        :popupStyle="popupStyle"
        :popupContent="popupContent"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PtIcons from "@/components/Popup/PopupIcons.vue";
import PtHeading from "@/components/Popup/PopupHeading.vue";
import PtInput from "@/components/Popup/PopupInput.vue";
import PtButton from "@/components/Popup/PopupButton.vue";
import PtFooter from "@/components/Popup/PopupFooter.vue";
export default {
  components: {
    PtIcons,
    PtHeading,
    PtInput,
    PtButton,
    PtFooter,
  },
  data() {
    return {
      popupItems: [
        {
          order: 1,
          id: "pt-icons",
        },
        {
          order: 2,
          id: "pt-heading",
        },
        {
          order: 3,
          id: "pt-input",
        },
        {
          order: 4,
          id: "pt-button",
        },
        {
          order: 5,
          id: "pt-footer",
        },
      ],
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
