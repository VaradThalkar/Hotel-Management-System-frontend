import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { HotelUpdateComponent } from './hotel-update/hotel-update.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AllReservationListComponent } from './all-reservation-list/all-reservation-list.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [{path: '',component:WelcomeComponent},
{path:'welcomepage',component:WelcomeComponent},
{path: 'userSignUp',component:RegistrationComponent},
{path: 'login',component:LoginComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path: 'homePage',component:HomePageComponent},
{path: 'userProfile',component:UserProfileComponent},
{path: 'contactUs',component:ContactUsComponent},
{path: 'aboutUs',component:AboutUsComponent},
{path:'adminPage',component:AdminHomeComponent},
{path:'createHotel',component:CreateHotelComponent},
{path:'hotelList',component:HotelListComponent},
{path:'updateHotel',component:HotelUpdateComponent},
{path:'userList',component:UserListComponent},
{path:'createReservation/:hotelId/:price/:userId',component:ReservationPageComponent},
{path:'viewReservations',component:ReservationListComponent},
{path:'allReservationList',component:AllReservationListComponent},
{path:'updateReservation',component:UpdateReservationComponent},
{path:'goToPayment/:hotelId/:userId/:reservationId',component:PaymentComponent},
{path:'paymentreceipt/:userId/:paymentId',component:ReceiptComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
