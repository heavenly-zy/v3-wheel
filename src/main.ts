import {createApp} from "vue";
import App from "./App.vue";
import "./index.scss";
import "./lib/wheel.scss"
import {router} from "./router"; // global css

const app = createApp(App);
app.use(router);
app.mount("#app");
