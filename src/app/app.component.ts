import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChichesListComponent } from './chiches-list/chiches-list.component'; 
import { ChichesCartComponent } from './chiches-cart/chiches-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChichesListComponent, ChichesCartComponent], // Importa aquí tu componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chiches';
}

