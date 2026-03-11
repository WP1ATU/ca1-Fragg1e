import { Component, inject } from '@angular/core';
import { Movieapi } from '../../services/movieapi-service';
@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  movieService = inject(Movieapi);

  

}
