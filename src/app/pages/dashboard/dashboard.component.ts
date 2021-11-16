import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/productos";
  universidades: string = "";

  constructor(private objetohttp: HttpClient) {}

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      // console.log(this.contenido[0].name);
    });
  }
}
