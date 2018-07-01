import home from "./views/home";
import blog from "./views/blog";
import contact from "./views/contact";
const routes = {
  "/home": home,
  "/blog": blog,
  "/contact": contact
};
// Router 跳转类
class Router {
  start() {
    window.addEventListener("popstate", () => {
      this.load(location.pathname);
    });
    this.load(location.pathname);
  }
  //页面跳转
  go(path) {
    history.pushState({}, "", path);
    this.load(path);
  }
  // 加载path页面
  load(path) {
    if (path === "/") {
      path = "/home";
    }
    const view = new routes[path]();
    view.mount(document.body);
  }
}

export default new Router();
