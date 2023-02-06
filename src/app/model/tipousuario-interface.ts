import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";


export interface ITipousuario {
    id: number;
    nombre: string;
    usuarios: number;
}

export interface IUsuario2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
}
export interface IUsuario2Send {
    id: number;
    nombre: string;
}