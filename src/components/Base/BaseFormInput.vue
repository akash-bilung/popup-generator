<template>
  <div class="form-group">
    <label :for="id" class="mb-05">{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :id="id"
      :value="modelValue"
      @input="changeInput($event)"
    />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    id: {
      type: String,
      required: true,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
      default: "",
    },
  },
  methods: {
    changeInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
