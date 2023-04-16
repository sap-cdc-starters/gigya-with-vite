import { gigyaService } from '@gigya/service';
import type { GigyaState } from '@gigya/service';

export function setupGigyaProfileContainer(element: HTMLDivElement) {
  gigyaService.subscribe(({ value, context: { account } }: GigyaState) => {
    console.log(account);
    element.style.display = value == 'authenticated' ? 'inline' : 'none';
    element.innerHTML = claims({ account });
  });
}

function claims({ account }: { account: Record<string, object> }) {
  return ` 
  <div>
   <p class="row float-left"><b>Here is the info I recovered about your profile in your Gigya account:</b></p>
  <table id="token-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr> 
  </thead>
  <tbody>
    ${account && Object.keys(account)
      .map(
        (key) => `<tr>
    <td>${key}</td>
    <td>${account[key]}</td>
  </tr>`
      )
      .join(' ')}
  </tbody>
  </table>
  </div>
  `;
}
