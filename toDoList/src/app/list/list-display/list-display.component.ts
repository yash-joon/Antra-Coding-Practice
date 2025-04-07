import { Component, Input} from '@angular/core';
import { Signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModel,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss'
})
export class ListDisplayComponent {
  @Input() listElements!: Signal<string[]>;
  addToRemove(event:Event){

  }

  remove(){

  }

}
