import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  addNewItem(newItem:string){
    this.items.push(newItem);
  }
}


