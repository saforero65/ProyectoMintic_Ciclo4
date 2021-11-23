import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { FileUploadService } from "../tables/file-upload.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
})
export class ClientesComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private objetohttp: HttpClient,
    private fileUploadService: FileUploadService
  ) {}
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

  urlapi: string = "http://localhost:8080/api/clientes?cedula=";
  getData() {
    this.res = this.objetohttp.get(this.urlapi + this.cedula);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      this.cedula = data[0].cedula;
      this.nombrecompleto = data[0].nombrecompleto;
      this.direccion = data[0].direccion;
      this.telefono = data[0].telefono;
      this.correo = data[0].correo;
      this.id = this.contenido[0].id;
      console.log(
        this.cedula,
        this.nombrecompleto,
        this.direccion,
        this.telefono,
        this.correo
      );
      console.log();
    });
  }

  putData() {
    console.log(this.nombrecompleto);
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
      .subscribe((response) => {
        this.codigorespuesta = response.status;
        console.log(response);
        if (this.codigorespuesta == 201) {
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> el Cliente fue cargado correctamente ',
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
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el Cliente no fue cargado ',
            "",
            {
              timeOut: 5000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: "toast-" + "top" + "-" + "center",
            }
          );
        }
      });
  }
  postData() {
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
      .subscribe((response) => {
        this.codigorespuesta = response.status;
        console.log(response);
        if (this.codigorespuesta == 201) {
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> el Cliente fue cargado correctamente ',
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
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el Cliente no fue cargado ',
            "",
            {
              timeOut: 5000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: "toast-" + "top" + "-" + "center",
            }
          );
        }
      });
  }
  deleteData() {
    console.log(this.nombrecompleto);

    this.objetohttp
      .delete<any>(
        "http://localhost:8080/api/clientes/" + this.id,

        { observe: "response" }
      )
      .subscribe((response) => {
        this.codigorespuesta = response.status;
        console.log(response);
        if (this.codigorespuesta == 201) {
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> el Cliente fue cargado correctamente ',
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
          this.toastr.info(
            '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el Cliente no fue cargado ',
            "",
            {
              timeOut: 5000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: "toast-" + "top" + "-" + "center",
            }
          );
        }
      });
  }
  ngOnInit() {}
}
