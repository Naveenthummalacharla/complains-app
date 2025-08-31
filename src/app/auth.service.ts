import { Injectable, inject, OnInit,OnDestroy } from '@angular/core';
import { ComplantServiceService } from './services/complant-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { addSubscriptionToSubscription } from './utils/addToSubscriptionArray';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy,OnInit {
  ngOnInit(): void {
  
  }

 service = inject(ComplantServiceService);
 router = inject(Router)
  private isLoggedIn:boolean = false;
  registrationData:any = [];
 private subscriptions:Subscription = new Subscription();

  getRegistrationData():Observable<any>{
    return this.service.sendRegistrationData();
  }
 
  login = (username:string, password:string)=>{
  const subscription = this.getRegistrationData().subscribe((data)=>{
    this.registrationData = data;
    const Data = this.registrationData.find((user:any)=>user.username === username && user.password === password);
    if(Data){
      sessionStorage.setItem('currentUser',JSON.stringify(Data))
      this.isLoggedIn = true;
      alert("logged In Success");
      this.router.navigate(['/dashboard'])
    }else{
      alert("Invalid Username && Passowrd")
    }
   })
   addSubscriptionToSubscription(this.subscriptions, [subscription]);
  }
  isAuthentication = ()=>{
    return this.isLoggedIn || sessionStorage.getItem('currentUser') !== null;
  }
  LogOut = ()=>{
    this.isLoggedIn = false;
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl("/login");
  }

  getCurrentUSer = ():any=>{
    return JSON.parse(sessionStorage.getItem('currentUser')||'{}');
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
