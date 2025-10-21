import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
  footerTwitter = 'assets/twitter.png';
  footerLinkedin = 'assets/footerLinkedin.png';
  footerGithub = 'assets/footerGitHub.png';

  loadResource(url: string){
    window.location.href = url;
  }

  sendEmail(){
      window.location.href = "mailto:cr.m23@hotmail.com";    
  }

  
}
