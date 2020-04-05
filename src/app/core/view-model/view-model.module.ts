import { PlayersVM } from '@app/shared/view-models';

import { NgModule } from '@angular/core';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    NgxsModule.forRoot([PlayersVM]),
    NgxsEmitPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
  ],
})
export class AppViewModelModule {}
