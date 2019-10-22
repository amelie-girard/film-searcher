import {Component, Input, OnChanges} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Film} from '../Film';
import {EditModalComponent} from '../modal/edit-modal/edit-modal.component';
import {MatDialog} from '@angular/material';
import {FilmService} from '../../FilmService';

@Component({
  selector: 'app-table-films',
  templateUrl: 'table-films.component.html',
  styleUrls: ['table-films.component.css']
})
export class TableFilmsComponent  implements OnChanges {
  @Input() films: Observable<Film[]>;
  @Input() listeParam: Map<string, any>;
  listFilms: Film[];

  constructor(public dialog: MatDialog, public filmService: FilmService) {}

  ngOnChanges(): void {
    this.films.subscribe( list => {
      this.listFilms = list;
    });
  }

  openEditModal(film: Film) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '250px',
      data: {film: film}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.save( result.data);
      }
    });
  }

  save(film: Film) {
    this.filmService.modifyMovie(film).subscribe(
      (listFilmsResponse: Film[]) => {
        this.films = of(listFilmsResponse);
      }
    );
}


  displayGenre( genres: string[]) {
    let displayedGenre = '';
    if (genres && genres.length > 0) {
      for (const genre of genres) {
        displayedGenre += ' ' + genre;
      }
    }
   return displayedGenre;
  }
}
