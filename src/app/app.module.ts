import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesModule } from './courses.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
