import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
//import { CommentComponent } from './components/contact/contact.component';
import { DataService } from './services/data.service';
//import { Imageabout } from './components/image-about/image-about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CvComponent,
    NavbarComponent,
    ContactComponent,
    //CommentComponent
    /*Imageabout*/
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
