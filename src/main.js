import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
