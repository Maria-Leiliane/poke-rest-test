import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private pokeapi: PokeapiService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.pokeapi.getPokemonDetails(name).subscribe((res) => {
      this.pokemon = res;
      this.checkFavorite();
    });
  }

  toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (this.isFavorite) {
      const index = favorites.findIndex((p: any) => p.name === this.pokemon.name);
      favorites.splice(index, 1);
    } else {
      favorites.push({ name: this.pokemon.name });
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.isFavorite = !this.isFavorite;
  }

  checkFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.isFavorite = favorites.some((p: any) => p.name === this.pokemon.name);
  }
}
