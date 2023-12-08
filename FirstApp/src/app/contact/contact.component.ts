import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Output() newItemEvent = new EventEmitter<string>();
    addNewItem(value:string){
      this.newItemEvent.emit(value);
    }
}

