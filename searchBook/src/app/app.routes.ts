import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishListComponent } from './wish-list/wish-list.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'wishlist', component:WishListComponent}
];
