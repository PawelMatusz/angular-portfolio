import { Component, OnInit } from '@angular/core';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[EnvService]
})
export class AppComponent implements OnInit {
  envoirments: string = ''
  constructor(private env: EnvService){}

  ngOnInit(): void {
    this.envoirments = this.env.envoirment
  }
}
