import router from "../../router";
import template from "./index.html";
import "./style.css";

export default class {
  mount(container) {
    document.title = "blog";
    container.innerHTML = template;
  }
}
