import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";

import "./assets/sass/style.scss";

const app = createApp(App);

app.mixin(mixins);
app.use(router);
app.use(store);

app.mount("#app");
