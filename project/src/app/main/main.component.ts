import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() imageUrl: any;
  @Input() comments!: string[];

  @Input() likes: any;

  like() {
    this.likes++;
  }


  email: string = '';
  password: string = '';

  // constructor(private afAuth: AngularFireAuth) { }

  // login() {
  //   this.afAuth.signInWithEmailAndPassword(this.email, this.password)
  //     .then((userCredential) => {
  //       // User is signed in, you can redirect or do further processing here.
  //       console.log('User logged in:', userCredential.user);
  //     })
  //     .catch((error) => {
  //       // Handle errors here.
  //       console.error('Error:', error);
  //     });
  }

