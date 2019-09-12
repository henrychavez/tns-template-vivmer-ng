import { Injector, NgZone } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext } from '@ngxs/store';

import { RouterExtensions } from 'nativescript-angular/router';

import { tap } from 'rxjs/operators';

import { PlayerListInteractor } from '../interactor/player-list.interactor';

type ViewModel = {
  isLoading: boolean;
};

@State<ViewModel>({
  name: 'playerList',
  defaults: {
    isLoading: false,
  },
})
export class PlayerListVM {
  private static interactor: PlayerListInteractor;
  private static router: RouterExtensions;
  private static zone: NgZone;

  constructor(injector: Injector) {
    PlayerListVM.interactor = injector.get(PlayerListInteractor);
    PlayerListVM.router = injector.get(RouterExtensions);
    PlayerListVM.zone = injector.get(NgZone);
  }

  @Selector()
  static isLoading(vm: ViewModel) {
    return vm.isLoading;
  }

  @Receiver()
  static loadPlayers(ctx: StateContext<ViewModel>) {
    ctx.patchState({ isLoading: true });

    return PlayerListVM.interactor
      .fetchPlayers()
      .pipe(tap(() => ctx.patchState({ isLoading: false })));
  }

  @Receiver()
  static goToPlayerDetail(ctx: StateContext<ViewModel>, action: EmitterAction<number>) {
    PlayerListVM.zone.run(() => {
      PlayerListVM.router.navigate(['player', action.payload]);
    });
  }
}
