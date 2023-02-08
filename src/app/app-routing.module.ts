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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'logout', component: LogoutComponent },  
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent},
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
