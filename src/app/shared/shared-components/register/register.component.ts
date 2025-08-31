import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ComplantServiceService } from 'src/app/services/complant-service.service';
import { Router } from '@angular/router';
import { addSubscriptionToSubscription } from 'src/app/utils/addToSubscriptionArray';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy {
  registerForm!: FormGroup;
  fb = inject(FormBuilder);
  service = inject(ComplantServiceService);
  router = inject(Router);
  RegistrationData:any = [];
  private subscriptions:Subscription = new Subscription();
  ngOnInit(): void {
    this.getRegistrationData();
    this.registerForm = this.createRegistrationForm();
  }
  createRegistrationForm = ()=>{
    return this.fb.group({
      mail:["",[Validators.required, Validators.email]],
      fullname:["",Validators.required],
      profilepic:[null],
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
  FileSelected(event:Event):void{
    const input = event.target as HTMLInputElement;
    if(input.files && input.files[0]){
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e:any)=>{
        const url = e.target.result as string;
        this.registerForm.get('profilepic')?.setValue(url)
      }
      reader.readAsDataURL(file)
    }
  }
  getRegistrationData = ()=>{
    addSubscriptionToSubscription (this.subscriptions,[
      this.service.sendRegistrationData().subscribe((data)=>{
        this.RegistrationData = data;
      })
    ]);
    

  }
  submitForm = ()=>{
    if(this.registerForm.valid){
      const username = this.registerForm.get('username')?.value;
      const CheckUserNameAlreadyExists = this.RegistrationData.find((regdata:any)=> regdata.username === username);
        addSubscriptionToSubscription (this.subscriptions,[
          this.service.getRegistrationData(this.registerForm.value).subscribe((data)=>{
            alert("Registration Success.");
            this.router.navigateByUrl('/login')
          })
        ]);
      
    }else{
      Object.keys(this.registerForm.controls).forEach((field)=>{
       const controls = this.registerForm.get(field);
       controls?.markAsTouched({onlySelf:true});
      })
      
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
