import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amenities.html',
  styleUrls: ['./amenities.scss']
})
export class AmenitiesComponent implements OnInit, OnDestroy {


  amenityImages: string[] = [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000'
  ];

  currentImageIndex: number = 0;
  private imageInterval: any;

  amenities = [
    {
      icon: 'assets/icons/pool.svg',
      title: 'Infinity Pool',
      description: 'Relax in our temperature-controlled skyline pool.',
      svg: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z'
    },
    {
      icon: 'gym',
      title: 'World-Class Gym',
      description: 'State-of-the-art equipment for your fitness journey.',
      svg: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    },
    {
      icon: 'garden',
      title: 'Landscaped Gardens',
      description: 'Lush greenery and walking paths for serenity.',
      svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      icon: 'security',
      title: '24/7 Security',
      description: 'Advanced surveillance and secure access control.',
      svg: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      icon: 'club',
      title: 'Clubhouse',
      description: 'Exclusive community space for events and leisure.',
      svg: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      icon: 'parking',
      title: 'Ample Parking',
      description: 'Dedicated multi-level parking for residents and guests.',
      svg: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
  ];

  ngOnInit(): void {
    this.startImageAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  startImageAutoSlide(): void {
    this.imageInterval = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.amenityImages.length;
    }, 3500);
  }
}