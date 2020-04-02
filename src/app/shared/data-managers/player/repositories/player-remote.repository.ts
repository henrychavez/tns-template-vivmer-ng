import { players } from '@app/shared/mocks';
import { Player } from '@app/shared/models';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { PlayerRepository } from './player.repository';

@Injectable({ providedIn: 'root' })
export class PlayerRemoteRepository implements PlayerRepository {
  getPlayers(): Observable<Player[]> {
    return of(players).pipe(delay(1500));
  }

  getPlayer(id: number): Observable<Player> {
    return of(players[id]).pipe(
      delay(300),
      filter((p) => !!p),
    );
  }
}
