import { Component, OnInit } from '@angular/core';
import { PopoverController, } from '@ionic/angular';

@Component({
  selector: 'popover-setting',
  templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnInit {
  site;
  record: String;
  constructor(
    private popoverController: PopoverController) { }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }

  

  dismissPopover() {
    // code for logout
    this.popoverController.dismiss(this.record);
  }

  selectedItemPopover(value){
    this.record = value;  
  }
  
}