import { Component, OnInit } from '@angular/core';

interface Avatar {
  img:String,
  name:String
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})


export class AvatarPage implements OnInit {
  avatares:Avatar[];
  constructor() { }

  ngOnInit() {
    this.avatares = [
      { img: 'assets/img/batman.jpg', name: 'El Caballero de la Noche'},
      { img: 'assets/img/superman.jpg', name: 'El Hombre de Acero'}
    ]
  }

}
