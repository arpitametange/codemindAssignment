import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NewloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule ,
    MatFormFieldModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatSnackBarModule,
     RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideFirebaseApp(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function initializeApp(firebase: any): any {
  throw new Error('Function not implemented.');
}

function provideAuth(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function getAuth() {
  throw new Error('Function not implemented.');
}

