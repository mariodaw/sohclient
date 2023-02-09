import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/admin/unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { EquipoFinderAdminUnroutedComponent } from './component/application/equipo/admin/unrouted/equipo-finder-admin-unrouted/equipo-finder-admin-unrouted.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/admin/routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/tipousuario/admin/unrouted/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';
import { EquipoPlistAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-plist-admin-routed/equipo-plist-admin-routed.component';
import { EquipoViewAdminRoutedComponent } from './component/application/equipo/admin/routed/equipo-view-admin-routed/equipo-view-admin-routed.component';
import { EquipoDetailAdminUnroutedComponent } from './component/application/equipo/admin/unrouted/equipo-detail-admin-unrouted/equipo-detail-admin-unrouted.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    MenuComponent,  
    FooterComponent,  
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    EquipoFinderAdminUnroutedComponent,
    TipousuarioFinderAdminUnroutedComponent,
    EquipoPlistAdminRoutedComponent,
    EquipoViewAdminRoutedComponent,
    EquipoDetailAdminUnroutedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
