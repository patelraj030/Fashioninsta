import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './user_services/ProductService';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
