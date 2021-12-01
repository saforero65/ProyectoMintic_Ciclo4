import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ventas",
  templateUrl: "./ventas.component.html",
  styleUrls: ["./ventas.component.scss"],
})
export class VentasComponent implements OnInit {
  constructor(private toastr: ToastrService, private objetohttp: HttpClient) {}

  cedula!: number;
  nombrecompleto!: string;
  consecutivo: number = 1;

  codigoproducto!: number;
  codigoproducto2!: number;
  codigoproducto3!: number;

  nombreproducto!: string;
  nombreproducto2!: string;
  nombreproducto3!: string;

  cantidad: number = 1;
  valorproducto!: number;
  precioventa1: number = 0;
  ivaproducto!: number;

  cantidad2: number = 1;
  valorproducto2!: number;
  precioventa2: number = 0;
  ivaproducto2!: number;

  cantidad3: number = 1;
  valorproducto3!: number;
  precioventa3: number = 0;
  ivaproducto3!: number;

  totalventa!: number;
  totaliva!: number;
  totalconiva!: number;

  codigorespuesta!: number;
  res: any;
  res2: any;
  contenido: any;

  urlapi_cliente: string = "http://localhost:8080/api/clientes?cedula=";
  urlapi_producto: string =
    "http://localhost:8080/api/productos?codigoproducto=";

  calcularTotales() {
    this.valorproducto = this.cantidad * this.precioventa1;
    this.valorproducto2 = this.cantidad2 * this.precioventa2;
    this.valorproducto3 = this.cantidad3 * this.precioventa3;

    this.totalventa =
      this.valorproducto + this.valorproducto2 + this.valorproducto3;
    this.totaliva = this.totalventa * 0.19;
    this.totalconiva = this.totalventa + this.totaliva;
  }
  getDataCliente() {
    if (this.cedula) {
      this.res = this.objetohttp.get(this.urlapi_cliente + this.cedula, {
        observe: "response",
      });

      this.res.subscribe(
        (data: any) => {
          console.log("entro a suscribe");
          try {
            this.contenido = data.body[0];

            this.cedula = this.contenido.cedula;
            this.nombrecompleto = this.contenido.nombrecompleto;

            console.log(this.cedula, this.nombrecompleto);
            this.validar(`Usuario con ${this.cedula} Encontrado`);
          } catch (error) {
            console.log("entro a catch error");
            this.contenido = null;
            this.validar(
              `Usuario con Cedula ${this.cedula} No se encuentra en la BD`
            );
          }
        },
        (response: any) => {
          this.codigorespuesta = response.status;

          console.log(this.codigorespuesta);
          this.validar(
            `Usuario con Cedula ${this.cedula} No se encuentra en la BD`
          );
        }
      );
      console.log(this.res.subscribe);
    } else {
      this.validar("Llene el input de Cliente");
    }
  }

  getDataProducto1() {
    if (this.codigoproducto) {
      this.res2 = this.objetohttp.get(
        this.urlapi_producto + this.codigoproducto,
        {
          observe: "response",
        }
      );

      this.res2.subscribe(
        (data: any) => {
          console.log("entro a suscribe productos");
          try {
            let contenido2 = data.body[0];

            this.codigoproducto = contenido2.codigoproducto;
            this.nombreproducto = contenido2.nombreproducto;
            this.precioventa1 = contenido2.precioventa;
            this.ivaproducto = contenido2.ivacompra;

            console.log(this.codigoproducto);
            console.log(this.nombreproducto);
            console.log(this.precioventa1);

            console.log(contenido2);
            this.valorproducto = this.cantidad * this.precioventa1;
            console.log(this.valorproducto);
            this.calcularTotales();
          } catch (error) {
            console.log("entro a catch error");
          }
        },
        (response: any) => {
          this.codigorespuesta = response.status;

          console.log(this.codigorespuesta);
          this.validar(
            `Usuario con Cedula ${this.cedula} No se encuentra en la BD`
          );
        }
      );
    } else {
      this.validar("Llene el input de Cliente");
    }
  }
  getDataProducto2() {
    if (this.codigoproducto2) {
      this.res2 = this.objetohttp.get(
        this.urlapi_producto + this.codigoproducto2,
        {
          observe: "response",
        }
      );

      this.res2.subscribe(
        (data: any) => {
          console.log("entro a suscribe productos");
          try {
            let contenido = data.body[0];

            this.codigoproducto2 = contenido.codigoproducto;
            this.nombreproducto2 = contenido.nombreproducto;
            this.precioventa2 = contenido.precioventa;
            this.ivaproducto2 = contenido.ivacompra;
            console.log(contenido);
            this.valorproducto2 = this.cantidad2 * this.precioventa2;
            this.calcularTotales();
          } catch (error) {
            console.log("entro a catch error");
          }
        },
        (response: any) => {
          this.codigorespuesta = response.status;

          console.log(this.codigorespuesta);
          this.validar(
            `Usuario con Cedula ${this.cedula} No se encuentra en la BD`
          );
        }
      );
    } else {
      this.validar("Llene el input de Cliente");
    }
  }
  getDataProducto3() {
    if (this.codigoproducto3) {
      this.res2 = this.objetohttp.get(
        this.urlapi_producto + this.codigoproducto3,
        {
          observe: "response",
        }
      );

      this.res2.subscribe(
        (data: any) => {
          console.log("entro a suscribe productos");
          try {
            let contenido = data.body[0];

            this.codigoproducto3 = contenido.codigoproducto;
            this.nombreproducto3 = contenido.nombreproducto;
            this.precioventa3 = contenido.precioventa;
            this.ivaproducto3 = contenido.ivacompra;
            console.log(contenido);
            this.valorproducto3 = this.cantidad3 * this.precioventa3;
            this.calcularTotales();
          } catch (error) {
            console.log("entro a catch error");
          }
        },
        (response: any) => {
          this.codigorespuesta = response.status;

          console.log(this.codigorespuesta);
          this.validar(
            `Usuario con Cedula ${this.cedula} No se encuentra en la BD`
          );
        }
      );
    } else {
      this.validar("Llene el input de Cliente");
    }
  }

