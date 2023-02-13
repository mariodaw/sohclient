import { IEquipo2Form, IEquipo2Send } from './../../../../../../model/equipo-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IEquipo } from 'src/app/model/equipo-interface';
import { EquipoService } from 'src/app/service/equipo.service';

declare let bootstrap: any;

@Component({
  selector: 'app-equipo-edit-admin-routed',
  templateUrl: './equipo-edit-admin-routed.component.html',
  styleUrls: ['./equipo-edit-admin-routed.component.css']
})
export class EquipoEditAdminRoutedComponent implements OnInit {

  id: number = 0;
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
  EquipoDescription: string = "";
  TipoEquipoDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oEquipoService: EquipoService,
    private oFormBuilder: FormBuilder,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oEquipoService.getOne(this.id).subscribe({
      next: (data: IEquipo) => {
        this.oEquipo = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oEquipo2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    }
    if (this.oForm.valid) {
      this.oEquipoService.updateOne(this.oEquipo2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "SOH";
          this.modalContent = "Equipo " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/Equipo/view', this.id])
    })
    this.myModal.show()
  }

}
