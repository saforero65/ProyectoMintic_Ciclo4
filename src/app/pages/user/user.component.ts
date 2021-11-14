import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  user_correcto: string = "admininicial";
  pass_correcto: string = "admin123456";

  user: string = "";
  pass: string = "";

  correcto: number = -1;
  ingreso: boolean = false;
  comparar() {
    if (this.user === this.user_correcto) {
      this.correcto = 1;
      this.ingreso = true;
      if (this.pass === this.pass_correcto) {
        this.correcto = 1;
        this.ingreso = true;
      } else {
        this.correcto = 0;
      }
    } else {
      this.correcto = 0;
    }
  }
  showNotification(from, align) {
    switch (this.correcto) {
      case 0:
        this.toastr.info(
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>ERROR!!</b> la contraseña o el nombre del usuario son incorrectos ',
          "",
          {
            timeOut: 5000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align,
          }
        );
        this.correcto = -1;
        break;
      case 1:
        this.toastr.success(
          '<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Bienvenido  <b>' +
            this.user +
            " Autenticado Correctamente</b> - Gracias.",
          "",
          {
            timeOut: 5000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align,
          }
        );
        this.correcto = -1;
        this.router.navigate(["/productos"]);

        break;
    }
  }
}
