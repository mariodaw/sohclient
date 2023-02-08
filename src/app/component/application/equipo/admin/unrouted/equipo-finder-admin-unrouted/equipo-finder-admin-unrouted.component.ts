import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { IEquipo, EquipoResponse } from 'src/app/model/equipo-interface';
import { EquipoService } from 'src/app/service/equipo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-equipo-finder-admin-unrouted',
  templateUrl: './equipo-finder-admin-unrouted.component.html',
  styleUrls: ['./equipo-finder-admin-unrouted.component.css']
})
export class EquipoFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IEquipo[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  id_tipousuario: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oEquipoService: EquipoService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oEquipoService.getEquiposPlist(this.numberPage, this.pageRegister, this.termino, this.id_tipousuario)
      .subscribe({
        next: (resp: EquipoResponse) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): IEquipo[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterBytipousuario(id: number): void {
    this.id_tipousuario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionequipo(id: number): void {
    this.closeEvent.emit(id);
  }


}
