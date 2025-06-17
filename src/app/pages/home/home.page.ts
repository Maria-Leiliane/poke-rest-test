import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;

  constructor(private pokeapi: PokeapiService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeapi.getPokemonList(this.offset).subscribe((res) => {
      this.pokemons.push(...res.results);
    });
  }

  loadMore() {
    this.offset += 20;
    this.loadPokemons();
  }

  viewDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
