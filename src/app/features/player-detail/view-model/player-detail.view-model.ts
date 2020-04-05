import { Player } from '@app/shared/models';

import { Injector } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { State, StateContext } from '@ngxs/store';

import { tap } from 'rxjs/operators';

import { PlayerDetailInteractor } from '../interactor/player-detail.interactor';

type VM = {
  isLoading: boolean;
  player?: Player;
};

@State<VM>({
  name: 'playerDetail',
  defaults: {
    isLoading: false,
  },
})
export class PlayerDetailVM implements VM {
  private static interactor: PlayerDetailInteractor;

  isLoading: boolean;
  player?: Player;

  constructor(injector: Injector) {
    PlayerDetailVM.interactor = injector.get(PlayerDetailInteractor);
  }

  @Receiver()
  static loadPlayer(ctx: StateContext<VM>, action: EmitterAction<number>) {
    ctx.patchState({ isLoading: true });

    return PlayerDetailVM.interactor
      .fetchPlayer(action.payload)
      .pipe(tap((player) => ctx.patchState({ player, isLoading: false })));
  }
}
