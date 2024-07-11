import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chiche } from './Chiche';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { ChichesCartComponent } from '../chiches-cart/chiches-cart.component';
import { ChichesCartService } from '../chiches-cart.service';
import { ChicheDataService } from '../chiche-data.service';

@Component({
  selector: 'app-chiches-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent, ChichesCartComponent],
  templateUrl: './chiches-list.component.html',
  styleUrls: ['./chiches-list.component.scss']
})

export class ChichesListComponent implements OnInit {

  chiches: Chiche[] = [];

  constructor(
    private cart: ChichesCartService,
    private chichesDataService: ChicheDataService
  ) { }

  ngOnInit(): void {
    this.chichesDataService.getAll()
      .subscribe(chiches => this.chiches = chiches);

    this.cart.chicheRemoved.subscribe((removedChiche: Chiche) => {
      const chiche = this.chiches.find((v1) => v1.name === removedChiche.name);
      if (chiche) {
        chiche.stock += removedChiche.quantity;
      }
    });
  }

  addToCart(chiche: Chiche): void {
    this.cart.addToCart(chiche);
    chiche.stock -= chiche.quantity;
    chiche.quantity = 0;
  }

  maxReached(m: String) {
    alert(m);
  }

  trackByChicheName(index: number, chiche: Chiche): String {
    return chiche.name;
  }

  onQuantityChange(quantity: number, chiche: Chiche): void {
    chiche.quantity = quantity;
  }
}



