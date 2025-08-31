import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showLoginForm:boolean = true;
  loginName:string = "Login";

  router = inject(Router)
  authservice = inject(AuthService)
  constructor(private fb:FormBuilder){
    this.loginForm = new FormGroup(
      {
        username: new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
      }
    )
  }

  ngOnInit(): void {
    
  }
  submitForm(){
    if(this.loginForm.valid){
      const { username, password } = this.loginForm.value;
      this.authservice.login(username,password)
    }else{
      Object.keys(this.loginForm.controls).forEach(field=>{
        const control = this.loginForm.get(field);
        if(control){
          control.markAsTouched({onlySelf:true})
        }       
      })
    }
  }
 Register(){
  this.showLoginForm = true;
  this.router.navigateByUrl('/register')
  this.loginName = "Register"
 }

}
