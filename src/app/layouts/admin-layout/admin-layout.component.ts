import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "blue";
  dark: boolean = true;
  state: number = 0;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      //console.log(this.router.url)
      //console.log(val)
      if (this.router.url != "/user") {
        this.state = 1;
      } else {
        this.state = 0;
      }
    });
  }

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
