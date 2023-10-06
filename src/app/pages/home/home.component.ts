import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  getImageUrl() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      return '../../../assets/images/mainhome_2.jpg';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      return '../../../assets/images/mainhome.png';
    } else {
      return '../../../assets/images/mainhome.png';
    }
  }
}

