export const environment = {
  production: true,
  //Cambiar a un nonbre mas descriptivo
  url: 'http://localhost:8000',
  auth: {
    requireHttps: true,
    issuer: 'https://imilaccba2.bupa.cl/sts/his/',
    redirectUri: `https://${window.location.origin}/index.html`,
    postLogoutRedirectUri: `https://${window.location.origin}/index.html`,
    clientId: 'fonasa-prestadores-spa',
    responseType: 'code',
    scope: 'openid email profile offline_access',
    // Bellow this line is new to me.
    useSilentRefresh: false,
    silentRefreshRedirectUri: `https://${window.location.origin}/silent-refresh.html`,
    showDebugInformation: false,
    sessionChecksEnabled: false,
    clearHashAfterLogin: true,
  },


};

};
