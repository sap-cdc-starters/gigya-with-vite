import {setupLoginButton} from "./login-button.ts";
import {showWhenUnauthenticated} from "./authenticated.ts";

export function setupLoginContainer(element: HTMLDivElement) {
   
  element.innerHTML = `  
  <div  class="vcontainer" >
    <p class="centered">To proceed with testing the authentication flow, use the login button 👇 </p>
    <button id="login-button" class="centered" >Login</button>
  </div>
 `;
 
  showWhenUnauthenticated(element); 
  setupLoginButton(document.querySelector<HTMLButtonElement>('#login-button')!)
  
  
  
 
  
 

}

 
