import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//we defined the routes in the app.module.ts
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
