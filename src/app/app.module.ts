import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesModule } from './courses/courses.module';
import { AuthorModule } from './author/author.module';
import { PeopleModule } from './people/people.module';

import { AppComponent } from './app.component';
import { HiddenDirective } from './hidden/hidden.directive';
import { AutoGrowDirective } from './auto-grow/auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    HiddenDirective,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    AuthorModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
