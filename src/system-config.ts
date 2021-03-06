// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api'
};

/** User packages configuration. */
const packages: any = {
  'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/forms',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/hello-world',
  'app/hello-name',
  'app/hello-list',
  'app/click-button',
  'app/bound-input',
  'app/class-host-option',
  'app/action-links',
  'app/data-model',
  'app/form-data',
  'app/inventory-app',
  'app/product-list',
  'app/product-row',
  'app/product-image',
  'app/product-department',
  'app/product-price',
  'app/if',
  'app/switch',
  'app/style',
  'app/class',
  'app/nested-for',
  'app/simple-form',
  'app/form-builder',
  'app/explicit-validation',
  'app/custom-validation',
  'app/value-changes',
  'app/two-way-bind',
  'app/animated-list',
  'app/animated-entrance',
  'app/animated-states',
  'app/animated-shrink',
  'app/animated-flyby',
  'app/animated-bounce',
  'app/animated-group',
  'app/dynamic-form',
  'app/dynamic-form-question',
  'app/hero-list',
  'app/wikipedia',
  'app/peek-a-boo-parent',
  'app/peek-a-boo',
  'app/spy',
  'app/on-changes-parent',
  'app/on-changes',
  'app/do-check',
  'app/after-view-parent',
  'app/after-view',
  'app/my-child',
  'app/after-content-parent',
  'app/after-content',
  'app/power-booster',
  'app/power-boost-calculator',
  'app/hero-async-messages',
  'app/pipe-demo',
  'app/lifecycle-hooks-demo',
  'app/http-client-demo',
  'app/dynamic-form-demo',
  'app/attribute-directives-demo',
  'app/animations-demo',
  'app/basics-demo',
  'app/rx-js-demo',
  'app/rxjs/timer',
  'app/rxjs/converting-array',
  'app/rxjs/converting-object',
  'app/rxjs/converting-set',
  'app/rxjs/converting-map',
  'app/rxjs/cold-stream',
  'app/rxjs/hot-stream',
  'app/rxjs/from-event',
  'app/rxjs/watch-child-events',
  'app/rxjs/child-event-producer',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