  postData() {
    if (
      this.cedula &&
      this.nombrecompleto &&
      this.consecutivo &&
      (this.valorproducto || this.valorproducto2 || this.valorproducto3) &&
      this.totalconiva &&
      this.totaliva &&
      this.totalventa
    ) {
      let objeto = [];

      if (this.valorproducto != 0) {
        const producto1 = {
          cantidadproducto: this.cantidad,
          codigoproducto: this.codigoproducto,
          valoriva: this.ivaproducto,
          valortotal: this.valorproducto,
          valorventa: (this.ivaproducto / 100 + 1) * this.valorproducto,
        };
        objeto.push(producto1);
      }
      if (this.valorproducto2 != 0) {
        const producto2 = {
          cantidadproducto: this.cantidad2,
          codigoproducto: this.codigoproducto2,
          valoriva: this.ivaproducto2,
          valortotal: this.valorproducto2,
          valorventa: (this.ivaproducto2 / 100 + 1) * this.valorproducto2,
        };
        objeto.push(producto2);
      }
      if (this.valorproducto3 != 0) {
        const producto3 = {
          cantidadproducto: this.cantidad3,
          codigoproducto: this.codigoproducto3,
          valoriva: this.ivaproducto3,
          valortotal: this.valorproducto3,
          valorventa: (this.ivaproducto3 / 100 + 1) * this.valorproducto3,
        };
        objeto.push(producto3);
      }
      console.log(objeto);

      this.objetohttp
        .post<any>(
          "http://localhost:8080/api/ventas",
          {
            cedulacliente: this.cedula,
            codigoventa: this.consecutivo,
            detalleventa: objeto,

            ivaventa: this.totaliva,
            totalventa: this.totalventa,
            valorventa: this.totalconiva,
          },
          { observe: "response" }
        )
        .subscribe(
          (response) => {
            this.codigorespuesta = response.status;
            console.log("codigo respuesta: " + this.codigorespuesta);
            this.validar("Post de Cliente");
            // this.reset();
          },
          (response: any) => {
            this.codigorespuesta = response.status;
            console.log(this.codigorespuesta);
            this.validar("Post de Cliente");
          }
        );
    } else {
      this.validar("Campos vacios de Cliente");
    }
  }

  validar(mensaje) {
    console.log("entro a validar");
    console.log(this.codigorespuesta);
    if (this.codigorespuesta == 400) {
      this.toastr.info(
        '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR !!</b>  ' +
          mensaje +
          " Verifique los campos que ingreso",
        "",
        {
          timeOut: 5000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + "top" + "-" + "center",
        }
      );
    } else if (
      this.codigorespuesta == 201 ||
      this.codigorespuesta == 200 ||
      this.contenido
    ) {
      this.toastr.info(
        '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> ' +
          mensaje,
        "",
        {
          timeOut: 5000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-" + "top" + "-" + "center",
        }
      );
    } else {
      console.log(this.codigorespuesta);
      this.toastr.info(
        '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b>  ' +
          mensaje,
        "",
        {
          timeOut: 5000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + "top" + "-" + "center",
        }
      );
      // this.reset();
    }
  }
  ngOnInit(): void {}
}
