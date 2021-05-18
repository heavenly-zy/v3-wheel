import {createApp} from "vue";
import App from "./App.vue";
import "./index.css"; // global css
import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld1 from "./components/HelloWorld1.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: "/", component: HelloWorld1},
    {path: "/xxx", component: HelloWorld2}
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
