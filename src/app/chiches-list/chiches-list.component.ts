import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Chiche } from './Chiche';

@Component({
  selector: 'app-chiches-list',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule a imports
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
      image: 'assets/img/vulpix-1.webp',
      clearance: false,
    },
    {
      name: 'Luna Lovegood',
      type: 'Harry Potter',
      price: 4000,
      stock: 5,
      image: 'assets/img/luna-1.webp',
      clearance: true,
    },
    {
      name: 'Baby Yoda',
      type: 'Star Wars',
      price: 2500,
      stock: 0,
      image: 'assets/img/baby-yoda-1.webp',
      clearance: false,
    },
  ];
}


