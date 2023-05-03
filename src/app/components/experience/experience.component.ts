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
      'description': 'W Netguru byłem odpowiedzialny za zakodowanie strony internetowej na platformie HubSpot. Do budowy strony wykorzystano HTML, CSS, JavaScript oraz HubL.',
      'role': 'Web Developer (Growth Team)',
      'logo': '../../../assets/img/netguru_logo.jpeg'
    },
    {
      "companyName": 'Autenti.com',
      "during": 'wrz 2022 - mar 2023 mies',
      'description': 'W ramach pracy w Autenti byłem odpowiedzialny za stworzenie strony internetowej na platformie HubSpot. Wiązało się to z wykorzystaniem HTML, CSS, JavaScript oraz HubL do budowy strony.',
      'role': 'Frontend Developer',
      'logo': '../../../assets/img/autenti_logo.jpeg'
    },
    {
      "companyName": 'Salesmanago',
      "during": 'mar 2021 - wrz 2022',
      'description': "W SalesManago byłem odpowiedzialny za utrzymaniem i rozwój aplikacji SaaS SalesManago, tworzenie nowych funkcjonalności z wykorzystaniem Angular, pokrycie testami nowego i istniejącego kodu, rozwój i poprawa istniejącego kodu m.in. Angular, AngularJS, jQuery, JSP, aktywny udział w code review, kodowanie formularzy / maili / Landing Page / skryptów dedykowanych oraz jako Team Leader organizacja pracy zespołu, raportowanie wyników zespołu, reagowanie na bieżące potrzeby zespołu oraz sprawy organizacyjne związane z pracą zespołu.",
      'role': 'Junior Frontend Developer/Frontend Developer',
      'logo': '../../../assets/img/salesmanago_logo.jpeg'
    },
    {
      "companyName": 'Veventy',
      "during": 'gru 2020 - lut 2021',
      'description': 'Pracując w Veventy byłem odpowiedzialny za wykonanie strony internetowej streamspace.pl',
      'role': 'Junior frontend developer',
      'logo': '../../../assets/img/veventy_logo.jpeg'
    },
  ]

}
