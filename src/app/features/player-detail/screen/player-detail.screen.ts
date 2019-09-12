import { Player } from '@app/shared/models';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';

import { PlayerDetailVM } from '../view-model/player-detail.view-model';

@Component({
  selector: 'ns-player-detail',
  templateUrl: 'player-detail.screen.html',
  styleUrls: ['player-detail.screen.scss'],
})
export class PlayerDetailScreen implements OnInit {
  @Select(PlayerDetailVM.player) player$: Observable<Player>;
  @Select(PlayerDetailVM.isLoading) isLoading$: Observable<Player>;

  @Emitter(PlayerDetailVM.loadPlayer) loadPlayer: Emittable<number>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadPlayer.emit(parseInt(this.route.snapshot.params.id as string, 10));
  }
}
