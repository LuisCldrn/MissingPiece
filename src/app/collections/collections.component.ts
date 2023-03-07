import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetImagesService, Img } from '../service/get-images.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  id: number = 1
  currentImg: Img = new Img(1, 'yellowroses', 'wildlife', 'https://i.imgur.com/VcsDh4h.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11');
  nextImg: number = 1
  previousImg: number = 1
  display: string = 'nonActive';

  constructor(
    public getImages: GetImagesService,
    private router : Router,
    private elRef: ElementRef,
  ){

  }

  ngOnInit() {
    this.elRef.nativeElement.offsetLeft
    console.log(this.elRef.nativeElement.offsetLeft)
  }

  expandImg(id: number) {
    this.currentImg = this.getImages.LandImgs[id-1];
    this.display = 'active';
  }

  closeImg() {
    this.display = 'nonActive'
  }


  goNext(id: number){
    if(id>=this.getImages.LandImgs.length){id=1;}
    else{id++};
    this.currentImg = this.getImages.LandImgs[id-1];
  }

  goPrev(id: number){
    console.log(id)
    if(id===1){id=this.getImages.LandImgs.length;}
    else{id--};
    this.currentImg = this.getImages.LandImgs[id-1];
  }


}
