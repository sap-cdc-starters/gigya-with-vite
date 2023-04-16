import { googleService } from '@google/service';

export function setupLoginContainer(element: HTMLDivElement) {
  googleService.subscribe((event: { value: string }) => {
    console.log(event);
    element.style.display = event.value == 'authenticated' ? 'none' : 'inline';
  });

  element.innerHTML = `

  <p>To proceed with testing the authentication flow, <b>follow the prompt shown in the top right corner of the page ☝️.</b> <br/> Or, use the google button 👇 </p>
 
  <div id="link-login" class="centered">
  ${googleButton()}
  </div>`;
}

function googleButton() {
  return ` 
  <div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="outline" data-text="continue_with" data-size="large" data-logo_alignment="left">
  </div>
  `;
}
