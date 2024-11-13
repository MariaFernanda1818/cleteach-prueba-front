import { IPaciente } from "./IPaciente";

export interface IExamen {
    codigoExamen:string;

    resultadoExamen:string;

    pacienteFk:IPaciente;
}