import { Component } from '@angular/core';
import { IHero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: IHero = {
    id: 1,
    name: 'Windstorm',
  };
}