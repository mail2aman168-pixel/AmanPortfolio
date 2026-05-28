import { Component, HostListener, signal, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../../core/services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  isScrolled = false;
  menuOpen = false;
  currentTheme = this.themeService.theme;

  navItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
