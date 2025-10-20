import {Routes } from '@angular/router';
import { MusicProject } from './music-project/music-project'; 
import { GodotProject } from './godot-project/godot-project';
import { Init } from './init/init';
import { ExtraOptions } from '@angular/router';



export const routes: Routes = [
    {path: '', component: Init},
    {path: 'musicProject', component: MusicProject},
    {path: 'godotProject', component: GodotProject}
];

export const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};