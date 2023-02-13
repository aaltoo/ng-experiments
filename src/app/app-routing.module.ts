import { ListPageComponent } from './pages/list-page/list-page.component';
import { OrdinaryPageComponent } from './pages/ordinary-page/ordinary-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ordinary-page', component: OrdinaryPageComponent },
  { path: 'list', component: ListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
