import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ITipousuario } from "./tipousuario-interface";
import { IEquipo } from "./equipo-interface";




export interface IUsuario {
    id: number;
    username: string;
    correo: string;
    nombre: string;
    cuenta: string;
    fnac: Date;
    campeon: string;
    skin: string;
    equipo: IEquipo;
    tipousuario: ITipousuario;
}

export interface IUsuario2Form {
    id: FormControl<number>;
    username: FormControl<string>;
    correo: FormControl<string>;
    nombre: FormControl<string>;
    cuenta: FormControl<string>;
    fnac: FormControl<Date>;
    campeon: FormControl<string>;
    skin: FormControl<string>;
    id_equipo: FormControl<number>;
    id_tipousuario: FormControl<number>;
}
export interface IUsuario2Send {
    id: number;
    username: string;
    correo: string;
    nombre: string;
    cuenta: string;
    fnac: Date;
    campeon: string;
    skin: string;
    equipo: IEntity;
    tipousuario: IEntity;
}