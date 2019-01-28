import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'https://pokeapi.co/api/v2/pokemon/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getAllPokemons(): Observable<any> {
    return this.http.get(this.endpoint + '?limit=100&offset=0').pipe(
      map(this.extractData));
  }

  getSinglePokemon(id) {
    return this.http.get(this.endpoint + id).pipe(
      map(this.extractData));
  }
}
