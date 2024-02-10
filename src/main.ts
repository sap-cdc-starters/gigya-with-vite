import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { 
  setupProperties,
} from '@gigya/views/properties.ts';
import { setupGigyaProfileContainer } from '@gigya';
import { gigyaService, GigyaState } from '@gigya/service';
import {setupLoginContainer} from "@auth/views/login.ts";
import {setupJwtContainer} from "@gigya/views/jwt.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="google-setup"> </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Gigya + Vite</h1>
     
    <div class="vcontainer container">
    <section class="section container" id="not-authenticated">
       <button id="login-button" class="g_id_signin" style="display: inline;">Login</button>
     </section>

    <section class="section container" id="profile"> </section>
    
    <section class="container" id="jwt"></section> 
        <section class="section container" id="google-container"> </section> 
        <section class="container" id="properties"></section>

    </div>
  </div>
  </div>
`;

setupLoginContainer(
  document.querySelector<HTMLDivElement>('#not-authenticated')!
);


setupGigyaProfileContainer(
  document.querySelector<HTMLDivElement>('#profile')!
);
setupJwtContainer(
    document.querySelector<HTMLDivElement>('#jwt')!

)


setupProperties(document.querySelector<HTMLDivElement>('#properties')!);
 
gigyaService.subscribe((state: GigyaState) => {
  console.log(state);
});
