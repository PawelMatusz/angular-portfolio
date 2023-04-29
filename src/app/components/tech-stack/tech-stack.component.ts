import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechStackComponent {
  technologies = [
    { name: 'Angular', icon: '../../../assets/img/angular-icon.svg' },
    { name: 'React', icon: '../../../assets/img/react-icon.svg' },
    { name: 'HTML', icon: '../../../assets/img/html-icon.svg' },
    { name: 'CSS3', icon: '../../../assets/img/css-icon.svg' },
    { name: 'JavaScript', icon: '../../../assets/img/js-icon.svg' },
    { name: 'TypeScript', icon: '../../../assets/img/ts-icon.svg' },
    { name: 'SCSS', icon: '../../../assets/img/sass-icon.svg' },
    { name: 'GIT', icon: '../../../assets/img/git-icon.svg' },
    { name: 'NETLIFY', icon: '../../../assets/img/netlify-icon.svg' },
    { name: 'HUBSPOT', icon: '../../../assets/img/hubspot-icon.svg' },
  ];
}
