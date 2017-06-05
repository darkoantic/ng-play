import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService]
})

export class AuthorComponent implements OnInit {
  title = "Authors";
  authors;
  
  constructor(authorService: AuthorService) { 
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {
  }

}
