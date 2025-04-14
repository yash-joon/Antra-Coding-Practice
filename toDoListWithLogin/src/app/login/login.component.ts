import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl, Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);

  loginForm = this.fb.group({'username':this.username,'password':this.password});

  constructor(private fb:FormBuilder,private router: Router, private auth: AuthService){
  }

  login(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.get('username')?.value as string);
    }
    this.router.navigate(['todo']);
  }

  ngOnInit(): void {
  }
  
}
