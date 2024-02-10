/// <reference path="gigya.d.ts" />

export function gigyaJwtLogin({
  id_token,
  callback,
}: {
  id_token: string;
  callback: CallableFunction;
}) {
  gigya._.apiAdapters.web.tokenStore.setBearerToken(id_token);
  const onCode = ({ code }: { code: string }) => {
    gigya._.apiAdapters.web.tokenStore.removeBearerToken();
    gigya.oauth.token({
      code: code,
      grant_type: 'authorization_code',
      callback: callback,
    });
  };
  gigya.oauth.authorize({
    id_token: id_token,
    response_type: 'code',
    callback: onCode,
  });
}



