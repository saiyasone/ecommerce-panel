import { Component, OnInit } from '@angular/core';
import { AppService, IProduct } from 'src/app/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  amount = 1;
  currentIndex = 0;
  arrImage: IProduct[] = [
    {
      id: 1,
      label: 'source-1',
      src: '../../../assets/images/image-product-1.jpg',
    },
    {
      id: 2,
      label: 'source-2',
      src: '../../../assets/images/image-product-2.jpg',
    },
    {
      id: 3,
      label: 'source-3',
      src: '../../../assets/images/image-product-3.jpg',
    },
    {
      id: 4,
      label: 'source-4',
      src: '../../../assets/images/image-product-4.jpg',
    },
  ];

  constructor(private _cart: AppService) {}

  ngOnInit(): void {}

  setIncrease() {
    this.amount += 1;
  }
  setDecrease() {
    if (this.amount === 1) {
      return;
    }

    this.amount -= 1;
  }

  setCart() {
    let data: IProduct = {
      id: this.arrImage[this.currentIndex].id,
      label: this.arrImage[this.currentIndex].label,
      src: this.arrImage[this.currentIndex].src,
    };

    this._cart.setNumber = this.amount;
    this._cart.setCart(data);
  }

  setImage(index: number) {
    this.currentIndex = index;
  }

  setPrevious() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.arrImage.length - 1;
      this.arrImage[this.currentIndex];
    } else {
      this.currentIndex--;
      this.arrImage[this.currentIndex];
    }
  }
  setNext() {
    if (this.currentIndex === this.arrImage.length - 1) {
      this.currentIndex = 0;
      this.arrImage[this.currentIndex];
    } else {
      this.currentIndex++;
      this.arrImage[this.currentIndex];
    }
  }
}
