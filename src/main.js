import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";

import "./assets/sass/style.scss";

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const app = createApp(App);

app.mixin(mixins);
app.use(router);
app.use(store);

app.mount("#app");
