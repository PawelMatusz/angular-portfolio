import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class GithubService {


  private apiUrl = 'https://api.github.com/users/PawelMatusz/repos';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Array<Repository>> {
    const url = `${this.apiUrl}`;
    return this.http.get<Array<Repository>>(url).pipe(
      map(repositories => repositories.filter(repo => repo.stargazers_count > 0)),
    );
  }
}
