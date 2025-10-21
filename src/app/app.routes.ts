import {Routes } from '@angular/router';
import { MusicProject } from './music-project/music-project'; 
import { GodotProject } from './godot-project/godot-project';
import { SymfonyProject } from './symfony-project/symfony-project';
import { ShowdownProject } from './showdown-project/showdown-project';
import { SimonProject } from './simon-project/simon-project';
import { Init } from './init/init';
import { ExtraOptions } from '@angular/router';



export const routes: Routes = [
    {path: '', component: Init},
    {path: 'musicProject', component: MusicProject},
    {path: 'godotProject', component: GodotProject},
    {path: 'symfonyProject', component: SymfonyProject},
    {path: 'showdownProject', component: ShowdownProject},
    {path: 'simonProject', component: SimonProject}
];

export const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};