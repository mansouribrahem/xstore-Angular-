import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductsComponent } from './Pages/products/products.component';
import { authGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

const routes: Routes = [
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: ProductDetailsComponent },

  {
    path: 'categories',
    canActivate: [authGuard],
    component: CategoriesComponent,
  },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
