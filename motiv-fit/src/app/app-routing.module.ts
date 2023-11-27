import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalaComponent } from './pages/sala/sala.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "22113uyguyvdxu727717e7hhflsddsdvv-w212e2r2-fdfrere", component: SalaComponent},
  {path: "ajuda", component: AjudaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
