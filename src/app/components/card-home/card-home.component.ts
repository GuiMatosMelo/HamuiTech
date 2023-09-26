import { Component, Input } from '@angular/core';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  chartIcon = faChartSimple;
  globeIcon = faGlobe;
  thumbsIcon = faThumbsUp;
}
