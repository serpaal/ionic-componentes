import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  datos: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infinityScroll: IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(e){
    if(this.datos.length > 50){
      this.infinityScroll.complete;
      this.infinityScroll.disabled = true;
      return;
    }
    setTimeout(() =>{
        const nuevos: any[] = Array(20);
        this.datos.push(...nuevos);
        e.target.complete();
    }, 200);
  }
}
