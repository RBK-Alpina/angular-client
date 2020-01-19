import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRoomComponent } from './class-room/class-room.component'
import { MainComponent } from './main/main.component'
import { SearchComponent } from './search/search.component'
import { MinuatureComponent } from './minuatureClasseroom/minuatureClasseroom'
import { AuthGuard } from './auth.guard';

import { MyClassroomComponent } from './my-classroom/my-classroom.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'classroom', component: ClassRoomComponent, canActivate: [AuthGuard] },
  { path: 'classrooms', component: SearchComponent },
  { path: 'MinuatureComponent', component: MinuatureComponent },
  { path: 'Myclasroom', component: MyClassroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
