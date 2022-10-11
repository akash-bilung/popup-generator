<template>
  <div class="form-group">
    <label :for="id" class="mb-05">{{ label }}</label>
    <div :class="{ 'form-wrap': isNumber }">
      <button
        v-if="isNumber"
        type="button"
        class="btn btn-black"
        @click.prevent="updateNumber(0)"
      >
        -
      </button>
      <input
        type="text"
        :readonly="isNumber"
        class="form-control"
        :id="id"
        :value="modelValue"
        @input="changeInput($event)"
      />
      <button
        v-if="isNumber"
        type="button"
        class="btn btn-black"
        @click.prevent="updateNumber(1)"
      >
        +
      </button>
    </div>
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
  computed: {
    isNumber() {
      return this.type === "number";
    },
  },
  methods: {
    updateNumber(entry) {
      const elem = document.querySelector(`#${this.id}`);
      let value = parseInt(elem.value);
      if (entry && value <= 2) {
        value += 1;
      } else if (!entry && value > 0) {
        value -= 1;
      }
      this.$emit("update:modelValue", value);
    },
    changeInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
