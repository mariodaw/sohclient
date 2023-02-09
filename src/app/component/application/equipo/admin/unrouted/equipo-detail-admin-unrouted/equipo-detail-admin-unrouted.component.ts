import { Component, Input, OnInit } from '@angular/core';
import { IEquipo } from 'src/app/model/equipo-interface';
import { EquipoService } from 'src/app/service/equipo.service';

@Component({
  selector: 'app-equipo-detail-admin-unrouted',
  templateUrl: './equipo-detail-admin-unrouted.component.html',
  styleUrls: ['./equipo-detail-admin-unrouted.component.css']
})
export class EquipoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oEquipo: IEquipo;

  constructor(
    private oEquipoService: EquipoService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oEquipoService.getOne(this.id).subscribe({
      next: (data: IEquipo) => {
        this.oEquipo = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}

