import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { OrderComponent } from './Pages/order/order.component';
import { ProductsComponent } from './Pages/products/products.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainSliderComponent } from './Pages/home/Components/main-slider/main-slider.component';
import { CategorySliderComponent } from './Pages/home/Components/category-slider/category-slider.component';
import { FeatureProductComponent } from './Pages/home/Components/feature-product/feature-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchProductPipe } from './Pipes/search-product.pipe';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    NotFoundComponent,
    OrderComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    MainSliderComponent,
    CategorySliderComponent,
    FeatureProductComponent,
    SearchProductPipe,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
