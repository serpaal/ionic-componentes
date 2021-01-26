import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {

  datos = [
    { nombre: 'primary', selector: false },
    { nombre: 'secondary', selector: false },
    { nombre: 'warning', selector: true }
  ];

  data = [
    { nombre: 'danger', selector: true },
    { nombre: 'success', selector: false },
    { nombre: 'warning', selector: true }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.data);
  }

}
