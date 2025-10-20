import { Component } from '@angular/core';

@Component({
  selector: 'app-godot-project',
  imports: [],
  templateUrl: './godot-project.html',
  styleUrl: './godot-project.css'
})
export class GodotProject {
  imgGodot = 'assets/areaZero.gif';
  imgTv = 'assets/transparentMonitor.png';

  loadGitHubGodot(){
    window.location.href = "https://github.com/CristianRMN/Zero-Area";
  }

}
