import { Component, OnInit } from '@angular/core';
import { AppService, ICart } from 'src/app/app.service';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.css'],
})
export class ModalCartComponent implements OnInit {
  cart: ICart[] = [];
  constructor(private _cart: AppService) {}

  ngOnInit(): void {
    this._cart.cart$.subscribe((data) => {
      this.cart = data;
    });
  }

  removeItem() {
    this._cart.setEmpty();
  }
}
