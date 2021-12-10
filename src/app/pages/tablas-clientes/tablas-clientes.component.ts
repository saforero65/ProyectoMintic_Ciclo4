import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tablas-clientes",
  templateUrl: "./tablas-clientes.component.html",
  styleUrls: ["./tablas-clientes.component.scss"],
})
export class TablasClientesComponent implements OnInit {
  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/";
  universidades: string = "";
  contenidoventas: any;
  listadoclientes: boolean = true;
  venta: any;
  cedula!: number;
  arrayventas: any = [];
  totalventa: number = 0;

  constructor(private objetohttp: HttpClient) {}

  listarVentas() {
    this.listadoclientes = false;
    let arrayventas = this.validacionVentasCedula(
      this.contenidoventas,
      this.contenido
    );
    for (let i = 0; i < arrayventas.length; i++) {
      this.totalventa = this.totalventa + arrayventas[i].valortotal;
    }
    console.log(this.totalventa);
  }
  validacionVentasCedula(contenidoventas, contenido) {
    this.arrayventas = [];
    let cont = 0;
    let cedula, nombre, valortotal;
    console.log(contenidoventas.totalventa);

    for (let i = 0; i < contenido.length; i++) {
      cedula = contenido[i].cedula;
      nombre = contenido[i].nombrecompleto;
      let valorventascliente = 0;
      for (let j = 0; j < contenidoventas.length; j++) {
        if (contenido[i].cedula == contenidoventas[j].cedulacliente) {
          console.log(
            `cedula ${contenido[i].cedula} - cedulaVentas ${contenidoventas[j].cedulacliente}`
          );
          console.log(typeof valorventascliente + valorventascliente);
          console.log(
            typeof contenidoventas.totalventa + contenidoventas[j].totalventa
          );

          valorventascliente =
            valorventascliente + contenidoventas[j].totalventa;
        }
      }
      valortotal = valorventascliente;
      let cliente = {
        cedula,
        nombre,
        valortotal,
      };
      console.log(
        `valorventascliente: ${valorventascliente}- cedula${contenido[i].cedula}`
      );
      if (valortotal > 0) {
        this.arrayventas.push(cliente);
      }
    }
    return this.arrayventas;
  }

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi + "/ventas");
    this.res.subscribe((data: any[]) => {
      this.contenidoventas = data;
      // this.cedula = data[0].cedula;
      // this.venta = data[0].totalventa;
      console.log(this.contenidoventas);
    });
    this.res = this.objetohttp.get(this.urlapi + "/clientes");
    this.res.subscribe((data: any[]) => {
      this.contenido = data;

      console.log(this.contenido);
    });
  }
}
