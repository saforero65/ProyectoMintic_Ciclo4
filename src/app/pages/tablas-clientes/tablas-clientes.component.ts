import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tablas-clientes",
  templateUrl: "./tablas-clientes.component.html",
  styleUrls: ["./tablas-clientes.component.scss"],
})
export class TablasClientesComponent implements OnInit {
  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/clientes";
  universidades: string = "";

  constructor(private objetohttp: HttpClient) {}

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
  }
}
