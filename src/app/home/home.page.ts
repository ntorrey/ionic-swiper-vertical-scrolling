import { Component } from '@angular/core';
import SwiperCore from 'swiper'
import { IonicSlides } from '@ionic/angular';
SwiperCore.use([IonicSlides])

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
