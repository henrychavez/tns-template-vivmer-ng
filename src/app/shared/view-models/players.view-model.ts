import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { State, StateContext } from '@ngxs/store';

import { Player } from '../models';
import { EntityRepository } from '../repositories/inedx';

type VM = EntityRepository<Player>;

@State<VM>({
  name: 'players',
  defaults: {
    entities: [],
  },
})
export class PlayersVM extends EntityRepository<Player> {
  @Receiver()
  static setPlayers(ctx: StateContext<VM>, { payload }: EmitterAction<Player[]>) {
    ctx.patchState({ entities: payload });
  }
}
