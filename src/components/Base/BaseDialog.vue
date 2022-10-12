<template>
  <Teleport to="body">
    <div class="dialog-box" :class="`dialog-${mode}`">
      <div class="dialog-box-backdrop" @click="close"></div>
      <div class="dialog-box-inner">
        <div class="dialog-icon">
          <i :class="icon"></i>
        </div>
        <div class="dialog-content">
          <slot />
        </div>
        <button class="dialog-close" @click.prevent="close">
          <i class="ti-close"></i>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    mode: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
