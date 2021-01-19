import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string,
  nombre: string,
  direccion: string,
  color: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[] = [
    { icono: 'person-outline', nombre: 'Action Sheet', direccion: '/action-sheet', color: 'primary' },
    { icono: 'pricetag', nombre: 'Alert', direccion: '/alert', color: 'secondary' },
    { icono: 'pizza', nombre: 'Fab', direccion: '/fab', color: 'danger' },
    { icono: 'calendar-outline', nombre: 'DateTime', direccion: '/datetime', color: 'success' },
    { icono: 'albums-outline', nombre: 'Buttons', direccion: '/button', color: 'warning' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
