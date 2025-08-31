import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ComplantServiceService } from 'src/app/services/complant-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 authservice = inject(AuthService);
 complantservice = inject(ComplantServiceService )
 useData:any = {};
 complantlist:any = [];
 ngOnInit(): void {
  this.useData = this.authservice.getCurrentUSer();
   this.Getcomplants();
 }
Getcomplants = ()=>{
this.complantservice.sendcomplants().subscribe((data)=>{
  if(this.useData.username !== 'admin'){
    this.complantlist = data.filter((data:any)=>data.username === this.useData.username)
  }else{
    this.complantlist = data;
  }
 
})
}
}
