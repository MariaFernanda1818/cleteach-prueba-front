import { IPaciente } from "./IPaciente";

export interface IExamen {

    idExamen:number;

    codigoExamen:string;

    resultadoExamen:string;

    pacienteFk:IPaciente;
}