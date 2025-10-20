import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Project } from '../project/project';
import { Contact } from '../contact/contact';

@Component({
  imports: [Home, About, Project, Contact],
  selector: 'app-init',
  templateUrl: './init.html',
  styleUrls: ['./init.css']
})
export class Init {

}
