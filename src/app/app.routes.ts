// Here we find how routes work https://angular.io/guide/router

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from "./home/nav/nav.component";
import {HomeComponent} from "./home/home.component"; // CLI imports router

const routes: Routes = [
  { path: 'heelo', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: HomeComponent },
  { path: '**', redirectTo:'404', component: HomeComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
