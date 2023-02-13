import { IEquipo2Form, IEquipo2Send } from '../../../../../../model/equipo-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEquipo } from 'src/app/model/equipo-interface';
import { Location } from '@angular/common';
import { EquipoService } from 'src/app/service/equipo.service';
declare let bootstrap: any;

@Component({
  selector: 'app-equipo-new-admin-routed',
  templateUrl: './equipo-new-admin-routed.component.html',
  styleUrls: ['./equipo-new-admin-routed.component.css']
})
export class EquipoNewAdminRoutedComponent implements OnInit {


  //id: number = 0;
  oEquipo: IEquipo = null;
  oEquipo2Form: IEquipo2Form = null;
  oEquipo2Send: IEquipo2Send = null;
  oForm: FormGroup<IEquipo2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oEquipoService: EquipoService,
    private oFormBuilder: FormBuilder,
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    }); 
  }
  //orden camviado
  onSubmit() {
    console.log("onSubmit");
    this.oEquipo2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    }
    if (this.oForm.valid) {
      this.oEquipoService.newOne(this.oEquipo2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "SOH";
          this.modalContent = "Equipo " + this.oEquipo2Send.id + " created";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/equipo/plist'])
    })
    this.myModal.show()
  }


}
