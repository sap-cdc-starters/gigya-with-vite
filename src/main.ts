import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import {
  setupProfileContainer,
  setupGoogleLogin,
  setupLoginContainer,
  setupProperties,
} from '@google';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="google-setup"> </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1> Google One Tap</h1>
     
    <div class="vcontainer container">
    <section class="section container" id="not-authenticated"> </section>
    <section class="section container" id="authenticated"> </section>
        <section class="section container" id="google-container"> </section>
        <section class="container" id="properties"></section>

    </div>
  </div>
  </div>
`;
setupGoogleLogin(document.querySelector<HTMLDivElement>('#google-setup')!);

setupLoginContainer(
  document.querySelector<HTMLDivElement>('#not-authenticated')!
);

setupProfileContainer(
  document.querySelector<HTMLDivElement>('#authenticated')!
);

setupProperties(document.querySelector<HTMLDivElement>('#properties')!);
