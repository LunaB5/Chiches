import { Component } from '@angular/core';
import { ChichesCartComponent } from '../chiches-cart/chiches-cart.component';
import { ChichesListComponent } from '../chiches-list/chiches-list.component';

@Component({
  selector: 'app-chiches-funcos',
  standalone: true,
  imports: [ChichesCartComponent, ChichesListComponent],
  templateUrl: './chiches-funcos.component.html',
  styleUrls: ['./chiches-funcos.component.scss']
})
export class ChichesFuncosComponent {}

