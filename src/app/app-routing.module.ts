import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LocationComponent } from './components/location/location.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"restaurant", component:RestaurantComponent},
  {path: "blog", component:BlogComponent},
  {path:"home", component: HomeImageComponent},
  {path:"location", component:LocationComponent},
  {path:"inscription", component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
