// Usage: <identifier-field name="email" ></identifier-field>
import css from './index.css?raw';
const style= `
:host {
  width: 100% ;
  height: 100%;
    display: flex;
}
 
    input {
        width: 100%;
        height: 100%;
    }
   
 
  p {
    line-height: 1.5;
  }
[popover]:popover-open { 
    opacity: 0.7;*/
    transform: scale(1); 
 }
[popover] {
    padding: 20px;
    /* Final state of the exit animation */
    opacity: 0;
    transform: scale(0);

    transition: all 0.7s allow-discrete; */
}
 

/* Needs to be included after the previous [popover]:popover-open
   rule to take effect, as the specificity is the same */
@starting-style {
    [popover]:popover-open {
        opacity: 0;
        transform: scaleX(0);
    }
}

/* Transition for the popover's backdrop */

[popover]::backdrop {
    background-color: rgb(0 0 0 / 0%);
    transition: all 0.7s allow-discrete; 
}
    
[popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 25%);
}

/* Nesting selectors (&) cannot represent pseudo-elements, so this 
   starting-style rule cannot be nested. */

@starting-style {
    [popover]:popover-open::backdrop {
        background-color: rgb(0 0 0 / 0%);
    }
}

::backdrop {
    backdrop-filter: blur(1px);
    
  }
  input[type=submit] {
    cursor: pointer;
    width: 100%;
    height: 43px;
    border-radius: 1.79px;
    border-color: #1371b9;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, .4);
    color: #fff;
    background-color: #0070f0;
    -ms-flex-line-pack: center;
    align-content: center;
    text-align: center;
    font-size: 19px
}

${css}`
  
const template = document.createElement('template');
template.innerHTML = `
<!-- <div class="gigya-composite-control gigya-composite-control-textbox" style="display: block;">-->
<!--    <input  type="text" value="" name="code" data-required="true" autocomplete="off" class="gigya-input-text" formnovalidate="formnovalidate" tabindex="0" data-gigya-type="text"  data-gigya-placeholder="Enter the code sent to your email"  aria-label="Code">-->
<!--    <span class="gigya-error-msg" data-bound-to="code"></span>-->
<!--</div>-->

<div class="gigya-composite-control gigya-composite-control-textbox">
    <input  type="text" value="" name="identifier" data-required="true" autocomplete="email" class="gigya-input-text" formnovalidate="formnovalidate" tabindex="0" data-gigya-type="text"  data-gigya-placeholder="Email"  aria-label="Email">
     <span class="gigya-error-msg" data-bound-to="identifier"></span> 
 </div>
<style>

</style>

   <div class="portrait" popover="manual" id="popver-email" >
    <form class="gigya-otp-update-form" id="otp-verify" onsubmit="const x = (e) => {
        e.preventDefault();
         }" >
       
        <h2 class="gigya-composite-control gigya-composite-control-header" data-translation-key="HEADER_63695688742051540_LABEL">Before we continue, please verify your email address </h2>
        <div class="gigya-composite-control gigya-composite-control-textbox" style="display: block;">
            <input  type="text" value="" name="code" data-required="true" autocomplete="off" class="gig-tfa-code-textbox" formnovalidate="formnovalidate" tabindex="0" data-gigya-type="text"  data-gigya-placeholder="Enter the code sent to your email"  aria-label="Code">
            <span class="gigya-error-msg" data-bound-to="code"></span>
        </div>
        <div class="gigya-composite-control gigya-composite-control-submit ">
            <button type="button" class="gigya-input-submit" tabindex="0"  value="Confirm"
                    popovertargetaction="hide" popovertarget="popver-email"
                    formnovalidate="true">Confirm</button>
        </div>
        <div is="gigya-otp-screen" class="gigya-otp-screen"  ></div>
         </form > 
</div>
`;
export class IdentifierElement extends HTMLElement {
    static formAssociated = true;
    static get observedAttributes() {
        return ["required", "value"];
    }

    #internals;
    #input: HTMLInputElement;
    #shadowRoot:ShadowRoot;
    constructor()
    {
        super();
        this.#internals = this.attachInternals();
        this.#shadowRoot = this.attachShadow({mode: 'open', delegatesFocus: true});
        this.handleInput = this.handleInput.bind(this);
        this.#shadowRoot.innerHTML = this.render();
        this.#input  = this.#shadowRoot.querySelector<HTMLInputElement>('input')!;
        this.#input.addEventListener('change', ( E) => {
             console.log('change', E, gigya);
            this.handleInput(this.#input.value);
        }); 
    }

    private render() {
        return `
    <style>
      :host {
        display: block;
          inline-size: 100%;
      block-size: auto;

      }

      /*input {*/
      /*  display: block;*/
      /*  padding: 5px;*/
      /*}*/
    </style> 
    <slot>
        <input type="text" show-valid-checkmark="true" class="gigya-input-text" name="identifier" autocomplete="email"> 
     </slot>
  `;
    }

    formStateRestoreCallback(state: string)
    {
        this.#shadowRoot!.querySelector('input')!.value = state;
    }

    public checkValidity(): boolean {
        return this.#internals.checkValidity();
    }

    public reportValidity(): void {
         this.#internals.reportValidity();
    }

    public get validity(): ValidityState {
        return this.#internals.validity;
    }

    public get validationMessage(): string {
        return this.#internals.validationMessage;
    }

    attributeChangedCallback(name: string, _prev: any, next: string) {
        this.#input.setAttribute(name, next);
    }



    // this.saveInApiData({
    //     identifier: formData?.loginID || formData?.identifier,
    //     loginID: formData?.loginID,
    // });
    // gigya.accounts.auth.getMethods({
    //     aToken: this._screenSet?.data?.aToken,
    //     identifier: formData?.loginID || formData?.identifier,
    //     callback: options.callback
    // });


    private handleInput(value: string) {
        this.#internals.setFormValue(value);
        
    }
}

 