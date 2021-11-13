import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { FileUploadService } from "./file-upload.service";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
})
export class TablesComponent implements OnInit {
  csvContent: string;
  contacts: Array<any> = [];
  properties: any = "";
  flag: boolean = false;
  constructor(
    private toastr: ToastrService,
    private objetohttp: HttpClient,
    private fileUploadService: FileUploadService
  ) {}
  ngOnInit() {}
  codigoRespuesta: number = 0;
  res2: any;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;

  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos

  //variable de confimación de recepcion de archivo
  recibido: boolean = false;
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  async onUpload() {
    console.log(this.file);
    this.resultados = await this.fileUploadService.upload(this.file);
    console.log(this.resultados);
  }
}
