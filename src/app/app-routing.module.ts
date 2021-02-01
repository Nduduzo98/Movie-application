import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';

const routes: Routes = [
  {
    path:'update-movies/:Id', component: UpdateMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
