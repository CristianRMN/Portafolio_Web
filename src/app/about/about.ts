import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  scrollContact() {
    const contact = document.getElementById('contact_id');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
