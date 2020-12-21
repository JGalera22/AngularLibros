import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../interfaces/person-response.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  popularPeopleList: Person[];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.peopleService.getPopular().subscribe(resp => {
      this.popularPeopleList = resp.results;
    });
  }

  getPhotoUrl(person: Person): string {

    const{profile_path = undefined} = person || {};

    return profile_path? `${this.imageBaseUrl}/${person.profile_path}`: "https://triana.salesianos.edu/colegio/wp-content/uploads/sites/2/2019/10/IMG_20191024_125514_454.jpg";
  }

  goToDetail(person: Person) {
    console.log(person);
    this.router.navigate(['detail', person.id, 1]);
  }

 

}
