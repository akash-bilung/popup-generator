<template>
  <div class="pt_popup" :style="{ backgroundColor: popupStyle.body.bgColor }">
    <div
      class="pt_popup_ring"
      :style="{ borderColor: popupStyle.body.bgColor }"
    ></div>
    <div class="pt_popup_content">
      <component
        :is="item.id"
        draggable="true"
        class="draggable"
        @dragstart="dragStart"
        @dragover="dragOver"
        @drop="dragDrop"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        :position="index"
        :data-index="index"
        v-for="(item, index) in popupItems"
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
      dragStartIndex: null,
    };
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
      popupItems: "popup/getPopupOrder",
    }),
  },
  methods: {
    dragStart(e) {
      this.dragStartIndex = +e.target
        .closest(".draggable")
        .getAttribute("data-index");
    },

    dragEnter(e) {
      e.target.classList.add("over");
    },

    dragLeave(e) {
      e.target.classList.remove("over");
    },

    dragOver(e) {
      e.preventDefault();
    },

    dragDrop(e) {
      const dragEndIndex = +e.target.getAttribute("data-index");
      this.swapItems(this.dragStartIndex, dragEndIndex);
      e.target.classList.remove("over");
    },
    swapItems(fromIndex, toIndex) {
      const element = this.popupItems[fromIndex];
      this.popupItems.splice(fromIndex, 1);
      this.popupItems.splice(toIndex, 0, element);
      const newArr = this.popupItems.map((e, index) => {
        return {
          id: e.id,
          order: index,
        };
      });
      this.$store.dispatch("popup/setPopupOrder", newArr);
    },
  },
};
</script>
