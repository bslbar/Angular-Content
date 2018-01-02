import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  template: `
   <b>{{ nameFruit }}</b> | <button (click)="removeFruit()">-</button>
  `,
  styles: []
})
export class FruitComponent implements OnInit, OnDestroy {
  @Input() nameFruit: string;
  @Output() removeElement: EventEmitter<string> = new EventEmitter():
  constructor() { }

  ngOnInit() {
    console.log('component created', this.nameFruit);
  }

  removeFruit() {
    this.removeElement.emit(this.nameFruit);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy ` + this.nameFruit);
  }
}
