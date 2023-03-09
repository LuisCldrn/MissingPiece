import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  mobileM: string = ''
  mobileMenu: string = ''

  mobile() {
    if(this.mobileM === ''){
      this.mobileM = 'is-active'
      this.mobileMenu = 'active1'
  }
    else {
      this.mobileM = ''
      this.mobileMenu = ''
    }
  }

}
