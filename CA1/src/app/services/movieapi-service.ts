import { HttpClient } from '@angular/common/http' ;
import { inject, Inject, Injectable, input, output, signal } from '@angular/core';
import { take } from 'rxjs';
import { Moviedetails } from '../models/moviedetails';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class Movieapi {

  public movie = signal<Moviedetails>({Response: "False"});

  private _http = inject(HttpClient);
  
  private _baseUrl = "https://www.omdbapi.com/";
  private _apiKey = "c5005890";

  searchQuery = signal('');

  getMovie(title: string) {

    const url = `${this._baseUrl}?t=${title}&apikey=${this._apiKey}`;

    this._http.get<Moviedetails>(url)
    .pipe(take(1))
      .subscribe(data => {
        this.movie.set(data);
      
    });

    
  }

  searchMovie() {

    this.getMovie(this.searchQuery());



    }





}