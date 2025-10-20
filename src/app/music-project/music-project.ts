import { Component } from '@angular/core';
@Component({
  selector: 'app-music-project',
  templateUrl: './music-project.html',
  styleUrl: './music-project.css'
})
export class MusicProject {
  imgSpoty = 'assets/ImagenSpotify.png';
  imgTv = 'assets/transparentMonitor.png';

  loadGitHubMusic(){
    window.location.href = "https://github.com/CristianRMN/App_Musical";
  }

  
  }

