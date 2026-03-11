import { Component } from '@angular/core';
import { Movieapi } from '../../services/movieapi-service';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  movieService = inject(Movieapi);
  searchQuery = this.movieService.searchQuery;
}
