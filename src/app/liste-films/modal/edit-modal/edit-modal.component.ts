import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Film} from '../../Film';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  filmModifie: Film;


  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.filmModifie = data.film;
  }

  ngOnInit() {
  }

  saveFilm() {
    this.dialogRef.close({event: 'close', data: this.filmModifie });
  }

  close() {
    this.dialogRef.close();
  }

}
