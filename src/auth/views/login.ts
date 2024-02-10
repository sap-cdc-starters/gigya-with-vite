import { googleService } from '@google/service';
import {setupLoginButton} from "@gigya/views/login-button.ts";
import {gigyaService} from "@gigya";

export function setupLoginContainer(element: HTMLDivElement) {
  gigyaService.subscribe((event) => {
    console.log(event);
    element.style.display = event.matches('authenticated') ? 'none' : 'inline';
  });

  element.innerHTML = ` 
  <p>To proceed with testing the authentication flow, <b>follow the prompt shown in the top right corner of the page ☝️.</b> <br/> Or, use the google button 👇 </p>
 
  <div id="link-login" class="centered">
    <button id="login-button" class="g_id_signin" style="display: inline;">Login</button> 
  </div>
`;

  setupLoginButton(
      document.querySelector<HTMLButtonElement>('#login-button')!
  )

}

 
