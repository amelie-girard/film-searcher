import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FilmService} from './FilmService';
import {HttpClientModule} from '@angular/common/http';
import {ListeFilmsComponent} from './liste-films/liste-films.component';
import {FiltreRechercheComponent} from './liste-films/filtre-recherche/filtre-recherche.component';
import {FormsModule} from '@angular/forms';
import {TableFilmsComponent} from './liste-films/table-films.component/table-films.component';
import {FilmFilterPipe} from './liste-films/table-films.component/filmFilterPipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditModalComponent} from './liste-films/modal/edit-modal/edit-modal.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilmsComponent,
    FiltreRechercheComponent,
    TableFilmsComponent,
    FilmFilterPipe,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    EditModalComponent
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
