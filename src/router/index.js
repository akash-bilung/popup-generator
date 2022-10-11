import { createRouter, createWebHistory } from "vue-router";

// Components
import EditorView from "@/components/Views/EditorView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
    },
  ],
});

export default router;
