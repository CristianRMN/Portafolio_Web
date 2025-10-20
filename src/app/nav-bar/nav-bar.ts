import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  imgAboutPath = 'assets/imagenCristian.png';
  constructor(private router: Router, private scroller: ViewportScroller) { }

  scrollAbout() {
    const about = document.getElementById('about_id');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('about_id');
        }, 100);
      });
    }
  }

  scrollProyects() {
    const projects = document.getElementById('proyects_id');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('proyects_id');
        }, 100);
      });
    }
  }

  scrollContact() {
    const contact = document.getElementById('contact_id');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('contact_id');
        }, 100);
      });
    }
  }

  reloadPagina() {
    const inicio = document.getElementById('init_id');
    if (inicio) {
      inicio.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor('init_id');
        }, 100);
      });
    }
  }
}
