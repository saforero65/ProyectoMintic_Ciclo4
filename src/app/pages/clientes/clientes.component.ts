import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
})
export class ClientesComponent implements OnInit {
  constructor(private toastr: ToastrService, private objetohttp: HttpClient) {}
  crud: number = 1;
  cedula!: number;
  nombrecompleto!: string;
  direccion!: string;
  telefono!: number;
  correo!: string;
  id!: string;

  codigorespuesta!: number;

  res: any;
  contenido: any;

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
      this.reset();
    }
  }

  urlapi: string = "http://localhost:8080/api/clientes?cedula=";
  getData() {
    if (this.cedula) {
      this.res = this.objetohttp.get(this.urlapi + this.cedula, {
        observe: "response",
      });

      this.res.subscribe(
        (data: any) => {
          console.log("entro a suscribe");
          try {
            this.contenido = data.body[0];

            this.cedula = this.contenido.cedula;
            this.nombrecompleto = this.contenido.nombrecompleto;
            this.direccion = this.contenido.direccion;
            this.telefono = this.contenido.telefono;
            this.correo = this.contenido.correo;
            this.id = this.contenido.id;
            console.log(
              this.cedula,
              this.nombrecompleto,
              this.direccion,
              this.telefono,
              this.correo
            );
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

  putData() {
    console.log(this.nombrecompleto);
    console.log(this.cedula);
    if (this.cedula) {
      console.log(this.id);

      this.objetohttp
        .put<any>(
          "http://localhost:8080/api/clientes/" + this.id,
          {
            cedula: this.cedula,
            nombrecompleto: this.nombrecompleto,
            direccion: this.direccion,
            telefono: this.telefono,
            correo: this.correo,
          },
          { observe: "response" }
        )
        .subscribe(
          (response) => {
            this.codigorespuesta = response.status;
            console.log(response);
            this.validar("Put de Cliente");
            this.reset();
          },
          (response: any) => {
            this.codigorespuesta = response.status;
            console.log(this.codigorespuesta);
            this.validar("Erroor");
          }
        );
    } else {
      console.log(this.cedula);
      console.log(this.id);

      this.validar("Llene el input de Cliente");
    }
  }
  postData() {
    if (
      this.cedula &&
      this.nombrecompleto &&
      this.direccion &&
      this.telefono &&
      this.correo
    ) {
      this.objetohttp
        .post<any>(
          "http://localhost:8080/api/clientes",
          {
            cedula: this.cedula,
            nombrecompleto: this.nombrecompleto,
            direccion: this.direccion,
            telefono: this.telefono,
            correo: this.correo,
          },
          { observe: "response" }
        )
        .subscribe(
          (response) => {
            this.codigorespuesta = response.status;
            console.log("codigo respuesta: " + this.codigorespuesta);
            this.validar("Post de Cliente");
            this.reset();
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
  deleteData() {
    console.log(this.nombrecompleto);
    if (this.cedula) {
      console.log(this.id);
      this.objetohttp
        .delete<any>(
          "http://localhost:8080/api/clientes/" + this.id,

          { observe: "response" }
        )
        .subscribe((response) => {
          this.codigorespuesta = response.status;
          console.log(response);
          this.validar("Delete de Cliente");
          this.reset();
        });
    } else {
      console.log(this.cedula);

      console.log(this.id);

      this.validar("Llene el input de Cliente");
    }
  }

  reset() {
    this.cedula = null;
    this.nombrecompleto = null;
    this.direccion = null;
    this.telefono = null;
    this.correo = null;
    this.contenido = null;
  }
  ngOnInit() {}
}
