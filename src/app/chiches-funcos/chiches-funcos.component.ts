import { Component } from '@angular/core';
import { ChichesCartComponent } from '../chiches-cart/chiches-cart.component';
import { ChichesListComponent } from '../chiches-list/chiches-list.component';

@Component({
  selector: 'app-chiches-funcos',
  standalone: true,
  imports: [ChichesFuncosComponent, ChichesCartComponent, ChichesListComponent],
  templateUrl: './chiches-funcos.component.html',
  styleUrl: './chiches-funcos.component.scss'
})
export class ChichesFuncosComponent {

}
