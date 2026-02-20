import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Home', section: 'home' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Videos', section: 'video' },
    { label: 'Amenities', section: 'amenities' },
    { label: 'Location', section: 'location' },
    { label: 'Contact', section: 'contact' }
  ];

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    this.isMobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
