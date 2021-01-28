import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  usuario = {
    nombre: "",
    password: ""
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm(form){
    console.dir(this.usuario);
    console.dir(form);
  }

}
