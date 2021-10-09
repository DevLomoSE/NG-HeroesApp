import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 8px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe?: Heroe

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap( ({ id }) => this.heroeService.getHeroeById(id) )
    )
    .subscribe( heroe => this.heroe=heroe );
  }

  goBack(){
    this.router.navigate(['/heroes/listado'])
  }

}
