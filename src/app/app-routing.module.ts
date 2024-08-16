import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PetsComponent } from './pages/pets/pets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PetspageComponent } from './pages/petspage/petspage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'pets',component:PetsComponent},
  {path:'pets/:id', component:PetspageComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
