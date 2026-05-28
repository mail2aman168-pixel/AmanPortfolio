import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class LoaderComponent implements OnInit {
  isLoading = signal(true);

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
