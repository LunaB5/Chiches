import { Injectable } from '@angular/core';
import { Chiche } from './chiches-list/Chiche';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChichesCartService {

  private _cartlist : Chiche[] = [];
  cartList : BehaviorSubject<Chiche[]> = new BehaviorSubject(this._cartlist);
  
  constructor() { }

  addToCart(chiche: Chiche){
    let item: Chiche | undefined = this._cartlist.find((v1) => v1.name === chiche.name);
    if(!item){
      this._cartlist.push({ ... chiche});
    }else{
      item.quantity += chiche.quantity;
    }
    console.log(this._cartlist.length);
    this.cartList.next(this._cartlist);
  }

}
