import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CheckerComponent } from './components/checker/checker.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    InProgressComponent,
    NavigationComponent,
    CheckerComponent,
    TechStackComponent,
    ExperienceComponent,
    AboutComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectComponent,
    HeroComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
