import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
	{ path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
	{ path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
