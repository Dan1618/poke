import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SinglePokeResolverService {

  constructor(private restService: RestService, private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const data = await this.restService.getSinglePokemon(route.params['id']).toPromise()
      .catch(e => {
        alert('No such pokemon found')
        this.router.navigate(['/']);
      });

    return data;
  }
}
