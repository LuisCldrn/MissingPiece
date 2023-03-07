import { Injectable } from '@angular/core';

export class Img {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public url: string, 
    public location: string,
    public description: string, 
    public cameraInfo: string,
  ) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  LandImgs: Img[] = [
    new Img(1, 'yellowroses', 'wildlife', 'https://i.imgur.com/VcsDh4h.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(2, 'test2', 'wildlife', 'https://i.imgur.com/fRSo5qW.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(3, 'test3', 'wildlife', 'https://i.imgur.com/EF2IVp0.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(4, 'test4', 'wildlife', 'https://i.imgur.com/d0y3KUN.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(5, 'test4', 'wildlife', 'https://i.imgur.com/RIa9i4X.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(6, 'test4', 'wildlife', 'https://i.imgur.com/vH1j0Xm.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(7, 'test4', 'wildlife', 'https://i.imgur.com/ER5xb0g.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(8, 'test4', 'wildlife', 'https://i.imgur.com/edCb6M3.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(9, 'test4', 'wildlife', 'https://i.imgur.com/zvEH9s4.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(10, 'test4', 'wildlife', 'https://i.imgur.com/CTXEhu4.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(11, 'test4', 'wildlife', 'https://i.imgur.com/dryfNFe.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(12, 'test4', 'wildlife', 'https://i.imgur.com/UKN1gBi.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11')

  ]

  constructor() { }


}
