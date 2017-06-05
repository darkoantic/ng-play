import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    providers: [PeopleService]
})
export class PeopleComponent {
    title = "People";
    people;

    constructor(peopleService: PeopleService) {
        this.people = peopleService.getPeople();
    }
}