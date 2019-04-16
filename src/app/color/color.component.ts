import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colory = 'reds';
  color = false;
  constructor() { }

  ngOnInit() {
  }
  changeColor(input) {
    this.color = !this.color;

    console.log(input.value);
    this.colory = input.value;
    input.value = '';
  }
  processReq(message: any){
   alert(message);

  }


}
