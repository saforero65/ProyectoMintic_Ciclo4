import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/productos",
    title: "Productos",
    rtlTitle: "قائمة الجدول",
    icon: "icon-cart",
    class: "",
  },

  {
    path: "/clientes",
    title: "Clientes",
    rtlTitle: "الرموز",
    icon: "icon-badge",
    class: "",
  },
  {
    path: "/ventas",
    title: "Ventas",
    rtlTitle: "الرموز",
    icon: "icon-cart",
    class: "",
  },
  {
    path: "/reportes",
    title: "Reportes",
    rtlTitle: "خرائط",
    icon: "icon-notes",
    class: "",
  },
  {
    path: "/tablaProductos",
    title: "Tablas Productos",
    rtlTitle: "لوحة القيادة",
    icon: "icon-notes",
    class: "",
  },

  /* {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: "",
  },

  {
    path: "/user",
    title: "Login",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
  },

  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: "",
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: "",
  }, */
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
