import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  /*selector: 'app-root',*/
  selector : 'my-heroes',
  templateUrl : './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [HeroService]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero : Hero;

  constructor(private heroService: HeroService,
                private router: Router ) { } //객체생성 및 의존성 주입

  onSelect(hero : Hero):void{
    this.selectedHero = hero;
  }
  /*
  getHeros(): void {
    this.heroes = this.heroService.getHeros();
  }
*/
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

