// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientCarouselComponent } from './components/client-carousel/client-carousel.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ModalWindowComponent,
    CallToActionComponent,
    NotFoundComponent,
    ClientCarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
