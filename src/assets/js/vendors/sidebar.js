
import Alpine from "alpinejs";

Alpine.data("layout", () => ({
  sidebarOpen: false,
  collapsed: localStorage.getItem("sidebar") === "true",

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem("sidebar", this.collapsed);
  },

  init() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        this.collapsed = false;
      }
    });
  }
}));