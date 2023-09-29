import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number;
  label: string;
  src: string;
}

export interface ICart {
  id: number;
  label: string;
  src: string;
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class AppService {
  private amount: number = 1;
  cart$ = new BehaviorSubject<ICart[]>([]);

  set setNumber(value: number) {
    this.amount = value;
  }

  setEmpty() {
    this.cart$.next([]);
  }

  setCart(data: IProduct) {
    let cart = this.cart$.getValue();
    const index = cart.findIndex((el: IProduct) => el.id === data.id);
    if (index >= 0) {
      cart[index].amount += this.amount;
    } else {
      cart.push({
        id: data.id,
        amount: this.amount,
        label: data.label,
        src: data.src,
      });
    }

    this.cart$.next(cart);
  }
}
