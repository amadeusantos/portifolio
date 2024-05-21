import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent, TechnologiesComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = 'https://images2.alphacoders.com/132/1325519.jpg';
    //'https://wallpaperservices.azurewebsites.net/Power-Your-Dreams-Xbox/wide.png';
  }
}
