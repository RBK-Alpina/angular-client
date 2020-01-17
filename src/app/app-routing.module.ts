import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRoomComponent } from './class-room/class-room.component'
import { MainComponent } from './main/main.component'
import { SearchComponent } from './search/search.component'


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'classroom', component: ClassRoomComponent },
  { path: 'classrooms', component: SearchComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
