import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  viewDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
