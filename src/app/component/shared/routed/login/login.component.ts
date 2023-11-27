import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';
import { DecodeService } from 'src/app/service/decode.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oFormularioLogin: FormGroup<IUser>;
  strOperation: string = "login"

  constructor(
    protected oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oDecodeService: DecodeService,
  ) {

    if (this.oSessionService.isSessionActive()) {
      this.oRouter.navigate(['/home']);      
    } 

    this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit() {
  }

  login() {
    this.oSessionService.login(this.oFormularioLogin.get('username')!.value, this.oFormularioLogin.get('password')!.value)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
          window.location.reload();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }

  loginAsAdmin() {
    this.oFormularioLogin.controls['username'].setValue("Talayis");
    this.oFormularioLogin.controls['password'].setValue("wildcart");
  }

  loginAsUser() {
    this.oFormularioLogin.controls['username'].setValue("Joker");
    this.oFormularioLogin.controls['password'].setValue("wildcart");
  }

}

