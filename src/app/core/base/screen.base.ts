import { off, on } from '@nativescript/core/application';

import { OnDestroy } from '@angular/core';

interface LifecycleListener {
  eventName: 'suspend' | 'resume';
  callback(): void;
}

export class ScreenBase implements OnDestroy {
  static routePath: string;

  private listeners: LifecycleListener[] = [];

  constructor() {
    this.addListener({ eventName: 'suspend', callback: this.onSuspend?.bind(this) });
    this.addListener({ eventName: 'resume', callback: this.onResume?.bind(this) });
  }

  onResume?(): void;

  onSuspend?(): void;

  ngOnDestroy(): void {
    this.listeners.forEach((listener) => {
      off(listener.eventName, listener.callback.bind(this));
    });
  }

  private addListener(args: LifecycleListener): void {
    if (!args.callback) {
      return;
    }

    on(args.eventName, args.callback.bind(this));
    this.listeners.push(args);
  }
}
