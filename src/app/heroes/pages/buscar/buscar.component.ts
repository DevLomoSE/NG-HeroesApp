import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe, Publisher } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string;
  heroes: Heroe[];
  selectedHeroe?: Heroe | undefined;

  constructor(
    private heroesService: HeroesService
  ) {
    this.termino = '';
    this.heroes = [];
  }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino).subscribe(response => this.heroes = response);
  }

  selectedOption( event: MatAutocompleteSelectedEvent ){
    this.selectedHeroe = undefined;
    if(event.option.value !== ""){
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
      
      this.heroesService.getHeroeById( heroe.id! )
                        .subscribe( heroe => this.selectedHeroe = heroe);
    }
  }

}
