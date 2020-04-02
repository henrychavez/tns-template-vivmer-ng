import { Player } from '@app/shared/models';

import { getString, setString } from '@nativescript/core/application-settings';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PlayerRepository } from './player.repository';

@Injectable({ providedIn: 'root' })
export class PlayerLocalRepository implements PlayerRepository {
  getPlayers(): Observable<Player[]> {
    const players: Player[] = JSON.parse(getString('players', '[]'));

    return of(players);
  }

  getPlayer(id: number): Observable<Player | undefined> {
    const players: Player[] = JSON.parse(getString('players', '[]'));
    const player = players.find((p) => p.id === id);

    return of(player).pipe(filter((p) => !!p));
  }

  savePlayers(players: Player[]): void {
    setString('players', JSON.stringify(players));
  }
}
