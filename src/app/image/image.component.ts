import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Img, GetImagesService } from '../service/get-images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  id: number = 1
  currentImg: Img = new Img(1, 'yellowroses', 'wildlife', 'https://i.imgur.com/VcsDh4h.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11');
  nextImg: number = 1
  previousImg: number = 1
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public getImages: GetImagesService,
    ) {
    
  }

  ngOnInit() {
    this.setImage();
    console.log('ngOnitintRan')
  }

  setImage() {
    this.id = this.route.snapshot.params['id'] - 1;
    this.currentImg = this.getImages.LandImgs[this.id];
  }


  goNext(id: number){
    if(id>=this.getImages.LandImgs.length){id=1;}
    else{console.log(id++)};
    console.log('gonextran');
    this.currentImg = this.getImages.LandImgs[id-1];
    this.router.navigate(['/image/', id]);
  }

  goPrev(id: number){
    console.log(id)
    if(id===1){id=this.getImages.LandImgs.length;}
    else{console.log(id--)};
    console.log('gonextran');
    this.currentImg = this.getImages.LandImgs[id-1];
    this.router.navigate(['/image/', id]);
  }

}
