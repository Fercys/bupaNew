// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //url: 'http://bff-common.des.tisal.cl/',
  //Cambiar a un nonbre mas descriptivo
  url: 'http://localhost:8000',
  auth: {
    requireHttps: true,
    issuer: 'https://imilaccba2.bupa.cl/sts/his',
    redirectUri: 'https://aq.dev:4200/index.html',
    postLogoutRedirectUri: 'https://aq.dev:4200/index.html',
    clientId: 'fonasa-prestadores-spa',
    responseType: 'code',
    strictDiscoveryDocumentValidation: false,
    //scope: 'openid email profile offline_access fonasa_prestadores',
    scope: 'openid email profile offline_access',
    // Bellow this line is new to me.
    useSilentRefresh: false,
    showDebugInformation: false,
    sessionChecksEnabled: false,
    clearHashAfterLogin: true,
  }
};



