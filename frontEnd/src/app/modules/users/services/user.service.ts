import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/api/users/"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  addNewUser(student: any): Observable<User> {
    
    this.http.post<User>(this.url+"add_user",
    student,
    {
      headers: new HttpHeaders({}),
    }).subscribe(res => {
        let result = JSON.parse(JSON.stringify(res))
        console.log(result.status);

        if (result.status == true) {
          this.router.navigate(['/user/userList']);
          alert(result.message);
        }else{
          alert(result.error);
          console.log("Message: "+result.message+",  Error: "+result.error)
        }
    })
    return throwError(new Error('Something Went Wrong'));    
  }

  getUserList() {    
      return this.http.get<User[]>(this.url+"get_users/",
      {
        headers: new HttpHeaders({}),
      })
  }

  getUser(id :string): Observable<User> {
    return this.http.get<User>(this.url+"get_one_user/"+id,
    {
      headers: new HttpHeaders({}),
    })
  }

  deleteUser(id: any){
    return this.http.delete<User>(this.url+"delete_user/"+id,
    {
      headers: new HttpHeaders({}),
    })
  }
  editUser(id: any,user: any){
    this.http.patch<User>(this.url+"edit_user/"+id,user,
    {
      headers: new HttpHeaders({}),
    }).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res))
      console.log(result.status);
      if (result.status == true) {
        this.router.navigate(['/user/userList'])
        alert(result.message);
      }else{
        alert(result.message);
        console.log("Message: "+result.message+",  Error: "+result.error)
      }
    })
    return throwError(new Error('Something Went Wrong'));    
  }
}
