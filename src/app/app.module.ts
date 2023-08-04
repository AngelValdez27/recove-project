import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HousesComponent } from './components/houses/houses.component';
import { CondosComponent } from './components/condos/condos.component';
import { DetailHouseComponent } from './components/houses/detail-house/detail-house.component';
import { DetailCondoComponent } from './components/condos/detail-condo/detail-condo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    HousesComponent,
    CondosComponent,
    DetailHouseComponent,
    DetailCondoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
