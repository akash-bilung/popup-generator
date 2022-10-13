<template>
  <!-- Success Modal -->
  <BaseDialog
    icon="ti-face-smile"
    mode="success"
    v-if="submission.init && !submission.error"
    @close="close(true)"
  >
    <p class="dialog-title">Yay! Congratulations</p>
    <p class="mb-2">Your popup has been successfully created.</p>
    <input
      :value="submission.message"
      type="text"
      readonly
      class="form-control"
    />
  </BaseDialog>
  <!-- Error Modal -->
  <BaseDialog
    icon="ti-face-sad"
    mode="danger"
    v-if="submission.init && submission.error"
    @close="close(false)"
  >
    <p class="dialog-title">Oops! Error Found</p>
    <p class="mb-2">{{ submission.message }}</p>
  </BaseDialog>
  <!-- Sidebar Editor Controls -->
  <aside class="sidebar">
    <Tab
      :tabs="['Popup Design', 'Popup Content']"
      @setActiveTab="setActiveTab"
      :activeTab="activeTab"
    />
    <form @submit.prevent="submitForm" class="sidebar-form" method="POST">
      <div class="sidebar-form-fieldset">
        <div class="sidebar-section">
          <BaseFormInput
            v-model.trim="popupContent.title"
            label="Popup Name"
            :mode="isValid ? '' : 'danger'"
            name="popup-name"
            id="popup-name"
            placeholder="Name of your Popup"
          />
        </div>
        <EditorSidebarDesign v-if="activeTab === 'popup-design'" />
        <EditorSidebarContent v-if="activeTab === 'popup-content'" />
      </div>

      <div class="sidebar-form-btn">
        <button type="submit" class="btn btn-primary btn-block">
          {{ isLoading ? "Please wait . . ." : "Save" }}
        </button>
      </div>
    </form>
  </aside>
</template>

<script>
// Components
import BaseFormInput from "@/components/Base/BaseFormInput.vue";
import Tab from "@/components/Editor/EditorSidebarTab.vue";
import EditorSidebarDesign from "@/components/Editor/EditorSidebarDesign.vue";
import EditorSidebarContent from "@/components/Editor/EditorSidebarContent.vue";
import BaseDialog from "@/components/Base/BaseDialog.vue";
// Mixins
import popupGenerator from "@/mixins/popupGenerator.js";

// Getters
import { mapGetters } from "vuex";
export default {
  mixins: [popupGenerator],
  emits: ["formSaved"],
  components: {
    BaseFormInput,
    Tab,
    EditorSidebarContent,
    BaseDialog,
    EditorSidebarDesign,
  },
  data() {
    return {
      isValid: true,
      submission: {
        init: false,
        error: false,
        message: "",
      },
      isLoading: false,
      activeTab: "popup-design",
    };
  },
  watch: {
    popupContent: {
      // eslint-disable-next-line no-unused-vars
      handler(after, before) {
        if (after.title) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      },
      deep: true,
    },
    // eslint-disable-next-line no-unused-vars
  },
  computed: {
    ...mapGetters({
      popupStyle: "popup/getPopupStyle",
      popupContent: "popup/getPopupContent",
      popupItems: "popup/getPopupOrder",
    }),
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async submitForm() {
      if (!this.popupContent.title) {
        this.isValid = false;
        return;
      }
      this.$emit("formSaved");
      this.isLoading = true;
      const Slug = this.slugify(this.popupContent.title);
      const { isSuccess, message } = await this.$store.dispatch(
        "list/createItem",
        {
          Name: this.popupContent.title,
          Slug,
          Code: this.generatePopup({
            popupStyle: this.popupStyle,
            popupContent: this.popupContent,
            popupItems: this.popupItems,
          })
            .init.toString()
            .replaceAll('"', "'"),
        }
      );
      this.isLoading = false;
      this.submission.init = true;
      if (isSuccess) {
        this.submission.message = `https://proj-021.azurewebsites.net/${Slug}.js`;
      } else {
        this.submission.error = true;
        this.submission.message = message;
      }
    },
    close(redirect) {
      this.submission = {
        init: false,
        error: false,
        message: "",
      };
      if (redirect) {
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style></style>
