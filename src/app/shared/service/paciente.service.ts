import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaGeneral } from '@sharedModule/models/RespuestaGeneral';
import { environment } from '@env/environment';


@Injectable({providedIn: 'root'})
export class PacienteService {
    
    constructor(private httpClient: HttpClient) { }

    public consultarPacientes(): Observable<RespuestaGeneral> {
        return this.httpClient.get<RespuestaGeneral>(`${environment.api.baseUrlAPI}${environment.api.getConsultarPacientes}`);
    }

}