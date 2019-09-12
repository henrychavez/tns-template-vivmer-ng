import { Player } from '@app/shared/models';
import { PlayersVM } from '@app/shared/view-models';

import { Component, OnInit } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';

import { PlayerListVM } from '../view-model/player-list.view-model';

@Component({
  selector: 'ns-player-list',
  templateUrl: 'player-list.screen.html',
  styleUrls: ['player-list.screen.scss'],
})
export class PlayerListScreen implements OnInit {
  @Select(PlayerListVM.isLoading) isLoading$: Observable<boolean>;
  @Select(PlayersVM) players$: Observable<Player[]>;

  @Emitter(PlayerListVM.loadPlayers) loadplayers: Emittable;
  @Emitter(PlayerListVM.goToPlayerDetail) goToPlayerDetail: Emittable<number>;

  ngOnInit() {
    this.loadplayers.emit();
  }
}
