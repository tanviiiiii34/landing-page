import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class LocationComponent implements OnInit {
  mapUrl: SafeResourceUrl | undefined;

  // Clean Google Maps Embed URL for Baner, Pune
  private rawMapUrl = 'https://www.google.com/maps?q=Baner%20Pune%20Maharashtra&output=embed';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawMapUrl);
  }
}
