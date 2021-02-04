import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss({
      firstName: 'Pablo',
      lastName: 'Alvarado',
      middleInitial: 'Sr.'
    });
  }

}
