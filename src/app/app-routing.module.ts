import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { WatchpageComponent } from './watchpage/watchpage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'search/:searchitem',component:HomeComponent},
  {path:'watch/:id',component:WatchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
