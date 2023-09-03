import App from "./App.vue";
import { createApp } from "vue";

import VMdEditor from "./markdown";

const app = createApp(App);

app.use(VMdEditor).mount("#app");
