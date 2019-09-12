import { Player } from '@app/shared/models';

import { Injectable } from '@angular/core';

import { merge, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PlayerLocalRepository } from './repositories/player-local.repository';
import { PlayerRemoteRepository } from './repositories/player-remote.repository';
import { PlayerRepository } from './repositories/player.repository';

@Injectable({ providedIn: 'root' })
export class PlayerDataManager implements PlayerRepository {
  constructor(
    private localRepository: PlayerLocalRepository, //
    private remoteRepository: PlayerRemoteRepository,
  ) {}

  getPlayers(): Observable<Player[]> {
    return merge(
      this.localRepository.getPlayers(),
      this.remoteRepository
        .getPlayers() //
        .pipe(tap(this.localRepository.savePlayers)),
    );
  }

  getPlayer(id: number): Observable<Player | undefined> {
    return merge(this.localRepository.getPlayer(id), this.remoteRepository.getPlayer(id));
  }
}
