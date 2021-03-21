import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationService } from './services/reservations.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

/** 
const appRoutes: Routes = [

  { path:'reservation', component: ReservationComponent },
  { path:'', redirectTo:'reservation',pathMatch:'full' },
 { path:'**', redirectTo:'reservation' },
] */

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
   

  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
