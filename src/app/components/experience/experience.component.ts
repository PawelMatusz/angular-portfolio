import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExperienceComponent {
  experiences:Experience[] = [
    {
      "companyName": 'Netguru',
      "during": 'mar 2023',
      'description': "At Netguru, I was responsible for coding a website on the HubSpot platform. To build the site, HTML, CSS, JavaScript, and HubL were used.",
      'role': 'Web Developer (Growth Team)',
      'logo': '../../../assets/img/netguru_logo.jpeg'
    },
    {
      "companyName": 'Autenti.com',
      "during": 'wrz 2022 - mar 2023 mies',
      'description': "As part of my work at Autenti, I was responsible for creating a website on the HubSpot platform. This involved using HTML, CSS, JavaScript, and HubL to build the site.",
      'role': 'Frontend Developer',
      'logo': '../../../assets/img/autenti_logo.jpeg'
    },
    {
      "companyName": 'Salesmanago',
      "during": 'mar 2021 - wrz 2022',
      'description': "At SalesManago, I was responsible for maintaining and developing the SalesManago SaaS application, creating new functionalities using Angular, providing test coverage for new and existing code, developing and improving existing code including Angular, AngularJS, jQuery, JSP, actively participating in code reviews, coding forms/emails/Landing Pages/dedicated scripts, and as a Team Leader, organizing the team's work, reporting on team results, responding to the team's current needs, and handling organizational matters related to team work.",
      'role': 'Junior Frontend Developer/Frontend Developer',
      'logo': '../../../assets/img/salesmanago_logo.jpeg'
    },
    {
      "companyName": 'Veventy',
      "during": 'gru 2020 - lut 2021',
      'description': "While working at Veventy, I was responsible for creating the streamspace.pl website.",
      'role': 'Junior frontend developer',
      'logo': '../../../assets/img/veventy_logo.jpeg'
    },
  ]

}
