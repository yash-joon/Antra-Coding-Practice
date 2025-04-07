import { Component,signal } from '@angular/core';
import { ListDisplayComponent } from './list-display/list-display.component';
import { NgModel,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListDisplayComponent,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  taskElement:string = '';
  listElements = signal<string[]>([]);


  addElement(){
    if(this.taskElement) {
      this.listElements.update(list => [...list,this.taskElement])
      this.taskElement = '';
    }
  }

}
