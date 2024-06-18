import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chiche } from '../chiches-list/Chiche';
import { ChichesListComponent } from '../chiches-list/chiches-list.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [ChichesListComponent, FormsModule, CommonModule],
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit{
  
  constructor() {}

  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {}

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit("se alcanzo el max")
    }
  }
  
  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: Event): void {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    if (value > this.max) {
      value = this.max;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }

    this.quantity = value;
    input.value = value.toString();
    this.quantityChange.emit(this.quantity);
  }
}


