import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HotelUpdateComponent } from './hotel-update/hotel-update.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AllReservationListComponent } from './all-reservation-list/all-reservation-list.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    AdminHomeComponent,
    CreateHotelComponent,
    HotelListComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    HotelUpdateComponent,
    ReservationPageComponent,
    ReservationListComponent,
    AllReservationListComponent,
    UpdateReservationComponent,
    PaymentComponent,
    ReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
