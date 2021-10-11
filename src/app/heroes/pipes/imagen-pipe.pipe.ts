import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  img_url!: string;

  transform(heroe?: Heroe, ...args: unknown[]): unknown {

    if( !heroe?.id && !heroe?.alt_img ){
      this.img_url = `assets/no-image.png`;
    }else if ( heroe?.alt_img ){
      this.img_url = heroe?.alt_img;
    }else{
      this.img_url = `assets/heroes/${heroe?.id}.jpg`
    }

    return this.img_url;
  }

}
