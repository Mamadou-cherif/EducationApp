import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ActivityComponent } from './components/activity/activity.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LocationComponent } from './components/location/location.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    BlogComponent,
    RestaurantComponent,
    ActivityComponent,
    FooterComponent,
    MenuComponent,
    ReservationComponent,
    LocationComponent,
    HomeImageComponent,
    InscriptionComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
