import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.html',
  styleUrls: ['./video.scss']
})
export class VideoComponent implements OnInit {
  safeVideoUrl!: SafeResourceUrl
  private videoUrl: string =
    'https://www.youtube.com/embed/Scxs7L0vhZ4?rel=0&modestbranding=1&autoplay=0&mute=1&controls=1';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
