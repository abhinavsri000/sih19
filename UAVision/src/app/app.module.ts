import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SidebarCmpComponent } from './sidebar-cmp/sidebar-cmp.component';
import { NavbarCmpComponent } from './navbar-cmp/navbar-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    SidebarCmpComponent,
    NavbarCmpComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
