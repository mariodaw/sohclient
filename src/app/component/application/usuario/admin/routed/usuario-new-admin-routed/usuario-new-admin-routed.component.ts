import { IUsuario2Form, IUsuario2Send } from '../../../../../../model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { IEquipo } from 'src/app/model/equipo-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { EquipoService } from 'src/app/service/equipo.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

 
  //id: number = 0;
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
  usertypeDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oEquipoService: EquipoService
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      username: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      cuenta: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      correo: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fnac: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      campeon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      skin: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      id_equipo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    }); 
  }
  //orden camviado
  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      username: this.oForm.value.username,
      cuenta: this.oForm.value.cuenta,
      nombre: this.oForm.value.lastname,
      correo: this.oForm.value.correo,
      fnac: this.oForm.value.fnac,
      campeon: this.oForm.value.campeon,
      skin: this.oForm.value.skin,
      equipo: { id: this.oForm.value.id_equipo },
      tipousuario: { id: this.oForm.value.id_tipousuario }
    }
    if (this.oForm.valid) {
      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "ANDAMIO";
          this.modalContent = "Usuario " + this.oUsuario2Send.id + " created";
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
      this.oRouter.navigate(['/admin/usuario/view', this.oUsuario2Send.id])
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

  }

}


