import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  // API url
  baseApiUrl = "http://localhost:8080/api/productos";
  contadrCoreectoeecto: number = 0;
  contador: number = 0;
  //inicializando objeto http
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  //variable auxiliar que almacena resultados de cada envio
  resultados = Array();

  // Retorna un objeto observable
  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      //leyendo el contenido
      var reader = new FileReader();
      reader.onloadend = (e) => {
        let lines = reader.result as string;

        let separados = lines.split("\n");
        console.log(separados.length);
        for (let lineaactual of separados) {
          this.contador++;
          if (separados.length == this.contador) {
            this.contadrCoreectoeecto = 0;
            this.contador = 0;
          }
          lineaactual.replace(";", ",");
          let columnas = lineaactual.split(",", 6);
          this.http
            .post(
              this.baseApiUrl,
              {
                codigoproducto: columnas[0],
                nombreproducto: columnas[1],
                nitproveedor: columnas[2],
                preciocompra: columnas[3],
                ivacompra: columnas[4],
                precioventa: columnas[5],
              },
              { observe: "response" }
            )
            .subscribe((response: any) => {
              let resaux = [];
              resaux[0] = response.status;
              if (resaux[0] == 201) {
                this.contadrCoreectoeecto++;

                if (separados.length == this.contadrCoreectoeecto) {
                  console.log(
                    this.contadrCoreectoeecto +
                      "Productos fueron subidos correctamente"
                  );
                  this.toastr.info(
                    '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>CORRECTO!! </b>' +
                      this.contadrCoreectoeecto +
                      " Productos fueron subidos correctamente",
                    "",
                    {
                      timeOut: 5000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-success alert-with-icon",
                      positionClass: "toast-" + "top" + "-" + "center",
                    }
                  );
                }
              }
              this.resultados.push(resaux);
            });
        }
        //console.log(this.resultados);
        resolve(this.resultados);
      };
      reader.readAsText(file);
    });
  }
}
