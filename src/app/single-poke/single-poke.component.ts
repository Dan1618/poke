import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-poke',
  templateUrl: './single-poke.component.html',
  styleUrls: ['./single-poke.component.scss']
})
export class SinglePokeComponent implements OnInit {
  singlePoke;
  imgUrl;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setUpView();
    this.route.params.subscribe(routeParams => {
      this.setUpView();
    });
  }

  setUpView(): void {
    this.singlePoke = this.route.snapshot.data['pokeResolver'];
    this.imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.singlePoke.id + ".png";
  }

  prevPoke(): void {
    const id = this.singlePoke.id;
    (id > 0 && id <= 100) && this.router.navigate(['/pokemon/' + (id - 1)]);
  }

  nextPoke(): void {
    const id = this.singlePoke.id;
    (id > 0 && id <= 100) && this.router.navigate(['/pokemon/' + (id + 1)]);
  }
}

