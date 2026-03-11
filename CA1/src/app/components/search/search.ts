import { Component } from '@angular/core';
import { Movieapi } from '../../services/movieapi-service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  movieService = inject(Movieapi);

}
