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

  AllImgs: Img[] = [
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
    new Img(12, 'test4', 'wildlife', 'https://i.imgur.com/UKN1gBi.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(13, 'test4', 'PORTRAITS', 'https://i.imgur.com/w2ARh5X.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(14, 'test4', 'PORTRAITS', 'https://i.imgur.com/hp56cZH.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(15, 'test4', 'PORTRAITS', 'https://i.imgur.com/mkrGj2T.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(16, 'test4', 'PORTRAITS', 'https://i.imgur.com/5BsLNW0.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(17, 'test4', 'PORTRAITS', 'https://i.imgur.com/xjwXb0F.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(18, 'test4', 'PORTRAITS', 'https://i.imgur.com/iKnTLYz.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(19, 'test4', 'PORTRAITS', 'https://i.imgur.com/ThycH7G.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(20, 'test4', 'PORTRAITS', 'https://i.imgur.com/H4ITP1e.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(21, 'test4', 'PORTRAITS', 'https://i.imgur.com/aBPWPUg.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(22, 'test4', 'PORTRAITS', 'https://i.imgur.com/j4BQ0QR.png', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(23, 'test4', 'PORTRAITS', 'https://i.imgur.com/jRBhbBI.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(24, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/ZkkoPt0.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(25, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/e1KplU5.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(26, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/Zx2yVI7.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(27, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/xnXxR68.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(28, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/WeQtC1u.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(29, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/UMKp5t8.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(30, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/mde9BOy.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),
    new Img(31, 'test4', 'ARCHITECTURE', 'https://i.imgur.com/JilxiMw.jpg', 'chicago', "Hello, this would be where you would add info about the image, not sure if description or just general ideas", '1.2fs wide-lense iphone11'),




  ]

  constructor() { }


}
