import { createApp } from "C:UserswjwesOneDriveDesktopsit120sit120 week 1week 1 app 2.0sit120-week1-prac\node_modules\vuedist\vue.d.ts";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
