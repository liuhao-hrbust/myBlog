import router from "../../router";
import template from "./index.html";
import "./style.css";
export default class {
  mount(container) {
    document.title = "home";
    container.innerHTML = template;
    container.querySelector("toBlog").addEventListener("click", () => {
      router.go("/blog");
    });
  }
}
