import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  title = 'CelularesAngularApp';
  climas: any[] = [];

  constructor() { }
}
