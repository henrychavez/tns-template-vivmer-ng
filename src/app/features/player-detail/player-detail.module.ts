import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { PlayerDetailInteractor } from './interactor/player-detail.interactor';
import { PlayerDetailScreen } from './screen/player-detail.screen';
import { PlayerDetailVM } from './view-model/player-detail.view-model';

@NgModule({
  imports: [
    NativeScriptCommonModule, //
    NgxsModule.forFeature([PlayerDetailVM]),
  ],
  declarations: [PlayerDetailScreen],
  providers: [PlayerDetailInteractor],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerDetailModule {}
