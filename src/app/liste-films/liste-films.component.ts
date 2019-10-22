import {Component, Input, OnInit} from '@angular/core';
import {FiltreRecherche} from './filtre-recherche/filtre-recherche.model';
import { isNullOrUndefined } from 'util';
import {Film} from './Film';
import {Observable, of} from 'rxjs';
import {FilmService} from '../FilmService';
/*
Classe facilitant la communication entre la liste des films filtrés et le filtre
 */
@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {
  @Input() films: any;
  listeParam = new Map<string, any>();
  listeFilmObservable$: Observable<Film[]>;
  chargement = true;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.getData();
    this.listeFilmObservable$ = of(this.films);
  }

  initParam() {
    this.setListeParamElement('title', null);
    this.setListeParamElement('startYear', null);
  }

  setListeParamElement(key: string, value: any): void {
    if (!isNullOrUndefined(value)) {
      this.listeParam.set(key, value);
    } else {
      this.listeParam.delete(key);
    }
  }
/*
Pour un input donnée on souhaite chercher sur 2 attributs différents du films, on va donc construire deux paramètres de recherches pour
 chacun des attributs
 */
  onFiltrerFilm(filtreRecherche: FiltreRecherche) {
    this.initParam();
    if (filtreRecherche.title) {
      this.setListeParamElement('title',  this.toLowerCase(filtreRecherche.title));
    }
    if (filtreRecherche.startYear) {
      this.setListeParamElement('startYear', filtreRecherche.startYear.toString());
    }
    this.getData();
  }

  toLowerCase(value: string) {
    return value.toLocaleLowerCase();
  }

  onResetFiltre() {
    this.initParam();
    this.getData();
  }

  getData(): void {
    this.chargement = true;
    this.filmService.getJson()
      .subscribe(
        listFilmsResponse => {
          this.listeFilmObservable$ = of(listFilmsResponse);
          this.chargement = false;
        }
      );
  }
}
