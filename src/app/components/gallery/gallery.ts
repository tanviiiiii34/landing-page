import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent {
  galleryImages: string[] = [
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
    'https://images.unsplash.com/photo-1600047509358-9dc75507daeb',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
  ];


  selectedImage: string | null = null;

  openLightbox(image: string) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
