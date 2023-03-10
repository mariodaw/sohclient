import { IUsuario } from 'src/app/model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css']
})
export class UsuarioViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  ousuario: IUsuario = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}