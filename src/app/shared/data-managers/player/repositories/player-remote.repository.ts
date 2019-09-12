import { players } from '@app/shared/mocks';
import { Player } from '@app/shared/models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { PlayerRepository } from './player.repository';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class PlayerRemoteRepository implements PlayerRepository {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    // return this.http.get<Player[]>(`${BASE_URL}/todos`);
    return of(players).pipe(delay(300));
  }

  getPlayer(id: number): Observable<Player> {
    // return this.http.get<Player>(`${BASE_URL}/todos/${id}`);
    // In the mocks the id is the same as the order in the array
    return of(players[id]).pipe(
      delay(3000),
      filter(p => !!p),
    );
  }
}
