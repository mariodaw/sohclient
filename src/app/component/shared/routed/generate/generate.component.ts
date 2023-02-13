import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerateService } from 'src/app/service/generate.service';
import { SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { CountService } from 'src/app/service/count.service';
import { IUsuario } from 'src/app/model/usuario-interface';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  oUserSession: IUsuario;
  nUsuarios: number = 0;
  nEquipos: number = 0;
  strResult: string = "";
  bLoading:boolean=false;
  strUsertype: string = "";

   constructor(
    public oGenerateService: GenerateService,
    public oCountService: CountService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    protected oLocation: Location,
    private oSessionService: SessionService
  ){
     
  }
  ngOnInit(): void { 
    this.getCount(); 
  }

  getCount(): void {
    this.bLoading=true;
    this.oCountService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
    this.oCountService.getCountEquipos().subscribe((n: number) => this.nEquipos = n);
    this.bLoading=false;
  }

  generateUsuarios(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "There are " + num + " usuarios";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateEquipos(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateEquipos(n).subscribe(
      (num: number) => {
        this.strResult = "There are " + num + " Equipos";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }


  //modal 
eventsModalSubject: Subject<string> = new Subject<string>();

openModal() {
  this.eventsModalSubject.next(" ");
}

onCloseModal() {
  this.getCount();
  this.strResult = "";
}

}
