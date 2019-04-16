import { Component, OnInit } from '@angular/core';
import { Personnes } from 'src/app/modeles/Personnes';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personnes[];
  selected: Personnes;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personnes( 1, 'tsamba', 'miguel', 18, 'https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 12, 'student'),
      new Personnes( 1, 'toto', 'tata', 48, 'https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80', 13, 'student'),
    ];
  }
  select(personne){
    this.selected = personne;
  }

}
