import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { Movieapi } from '../../services/movieapi-service';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {

  movieService = inject(Movieapi);
  movies = this.movieService.movies;

}
