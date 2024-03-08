import {createMachine, interpret, assign} from '@xstate/fsm';
import type {StateFrom} from '@xstate/fsm';
import {Jwt} from '@auth';
import  {   useGigya} from "@gigya/actions.ts";
import {ILoginEvent, ILogoutEvent, Profile, ScreenSetParams} from "@gigya/gigya-interface.ts";
import '../global.d.ts';


export type Account ={
    UID: string,
    profile: Profile & Partial<{
        firstName: string,
        lastName: string,
        email: string;
        photoURL: string;
        nickName: string;
    }> 
} 
export type AuthEvent =
    { type: 'gigya.loaded', gigya: typeof gigya } |
    { type: 'login', container:string } & Partial<ScreenSetParams> |
    { type: 'register', container:string } & Partial<ScreenSetParams> |
    { type: 'login.callback', details?: ILoginEvent  } |
    { type: 'logout.callback' , details:ILogoutEvent } |
    { type: 'account.response' , account:Account } |
    { type: 'jwt.response' , id_token: Jwt } |
    { type: 'logout'} |
    { type: 'logged_in', id_token: Jwt, account: any } |
    { type: 'logged_out' };
export type AuthContext = { id_token?: Jwt | undefined, account?: Account | undefined, container?: string, gigya?: typeof gigya};

function log(message: string) {
    return (context: any, event: any) => console.log(message, context, event);
}

const authMachine = createMachine<AuthContext, AuthEvent>(
    {
        id: 'gigya-login',
        initial: 'js.loading',
        context: {},
        
         states: {
            ['js.loading']: {
                entry: 'gigya.load',
                on: {
                    ['gigya.loaded']: {
                        target: 'js.ready',
                        actions:['gigya.assign', 'gigya.subscribe']
                    }
                }
            },
            ['js.ready']: {
                on: {
                    login: {
                        target: 'login'
                    },
                    register: {
                        target: 'register'
                    },
                    
                    ["login.callback"]: {
                        target: 'authenticated',
                        actions: [log('ready.login.callback')]
                    } 
                },
            },
            ['login']: {
                entry: "login.start",
                on: {
                    ["login.callback"]: {
                        target: 'authenticated',
                        actions: [log('ready.login.callback')]
                    },
                    login: {
                        target: 'login'
                    },
                    register: {
                        target: 'register'
                    },
                }
            }, 
            ['register']: {
                entry: "register.start",
                on: {
                    ["login.callback"]: {
                        target: 'authenticated',
                        actions: [log('register.logged_in')]
                    },

                    login: {
                        target: 'login'
                    },
                    register: {
                        target: 'register'
                    },
                }
            },
            
            authenticated: {
                entry: [log('authenticated'),"login.assign", "account.get", "jwt.get"],
                on: {
                    ['account.response']: {
                        actions: [log('assign.account'), "account.assign"]
                    },
                    ['jwt.response']: {
                        actions: [log('assign.jwt'), "jwt.assign"]
                    },
                    ["logout"]: {
                        actions: ['logout']
                    },
                    ["logout.callback"]: {
                        target: 'js.ready',
                        actions: [log('logged out'), "logout.assign"]
                    }
                }
            },
        },
    },
    {
        actions: {
            ['gigya.load']: () => {
                useGigya(gigya => {
                    gigyaService.send({gigya: gigya, type: 'gigya.loaded'});
                })
            },

            ['gigya.subscribe']: (context, event) => {
               const gigya= event.type === 'gigya.loaded' && event.gigya || context.gigya!;
                gigya!.hasSession().then(has => {
                    if (has) {
                        gigyaService.send({type: 'login.callback' }) 
                    }
                })
                gigya!.socialize.addEventHandlers({
                    onLogin: (e:ILoginEvent) => {
                        gigyaService.send({type: 'login.callback', details: e});  
                    },
                    onLogout: (e:ILogoutEvent) => { 
                        console.log('logout', e);
                        gigyaService.send( {details: e, type: 'logout.callback'});
                    }
                })
            }, 

            ['register.start']: ({gigya}, e) => {
                e.type === 'register' &&
                gigya!.accounts.showScreenSet({
                            screenSet: "Default-RegistrationLogin",
                            startScreen: 'gigya-register-screen',
                            containerID: e.container,
                            include: "id_token",
                            ...e,
                            onError: function(event) {
                                console.log('onError', event);
                                return {
                                    nextScreen: 'gigya-otp-screen'
                                };
                            },
                    
                          


                            onAfterSubmit: (e) => {
                                console.log('onAfterSubmit', e);
                            },
                            onFieldChanged: (e) => {
                                console.log('onFieldChanged', e);
                                if(e.field === 'email' && !e.isValid)
                                {   console.log('invalid email', e);
                                    document.getElementsByClassName('gigya-register-form').namedItem('email')?.setAttribute('data-invalid',  e.isValid);
                                    const popover = document.getElementById("popver-email");
                                    console.log('popover', popover);
                                    popover?.showPopover();

                                    // ( document.getElementById('switch') as HTMLLinkElement).click();
                                    // gigya!.auth.getMethods({
                                    //     identifier: e.value, callback: (res) => {
                                    //         console.log('invalid email', res);
                                    //         gigya!.accounts.showScreenSet({
                                    //             screenSet: "psr-PasswordlessLogin",
                                    //             startScreen: 'gigya-auth-methods-screen',
                                    //             containerID: e.container,
                                    //             include: "id_token" ,
                                    //             parentData: {authMethods:res.authMethods, container: e.container},
                                    //             isChild: true,
                                    //         });
                                    //     }
                                    // })
                                }
                            }

                });
            },
            ['login.start']: (_ctx, e) => {
                e.type === 'login' &&  
                window.gigya.accounts.showScreenSet({
                            screenSet: "Default-RegistrationLogin",
                            startScreen: 'gigya-login-screen',
                            containerID: e.container,
                            include: "id_token",
                             ...e
                  });
            },
            ['login.assign']: assign({
                account: (_ctx, e) => e.type === 'login.callback' ?
                    e.details : undefined

            }),
            
            ['logout']: ({gigya}, _e) => {
                gigya!.accounts.logout();
            },

            ["logout.assign"]: assign({
                account: (_c, _e) => undefined,
                id_token: (_c, _e) => undefined
            }),
            
            ['account.get']: ({gigya}, _e) => {
                gigya!.accounts.getAccountInfo({
                    include: "all",
                    callback: (res) => {
                        if (res.errorCode === 0) {
                            gigyaService.send({type: 'account.response', account: res})
                        }
                    }
                })
            }, 
            ['account.assign']: assign({
                account: (_ctx, e) => "account" in e ? e.account : undefined
            }),
            
            ['jwt.get']: ({gigya}, _e) => {
                gigya!.accounts.getJWT({
                    fields: "profile, data, preferences, subscriptions, communications",
                    callback: (res) => {
                        if (res.errorCode === 0) {
                            gigyaService.send({type: 'jwt.response', id_token: new Jwt(res.id_token)})
                        }
                    }
                })
            },

            ['jwt.assign']: assign({
                id_token: (_ctx, e) => e.type === 'jwt.response' ? e.id_token : undefined
            }), 
            
         

            ['gigya.assign']: assign({
                gigya: (_ctx, e)  => e.type === 'gigya.loaded' ? e.gigya : undefined
            }),


        },
    }
);

export const gigyaService = interpret(authMachine).start();
export type GigyaState = StateFrom<typeof authMachine>;

gigyaService.subscribe((state: { value: any }) => {
    console.log(state.value);
});
 


