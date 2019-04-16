import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personnes } from '../../modeles/Personnes';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent implements OnInit {
@Input() personne: Personnes;
@Output() requestToData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectPersonne(){
    this.requestToData.emit(
      this.personne
    )
  }

}
