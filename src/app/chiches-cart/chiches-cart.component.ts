import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ChichesCartService } from '../chiches-cart.service';
import { Chiche } from '../chiches-list/Chiche';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chiches-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chiches-cart.component.html',
  styleUrls: ['./chiches-cart.component.scss']
})

export class ChichesCartComponent {
  
  cartList$: Observable<Chiche[]>;

  constructor(private cart: ChichesCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
