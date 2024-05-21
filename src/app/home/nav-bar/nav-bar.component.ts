import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { GithubService } from '../../services/github.service';
import { UserGithub } from '../../services/interfaces/user-github';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgxPhosphorIconsModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  currentHour: string;
  currentMinute: string;

  constructor() {

    // this.user = githubService.getInfoUser("amadeusantos");

    const date = new Date();
    this.currentHour = date.getHours().toString().padStart(2, '0');
    this.currentMinute = date.getMinutes().toString().padStart(2, '0');
  }


}
