import { PlayerDataManager } from '@app/shared/data-managers';
import { Player } from '@app/shared/models';
import { PlayersVM } from '@app/shared/view-models';

import { Injectable } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';

import { tap } from 'rxjs/operators';

@Injectable()
export class PlayerListInteractor {
  @Emitter(PlayersVM.setPlayers) setPlayers: Emittable<Player[]>;

  constructor(private playerDataManager: PlayerDataManager) {}

  fetchPlayers() {
    return this.playerDataManager.getPlayers().pipe(tap(this.setPlayers.emit));
  }
}
