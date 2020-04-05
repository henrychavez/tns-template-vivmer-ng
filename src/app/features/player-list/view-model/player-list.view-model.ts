import { Injector } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { State, StateContext } from '@ngxs/store';

import { RouterExtensions } from 'nativescript-angular/router';

import { tap } from 'rxjs/operators';

import { PlayerListInteractor } from '../interactor/player-list.interactor';

type VM = {
  isLoading: boolean;
};

@State<VM>({
  name: 'playerList',
  defaults: {
    isLoading: false,
  },
})
export class PlayerListVM implements VM {
  private static interactor: PlayerListInteractor;
  private static router: RouterExtensions;

  isLoading: boolean;

  constructor(injector: Injector) {
    PlayerListVM.interactor = injector.get(PlayerListInteractor);
    PlayerListVM.router = injector.get(RouterExtensions);
  }

  @Receiver()
  static loadPlayers(ctx: StateContext<VM>) {
    ctx.patchState({ isLoading: true });

    return PlayerListVM.interactor
      .fetchPlayers()
      .pipe(tap(() => ctx.patchState({ isLoading: false })));
  }

  @Receiver()
  static goToPlayerDetail(ctx: StateContext<VM>, action: EmitterAction<number>) {
    PlayerListVM.router.navigate(['player', action.payload]);
  }
}
