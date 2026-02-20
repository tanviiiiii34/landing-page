import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  images: string[] = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1920'
  ];

  currentSlide: number = 0;
  slideInterval: any;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.startAutoSlide();


    setTimeout(() => {
      this.modalService.open();
    }, 4000);
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }


  downloadBrochure(): void {
    this.modalService.open();
  }


  openEnquiry(): void {
    this.modalService.open();
  }
}