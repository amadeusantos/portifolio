import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGithub } from './interfaces/user-github';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubAPI = 'https://api.github.com/'

  constructor(private httpClient: HttpClient) { }

  getInfoUser(username: string) {
    const user = this.httpClient.get<UserGithub>(this.githubAPI + 'users/' + username);

    return user;
  }

  getCountEventsUser(username: string) {
    let countEvents = 0;
    const events = this.httpClient.get<any[]>(this.githubAPI + 'users/' + username + '/events');

    events.pipe(
      map(lista => lista.length) // Conta o número de itens na lista
    )
    .subscribe(total => {
      countEvents = total; // Atribui o total de itens à variável totalItens
    });

    return countEvents;
  }

}
