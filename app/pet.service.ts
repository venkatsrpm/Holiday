// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Pet } from './pet'
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PetService {
  // Class constructor with Jsonp injected$element.bind('keydown', function(event) {

			const key = event.keyCode;
      let zerosflag = false;
      let numvalue = $element.val();
      for(var i=0;i<numvalue.length;i++){
        
        if((numvalue[i] == 0) && (numvalue[i+1] == 0)){
        	zerosflag = true;
        }
		}

			// If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.

			// This lets us support copy and paste too

			if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40) || zerosflag || ($element.val().substr(0,1) == 0) ) {

				return;

			}

			$browser.defer(listener); // Have to do this or changes don't get picked up properly

		});
  constructor(private jsonp: Jsonp) { }
  // Base URL for Petfinder API
  private petsUrl = 'https://api.petfinder.com/';
  // Get a list if pets based on animal
  findPets(animal : string) {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.find'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('location', 'texas');
    params.set('animal', animal);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // Return response
   return this.jsonp
              .get(this.petsUrl + endPoint, { search: params })
              .map(response => <Pet[]> response.json().petfinder.pets.pet);
  }

  findPetById(id: string){
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('id', id);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
   return this.jsonp
              .get(this.petsUrl + endPoint, { search: params })
              .map(response => {
                
                console.log(response.json().petfinder.pet);
                return  response.json().petfinder.pet
              });
  }
}
