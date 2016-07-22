import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2AdventureAppComponent } from '../app/ng2-adventure.component';

beforeEachProviders(() => [Ng2AdventureAppComponent]);

describe('App: Ng2Adventure', () => {
  it('should create the app',
      inject([Ng2AdventureAppComponent], (app: Ng2AdventureAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-adventure works!\'',
      inject([Ng2AdventureAppComponent], (app: Ng2AdventureAppComponent) => {
    expect(app.title).toEqual('ng2-adventure works!');
  }));
});
