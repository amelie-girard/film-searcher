import {Pipe, PipeTransform} from '@angular/core';
import {Film} from '../Film';

@Pipe({
  name: 'filmFilter'
})
export class FilmFilterPipe implements PipeTransform {
  transform(films: Film[], listeParam: Map<string, string>): Film[] {
    if (!films || !listeParam || this.allFilterElementAreNull(listeParam)) {
      return films;
    }
    return films
      .filter(film => {
        if (listeParam.get('title')) {
        return this.isSimilar(film.originalTitle.toLocaleLowerCase(), listeParam.get('title')) &&
          this.isSimilar(film.primaryTitle.toLocaleLowerCase(), listeParam.get('title'));
      }
      return true;
    }).filter(film => {
        if (listeParam.get('startYear')) {
          return this.isSimilar(film.startYear.toString(), listeParam.get('startYear'));
        }
        return true;
      });
  }

  isSimilar(value_a: string, value_b: string ) {
    const result = value_a.indexOf(value_b) !== -1 ;
    return result;
  }
  allFilterElementAreNull(listeParam: Map<string, string>): boolean {
    return this.nullOrEmpty(listeParam.get('title')) &&
      this.nullOrEmpty(listeParam.get('startYear'));
  }

  nullOrEmpty(value: string): boolean {
    return !value || value.length === 0;
  }
}
