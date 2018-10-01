import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  // component's CSS element selector
  selector: 'app-heroes',
  // location of component's template file
  templateUrl: './heroes.component.html',
  // location of component's private css styles
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { // "export" nessesary to import it later e.g in AppModule

  hero: Hero = {
    id: 1,
    name: 'Balodil'
  };

  constructor() { }

  ngOnInit() {
  }

}
