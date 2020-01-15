import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SignformComponent } from './signform/signform.component';

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

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
