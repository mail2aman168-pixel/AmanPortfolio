import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('heroCta') heroCta!: ElementRef;
  @ViewChild('heroGlow') heroGlow!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tl = gsap.timeline();

      tl.from(this.heroTitle.nativeElement, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      })
      .from(this.heroSubtitle.nativeElement, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from(this.heroCta.nativeElement, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.6')
      .from(this.heroGlow.nativeElement, {
        opacity: 0,
        scale: 0.5,
        duration: 2,
        ease: 'power2.out'
      }, '-=1.5');

      // Floating animation for the glow
      gsap.to(this.heroGlow.nativeElement, {
        y: 30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }
}
