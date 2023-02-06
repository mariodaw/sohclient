import { Pageable, Sort } from "./shared-interface";

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
