import { createRouter, createWebHistory } from "vue-router";

// Components
import EditorView from "@/components/Views/EditorView.vue";
import DashboardView from "@/components/Views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/popups" },
    { path: "/popups", name: "popups", component: DashboardView },
    { path: "/popups/create", name: "popups-create", component: EditorView },
  ],
});

export default router;
