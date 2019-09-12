import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { PlayerListInteractor } from './interactor/player-list.interactor';
import { PlayerListScreen } from './screen/player-list.screen';
import { PlayerListVM } from './view-model/player-list.view-model';

@NgModule({
  imports: [
    NativeScriptCommonModule, //
    NgxsModule.forFeature([PlayerListVM]),
  ],
  declarations: [PlayerListScreen],
  providers: [PlayerListInteractor],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerListModule {}
