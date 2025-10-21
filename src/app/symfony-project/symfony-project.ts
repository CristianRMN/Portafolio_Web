import { Component } from '@angular/core';

@Component({
  selector: 'app-symfony-project',
  imports: [],
  templateUrl: './symfony-project.html',
  styleUrl: './symfony-project.css'
})
export class SymfonyProject {
  imgSymfony = 'assets/prueba-tecnica.png';
  imgTv = 'assets/transparentMonitor.png';

  loadGitHubSymfony(){
    window.location.href = "https://github.com/CristianRMN/prueba-tecnica-openads";
  }

}
