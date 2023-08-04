import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { HousesComponent } from './components/houses/houses.component';
import { DetailHouseComponent } from './components/houses/detail-house/detail-house.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalViewComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'detail-house/:type/:id', component: DetailHouseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
