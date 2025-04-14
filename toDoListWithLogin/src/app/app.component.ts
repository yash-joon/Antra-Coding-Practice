import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToDoListComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toDoListWithLogin';
}
