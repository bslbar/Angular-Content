import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullet',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styles: []
})
export class BulletComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
