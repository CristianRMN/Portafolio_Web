import { Component } from '@angular/core';

@Component({
  selector: 'app-showdown-project',
  imports: [],
  templateUrl: './showdown-project.html',
  styleUrl: './showdown-project.css'
})
export class ShowdownProject {
  imgPokemon = 'assets/showdown.gif';
  imgTv = 'assets/transparentMonitor.png';

  loadGitHubPokemon(){
    window.location.href = "https://github.com/CristianRMN/PokemonShowdown";
  }
}
