import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  education = [
    {
      degree: 'BCA',
      institution: 'IGNOU Noida',
      year: 'Completed',
      delay: 0
    },
    {
      degree: 'Intermediate',
      institution: 'Bihar School Examination Board',
      year: 'Completed',
      delay: 100
    },
    {
      degree: '10th Standard',
      institution: 'CBSE Board',
      year: 'Completed',
      delay: 200
    }
  ];
}
