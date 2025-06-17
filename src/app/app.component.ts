import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
