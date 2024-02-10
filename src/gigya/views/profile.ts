import { gigyaService } from '@gigya/service';
import type { GigyaState } from '@gigya/service';
 
export function setupGigyaProfileContainer(element: HTMLDivElement) {
  gigyaService.subscribe(({ value, context }: GigyaState) => {
    console.log('profile container',value, context);
    const  { account } = context || {};
    console.log(account);
    element.style.display = value == 'authenticated' ? 'inline' : 'none';
    element.innerHTML = claims({ account });
  });
}



function flatten(claims: [string, any][]): [string, any][]{
  return  claims.flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return flatten(Object.entries(value).map(([k, v]) => [`${key}.${k}`, v]));
    }
    return [ [key, value]]
  })
}
function claims({ account }: { account?: Record<string, object>  }) {
  const profile = account?.profile as  any;
  const { firstName, nickName, photoURL, email } = profile || {  };
  return ` 
  <div> 
    ${welcome({name:nickName ?? firstName ??email, picture: photoURL})} 

   <p class="row float-left"><b>Here is the info I recovered about your profile in your Gigya account:</b></p>
  <table id="token-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr> 
  </thead>
  <tbody>
    ${
      account &&
      flatten(Object.entries(account))
        .map(
          ([key,value]) => `<tr>
    <td>${key}</td>
    <td>${value}</td>
  </tr>`
        )
        .join(' ')
    }
  </tbody>
  </table>
  </div>
  `;
}


//@ts-ignore
function welcome(  { name, picture } ) {
  return `
  <div >
  <h1 class="float-left">Hello <b>${name}!</b>
  <img src="${picture}" alt="Avatar" style="padding: 0 2rem 0 2rem; border-radius: 50%;"> </h1>
  <h3 class="row float-left">Looks like you have authenticated yourself!</h3>
<div>
  `;
}
