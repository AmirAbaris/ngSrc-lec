import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-image-loop',
  templateUrl: './advanced-image-loop.component.html',
  styleUrls: ['./advanced-image-loop.component.scss']
})
export class AdvancedImageLoopComponent {
  imageSources = [
    { src: '../../../assets/pic1.jpg', width: 400, height: 400 },
    { src: '../../../assets/pic2.jpg', width: 400, height: 400 },
    { src: '../../../assets/pic3.jpg', width: 400, height: 400 },
    { src: '../../../assets/pic4.jpg', width: 400, height: 400 }
  ];
}
