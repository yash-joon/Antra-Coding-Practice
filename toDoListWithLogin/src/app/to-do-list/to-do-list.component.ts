import { Component, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Form, FormArray, FormBuilder, FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ListDisplayComponent } from './list-display/list-display.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ReactiveFormsModule,ListDisplayComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
  username:String ='';

  listForm!:FormGroup;
 
  constructor(private router:Router, private auth: AuthService, private fb:FormBuilder){
    
  }

  ngOnInit(): void {
    this.username = this.auth.getUserName();
    this.listForm = this.fb.group({ 
      userInput: [''],
      items: this.fb.array([]) // each item is a form array which is [checkbox, item name]
    });
  }

  get items(): FormArray {
    return this.listForm.get('items') as FormArray;
  }

  addToList(){
    const input = this.listForm.get('userInput')?.value; 
    if(input){ // is there some userinput 

      this.items.push(
        this.fb.group({
          text:[input],
          checked:false
        })
      )
      this.listForm.get('userInput')?.reset(); 
    }
  }

  deleteItems(){

    for(let i = 0; i<this.items.length; i++){
      if(this.items.at(i).get('checked')!.value){
        this.items.removeAt(i);
      }
    }

  }

  logOut(){
    this.auth.logOut();

    this.router.navigate(['login']);
  }

}
