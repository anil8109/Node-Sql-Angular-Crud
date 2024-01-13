import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  private subscription: Subscription = new Subscription()
  val = '';
  data = {};
  dataList: User[] = [];
  isShown: string = 'admin'; // hidden by default

  ngOnInit(): void {  
  }
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router

    ) {

      this.subscription = this.route.params.subscribe(
        (params: Params) => {
          this.val = params['id']
        }
      )

      userService.getUser(this.val).subscribe(v =>{
        this.data = JSON.parse(JSON.stringify(v)).data;
        this.isShown = JSON.parse(JSON.stringify(v)).data.role;
        this.UserForm.patchValue(this.data)
        console.log(this.data)
      })

     }


     value = {}


  UserForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]),
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    role: new FormControl('',[Validators.pattern('^[a-zA-Z]+$')])
  })

  toggleShow(val: string) {
    if (val == 'admin') {
      this.isShown = 'user';
    }else{
      this.isShown = 'admin';
    }
  }

  EditUser(){
    this.UserForm.controls['role'].setValue(this.isShown);
    if (this.UserForm.valid) {
      console.log(this.UserForm.value)
      this.userService.editUser(this.val,this.UserForm.value).subscribe((data: any)=> {
        this.router.navigate(['/user/home']) 
      })
    } else{
      console.log(this.UserForm.value)
      console.log("Validation error")
      alert('Please Fill The Required Details in accepted format only (Alphabtes and numeric only');
    }
  }
  get email(){
    return this.UserForm.get('email');
  }

  get address(){
    return this.UserForm.get('address');
  }
  get name(){
    return this.UserForm.get('name');
  }

  get class(){
    return this.UserForm.get('class');
  }
  get role(){
    return this.UserForm.get('role');
  }


}
