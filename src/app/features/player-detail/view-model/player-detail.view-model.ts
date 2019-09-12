import { Player } from '@app/shared/models';

import { Injector, NgZone } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext } from '@ngxs/store';

import { RouterExtensions } from 'nativescript-angular/router';

import { tap } from 'rxjs/operators';

import { PlayerDetailInteractor } from '../interactor/player-detail.interactor';

type ViewModel = {
  isLoading: boolean;
  player?: Player;
};

@State<ViewModel>({
  name: 'playerDetail',
  defaults: {
    isLoading: false,
  },
})
export class PlayerDetailVM {
  private static interactor: PlayerDetailInteractor;
  private static router: RouterExtensions;
  private static zone: NgZone;

  constructor(injector: Injector) {
    PlayerDetailVM.interactor = injector.get(PlayerDetailInteractor);
    PlayerDetailVM.router = injector.get(RouterExtensions);
    PlayerDetailVM.zone = injector.get(NgZone);
  }

  @Selector()
  static isLoading(vm: ViewModel) {
    return vm.isLoading;
  }

  @Selector()
  static player(vm: ViewModel) {
    return vm.player;
  }

  @Receiver()
  static loadPlayer(ctx: StateContext<ViewModel>, action: EmitterAction<number>) {
    ctx.patchState({ isLoading: true });

    return PlayerDetailVM.interactor
      .fetchPlayer(action.payload)
      .pipe(tap(player => ctx.patchState({ player, isLoading: false })));
  }
}
