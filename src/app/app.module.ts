import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { AppNavigationModule } from './core/navigation';
import { AppViewModelModule } from './core/view-model';
import { PlayerDetailModule } from './features/player-detail';
import { PlayerListModule } from './features/player-list';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    // Nativescript Core Modules
    NativeScriptModule, //
    NativeScriptHttpClientModule,
    // App Core Modules
    AppNavigationModule,
    AppViewModelModule,
    // App Features Modules
    PlayerListModule,
    PlayerDetailModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
