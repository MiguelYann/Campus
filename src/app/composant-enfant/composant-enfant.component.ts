import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  templateUrl: './composant-enfant.component.html',
  styleUrls: ['./composant-enfant.component.css']
})
export class ComposantEnfantComponent implements OnInit {
@Input() tetes;
  constructor() { }

  ngOnInit() {
    console.log(this.tetes)
  }

}
