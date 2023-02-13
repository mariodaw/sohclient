import { IEquipo } from 'src/app/model/equipo-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EquipoService } from 'src/app/service/equipo.service';


@Component({
  selector: 'app-equipo-view-admin-routed',
  templateUrl: './equipo-view-admin-routed.component.html',
  styleUrls: ['./equipo-view-admin-routed.component.css']
})
export class EquipoViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oEquipo: IEquipo = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}