import { Component, OnInit } from '@angular/core';
import { Img } from '../service/get-images.service';

export class Dot {
  constructor(
    public id: number,
    public classes: string
  )
  {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myTimer = setInterval(() => this.UpdateImage(1), 3000);

  ngOnInit() {
    this.myTimer
  }

  Dots: Dot[] = [
    new Dot(0, 'active'),
    new Dot(1, 'notActive'),
    new Dot(2, 'notActive'),
    new Dot(3, 'notActive'),
  ]
  
  CaroImgs: Img[] = [
    new Img(1, 'yellowroses', 'wildlife', 'https://i.imgur.com/VcsDh4h.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(2, 'test2', 'wildlife', 'https://i.imgur.com/UKN1gBi.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(3, 'test3', 'wildlife', 'https://i.imgur.com/EF2IVp0.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(4, 'test4', 'wildlife', 'https://i.imgur.com/d0y3KUN.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
  ]

  private n: number = 0;

  UpdateImage(x: number){
    if(this.n + 1 >= 4){
      this.Dots[this.n].classes = 'nonActive'
      this.n = 0;
      this.ImgUrl = this.CaroImgs[this.n].url
      this.Dots[this.n].classes = 'active'

    }
    else{
    this.Dots[this.n].classes = 'nonActive'
    this.n += x;
    this.ImgUrl = this.CaroImgs[this.n].url
    this.Dots[this.n].classes = 'active'
    }
  }
  public ImgUrl: string = this.CaroImgs[this.n].url
  
  UpdateDot(num: number){
    this.Dots[this.n].classes = 'nonActive'
    this.n = num;
    this.ImgUrl = this.CaroImgs[num].url;
    this.Dots[this.n].classes = 'active'
    
  }

}
