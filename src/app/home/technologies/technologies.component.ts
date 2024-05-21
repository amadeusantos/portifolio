import { Component } from '@angular/core';
import { Technology } from './model/technology';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  technologies: Technology[] = [];
  constructor() {
    this.technologies = [
      {
        _id: 'q',
        icon: 'https://www.edivaldobrito.com.br/wp-content/uploads/2023/03/java-se-20-lancado-com-varias-atualizacoes.webp',
        name: 'Java',
      },
      {
        _id: 'q',
        icon: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/01/07093212/PYTHON.png',
        name: 'Python',
      },
      {
        _id: 'q',
        icon: 'https://miro.medium.com/v2/resize:fit:1400/1*moJeTvW97yShLB7URRj5Kg.png',
        name: 'TypeScript',
      },
      {
        _id: 'q',
        icon: 'https://appmaster.io/api/_files/QsSz55Kp9QZnZyprJbMRcX/download/',
        name: 'Docker',
      },
    ];
  }
}
