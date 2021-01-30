import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  alumnos: String[] = ['Dulia', 'Henry', 'Rudy', 'Ubaldo', 'Ronald'];
  constructor() { }

  ngOnInit() {
  }

  doReorder(ev){
    console.dir(ev);
    ev.detail.complete();
    this.insertAndShift(this.alumnos, ev.detail.from, ev.detail.to)
    console.dir(this.alumnos);
  }  

  insertAndShift(arr, from, to) {
    let cutOut = arr.splice(from, 1) [0]; // cut the element at index 'from'
    arr.splice(to, 0, cutOut);            // insert it at index 'to'
  }

}
