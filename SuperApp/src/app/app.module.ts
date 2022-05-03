import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';


const firebaseConfig = {

  apiKey: "AIzaSyCJ2_PrAWpdGNhKrhw0bCzf2lEXAdt-gpk",

  authDomain: "supernaturalencountermin.firebaseapp.com",

  projectId: "supernaturalencountermin",

  storageBucket: "supernaturalencountermin.appspot.com",

  messagingSenderId: "1038927958229",

  appId: "1:1038927958229:web:e3bde1cc329cbabd53925c",

  measurementId: "G-4FY8N56DS1"

};


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
    MediaComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent, pathMatch:'full'},
      {path:'contact', component:ContactComponent},
      {path:'media', component:MediaComponent},
      {path:'about', component:AboutComponent},
      {path:'app-nav-menu', component:NavMenuComponent}
    ])

  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
