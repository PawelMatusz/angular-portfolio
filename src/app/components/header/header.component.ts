import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
navbarOpen: boolean = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
   paths:String[] = [
    'experience',
    'projects',
    'tech-stack',
    'about',
    'contact'
  ]

}
