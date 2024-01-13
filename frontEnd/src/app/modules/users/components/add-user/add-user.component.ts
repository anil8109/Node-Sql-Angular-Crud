import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  ngOnInit(): void {
  }

  value = {}
  constructor(
    private userService: UserService,
    private router: Router

  ){

  }

  isShown: string = 'admin'; // hidden by default

  UserForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]),
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    role: new FormControl('',[Validators.pattern('^[a-zA-Z]+$')]),
  })

  toggleShow(val: string) {
    if (val == 'admin') {
      this.isShown = 'user';
    }else{
      this.isShown = 'admin';
    }
  }

  AddUser(){
    this.UserForm.controls['role'].setValue(this.isShown);
    if (this.UserForm.valid) {
      console.log(this.UserForm.value)
      this.userService.addNewUser(this.UserForm.value).subscribe((data: any)=> {});
    }else{
      alert('Please Fill The Required Details in accepted format only (Alphabtes and numeric only');
      console.log(this.UserForm.value)
      console.log("Validation error")
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
