import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, NavBar, Footer],
  selector: 'app-main',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
}
