import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Chiche } from './Chiche';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { ChichesCartComponent } from '../chiches-cart/chiches-cart.component';
import { ChichesCartService } from '../chiches-cart.service';

@Component({
  selector: 'app-chiches-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent, ChichesCartComponent],
  templateUrl: './chiches-list.component.html',
  styleUrls: ['./chiches-list.component.scss']
})

export class ChichesListComponent {

  chiches: Chiche[] = [
    {
      name: 'Vulpix',
      type: 'Pokemon',
      price: 3000,
      stock: 7,
      image1: 'assets/img/vulpix-1.webp',
      image2: 'assets/img/vulpix-box.webp',
      clearance: false,
      quantity:0,
    },
    {
      name: 'Luna Lovegood',
      type: 'Harry Potter',
      price: 4000,
      stock: 5,
      image1: 'assets/img/luna-1.webp',
      image2: 'assets/img/luna-box.webp',
      clearance: true,
      quantity:0,
    },
    {
      name: 'Baby Yoda',
      type: 'Star Wars',
      price: 2500,
      stock: 3,
      image1: 'assets/img/baby-yoda-1.webp',
      image2: 'assets/img/baby-yoda-box.webp',
      clearance: false,
      quantity:0,
    },
    {
      name: 'Pidgeotto',
      type: 'Pokemon',
      price: 1000,
      stock: 0,
      image1: 'assets/img/pidgeotto-1.webp',
      image2: 'assets/img/pidgeotto-box.webp',
      clearance: true,
      quantity:0,
    },
    {
      name: 'Harry Potter',
      type: 'Harry Potter',
      price: 5000,
      stock: 8,
      image1: 'assets/img/harry-1.webp',
      image2: 'assets/img/harry-box.webp',
      clearance: false,
      quantity:0,
    },
    {
      name: 'Luke',
      type: 'Star Wars',
      price: 2000,
      stock: 0,
      image1: 'assets/img/luke-1.webp',
      image2: 'assets/img/luke-box.webp',
      clearance: true,
      quantity:0,
    },
  ];


  constructor(private cart: ChichesCartService){
  }

  ngOnInit(): void{}

  addToCart(chiche: Chiche) : void {
    this.cart.addToCart(chiche);
    chiche.stock -= chiche.quantity;
    chiche.quantity = 0;
  }

  maxReached(m: String){
    alert(m);
  }

  trackByChicheName(index: number, chiche: Chiche): String {
    return chiche.name;
  }

  onQuantityChange(quantity: number, chiche: Chiche): void {
    chiche.quantity = quantity;
  }
}


