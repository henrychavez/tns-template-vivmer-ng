import { ScreenBase } from '@app/core/base';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';

import { PlayerDetailVM } from '../view-model/player-detail.view-model';

@Component({
  selector: 'ns-player-detail',
  templateUrl: './player-detail.screen.html',
  styleUrls: ['./player-detail.screen.scss'],
})
export class PlayerDetailScreen extends ScreenBase implements OnInit {
  static routePath = 'player/:id';

  @SelectSnapshot(PlayerDetailVM) vm: PlayerDetailVM;

  @Emitter(PlayerDetailVM.loadPlayer) loadPlayer: Emittable<number>;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.loadPlayer.emit(parseInt(this.route.snapshot.params.id as string, 10));
  }
}
