import { Pageable, Sort } from "./shared-interface";
import { IEntity } from "./generic-types-interface";
import { FormControl } from "@angular/forms";

export interface IEquipo {
    id:         number;
    nombre:       string;
}

export interface EquipoResponse {
    content:          IEquipo[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}

export interface IEquipo2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
}
export interface IEquipo2Send {
    id: number;
    nombre: string;
}