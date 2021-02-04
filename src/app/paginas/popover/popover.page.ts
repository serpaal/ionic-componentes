import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
 
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      componentProps: {
        site: siteInfo
      },
      translucent: true,
      backdropDismiss: false
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    console.log('recibiendo valor');
    console.log(data);
  }

  ngOnInit() {
  }

}
