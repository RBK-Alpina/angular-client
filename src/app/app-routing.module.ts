import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { SearchComponent } from './search/search.component'
import { MainComponent } from './main/main.component'



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'classrooms', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
