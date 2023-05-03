import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubService } from './projects.service';
import { Subject } from 'rxjs';
import { Repository } from './repository';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  repositories$: Subject<Repository[]> = new Subject();

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe(
      (response: Repository[]) => {
        this.repositories$.next(response);
        console.log(response)
      }
    );

  }

}
