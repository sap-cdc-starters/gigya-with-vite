import html from './index.html?raw';
import css from './index.css?raw';
const template = document.createElement('template');
const screenHtml= html
template.innerHTML = screenHtml;
import './identifier'
 // document.body.appendChild(template);
export class CustomRegistrationLogin extends HTMLElement {
    static is = 'generic-dialog';
    private _connected: boolean;
    // private content: Element[] =[];

    constructor() {
        super();

        this._connected = false;
    }

    // close() {
    //     this.content.forEach(element => {
    //         element.setAttribute('hidden', '');
    //         element.setAttribute('slot', 'content');
    //         this.append(element);
    //     });
    //     dialog.close();
    // }

    connectedCallback() {
        if (this._connected ) {
            return;
        }

        this._connected = true;

        this.innerHTML = `<div style="display: none">
                                 <style>
                                    ${css}
                                 </style>
                                ${screenHtml}
                                </div>`;
        
        // const invoker = this.shadowRoot.querySelector('slot[name="invoker"]');
        //
        // this.content = this.shadowRoot.querySelector<HTMLSlotElement>('slot[name="content"]')?.assignedElements() || [];
        
        // invoker?.addEventListener('click', e => {
        //     dialog.open({
        //         invokerNode: e.target,
        //         closeOnEscape: this.hasAttribute('close-on-escape'),
        //         closeOnOutsideClick: this.hasAttribute('close-on-outside-click'),
        //         content: (dialogNode: { append: (arg: any) => void; }) => {
        //             this.content.forEach(element => {
        //                 element.removeAttribute('hidden');
        //                 element.removeAttribute('slot');
        //                 dialogNode.append(element);
        //             });
        //         },
        //     });
        // });

        // dialog.addEventListener('dialog-opened', () => {
        //     this.dispatchEvent(new CustomEvent('dialog-opened', { detail: true }));
        // });
        //
        // dialog.addEventListener('dialog-closed', () => {
        //     this.dispatchEvent(new CustomEvent('dialog-closed', { detail: true }));
        // });
    }
}