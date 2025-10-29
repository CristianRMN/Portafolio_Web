import { Component, OnInit } from '@angular/core';
import { Email } from '../services/email';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-contact',
  imports: [NgxCaptchaModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  siteKey = environment.recaptchaSiteKey;

  constructor(private Email: Email, private snackBar: MatSnackBar) { }

  presioneCaptcha: boolean = false;
  captchatext: string | null = null;

  showAction(success: string, action: string) {
    this.snackBar.open(success, action, {
      duration: 3000
    });
  }



  readValues(event: PointerEvent) {
    event.preventDefault();
    const nombre = document.getElementById('nombre_id') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos_id') as HTMLInputElement;
    const asunto = document.getElementById('asunto_id') as HTMLInputElement;
    const correo = document.getElementById('correo_id') as HTMLInputElement;
    const mensaje = document.getElementById('mensaje_id') as HTMLInputElement;

    if (!nombre.value && nombre.value.trim() === "" || !apellidos.value && apellidos.value.trim() === "" ||
      !asunto.value && asunto.value.trim() === "" || !correo.value && correo.value.trim() === "" ||
      !mensaje.value && mensaje.value.trim() === "") {

      this.showAction("Rellene los campos faltantes", "cerrar");
      return;
    }

    if (!this.presioneCaptcha && this.captchatext === null) {
      this.showAction("Por favor, rellene el captcha", "cerrar");
      return;
    }

    const data = {
      "nombre": nombre.value,
      "apellidos": apellidos.value,
      "asunto": asunto.value,
      "correo": correo.value,
      "mensaje": mensaje.value,
      "captcha": this.captchatext
    };

    this.Email.sendEmail(data).subscribe({
      next: (response) => {
        this.showAction(response.mensaje, "cerrar");

      },
      error: (error) => {
        this.showAction(error.mensaje, "cerrar");
      }
    });
  }

  captchaResolved(valido: string) {
    if (valido) {
      this.presioneCaptcha = true;
      this.captchatext = valido;
    }
    else {
      this.presioneCaptcha = true;
      this.captchatext = null;
    }
  }

  imgCorreo = 'assets/footerCorreo.png';
  sendMail() {
    window.location.href = "mailto:cr.m23@hotmail.com";
  }

}
