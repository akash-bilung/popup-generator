<template>
  <div class="editor" :style="{ backgroundColor: popupStyle.canvas.bgColor }">
    <div class="editor-canvas" id="editor-canvas">
      <Popup />
    </div>
    <EditorSidebar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Popup from "@/components/Base/BasePopup.vue";

import EditorSidebar from "@/components/Editor/EditorSidebar.vue";
export default {
  components: {
    EditorSidebar,
    Popup,
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
    }),
  },
  methods: {},
};
</script>

<style></style>
