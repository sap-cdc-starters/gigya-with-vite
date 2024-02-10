import {googleService, type GoogleState} from "@google";
import {dumpJwt} from "@auth/jwt_debugger.ts";

export function setupProfileContainer(element: HTMLDivElement) {
    googleService.subscribe(({ value, context: { id_token } }: GoogleState) => {
        console.log(id_token?.claims);
        element.style.display = value == 'authenticated' ? 'inline' : 'none';
        element.innerHTML = dumpJwt({ id_token });
    });
}
