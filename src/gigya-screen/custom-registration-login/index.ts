import { CustomRegistrationLogin } from './custom-registration-login';
import {IdentifierElement} from "./identifier.ts";

customElements.define('identifier-field', IdentifierElement);
customElements.define('custom-registration', CustomRegistrationLogin);

declare global {
    interface HTMLElementTagNameMap {
        "custom-registration": CustomRegistrationLogin,
        "identifier-field": IdentifierElement,

    }
}
