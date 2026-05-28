import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ProjectsComponent } from './components/projects/projects';
import { InterestsComponent } from './components/interests/interests';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
