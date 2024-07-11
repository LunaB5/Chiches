import { Injectable } from '@angular/core';
import { Chiche } from './chiches-list/Chiche';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChichesCartService {

  private _cartlist: Chiche[] = [];
  cartList: BehaviorSubject<Chiche[]> = new BehaviorSubject(this._cartlist);
  chicheRemoved: Subject<Chiche> = new Subject<Chiche>();
  
  constructor() { }

  addToCart(chiche: Chiche) {
    let item: Chiche | undefined = this._cartlist.find((v1) => v1.name === chiche.name);
    if (!item) {
      this._cartlist.push({ ...chiche });
    } else {
      item.quantity += chiche.quantity;
    }
    this.cartList.next(this._cartlist);
  }

  removeFromCart(chiche: Chiche) {
    let index = this._cartlist.findIndex((v1) => v1.name === chiche.name);
    if (index !== -1) {
      let removedChiche = this._cartlist.splice(index, 1)[0];
      this.chicheRemoved.next(removedChiche);
    }
    this.cartList.next(this._cartlist);
  }

  getTotalPrice(): number {
    return this._cartlist.reduce((total, chiche) => total + (chiche.price * chiche.quantity), 0);
  }


}


