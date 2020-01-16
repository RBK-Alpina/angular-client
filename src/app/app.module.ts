import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MinuatureComponent } from './minuatureClasseroom/minuatureClasseroom';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SignformComponent } from './signform/signform.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { PostComponent } from './post/post.component';

import { SearchComponent } from './search/search.component';

import { ClassroomlistComponent } from './classroomList/classroomlist.component';

import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    ClassroomlistComponent,
    SearchComponent,
    AppComponent,
    HeaderComponent,
    MainComponent,
    SignformComponent,
    ClassRoomComponent,
    PostComponent,
    MinuatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
