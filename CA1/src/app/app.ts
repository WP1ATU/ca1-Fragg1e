import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Details } from "./components/details/details";
import { Search } from './components/search/search';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Details, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CA1');
}
