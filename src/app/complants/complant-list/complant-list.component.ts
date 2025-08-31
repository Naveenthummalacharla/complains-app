import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ComplantServiceService } from 'src/app/services/complant-service.service';
import { AuthService } from 'src/app/auth.service';
import { addSubscriptionToSubscription } from 'src/app/utils/addToSubscriptionArray';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-complant-list',
  templateUrl: './complant-list.component.html',
  styleUrls: ['./complant-list.component.scss']
})
export class ComplantListComponent implements OnInit, OnDestroy {

  complantlistData:any = [];
  visible: boolean = false;
  selectedComplaint: any = [];
  Status:string = "";
  complantService = inject(ComplantServiceService);
  authService = inject(AuthService);
  private subscriptions:Subscription = new Subscription();
  ngOnInit(): void {
    this.GetComplantList();
  }

GetComplantList = ()=>{
  addSubscriptionToSubscription(this.subscriptions,[
    this.complantService.sendcomplants().subscribe((data)=>{
      const username = this.authService.getCurrentUSer();
      const currentUserData = data.filter((data:any)=> data.username === username.username)
      if(username.username !=='admin'){
        this.complantlistData = currentUserData;
      }else{
        this.complantlistData = data;
      }
    })
  ])
}
showDialog(complant:any){
  this.selectedComplaint = complant;
  console.log(this.selectedComplaint)
  this.visible = true;
}
SaveComplantData = (data:any) =>{

}
ngOnDestroy(): void {
  this.subscriptions.unsubscribe();
}
}
