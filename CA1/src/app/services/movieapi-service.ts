import { HttpClient } from '@angular/common/http' ;
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';
import { MovieResults } from '../models/movie-results';
import { SearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root',
})
export class Movieapi {

  private _http = inject(HttpClient);

  
  public movies = signal<MovieResults[]>([]);
  public movie = signal<MovieResults | null>(null);

  public totalResults = signal<number>(0);
  public maxPages = signal<number>(0);
  public currentPage = signal<number>(1);
  
  private _baseUrl = "https://www.omdbapi.com/";
  private _apiKey = "c5005890";

  searchQuery = signal('');

  getMovie(id: string) {

    const url = `${this._baseUrl}?i=${id}&apikey=${this._apiKey}`;

    this._http.get<MovieResults>(url)
    .pipe(take(1))
      .subscribe(data => {
        console.log(data);
        this.movie.set(data);
      
    });   
  }

  searchMovie() {

    this.getMovie(this.searchQuery());
  }


    getMovies(title: string, page: number = 1)
    {
      const url = `${this._baseUrl}?s=${title}&page=${page}&apikey=${this._apiKey}`;

      this._http.get<SearchResults>(url)
      .pipe(take(1))
      .subscribe(data => {
        this.totalResults.set(Number(data.totalResults));
        this.movies.set(data.Search);
        this.maxPages.set(Math.ceil(this.totalResults() / 10));
        console.log(this.movies());
  
    });  
    }

    nextPage() {
      if (this.currentPage() < this.maxPages()) {
        this.currentPage.set(this.currentPage() + 1);
        this.getMovies(this.searchQuery(), this.currentPage());
        console.log(this.movies());
      }
    }

    previousPage() {
      if (this.currentPage() > 1) {
        this.currentPage.set(this.currentPage() - 1);
        this.getMovies(this.searchQuery(), this.currentPage());
        console.log(this.movies());
      }
    }
}
