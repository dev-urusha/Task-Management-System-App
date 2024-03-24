import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './features/users/user-details/user-details.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailsComponent } // Define routes
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
