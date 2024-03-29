// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'https://weddingportalapi.azurewebsites.net'
  },
  youtube: {
    url: 'https://www.googleapis.com/youtube/v3/search',
    token: 'AIzaSyC9yxZVSiW7G0Ac5t0rIzj-WzHgrwBSrvY'
  },
  wedding: {
    date: 'Nov 18, 2021 16:30:00',
    groom: 'Heinrich',
    bride: 'Daynnah'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
