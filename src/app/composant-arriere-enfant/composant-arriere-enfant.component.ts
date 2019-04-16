import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-composant-arriere-enfant',
  templateUrl: './composant-arriere-enfant.component.html',
  styleUrls: ['./composant-arriere-enfant.component.css']
})
export class ComposantArriereEnfantComponent implements OnInit {

  @Input() tete = 'yellow';
  @Output() sendRequestToData = new EventEmitter();

  constructor() {
  }
  onClick(){
console.log(this.tete) }
  ngOnInit() {

    }
    sendEvent(){
      this.sendRequestToData.emit(
        this.tete = 'green'
      )
    }

  }

