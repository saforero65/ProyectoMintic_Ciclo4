import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "blue";
  dark: boolean = true;
  constructor() {}

  changeDashboardColor(color) {
    var body = document.getElementsByTagName("body")[0];
    if (body && color === "white-content") {
      body.classList.add(color);
      this.dark = false;
    } else if (body.classList.contains("white-content")) {
      body.classList.remove("white-content");
      this.dark = true;
    }
  }
  ngOnInit() {}
}
