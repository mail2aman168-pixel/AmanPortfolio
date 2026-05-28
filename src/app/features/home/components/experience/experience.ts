import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior UI Developer',
      company: 'Tech Innovations Pvt. Ltd.',
      duration: '2022 - Present',
      points: [
        'Lead the frontend development of enterprise-scale SaaS dashboards using Angular 17+.',
        'Developed reusable component libraries resulting in 40% faster development cycles.',
        'Collaborated with designers to ensure pixel-perfect conversion from Figma.',
        'Optimized application performance and accessibility compliance.'
      ]
    },
    {
      role: 'UI Developer',
      company: 'Digital Solutions Inc.',
      duration: '2019 - 2022',
      points: [
        'Built responsive web applications using React and Bootstrap.',
        'Implemented complex animations and transitions to enhance user engagement.',
        'Worked on cross-browser compatibility and mobile-first design strategies.',
        'Mentored junior developers on best practices in CSS and JavaScript.'
      ]
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Creative Web Agency',
      duration: '2018 - 2019',
      points: [
        'Assisted in the development of static and dynamic websites using HTML, CSS, and jQuery.',
        'Participated in daily stand-ups and code reviews.',
        'Help maintain and update existing client websites.'
      ]
    }
  ];
}
