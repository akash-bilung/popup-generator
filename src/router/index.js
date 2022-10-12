import { createRouter, createWebHistory } from "vue-router";

// Components
import EditorView from "@/components/Views/EditorView.vue";
import DashboardView from "@/components/Views/DashboardView.vue";
import PopupRender from "@/components/Views/PopupRender.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/popups" },
    { path: "/popups", name: "popups", component: DashboardView },
    { path: "/popups/create", name: "popups-create", component: EditorView },
    { path: "/popups/view", name: "popups-view", component: PopupRender },
  ],
});

router.beforeEach((to, from, next) => {
  if (document.querySelector("#pt_popup")) {
    document.querySelector("#pt_popup").remove();
    document.querySelector("#pt_stylesheet").remove();
  }
  next();
});

export default router;
