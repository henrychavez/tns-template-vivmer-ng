import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsModule } from '@ngxs/store';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerDetailModule } from './features/player-detail';
import { PlayerListModule } from './features/player-list';
import { PlayersVM } from './shared/view-models';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    // Nativescript Core Modules
    NativeScriptModule, //
    NativeScriptHttpClientModule,
    // App Core Modules
    AppRoutingModule,
    NgxsModule.forRoot([PlayersVM]),
    NgxsEmitPluginModule.forRoot(),
    // App Features Modules
    PlayerListModule,
    PlayerDetailModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
