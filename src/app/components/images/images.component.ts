import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  images: any[] = [];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe((images) => {
      console.log(images);
      this.images = images;
    });
  }
}
