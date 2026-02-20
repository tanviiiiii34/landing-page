import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { EnquiryModalComponent } from './components/enquiry-modal/enquiry-modal';
import { GalleryComponent } from './components/gallery/gallery';
import { VideoComponent } from './components/video/video';
import { AmenitiesComponent } from './components/amenities/amenities';
import { LocationComponent } from './components/location/location';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { FloorPlansComponent } from './components/floor-plans/floor-plans';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    EnquiryModalComponent,
    GalleryComponent,
    VideoComponent,
    AmenitiesComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    FloorPlansComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  title = 'property-landing-page';


  showEnquiryModal: boolean = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.showEnquiryModal = true;
    }, 4000);
  }

  openEnquiryModal() {
    this.showEnquiryModal = true;
  }

  closeEnquiryModal() {
    this.showEnquiryModal = false;
  }
}