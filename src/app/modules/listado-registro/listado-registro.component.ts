import { Component } from '@angular/core';
import { IExamen } from '@sharedModule/models/IExamen';
import { RespuestaGeneral } from '@sharedModule/models/RespuestaGeneral';
import { PacienteService } from '@sharedModule/service/paciente.service';
import { UtilitiesService } from '@sharedModule/service/utilities.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-listado-registro',
  templateUrl: './listado-registro.component.html',
  styleUrl: './listado-registro.component.scss'
})
export class ListadoRegistroComponent {

  constructor(private pacienteService:PacienteService,
    private utilitiesService:UtilitiesService,
    private spinner:NgxSpinnerService,
  ){}
  
  data:IExamen[] = []

  ngOnInit(): void {
    this.generarData()
  }

  private generarData(){
    this.pacienteService.consultarPacientes().pipe(
      tap((objeto:RespuestaGeneral) => {
        this.data = objeto.data as IExamen[]
      }),
      catchError((err) => {
        console.error("Error: ", err);
        this.utilitiesService.showErrorMessage(err.message);
        this.spinner.hide();
        return of(null);
      }),
      finalize(() => {
        console.log("Se consultaron correctamente");
      })
    ).subscribe()
  }


}
