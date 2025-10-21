import { Component } from '@angular/core';

@Component({
  selector: 'app-simon-project',
  imports: [],
  templateUrl: './simon-project.html',
  styleUrl: './simon-project.css'
})
export class SimonProject {
  imgSimon = 'assets/SimonDice.gif';
  imgTv = 'assets/transparentMonitor.png';

  loadGitHubSimon(){
    window.location.href = "https://github.com/CristianRMN/SimonDice";
  }
}
