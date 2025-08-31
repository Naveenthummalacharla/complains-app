import { Component, OnInit, inject  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  items: MenuItem[] | undefined;
  router = inject(Router);
  service = inject(AuthService);
  userName:string = "";
  profilepic:string = "";
  UserData:any = [];
  ngOnInit(): void {
    this.UserData = this.service.getCurrentUSer();
    this.userName = this.UserData.fullname;
    this.profilepic = this.UserData.profilepic;
    this.items = [
      {
        label: 'DashBoard',
       command:()=>{
        this.router.navigate(['/dashboard'])
       }
    },
        {
            label: 'complants',
           command:()=>{
            this.router.navigate(['/complants'])
           }
        },
        {
            label: 'newcomplant',
            command:()=>{
              this.router.navigate(['/complants/newcomplant'])
             } 
        },
        {
            label: 'deparment',
            command:()=>{
              this.router.navigate(['/department'])
             }  
        }

    ]
  }

  Logout = ()=>{
    setTimeout(()=>{
      this.service.LogOut();
    },350)
  }

}
