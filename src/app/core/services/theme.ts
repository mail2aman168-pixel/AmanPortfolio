import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<'dark' | 'light'>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) {
        this.theme.set(savedTheme);
      }
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const currentTheme = this.theme();
        localStorage.setItem('theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
      }
    });
  }

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}
