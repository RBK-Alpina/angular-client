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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SearchComponent } from './search/search.component';

import { ClassroomlistComponent } from './classroomList/classroomlist.component';

import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorsProviders } from './intercepters';
import { AuthService } from './services/auth.service';

import { JwPaginationComponent } from 'jw-angular-pagination';

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
    MinuatureComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule

  ],

  providers: [
    SearchService,
    AuthService,
    httpInterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
