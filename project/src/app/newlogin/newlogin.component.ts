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
  // url='https://login-details-67cef-default-rtdb.firebaseio.com/';
  
  constructor(private fb: FormBuilder,private http:HttpClient,private authservice:Service2Service) {

  // this.authservice.post().subscribe((res:any)=> {
  //   console.log('res from firebase', res);
  //  })
  }
  // createPost() : Observable<any> {
  //   let user=this.createAccount.get('email')?.value
  //   let pass=this.createAccount.get('username')?.value
  //   let postData = {
  //     username: user,
  //     password: pass
  //   }
  //  return this.http.post(this.url + 'posts.json', postData);

  // }

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
  

//   onSubmit() {
//     if (this.createAccount.valid) {
//       // Handle form submission, e.g., authentication
//       console.log('Form submitted:', this.createAccount.value);

// }
  }
}
