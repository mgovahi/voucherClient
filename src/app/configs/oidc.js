const return_url =
  typeof window != "undefined"
    ? `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? `:${window.location.port}` : ""
      }`
    : "";

const configs = {
  client_id: 'testclient-65487',
  redirect_uri: return_url + "/signin-oidc", //+"/dashboard" ,
  silent_redirect_uri: return_url,
  post_logout_redirect_uri: return_url,
  response_type: "code",
  scope: "openid profile offline_access",
  authority: window.appSettings.ssoUrl,
  filterProtocolClaims: false,
  loadUserInfo: true,
};

export default configs;
