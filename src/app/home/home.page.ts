import { AfterViewInit, Component } from '@angular/core';
import { replace } from 'feather-icons';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  private magicResponses:string[] = ['maybe', 'yes', 'no'];

  public response$!:BehaviorSubject<string>;

  constructor() {
    this.response$ = new BehaviorSubject(null);
  }

  ngAfterViewInit(): void {
    replace();
  }

  public onScreenTouched(): void {
    const randIndex = Math.floor(Math.random() * this.magicResponses.length);
    this.response$.next(this.magicResponses[randIndex])
  }
}
