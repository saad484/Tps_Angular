import { Component } from '@angular/core';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  cmpt : number=0;
  decrimenter(){
    this.cmpt--;
  };
  incrimenter(){
    this.cmpt++;
  };

}

