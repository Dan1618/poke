import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { RestService } from '../common/rest.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SearchingCommunicationService } from './../common/searching-communication.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons;
  getAll: Subscription;

  displayedColumns: string[] = ['id', 'name'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private searchingCommunication: SearchingCommunicationService, public rest: RestService) { }

  ngOnInit() {
    this.getPokemons();
  }

  ngOnDestroy() {
    this.getAll.unsubscribe();
  }

  getPokemons() {
    this.getAll = this.rest.getAllPokemons().pipe(switchMap((data) => {
      data.results.forEach(element => {
        let id = element.url.slice(0, -1);
        element.id = id.substring(id.lastIndexOf('/') + 1);
      });
      this.pokemons = new MatTableDataSource(data.results);
      this.pokemons.paginator = this.paginator;
      this.pokemons.filterPredicate = (data, filter: string) => !filter || data.id == filter;
      return this.searchingCommunication.getMessage();
    })).subscribe(id => {
      this.pokemons.filter = id;
    });
  }
}
