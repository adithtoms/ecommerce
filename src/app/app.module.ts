import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingModule} from 'ng-starrating';
import { CouroselComponent } from './courosel/courosel.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { WatchpageComponent } from './watchpage/watchpage.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    CouroselComponent,
    SearchComponent,
    AboutComponent,
    CartComponent,
    WatchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
