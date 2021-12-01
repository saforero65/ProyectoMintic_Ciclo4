import { Routes } from "@angular/router";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { ClientesComponent } from "../../pages/clientes/clientes.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
// import { IconsComponent } from "../../pages/icons/icons.component";
// import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserComponent } from "../../pages/user/user.component";
import { VentasComponent } from "../../pages/ventas/ventas.component";
import { TablasClientesComponent } from "./../../pages/tablas-clientes/tablas-clientes.component";

export const AdminLayoutRoutes: Routes = [
  { path: "tablaProductos", component: DashboardComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "tablasClientes", component: TablasClientesComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "productos", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "ventas", component: VentasComponent },

  // { path: "rtl", component: RtlComponent }
];
