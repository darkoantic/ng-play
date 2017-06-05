import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
}
