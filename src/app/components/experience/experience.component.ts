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
      'description': 'Rozwój oraz utrzymanie strony www.netguru.com - layoff',
      'role': 'Web Developer (Growth Team)',
      'logo': '../../../assets/img/netguru_logo.jpeg'
    },
    {
      "companyName": 'Autenti.com',
      "during": 'wrz 2022 - mar 2023 mies',
      'description': 'Rozwój istniejących oraz tworzenie nowych stron Autenti <br> Technologie: HubSpot, HTML, CSS, ES6+',
      'role': 'Frontend Developer',
      'logo': '../../../assets/img/autenti_logo.jpeg'
    },
    {
      "companyName": 'Salesmanago',
      "during": 'mar 2021 - wrz 2022',
      'description': `
      Utrzymanie i rozwój aplikacji SaaS
      - Tworzenie nowych funkcjonalności z wykorzystaniem Angular,
      - Pokrycie testami nowego oraz istniejącego kodu,
      -Rozwój oraz poprawa istniejącego kodu m.in AngularJS, jquery, JSP,
      -Czynny udział w code review,
      - kodowanie formularzy / maili / Landing Page / skryptow dedykowanych,
      - organizacja pracy zespołu,
      - raportowanie wyników zespołu,
      - reagowanie na bieżące potrzeby zespołu,
      - sprawy organizacyjne związane z pracą zespołu,
      `,
      'role': 'Frontend',
      'logo': '../../../assets/img/salesmanago_logo.jpeg'
    },
    {
      "companyName": 'Junior frontend developer',
      "during": 'gru 2020 - lut 2021',
      'description': 'Rozwój istniejących oraz tworzenie nowych stron Autenti <br> Technologie: HubSpot, HTML, CSS, ES6+',
      'role': 'Frontend Developer',
      'logo': '../../../assets/img/veventy_logo.jpeg'
    },
  ]

}
