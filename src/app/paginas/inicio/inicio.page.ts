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
    { icono: 'albums-outline', nombre: 'Buttons', direccion: '/button', color: 'warning' },
    { icono: 'accessibility', nombre: 'Avatar', direccion: '/avatar', color: 'terciary' },
    { icono: 'card-outline', nombre: 'Cards', direccion: '/cards', color: 'success' },
    { icono: 'albums-outline', nombre: 'Slides', direccion: '/slide', color: 'success' },
    { icono: 'checkmark-outline', nombre: 'Checks', direccion: '/checks', color: 'success' },
    { icono: 'grid-outline', nombre: 'Grid', direccion: '/grid', color: 'success' },
    { icono: 'information-outline', nombre: 'Toast', direccion: '/toast', color: 'success' },
    { icono: 'chatbox-outline', nombre: 'Popover', direccion: '/popover', color: 'success' },
    { icono: 'reader-outline', nombre: 'Input', direccion: '/input', color: 'success' }, 
    { icono: 'reload-outline', nombre: 'Scroll', direccion: '/scroll', color: 'success' }, 
    { icono: 'accessibility-outline', nombre: 'Users', direccion: '/users', color: 'success' }, 
    { icono: 'reorder-four-outline', nombre: 'Reorder', direccion: '/reorder', color: 'success' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
