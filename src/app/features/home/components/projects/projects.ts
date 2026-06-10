import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Targa Fotos',
      description: 'A premium photo printing and gifting platform. Spearheaded the UI development using Angular, focusing on a seamless user journey from image upload to personalized product creation. Implemented complex canvas-based editors and real-time preview features.',
      image: 'https://placehold.co/800x500/111827/F8FAFC?text=Targa+Fotos',
      tech: ['Angular', 'SCSS', 'Canvas API', 'RxJS'],
      link: 'https://www.targa-fotos.de/'
    },
    {
      title: 'Fotokasten',
      description: 'An industry-leading e-commerce site for personalized photo products. Developed high-performance, responsive interfaces and reusable component libraries. Optimized checkout flows and integrated sophisticated micro-interactions to enhance user engagement.',
      image: 'https://placehold.co/800x500/111827/F8FAFC?text=Fotokasten',
      tech: ['Angular', 'Bootstrap 5', 'State Management', 'SCSS'],
      link: 'https://fotokasten.de/'
    }
  ];
}
