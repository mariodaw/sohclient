import { IEquipo } from 'src/app/model/equipo-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EquipoService } from 'src/app/service/equipo.service';

declare let bootstrap: any;

@Component({
  selector: 'app-equipo-remove-admin-routed',
  templateUrl: './equipo-remove-admin-routed.component.html',
  styleUrls: ['./equipo-remove-admin-routed.component.css']
})
export class EquipoRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oEquipoService: EquipoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oEquipoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Equipo " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

}
