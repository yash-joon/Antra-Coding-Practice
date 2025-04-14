import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss'
})
export class ListDisplayComponent {
 @Input() itemsDisplay!: FormArray;

 getArrayElementsAsGroups():FormGroup[]{
  return this.itemsDisplay.controls as FormGroup[]; 
 }
}
