import css from './default.css?raw';
import translations from './translations.json'
import {gigyaService} from "@gigya";
// document.body.appendChild(template);
import '../register-template'
import {social_login} from "../social-login.ts";
import {divider} from "../divider.ts";
import {profileFields} from "../profile-fields.ts";
import {password} from "../password.ts";
import {submit} from "../submit.ts";
import {emailIdentifier} from "../email-identifier.ts";
import {
    ClientMuteLevel, IAfterScreenLoadEvent,
    IBeforeScreenLoadEvent,
    IBeforeSubmitEvent,
    IOnFieldChangedEvent,
    LogLevel,
    LogTheme
} from "@gigya/gigya-interface.ts";
import {assign, createMachine, interpret} from "@xstate/fsm";
import {otp} from "../otp.ts";


//describe the state identifier, login-id-available, registration-methods, login-methods
 

type RegistrationContext = {
    identifier?: string
    nextScreen?: string
}

type RegisterEvent = {
    type: 'identifier',
    identifier: string
} | {
    type: 'available'
} | {
    type: 'unavailable'
}  |{
    type: 'success'
} | {
    type: 'failure'
} | {
    type: 'reset-next-screen'
}

 

const paswordlessRegistrationFlow= {
    id: 'passwordless-registration',
    initial: 'initial',
    context: {
        identifier: ''
    },
    on: {
        'identifier': {
            actions: ['assign.identifier', 'log'],
            target: 'identifier'
    },
        'reset-next-screen':{
            actions: ['reset-next-screen']
        }
    },
    states: {
        'initial': {
            on: {
                'identifier': {
                    actions: ['assign.identifier', 'log'],
                    target: 'identifier'
                }
            }},
        'identifier': {
            entry:['log', 'check-identifier'],

            on: {
                'available': 'register',
                'unavailable': 'auth',
            }
        },
        'register': { 
            entry: ['log','render:gigya-register-form'],
            on: {
                'success': 'success',
                'failure': 'failure'
            }
        },
        'auth': {
            entry: ['log','render:gigya-auth-methods-form'],
            on: {
                'success': 'complete',
                'failure': 'failure'
            }
        },
        'complete': {
            
            entry: ['log','render:gigya-profile-form'],
            on: {
                'success': 'success',
                'failure': 'failure'
            }
        },
  
    
        'success': {
            
        },
        'failure': {
           
        }
    }
      
} ;




export class PasswordlessRegistrationLogin extends HTMLElement {
    // static is = 'screen-set';
    private _connected: boolean;
    // private content: Element[] =[];
     #service;
     // #internals;
     #root

