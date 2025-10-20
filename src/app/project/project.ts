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

  goToMusicSpoty() {

      this.router.navigate(['/musicProject']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('spoty_id');
        }, 100);
      });
    }

  goToGodot() {
      this.router.navigate(['/godotProject']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('godot_id');
        }, 100);
      });
    }
}
