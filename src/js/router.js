import foo from "./views/foo";
import bar from "./views/bar";
const routes = {
  "/foo": foo,
  "/bar": bar
};
// Router 跳转类
class Router {
  start() {
    window.addEventListener("popstate", () => {
      this.load(location.pathname);
    });
    this.load(location.pathname);
  }
  go(path) {}
  // 加载path页面
  load(path) {
    if (path === "/") {
      path = "foo";
    }
    const view = new routes[path]();
    view.mount(document.body);
  }
}
