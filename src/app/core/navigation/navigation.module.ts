import { PlayerDetailScreen } from '@app/features/player-detail';
import { PlayerListScreen } from '@app/features/player-list';

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: PlayerListScreen.routePath, component: PlayerListScreen },
  { path: PlayerDetailScreen.routePath, component: PlayerDetailScreen },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppNavigationModule {}
