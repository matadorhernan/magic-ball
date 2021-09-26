import { AfterViewInit, Component } from '@angular/core';
import { replace } from 'feather-icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    replace();
  }
}
