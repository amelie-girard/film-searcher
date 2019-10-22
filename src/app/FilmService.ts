import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from './liste-films/Film';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FilmService {
  // Service pour récupérer mon JSON
  constructor (private http: HttpClient) {
  }

  public getJson(): Observable<any> {
    return this.http.get('http://localhost:3000/films',  { headers: httpOptions.headers});
  }

  public modifyMovie(film: Film): Observable<any> {
    const url = 'http://localhost:3000/films/' + film.id;
    return this.http.put(url, film);
  }
}
