import { Player } from '@app/shared/models';

import { Observable } from 'rxjs';

export interface PlayerRepository {
  getPlayers(): Observable<Player[]>;
  getPlayer(id: number): Observable<Player | undefined>;
}
