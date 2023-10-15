import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent {
  createAccount!: FormGroup;

  
  constructor(private fb: FormBuilder,private http:HttpClient,private authservice:Service2Service) {

  
  }
 

  ngOnInit(): void {
    this.createAccount = this.fb.group({
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  postdata(email:any,username:any)
  {
    this.authservice.post(email,username).subscribe((res:any) =>{
console.log('post data',res)
    })
  

  }
}
