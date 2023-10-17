// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //url: 'http://bff-common.des.tisal.cl/',
  url: 'http://129.151.100.239:8084/',

  siteKey: '6LffAusaAAAAAD7B3foP43gzUX52NwagIzWmT6Qh',
  codEmpresa: 2,
  captcha: 'N',
  codProveedor : '9999',
  errorCambioPassword : 'Ocurrió un error al realizar el cambio de password. Intente de nuevo realizar la acción o comuníquese con el área de soporte para reportar el problema',
  exitoCambioPassword : 'Cambio de password realizado exitosamente. Será redirigido a la pantalla principal para realizar el login con la nueva password.',
  errorUsuarioNoEncontrado : 'Usuario no encontrado!'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
