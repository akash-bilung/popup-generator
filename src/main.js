import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";

import "./assets/sass/style.scss";

import axios from "axios";

axios.defaults.baseURL = "https://starfish-app-juzm3.ondigitalocean.app/api";

const app = createApp(App);

app.mixin(mixins);
app.use(router);
app.use(store);

app.mount("#app");
