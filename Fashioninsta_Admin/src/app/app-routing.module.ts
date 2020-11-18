
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'companies', component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'company-add', component: CompanyAddComponent, canActivate: [AuthGuard] },
  { path: 'company-detail/:id', component: CompanyDetailComponent, canActivate: [AuthGuard] },
  { path: 'company-edit/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'product-edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
