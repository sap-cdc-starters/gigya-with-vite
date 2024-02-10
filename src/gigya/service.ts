//<reference types="gigya.d.ts" />

import {createMachine, interpret, assign} from '@xstate/fsm';
import type {StateFrom} from '@xstate/fsm';
import {Jwt} from '@auth';
import  {  screenSetSignUp, useGigya} from "@gigya/actions.ts";
import {ScreenSetParams} from "@gigya/gigya-interface.ts";
import * as gigya from "./gigya-interface.ts";

declare global {
    interface Window {
        gigya: typeof gigya;
    }
}
type AuthEvent =
    { type: 'loaded', gigya: typeof gigya } |
    { type: 'login', container:string } & Partial<ScreenSetParams> |
    { type: 'register' } & Partial<ScreenSetParams> |
    { type: 'logged_in', id_token: Jwt, account: any }
    | { type: 'logged_out' };
type AuthContext = { id_token?: Jwt | undefined, account?: Record<string, object> | undefined, container?: string, gigya?: any};

function log(message: string) {
    return (context: any, event: any) => console.log(message, context, event);
}

const authMachine = createMachine<AuthContext, AuthEvent>(
    {
        id: 'gigya',
        initial: 'loading',
        context: {},
        states: {
            loading: {
                entry: 'onLoading',
                on: {
                    loaded: {
                        target: 'ready',
                        actions:['onLoaded']
                    }
                }
            },
            ready: {
                entry: 'subscribeToGigyaEvents',
                on: {
                    login: {
                        target: 'login'
                    },
                    register: {
                        target: 'register'
                    },
                    logged_in: {
                        target: 'authenticated',
                        actions: ['setAccount', 'setIdToken']
                    }
                },
            },
            login: {
                entry: "login",
                on: {
                    logged_in: {
                        target: 'authenticated',
                        actions: ['setAccount', 'setIdToken']
                    }
                }
            },
            register: {
                entry: (event: any) => screenSetSignUp({
                    ...event
                }),
                on: {
                    logged_in: {
                        target: 'authenticated',
                        actions: ['setAccount', 'setIdToken']
                    }
                }
            },

            authenticated: {
                entry: log('authenticated'),
                on: {
                    logged_out: {
                        target: 'idle',
                        actions: ['resetUser']
                    }
                }
            },
        },
    },
    {
        actions: {
            subscribeToGigyaEvents: (_context, _event) => {
                window.gigya.hasSession().then(has => {
                    if (has) {
                        window.gigya.accounts.getAccountInfo({
                            include: "all",
                            callback: (res) => {
                                if (res.errorCode === 0) {
                                    gigyaService.send({type: 'logged_in', account: res, id_token: new Jwt(res.id_token)})
                                }
                            }
                        })
                    }
                })
                window.gigya.socialize.addEventHandlers({
                    onLogin: (e:any) => {
                        console.log('logged in', e);
                        gigyaService.send({type: 'logged_in', account: e, id_token: new Jwt(e.id_token)})
                    },
                    onLogout: () => gigyaService.send('logged_out')
                })
            },
            onLoading: () => {
                useGigya(gigya => {
                    gigyaService.send({gigya: gigya, type: 'loaded'});
                })
            },
            // onLoaded: assign({
            //     gigya: (_ctx, e)  => e.type === 'loaded' ? e.gigya.apiKey : undefined
            // }),
            resetUser: assign({
                account: (_c, _e) => undefined,
                id_token: (_c, _e) => undefined
            }),
            login: (_ctx, e) => {
                e.type === 'login' &&  
                window.gigya.accounts.showScreenSet({
                            screenSet: "Default-RegistrationLogin",
                            startScreen: 'gigya-login-screen',
                            containerID: e.container
                  });
            },
            setIdToken: assign({
                id_token: (_ctx, e) =>
                    e.type === 'logged_in' ? e.id_token : undefined
            }),
            setAccount: assign({
                account: (
                    _ctx: any,
                    e
                ) => e.type === 'logged_in' ? e.account : undefined,
            }),
        },
    }
);

export const gigyaService = interpret(authMachine).start();
export type GigyaState = StateFrom<typeof authMachine>;

gigyaService.subscribe((state: { value: any }) => {
    console.log(state.value);
});
 
