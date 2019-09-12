import { PlayerDataManager } from '@app/shared/data-managers';

import { Injectable } from '@angular/core';

@Injectable()
export class PlayerDetailInteractor {
  constructor(private playerDataManager: PlayerDataManager) {}

  fetchPlayer(id: number) {
    return this.playerDataManager.getPlayer(id);
  }
}
