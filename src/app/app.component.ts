import {Component, Input, OnInit, Output} from '@angular/core';
import {FilmService} from './FilmService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Canal +';
  listeFilms: any;
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.filmService.getJson().subscribe(data => {
      this.listeFilms = data;
   });
  }
}
