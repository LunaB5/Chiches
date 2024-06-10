import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Chiche } from './Chiche';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chiches-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega CommonModule a imports
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

  upQuantity(chiche: Chiche): void{
    if(chiche.quantity < chiche.stock){
    chiche.quantity++;
    }
  }
  
  downQuantity(chiche: Chiche): void{
    if(chiche.quantity > 0){
    chiche.quantity--;
    }
  }

  changeQuantity(event: Event, chiche: Chiche): void {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    if (value > chiche.stock) {
      value = chiche.stock;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }

    chiche.quantity = value;
    input.value = value.toString();
  }
}




