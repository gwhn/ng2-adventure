import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {HeroData} from './app/hero-data';

import { Ng2AdventureAppComponent, environment } from './app/';
import {appRouterProviders} from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2AdventureAppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  {provide: XHRBackend, useClass: InMemoryBackendService},
  {provide: SEED_DATA, useClass: HeroData}
])
.catch((err: any) => {
  console.log(err);
});

