import { createRouter, createWebHistory } from "vue-router";

// Components
import EditorView from "@/components/Views/EditorView.vue";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
    },
    {
      path: "/popups",
      name: "popups",
      component: EditorView,
    },
  ],
});

export default router;
