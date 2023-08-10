import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { HousesComponent } from './components/houses/houses.component';
import { DetailHouseComponent } from './components/houses/detail-house/detail-house.component';
import { CondosComponent } from './components/condos/condos.component';
import { LandsComponent } from './components/lands/lands.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalViewComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'condos', component: CondosComponent },
  {
    path: 'lands', component: LandsComponent
  },
  {
    path: 'shops', component: ShopsComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'about-us', component: OurTeamComponent
  },
  { path: 'detail-house/:type/:id', component: DetailHouseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
