import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'todo', component: ToDoListComponent, canActivate:[authGuard]}
];

