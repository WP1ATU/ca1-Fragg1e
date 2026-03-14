import { Component, inject, input } from '@angular/core';
import { Movieapi } from '../../services/movieapi-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  movieService = inject(Movieapi);
  protected id = input.required<string>();

  ngOnInit() {
    let movieID = this.id();
    this.movieService.getMovie(movieID);
  }
}
