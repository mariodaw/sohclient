import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { EquipoPlistAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-plist-admin-routed/equipo-plist-admin-routed.component';
import { EquipoViewAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-view-admin-routed/equipo-view-admin-routed.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { EquipoNewAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-new-admin-routed/equipo-new-admin-routed.component';
import { EquipoRemoveAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-remove-admin-routed/equipo-remove-admin-routed.component';
import { EquipoEditAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-edit-admin-routed/equipo-edit-admin-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'generate', component: GenerateComponent},
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent },
  { path: 'admin/equipo/plist', component: EquipoPlistAdminRoutedComponent },
  { path: 'admin/equipo/view/:id', component: EquipoViewAdminRoutedComponent },
  { path: 'admin/equipo/new', component: EquipoNewAdminRoutedComponent},
  { path: 'admin/equipo/remove/:id', component: EquipoRemoveAdminRoutedComponent},
  { path: 'admin/equipo/edit/:id', component: EquipoEditAdminRoutedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
