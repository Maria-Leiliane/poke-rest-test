import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(offset = 0, limit = 20): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
