import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  imgAboutPath = 'assets/imagenCristian.png';

  scrollAbout() {
    const about = document.getElementById('about_id');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollProyects() {
    const projects = document.getElementById('proyects_id');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollContact() {
    const contact = document.getElementById('contact_id');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  reloadPagina(){
    const inicio = document.getElementById('init_id');
    if (inicio) {
      inicio.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
