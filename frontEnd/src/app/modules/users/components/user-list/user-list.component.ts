import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  ngOnInit(): void {
  }

  public data: User[] = []  
  columnsToDisplay = ['id','name','email','role','address', 'action']
  
  constructor(
    private userService: UserService
    ) { 
      this.userService.getUserList().subscribe(v =>{
        this.data = JSON.parse(JSON.stringify(v)).data;
        console.log(JSON.parse(JSON.stringify(v)));
        console.log(this.data);
      })
   }

   deleteUser(datas: any){
    if(confirm("Are you sure to delete "+datas.email)) {
      this.userService.deleteUser(datas.id).subscribe(v =>{
        this.data = this.data.filter((u:any)=> u!==datas);
        alert(JSON.parse(JSON.stringify(v)).message);
      })
    }
  }

}
