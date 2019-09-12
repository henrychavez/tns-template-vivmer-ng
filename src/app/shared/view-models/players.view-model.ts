import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { State, StateContext } from '@ngxs/store';

import { Player } from '../models';

type VM = Player[];

@State<VM>({
  name: 'players',
  defaults: [],
})
export class PlayersVM {
  @Receiver()
  static setPlayers(ctx: StateContext<VM>, { payload }: EmitterAction<Player[]>) {
    ctx.setState(payload);
  }
}
