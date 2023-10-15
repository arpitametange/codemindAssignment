import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
{path: 'login', component: LoginComponent},
{path:'account',component: NewloginComponent},
{path:'imagePostPage',component:MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
