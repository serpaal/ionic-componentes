import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { Componente } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Observable<Componente[]>;
  
  constructor(private menuService: MenuService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.componentes = this.menuService.getMenu();
  }

}
