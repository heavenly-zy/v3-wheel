import "./lib/wheel.scss"
import "./index.scss";
import {createApp} from "vue";
import App from "./App.vue";
import {router} from "./router"; // global css
import './lib/svg.js'

const app = createApp(App);
app.use(router);
app.mount("#app");
