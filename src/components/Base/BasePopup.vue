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
        draggable="true"
        class="draggable"
        @dragstart="dragStart"
        @dragover="dragOver"
        @drop="dragDrop"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        :data-order="item.order"
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
  methods: {
    dragStart(e) {
      this.dragStartIndex = +e.target
        .closest(".draggable")
        .getAttribute("data-index");
      // console.log('Event: ', 'dragstart');
    },

    dragEnter(e) {
      // console.log('Event: ', 'dragenter');
      e.target.classList.add("over");
    },

    dragLeave(e) {
      // console.log('Event: ', 'dragleave');
      e.target.classList.remove("over");
    },

    dragOver(e) {
      // console.log('Event: ', 'dragover');
      e.preventDefault();
    },

    dragDrop(e) {
      const dragEndIndex = +e.target.getAttribute("data-index");
      this.swapItems(this.dragStartIndex, dragEndIndex);
      e.target.classList.remove("over");
      // console.log('Event: ', 'drop');
    },
    // Swap list items that are drag and drop
    swapItems(fromIndex, toIndex) {
      var element = this.popupItems[fromIndex];
      this.popupItems.splice(fromIndex, 1);
      this.popupItems.splice(toIndex, 0, element);
    },
  },
};
</script>
