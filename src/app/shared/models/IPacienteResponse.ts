import { IExamen } from "./IExamen";
import { IPaciente } from "./IPaciente";

export interface IPacienteResponse extends IPaciente{
    examenes:IExamen[] 
}