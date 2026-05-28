import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ThemeEffect = 'nebula' | 'cyber' | 'gold' | 'minimal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef;
  @ViewChild('knowledgePot') knowledgePot!: ElementRef;

  currentEffect = signal<ThemeEffect>('nebula');

  themeEffects = [
    { id: 'nebula', name: 'Nebula', icon: 'bi-stars' },
    { id: 'cyber', name: 'Cyber', icon: 'bi-cpu' },
    { id: 'gold', name: 'Gold', icon: 'bi-trophy' },
    { id: 'minimal', name: 'Zen', icon: 'bi-wind' }
  ];

  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'bi-patch-check-fill', color: '#dd0031' },
        { name: 'TypeScript', icon: 'bi-filetype-ts', color: '#3178c6' },
        { name: 'SCSS', icon: 'bi-filetype-scss', color: '#cd6799' },
        { name: 'Bootstrap', icon: 'bi-bootstrap-fill', color: '#7952b3' }
      ]
    },
    {
      name: 'AI Tools',
      skills: [
        { name: 'Copilot', icon: 'bi-cpu-fill', color: '#00D4FF' },
        { name: 'ChatGPT', icon: 'bi-chat-dots-fill', color: '#10a37f' }
      ]
    },
    {
      name: 'UI/UX',
      skills: [
        { name: 'Figma', icon: 'bi-figma', color: '#F24E1E' },
        { name: 'UI/UX', icon: 'bi-vector-pen', color: '#FFBD00' },
        { name: 'Responsive', icon: 'bi-phone-fill', color: '#00D4FF' }
      ]
    }
  ];

  allSkills = this.skillCategories.flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.name })));

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  setEffect(effect: any) {
    this.currentEffect.set(effect);
    if (isPlatformBrowser(this.platformId)) {
      this.refreshAnimations();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private refreshAnimations() {
    // Kill existing floating animations
    gsap.killTweensOf('.skill-bubble');
    gsap.killTweensOf('.particle');
    this.initAnimations();
  }

  private initAnimations() {
    const skills = this.skillsContainer.nativeElement.querySelectorAll('.skill-bubble');
    const pot = this.knowledgePot.nativeElement;
    const effect = this.currentEffect();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.skillsContainer.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Drop skills into the pot
    tl.from(skills, {
      y: -500,
      opacity: 0,
      scale: 0.5,
      duration: effect === 'cyber' ? 0.8 : 1.2,
      stagger: {
        each: 0.1,
        from: 'random'
      },
      ease: effect === 'cyber' ? 'expo.out' : 'bounce.out'
    });

    // Pot glow pulse based on theme
    const glowColor = effect === 'cyber' ? 'rgba(255, 0, 255, 0.6)' : 
                     effect === 'gold' ? 'rgba(255, 189, 0, 0.6)' : 
                     'rgba(0, 212, 255, 0.6)';

    gsap.to(pot, {
      boxShadow: `0 0 50px ${glowColor}, inset 0 0 30px rgba(110, 0, 255, 0.4)`,
      duration: effect === 'minimal' ? 4 : 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Floating for skills
    skills.forEach((skill: any) => {
      gsap.to(skill, {
        y: effect === 'minimal' ? '+=5' : '+=15',
        x: '+=5',
        rotation: effect === 'cyber' ? 'random(-10, 10)' : 'random(-5, 5)',
        duration: effect === 'cyber' ? 'random(1, 2)' : 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      });
    });

    // Particle background animation
    const particles = this.skillsContainer.nativeElement.querySelectorAll('.particle');
    particles.forEach((p: any) => {
      gsap.to(p, {
        y: 'random(-150, 150)',
        x: 'random(-150, 150)',
        opacity: effect === 'minimal' ? 'random(0.05, 0.2)' : 'random(0.1, 0.6)',
        duration: effect === 'cyber' ? 'random(2, 4)' : 'random(5, 12)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }
}
