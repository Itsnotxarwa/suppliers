import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HeaderComponent } from './header/header.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    SuppliersComponent,
    HeaderComponent,
    SuppliersListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
