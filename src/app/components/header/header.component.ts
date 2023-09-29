import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalNumber = '';
  isModal = false;
  isSlide = false;

  constructor(private _cart: AppService) {}

  ngOnInit(): void {
    this._cart.cart$.subscribe((val) => {
      this.totalNumber = val.length.toString();
    });
  }

  setModal() {
    this.isModal = !this.isModal;
  }
  setSlide() {
    this.isSlide = !this.isSlide;
  }
  closeModal() {
    this.isModal = false;
  }
}
