import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@sharedModule/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UtilitiesService } from '@sharedModule/service/utilities.service';
import { ListadoRegistroComponent } from './listado-registro.component';
import { LISTADO_REGISTRO } from './listado-registro.routes';



@NgModule({
  declarations: [
    ListadoRegistroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(LISTADO_REGISTRO),
  ],
  providers: [UtilitiesService]
})
export class ListadoRegistroModule { }