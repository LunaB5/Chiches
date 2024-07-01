import { Routes } from '@angular/router';
import { ChichesListComponent } from './chiches-list/chiches-list.component';
import { ChichesFuncosComponent } from './chiches-funcos/chiches-funcos.component';
import { ChichesAboutComponent } from './chiches-about/chiches-about.component';
import { ChichesCartComponent } from './chiches-cart/chiches-cart.component';

export const routes: Routes = [
  { path: 'chiches-list', component: ChichesListComponent },
  { path: 'chiches', component: ChichesFuncosComponent },
  { path: 'chiches-about', component: ChichesAboutComponent },
  { path: 'chiches-cart', component: ChichesCartComponent },
  { path: '', redirectTo: '/chiches', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/chiches' } 
];

// export default routes; 

