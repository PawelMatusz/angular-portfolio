import { ChangeDetectionStrategy, Component} from '@angular/core';

import { GithubService } from '../projects.service';
import { Observable, Subject, Subscription, map } from 'rxjs';
import { Repository } from '../repository';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  repositories$: Subject<Repository[]> = new Subject();
  subscribe: Subscription = new Subscription;
  constructor(private githubService: GithubService){}

  ngOnInit(): void {
   this.subscribe = this.githubService.getRepositories().pipe(
      map(repositories => repositories.filter(repo => repo.stargazers_count > 0 && !repo.fork)),
    ).subscribe(
      (response: Repository[]) => {
        this.repositories$.next(response);
        console.log(response)
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()

  }
}
