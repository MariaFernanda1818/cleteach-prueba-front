import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-registro',
  templateUrl: './listado-registro.component.html',
  styleUrl: './listado-registro.component.scss'
})
export class ListadoRegistroComponent {
  data = [
    { title: 'Tarjeta 1', subtitle: 'Subtítulo 1', description: 'Descripción de la tarjeta 1.' },
    { title: 'Tarjeta 2', subtitle: 'Subtítulo 2', description: 'Descripción de la tarjeta 2.' },
    { title: 'Tarjeta 3', subtitle: 'Subtítulo 3', description: 'Descripción de la tarjeta 3.' },
    { title: 'Tarjeta 4', subtitle: 'Subtítulo 4', description: 'Descripción de la tarjeta 4.' },
    { title: 'Tarjeta 5', subtitle: 'Subtítulo 5', description: 'Descripción de la tarjeta 5.' },
    { title: 'Tarjeta 6', subtitle: 'Subtítulo 6', description: 'Descripción de la tarjeta 6.' },
    { title: 'Tarjeta 7', subtitle: 'Subtítulo 7', description: 'Descripción de la tarjeta 7.' },
    { title: 'Tarjeta 8', subtitle: 'Subtítulo 8', description: 'Descripción de la tarjeta 8.' }
  ];
}
