import { Component, OnInit, inject,OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComplantServiceService } from 'src/app/services/complant-service.service';
import { AuthService } from 'src/app/auth.service';
import { addSubscriptionToSubscription } from 'src/app/utils/addToSubscriptionArray';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-complants',
  templateUrl: './new-complants.component.html',
  styleUrls: ['./new-complants.component.scss']
})
export class NewComplantsComponent implements OnInit,OnDestroy{
  departmentList:any = [];
  subDepartmentList:any = [];
  isAlreadyReportedThis:boolean = false;
  fb = inject(FormBuilder);
  router = inject(Router);
  service = inject(ComplantServiceService);
  AuthService = inject(AuthService);
  private subscriptions:Subscription = new Subscription();
ngOnInit(): void {
  this.departmentList = [
    { name: 'Sales',id:1},
    { name: 'Marketing', id:2 },
];
}

onDepartmentChange(event:any){
  const selectedValue = parseInt((event.target as HTMLSelectElement).value) ;
 if(selectedValue === 1){
  this.subDepartmentList = [
    {name:'Lead Generation',id:1},
    {name:'Enquiry Handlers',id:2}
   ]
 }else{
  this.subDepartmentList = [
    {name:'Facebook Advt',id:1},
    {name:'NewsPaper Advt',id:2},
    {name:'Insta Advt',id:3}
   ]
 }
}

  complantfrm = this.fb.group({
    departmentname : this.fb.control("",Validators.required),
    subdepartmentname : this.fb.control("",Validators.required),
    companytitle : this.fb.control("",Validators.required),
    details: this.fb.control("",Validators.required),
    oldticketno : this.fb.control(""),
  })

submitComplantfrm =()=>{
  const userData = this.AuthService.getCurrentUSer();
  const ComplnatData = {
    ...this.complantfrm.value,
    username:userData.username,
    fullname:userData.fullname,
    userId:userData.id,
    Status:"Received Complant"
  }
  // const newcomplant = this.service.getcomplants(ComplnatData).subscribe((res)=>{
  //   alert("success")
  // })
  if(this.complantfrm.valid){
    addSubscriptionToSubscription(this.subscriptions,[
      this.service.getcomplants(ComplnatData).subscribe((res)=>{
         alert("success");
         this.router.navigateByUrl('/complants')
         })
     ]);
  } else {
    alert("Enter all details")
  }

}
ngOnDestroy():void{
 this.subscriptions.unsubscribe();
}
}
