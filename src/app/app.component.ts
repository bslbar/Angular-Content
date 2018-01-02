import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <hr>
      <label>Add a new fruit:</label>
      <input [(ngModel)]="addedFruit">
      <button (click)="addNewFruit(addedFruit)">Add</button>
      <hr>
      <div *ngFor="let fruit of fruits">
        <app-bullet>
          <app-fruit [nameFruit]="fruit" (removeElement)="eliminatedFruit($event)"></app-fruit>
        </app-bullet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Supermarket';
  fruits = ['Apple', 'Pear', 'Kiwi', 'Lemon'];
  addedFruit;

  addNewFruit(newFruit) {
    this.fruits.push(newFruit);
  }

  eliminatedFruit(removedFruit) {
    this.fruits.splice(
      this.fruits.indexOf(removedFruit),
      1
    );
  }

}
