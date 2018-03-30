// Import component decorator
import { Component, OnInit } from '@angular/core';

import { PetService } from '../pet.service'

import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Pet } from '../pet';

@Component({
  template: `
    <h2>Cats</h2>
    <p>List of cats</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let cat of cats | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">pets</i>
            <a [routerLink]="['/cats', cat.id.$t]">{{cat.name.$t}}</a>
        </span>
      </li>
    </ul>
    `,
    providers: [PetService],
    directives: [ROUTER_DIRECTIVES]
})
// Component class
export class CatListComponent implements OnInit {

  cats: Observable<Pet[]>;
  constructor(private petService: PetService) {

  }

  ngOnInit() {
    this.cats = this.petService.findPets('cat');
  }

}
