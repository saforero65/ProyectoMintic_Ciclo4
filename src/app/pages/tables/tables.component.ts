import { Component, ElementRef, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
;
import { FileUploadService } from "./file-upload.service";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
})
export class TablesComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private objetohttp: HttpClient,
    private fileUploadService: FileUploadService
  ) { }
  cargacsv: boolean = true;
  codigoproducto!: number;
  ivacompra!: number;
  nitproveedor!: number;
  nombreproducto!: string;
  preciocompra!: number;
  precioventa!: number;

  codigorespuesta: any;
  resultado: any

  postData() {
    this.resultado = this.objetohttp
      .post<any>(
        "http://localhost:8080/api/productos",
        {
          codigoproducto: this.codigoproducto,
          ivacompra: this.ivacompra,
          nitproveedor: this.nitproveedor,
          nombreproducto: this.nombreproducto,
          preciocompra: this.preciocompra,
          precioventa: this.precioventa,

        },
        { observe: "response" },
      );

    this.resultado.subscribe((response: any) => {
      this.codigorespuesta = response.status;
      console.log("entro");
      console.log(this.codigorespuesta)
      if (this.codigorespuesta == 201) {
        this.toastr.info(
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> el Producto fue cargado correctamente ',
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
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el Producto no fue cargado ',
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

    }, (response: any) => {
      this.codigorespuesta = response.status;
      console.log("entro");
      console.log(this.codigorespuesta)
      if (this.codigorespuesta == 201) {
        this.toastr.info(
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!!</b> el Producto fue cargado correctamente ',
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
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el Producto no fue cargado ',
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

  ngOnInit() { }

  res2: any;

  @ViewChild("myInput")
  myInputVariable: ElementRef;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;
  isDisabled: boolean = true;
  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos
  //variable de confimación de recepcion de archivo
  recibido: boolean = false;
  onChange(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.isDisabled = false;
    }
  }
  async onUpload() {
    console.log(this.file);
    console.log(this.file.type);
    if (this.file.type.includes("csv") || this.file.type.includes("excel")) {
      console.log(this.file.type);
      this.resultados = await this.fileUploadService.upload(this.file);
      console.log("enviado");

      this.reset();
    } else {
      console.log("formato no soportado");
      this.toastr.info(
        '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> el archivo o formato no es soportado ',
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
  reset() {
    this.file = null;
    this.isDisabled = true;
    this.myInputVariable.nativeElement.value = "";
  }
}
