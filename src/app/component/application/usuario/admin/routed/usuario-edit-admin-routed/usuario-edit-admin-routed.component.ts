import { IUsuario2Form, IUsuario2Send } from './../../../../../../model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IEquipo } from 'src/app/model/equipo-interface';
import { Location } from '@angular/common';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { EquipoService } from 'src/app/service/equipo.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
declare let bootstrap: any;
@Component({
  selector: 'app-usuario-edit-admin-routed',
  templateUrl: './usuario-edit-admin-routed.component.html',
  styleUrls: ['./usuario-edit-admin-routed.component.css']
})
export class UsuarioEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form = null;
  oUsuario2Send: IUsuario2Send = null;
  oForm: FormGroup<IUsuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  EquipoDescription: string = "";
  TipousuarioDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    protected oLocation: Location,
    private oEquipoService: EquipoService,
     private oTipousuarioService: TipousuarioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          username: [data.username, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          cuenta: [data.cuenta, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          correo: [data.correo, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          fnac: [data.fnac, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          campeon: [data.campeon, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          skin: [data.skin, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
          id_equipo: [data.equipo.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          id_tipousuario: [data.tipousuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
        this.updateEquipoDescription(this.oUsuario.equipo.id);
        this.updateTipousuarioDescription(this.oUsuario.tipousuario.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      username: this.oForm.value.username,
      nombre: this.oForm.value.nombre,
      cuenta: this.oForm.value.cuenta,
      correo: this.oForm.value.correo,
      fnac: this.oForm.value.fnac,
      campeon: this.oForm.value.campeon,
      skin: this.oForm.value.skin,
      equipo: { id: this.oForm.value.id_equipo },
      tipousuario: { id: this.oForm.value.id_tipousuario }
    }
    if (this.oForm.valid) {
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "SOH";
          this.modalContent = "Usuario " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/usuario/view', this.id])
    })
    this.myModal.show()
  }

  openModalFindEquipo(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findEquipo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeEquipoModal(id_Equipo: number) {
    this.oForm.controls['id_Equipo'].setValue(id_Equipo);
    this.updateEquipoDescription(id_Equipo);
    this.myModal.hide();
  }

  updateEquipoDescription(id_Equipo: number) {
    this.oEquipoService.getOne(id_Equipo).subscribe({
      next: (data: IEquipo) => {      
        this.EquipoDescription = data.nombre;        
      },
      error: (error: any) => {
        this.EquipoDescription = "Equipo not found";        
        this.oForm.controls['id_Equipo'].setErrors({'incorrect': true});
      }
    })
  }

  


  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTipousuarioModal(id_Tipousuario: number) {
    this.oForm.controls['id_t ipousuario'].setValue(id_Tipousuario);
    this.updateTipousuarioDescription(id_Tipousuario);
    this.myModal.hide();
  }

  updateTipousuarioDescription(id_Tipousuario: number) {
    this.oTipousuarioService.getOne(id_Tipousuario).subscribe({
      next: (data: ITipousuario) => {      
        this.TipousuarioDescription = data.nombre;        
      },
      error: (error: any) => {
        this.TipousuarioDescription = "Tipousuario not found";        
        this.oForm.controls['id_Tipousuario'].setErrors({'incorrect': true});
      }
    })
  }
}
