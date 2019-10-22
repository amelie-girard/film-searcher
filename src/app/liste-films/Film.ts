export class Film {
  id: string;
  titleType: string;
  primaryTitle: string;
  public originalTitle: string;
  isAdult: boolean;
  startYear: number;
  endYear: number;
  runtimeMinutes: number;
  genres: [string];
}
