import { Component, OnInit } from '@angular/core';

interface Slide {
  title: String,
  description: String,
  image: String
}

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  slides: Slide[] = [
    { 
      title: 'Welcome', 
      description: 'ionic conference app is a practical preview of the ionic framework in action, and a demonstration of proper code use.',
      image: 'assets/img/slide-1.jpg'
    }, 
    {
      title: 'What is Ionic?',
      description: 'Ionic Framework is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
      image: 'assets/img/slide-2.jpg'
    },
    {
      title: 'What is Ionic Appflow?',
      description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.',
      image: 'assets/img/slide-3.png'
    }
  ]
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