    constructor() {
        super();
        // this.#internals = this.attachInternals();
        this.#root = this.ownerDocument;
        this._connected = false;
        const machine= createMachine<RegistrationContext, RegisterEvent>(paswordlessRegistrationFlow, {
            
            actions: {
                'assign.identifier': assign({
                    identifier: (_ctx, e) => "identifier" in e ? e.identifier : undefined
                }),
                'reset-next-screen': assign({
                    nextScreen: (_ctx, _e) => undefined
                }),
                'check-identifier': ({identifier}) => {
                     gigya.accounts.isAvailableLoginID({loginID: identifier, callback: (res) => {
                            if(res.isAvailable){
                                this.#service.send('available');
                         } else {
                                this.#service.send('unavailable');
                            }
                }})},
                'render:gigya-register-form': assign({
                    nextScreen: ( _c,_e) => 'gigya-register-screen'
                }),
                'render:gigya-auth-methods-form': assign({
                    nextScreen: ( _c,_e) => 'gigya-auth-methods-screen'
                }),
                'render:gigya-profile-form': assign({
                    nextScreen: ( _c,_e) => 'gigya-profile-screen'
                }),

                // 'render:gigya-register-form': this.switchScreen.bind(this, {form:'gigya-register-form', screen:'gigya-register-screen'} ),
                // 'render:gigya-auth-methods-form':this.switchScreen.bind(this, {form:'gigya-auth-methods-form', screen:'gigya-auth-methods-screen'} ),
                // 'render:gigya-profile-form': this.switchScreen.bind(this, {form:'gigya-profile-form', screen:'gigya-profile-screen'} ),
                'log': (context, event) => {
                    console.log('context', context, 'event', event);
                }
            }
        });
     this.#service = interpret(machine).start();
        this.#service.subscribe(e=>{
            console.log(e.value, e.context, e.actions)
        })
    }
    
    get success_screen() {
        return this.getAttribute('success_screen') || "gigya-auth-methods-screen";
    }
    set success_screen(val) {
        if(val)
            this.setAttribute('success_screen', val);
    }
    
    get form() {
        return this.getAttribute('form') || "gigya-passwordless-register-form";
    }
    
    set form(val) {
        if(val)
            this.setAttribute('form', val);
    }

    get screenSet() {
        return this.getAttribute('screen-set') || "dft-PasswordlessLogin";
    }
    
    get screen() {
        return this.getAttribute('screen') || "gigya-passwordless-register-screen";
    }
    set screen(val) {
        if(val)
            this.setAttribute('screen', val);
    }

    set screenSet(val) {
        if(val)
            this.setAttribute('screen-set', val);
    }

    static get observedAttributes() {
        return ['screen-set', "success_screen", "form", "screen"];
    }

     onBeforeSubmit(e:IBeforeSubmitEvent):void | boolean {
        console.log('onBeforeSubmit', e);
        this.#service.send( {
            type: 'identifier',
            identifier: e.formData.identifier

        });
        
     }
     
     
        
     onFieldChanged(e:  IOnFieldChangedEvent) {
         console.log('onFieldChanged', e);
         // this.#internals.setFormValue('identifier', e.value);
         // if(e.field === 'identifier') {
         //     this.#service.send({
         //         type: 'identifier',
         //         identifier: e.value
         //
         //     });
         // }
     }
    logScreen(_e:any){
        console.log("logScreen",_e.type,_e, this.#service.state.context)
     }

    onAfterScreenLoad(e:IAfterScreenLoadEvent){
        console.log("onAfterScreenLoad",e, this.#service.state.context)
        this.#service.send({
            type: 'reset-next-screen',
        });
    }
    onBeforeScreenLoad(_e:IBeforeScreenLoadEvent) {
        console.log("onBeforeScreenLoad", this.#service.state.context)
        return {
            identifier: this.#service.state.context.identifier,
            profile: {
                email: this.#service.state.context.identifier
            },
            loginID: this.#service.state.context.identifier,
            email: this.#service.state.context.identifier,
            nextScreen: this.#service.state.context.nextScreen,
            response: {
                ..._e.response,
            }
        }
    }

    attributeChangedCallback(_name: any, oldVal: any, newVal: any) {
        if(oldVal !== newVal ) {
            this.render();
            this.connect();
            console.log('attributeChangedCallback', _name, oldVal, newVal, this.#root.getElementsByClassName('gigya-screen')[0].getAttribute('id'))
         }
    }
 
    container =  "gigya-screen-set-container"

 
    connect(){
 
        document.getElementById('root')?.showPopover();
        const show_screen_set= gigya.accounts.showScreenSet.bind(this,{
            screenSet: this.screenSet ,
            containerID: this.container,
            customLang: translations.en,
            onBeforeSubmit: this.onBeforeSubmit.bind(this),
            onFieldChanged: this.onFieldChanged.bind(this),
            onBeforeScreenLoad:this.onBeforeScreenLoad.bind(this), 
            onAfterScreenLoad :this.onAfterScreenLoad.bind(this)
             
        })
        gigyaService.subscribe(e=>{
            if(e.matches("js.ready")){
                show_screen_set();
                gigya.logger.enable(LogLevel.debug, ClientMuteLevel.none, LogTheme.light )
                gigya!.socialize.addEventHandlers({
                    ["onBeforeScreenLoad"]:console.log,
                    ["onAfterScreenLoad"]:console.log
                })
            }
        })
    }

  
     

    render() {
 
        this.innerHTML = `<div id="root" popover="manual">
                                 <style>
                                    ${css}
                                    input {
                                      padding-left: 1rem;
                                    }
                                 </style>
                                 <div id="gigya-screen-set-container"></div>
                              ${screen_set({
            screen_set: this.screenSet, screens: [
                render_screen({
                    screen: this.screen,
                    form: this.form,
                    success_screen: this.success_screen,
                    auth : ` <h2 class="gigya-composite-control gigya-composite-control-header">Register with your Email</h2>
                             ${emailIdentifier()}
                            <div class="box" data-width="100%" data-hight="100%"  >
                                  ${password()}
                                  ${profileFields()} 
                            </div>`
                    

                }),
                render_screen({
                    form:'gigya-register-form', screen:'gigya-register-screen',
                    success_screen: "_finish",
                    auth : `${emailIdentifier({name: 'email'})}  ${password()} ${profileFields()} `
                }),
                render_screen({
                    form:'gigya-email-code-auth-method-form', screen:'gigya-auth-methods-screen',
                    success_screen: 'gigya-profile-screen',
                    auth:  `<h2 class="gigya-composite-control gigya-composite-control-header">Before we continue, please verify your email address</h2>
                             ${emailIdentifier({name: 'email'})}  
                                ${otp()}
                              <div class="box" data-width="100%" data-hight="100%"  >
                                ${profileFields()} 
                              </div>`
                              
                }),
                render_screen({
                    screen: 'gigya-profile-screen',
                    form:'gigya-profile-form',
                    auth: ` ${emailIdentifier({name: 'email'})}  ${password()}`,
                    success_screen: '_finish'
                })
            ]
        })
        }
</div>`;


    }

    connectedCallback() {
        if (this._connected ) {
            return;
        }

        this._connected = true;
        this.render();
        this.connect();

      
 
    }

    private switchScreen({screen, form}: {screen?: string, form?: string}) {
         console.log(screen, form)
        //  this.screen = this.screen;
        // this.screen = screen || this.screen;
        // this.form = form || this.form;
        // this.getElementsByTagName('form')[0].setAttribute('data-on-success-screen',  screen || this.screen);
        // this.form = form || this.form;
        // this.screen = screen ||this.screen;
        //
        //
        // this.#root.getElementsByClassName("gigya-screen")[0].setAttribute('id',  this.screen);
        // this.getElementsByTagName('form')[0].setAttribute('class',  this.form);
        //
        // console.log('switching to', this.form, this.screen);
        //
        // gigya.accounts.switchScreen({
        //     screenSet: this.screenSet ,
        //     screen: screen || this.screen,
        //    
        //     containerID: this.container,
        //     customLang: translations.en,
        //     captionText:this.screen
        // })
        // this.render();
        // this.connect();

    }
}

customElements.define('passwordless-registration', PasswordlessRegistrationLogin);

declare global {
    interface HTMLElementTagNameMap {
        "passwordless-registration": PasswordlessRegistrationLogin,

    }
}


function screen_set({screen_set, screens}: {screen_set: string,screens: string[]}) {
    return ` <div style="display: none"     
                                 class="gigya-screen-set " id=${`"${screen_set}"`} 
                                 data-on-pending-registration-screen="psr-RegistrationLogin/gigya-complete-registration-screen" data-on-pending-verification-screen="psr-RegistrationLogin/gigya-verification-pending-screen" data-on-pending-email-verification-code="psr-RegistrationLogin/gigya-email-code-verification-screen" data-on-pending-tfa-registration-screen="psr-RegistrationLogin/gigya-tfa-registration-screen" data-on-pending-tfa-verification-screen="psr-RegistrationLogin/gigya-tfa-verification-screen" data-on-pending-password-change-screen="psr-RegistrationLogin/gigya-password-change-required-screen" data-on-existing-login-identifier-screen="psr-LinkAccounts/gigya-link-account-screen" data-on-pending-recent-login-screen="psr-ReAuthentication/gigya-reauthentication-screen"
                                 data-responsive="true"   
                                  data-wizard-migration-keys="migrate_translation_handlers_unique_key migrate_translation_handlers_unique_key_v3" 
                                   screen-set-type="PasswordlessLogin"> 
                                ${ screens.join('<br>')}
            </div>`

}

function render_screen({
                           auth,
                           screen,
                           form,
                           success_screen
                       }:{
    screen: string,
    form: string,
    success_screen: string,
    auth:string
}) {
    return ` 
                                  <div id="${screen}" class="gigya-screen v2 portrait dialog" 
                                     gigya-conditional:class="viewport.width < 550 ?gigya-screen v2 portrait mobile:viewp
                                     ort.width < 920 ?gigya-screen v2 portrait:" 
                                     data-on-pending-verification-screen="gigya-verification-sent-screen"  
                                      data-caption="Register"   >
                                    <form class="${form}" id="${form}" data-on-success-screen="${success_screen}"  >
                                         <div class="gigya-layout-row responsive with-divider">
                                         ${social_login}
                                         ${divider({text: "Or"})}  
                                        ${auth}
                                        
                                         <div class="gigya-container gigya-visible-when" data-condition="authMethods.length === 1">
                                               <a class="gigya-composite-control gigya-composite-control-link gigya-email-otp-change-method-link" data-binding="true" target="_blank" data-switch-screen="gigya-passwordless-login-screen" data-translation-key="LINK_130096189626726381_LABEL"></a>
                                          </div>

                                         ${submit({text: "Submit"})}
                                        <div class="gigya-error-display gigya-composite-control gigya-composite-control-form-error" data-bound-to="${form}">
                                            <div class="gigya-error-msg gigya-form-error-msg" data-bound-to="${form}"></div>
                                        </div>
                                  
                                     </div>
                                </form>
                                </div>
                             `
}