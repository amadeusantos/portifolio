import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Project } from './model/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [];
  
  constructor() {
    this.projects = [
      {
        _id: 'a',
        icon: 'https://sm.ign.com/ign_br/game/s/starfield/starfield_23ps.jpg',
        background: '',
        name: 'Starfield',
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
      {
        _id: 'a',
        icon: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/B9YuXUOWOVixhpLYgGAZX9BU.jpg',
        background: '',
        name: 'Diabo IV',
      },
      {
        _id: 'a',
        icon: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/2714/d7a1f9339c13b4284fcba2acd8d5e4ba2867fa6ef3b8b857.png',
        background: '',
        name: "Assassin's Creed Mirage",
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
      {
        _id: 'a',
        icon: 'https://i1.sndcdn.com/artworks-000246442896-p9dfae-t500x500.jpg',
        background: '',
        name: 'Fortinaite',
      },
    ];
  }
}
