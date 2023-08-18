import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import Pusher from "pusher-js";

const appInstance = createApp(App);
appInstance.config.globalProperties.pusher = new Pusher('f8fae05c56b80676064a', {
    encryption: true,
    cluster: 'us2'
});
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
