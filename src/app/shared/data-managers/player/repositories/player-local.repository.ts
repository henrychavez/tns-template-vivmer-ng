import { Player } from '@app/shared/models';

import { Injectable } from '@angular/core';

import localStorage from 'nativescript-localstorage';

import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PlayerRepository } from './player.repository';

@Injectable({ providedIn: 'root' })
export class PlayerLocalRepository implements PlayerRepository {
  getPlayers(): Observable<Player[]> {
    const players: Player[] = localStorage.getItem('players') || [];

    return of(players);
  }

  getPlayer(id: number): Observable<Player | undefined> {
    const players: Player[] = localStorage.getItem('players') || [];
    const player = players.find(p => p.id === id);

    return of(player).pipe(filter(p => !!p));
  }

  savePlayers(players: Player[]): void {
    localStorage.setItemObject('players', players);
  }
}
