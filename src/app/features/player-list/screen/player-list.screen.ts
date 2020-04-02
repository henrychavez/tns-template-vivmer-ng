import { ScreenBase } from '@app/core/base';
import { PlayersVM } from '@app/shared/view-models';

import { Component, OnInit } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';

import { PlayerListVM } from '../view-model/player-list.view-model';

@Component({
  selector: 'ns-player-list',
  templateUrl: './player-list.screen.html',
  styleUrls: ['./player-list.screen.scss'],
})
export class PlayerListScreen extends ScreenBase implements OnInit {
  static routePath = 'players';

  test = 'Holaaa';

  @SelectSnapshot(PlayersVM) playersVM: PlayersVM;
  @SelectSnapshot(PlayerListVM) vm: PlayerListVM;

  @Emitter(PlayerListVM.loadPlayers) loadplayers: Emittable;
  @Emitter(PlayerListVM.goToPlayerDetail) goToPlayerDetail: Emittable<number>;

  ngOnInit() {
    this.loadplayers.emit();
  }
}
