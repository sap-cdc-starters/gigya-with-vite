import type { OidcJwt, Jwt } from '@auth/jwt';

export function dumpJwt({ id_token }: { id_token: OidcJwt }) {
  return (
    (id_token &&
      ` <div class="vcontainer" >
      ${welcome(id_token)} 
    ${claims(id_token)}
    ${raw(id_token)}
    </div>`) ||
    `no data`
  );
}

function welcome({ claims: { name, picture } }: OidcJwt) {
  return `
  <div >
  <h1 class="float-left">Hello <b>${name}!</b>
  <img src="${picture}" alt="Avatar" style="padding: 0 2rem 0 2rem; border-radius: 50%;"> </h1>
  <h3 class="row float-left">Looks like you have authenticated yourself!</h3>
<div>
  `;
}

function raw({ raw }: Jwt) {
  return ` <div>
  <p><b>Your raw token is:</b>
  <blockquote><em id="raw-token">${raw}</em></blockquote></p>
 <p>You can debug it at <b><a href="https://jwt.io?#debugger-io?token=${raw}">jwt.io</a></b> or <b><a href="https://jwt.ms/#id_token=${raw}">jwt.ms</a></b>.</p>
 <div>`;
}

function claims({ claims }: Jwt) {
  return ` 
  <div>
   <p class="row float-left"><b>Here is the info I recovered about your profile in your Google account:</b></p>
  <table id="token-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr> 
  </thead>
  <tbody>
    ${Object.keys(claims)
      .map(
        (key) => `<tr>
    <td>${key}</td>
    <td>${claims[key]}</td>
  </tr>`
      )
      .join(' ')}
  </tbody>
  </table>
  </div>
  `;
}
