import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersComponent } from './users/users.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"users",component:UsersComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
