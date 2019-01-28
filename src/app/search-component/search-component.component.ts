import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchingCommunicationService } from './../common/searching-communication.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponent implements OnInit {

  iDSearch;
  pokemons = [];

  constructor(private searchingCommunication: SearchingCommunicationService, private router: Router) { }

  ngOnInit() { }

  submitPoke(data): void {
    const id = data.get('pokeIDSearch').value;
    id && this.router.navigate(['/pokemon/' + id]) && data.get('pokeIDSearch').setValue('');
  }

  goToMainPage(): void {
    this.router.navigate(['/']);
  }

  idChanged(val): void {
    this.searchingCommunication.sendMessage(Number(val));
  }
}
