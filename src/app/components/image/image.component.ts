import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  image: any;

  constructor(
    private imagesService: ImagesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log('id --> ', id);

    if (id) {
      this.imagesService.getImageById(id).subscribe((image) => {
        if (!image) {
          this.router.navigateByUrl('/');
        }

        this.image = image;
        console.log('img --> ', this.image);
      });
    }
  }
}
