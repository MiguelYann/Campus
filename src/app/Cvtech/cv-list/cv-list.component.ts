import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personnes } from '../../modeles/Personnes';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {
@Input() personnes: Personnes[];
@Output() personneList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

processReq(message: any){
  console.log(message);

}
selectPersonne(selectedPersonne){
  this.personneList.emit(
    selectedPersonne
  )
}
}
