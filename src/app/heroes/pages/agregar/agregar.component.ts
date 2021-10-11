import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers =[
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
                        .pipe( 
                          switchMap( ({id}) => this.heroesService.getHeroeById(id) )
                        )
                        .subscribe( heroe => this.heroe = heroe );
  }

  setAction(){

  }

  guardarHeroe(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if( this.heroe.id){
      this.heroesService.updateHeroe(this.heroe)
                        .subscribe( heroe => {
                                                console.log(heroe)
                                             });
    }else{
      this.heroesService.saveHeroe(this.heroe)
                        .subscribe( heroe => {
                                                this.router.navigate(['/heroes/editar', heroe.id]);
                                             });
    }
  }

}
