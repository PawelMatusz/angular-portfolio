import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InProgressComponent {

}
