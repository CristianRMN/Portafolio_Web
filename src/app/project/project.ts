import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  constructor(private router: Router, private scroller: ViewportScroller) { }
  imgSpoty = 'assets/ImagenSpotify.png';
  imgTv = 'assets/transparentMonitor.png';
  imgAreaZero = 'assets/areaZero.gif';
  imgPruebaTecnica = 'assets/prueba-tecnica.png';
  imgPokemonShowdown = 'assets/showdown.gif';
  imgMovil = 'assets/pantallaMovil.png';
  imgSimon = 'assets/SimonDice.gif';

  goToSection(path: string, id: string) {

      this.router.navigate([path]).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor(id);
        }, 100);
      });
    }

  
}

