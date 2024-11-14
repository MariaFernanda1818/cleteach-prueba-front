import { Component, OnInit } from '@angular/core';
import { IExamen } from '@sharedModule/models/IExamen';
import { IPacienteResponse } from '@sharedModule/models/IPacienteResponse';
import { RespuestaGeneral } from '@sharedModule/models/RespuestaGeneral';
import { PacienteService } from '@sharedModule/service/paciente.service';
import { UtilitiesService } from '@sharedModule/service/utilities.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-listado-registro',
  templateUrl: './listado-registro.component.html',
  styleUrls: ['./listado-registro.component.scss']
})
export class ListadoRegistroComponent implements OnInit {

  // Lista de pacientes con sus exámenes
  data: IPacienteResponse[] = [];

  // Almacena el examen seleccionado por cada paciente usando idPaciente como clave
  selectedExamen: { [key: string]: number } = {};

  constructor(
    private pacienteService: PacienteService,
    private utilitiesService: UtilitiesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.generarData();
  }

  /**
   * Método para consultar y generar la lista de pacientes y sus exámenes.
   */
  private generarData(): void {
    this.spinner.show(); // Mostrar spinner mientras se cargan los datos
    this.pacienteService.consultarPacientes()
      .pipe(
        tap((respuesta: RespuestaGeneral) => {
          this.data = respuesta.data as IPacienteResponse[];
        }),
        catchError((error) => {
          console.error('Error:', error);
          this.utilitiesService.showErrorMessage(error.message);
          return of(null);
        }),
        finalize(() => {
          this.spinner.hide(); // Ocultar spinner al finalizar la consulta
          console.log('Datos de pacientes consultados correctamente.');
        })
      )
      .subscribe();
  }

  /**
   * Maneja el cambio de examen seleccionado.
   * @param idExamen ID del examen seleccionado.
   * @param idPaciente ID del paciente asociado al examen.
   */
  onExamenChange(idExamen: number, idPaciente: number): void {
    console.log(`Examen seleccionado: ${idExamen} para el paciente: ${idPaciente}`);
    this.selectedExamen[idPaciente] = idExamen;
  }

  /**
   * Obtiene el resultado del examen seleccionado basado en el ID del paciente y el ID del examen.
   * @param idPaciente ID del paciente.
   * @param idExamen ID del examen seleccionado.
   * @returns Resultado del examen o mensaje predeterminado si no se encuentra.
   */
  getExamenResultado(idPaciente: number, idExamen: number): string {
    const paciente = this.data.find((p) => p.idPaciente === idPaciente);
    const examen = paciente?.examenes.find((ex) => ex.idExamen === idExamen);
    return examen?.resultadoExamen || 'Seleccione un examen';
  }
}
