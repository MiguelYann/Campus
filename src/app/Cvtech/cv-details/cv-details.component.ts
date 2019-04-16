import { Component, OnInit, Input } from '@angular/core';
import { Personnes } from '../../modeles/Personnes';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {

  @Input()person: Personnes;
  constructor() { }

  ngOnInit() {
  }

}
