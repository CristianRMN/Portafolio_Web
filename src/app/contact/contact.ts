import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  imgCorreo = 'assets/footerCorreo.png';
  sendMail() {
  window.location.href = "mailto:cr.m23@hotmail.com";
}

}
