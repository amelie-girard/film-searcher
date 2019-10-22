import {Component, EventEmitter, Output} from '@angular/core';
import {FiltreRecherche} from './filtre-recherche.model';
/*
Classe contenant le filtre de recherche composé de 2 input : 1 titre et 1 année
 */
@Component({
  selector: 'app-filtre-recherche',
  templateUrl: './filtre-recherche.component.html',
  styleUrls: ['./filtre-recherche.component.css']
})
export class FiltreRechercheComponent {
  @Output() filtrerFilms = new EventEmitter<FiltreRecherche>();
  @Output() resetFiltre = new EventEmitter<FiltreRecherche>();
  filtreRecherche: FiltreRecherche;
  constructor() {
    this.filtreRecherche = new FiltreRecherche('', null);
  }

  reset() {
    this.filtreRecherche = new FiltreRecherche('', null);
    this.resetFiltre.emit(this.filtreRecherche);
  }

  filtrer() {
    this.filtrerFilms.emit(this.filtreRecherche);
  }
}
