import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.', 'Dom.' ];
  customPickerOptions: any;
  constructor() { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => console.log(event)
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
  }
  changeDateValue(ev){
    console.dir(ev);

  }

}
