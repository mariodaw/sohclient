import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEquipo } from 'src/app/model/equipo-interface';
import { EquipoService } from 'src/app/service/equipo.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-equipo-plist-admin-routed',
  templateUrl: './equipo-plist-admin-routed.component.html',
  styleUrls: ['./equipo-plist-admin-routed.component.css']
})
export class EquipoPlistAdminRoutedComponent implements OnInit {

  responseFromServer: IPage<IEquipo>;
  //
  strTermFilter: string = "";
  id_tipoEquipoFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  //
  strUserName: string = "";


  constructor(
    protected oRouter: Router,
    private oEquipoService: EquipoService,
    private oSessionService: SessionService,
  ) {
    
  }

  ngOnInit() {
    this.getPage();
  }
/* page: number, size: number, termino: string, id_tipousuario: number
this.page, this.numberOfElements,
      this.strTermFilter, this.id_tipoEquipoFilter, this.sortField, this.sortDirection */
  getPage() {
    this.oEquipoService.getEquiposPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_tipoEquipoFilter)
      .subscribe({
        next: (resp: IPage<IEquipo>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipoEquipo(id: number): void {
    this.id_tipoEquipoFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}

