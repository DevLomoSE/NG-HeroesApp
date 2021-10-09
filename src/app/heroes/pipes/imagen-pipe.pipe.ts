import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  img_url!: string;

  transform(heroe?: Heroe, ...args: unknown[]): unknown {
    this.img_url  = (heroe?.id) ? `assets/heroes/${heroe?.id}.jpg`: `assets/no-image.png`;
    return this.img_url;
  }

}
