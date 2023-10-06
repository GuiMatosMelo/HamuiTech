import { Component } from '@angular/core';
import { initTE, Collapse } from 'tw-elements';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit() {
    initTE({ Collapse });
  }
}
