import { ViewportScroller } from '@angular/common';
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
  LandImgs: Img[] = this.getImages.AllImgs.filter(t => t.category === 'wildlife');
  PortImgs: Img[] = this.getImages.AllImgs.filter(t => t.category === 'PORTRAITS');
  ArchImgs: Img[] = this.getImages.AllImgs.filter(t => t.category === 'ARCHITECTURE');
  constructor(
    public getImages: GetImagesService,
    private router : Router,
    private elRef: ElementRef,
    private scroller: ViewportScroller,
  ){

  }

  goTo(location: string) {
    this.router.navigate(['collections']);

  }
  
  ngOnInit() {
  }

  expandImg(id: number) {
    this.currentImg = this.getImages.AllImgs[id-1];
    this.display = 'active';
  }

  closeImg() {
    this.display = 'nonActive'
  }

  goNext(id: number){
    if(id>=this.getImages.AllImgs.length){id=1;}
    else{id++};
    this.currentImg = this.getImages.AllImgs[id-1];
  }

  goPrev(id: number){
    console.log(id)
    if(id===1){id=this.getImages.AllImgs.length;}
    else{id--};
    this.currentImg = this.getImages.AllImgs[id-1];
  }


}
