import { createMachine, interpret, assign } from '@xstate/fsm';
import type { StateFrom } from '@xstate/fsm';
import type { OidcJwt } from '@auth';
import { Jwt } from '@auth';
import { gigyaJwtLogin } from './login';
import { googleService, GoogleState } from '@google';

const authMachine = createMachine(
  {
    id: 'gigya',
    context: {
      id_token: undefined as unknown as OidcJwt,
      account: undefined as unknown as Record<string, object>,
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          GOOGLE_LOGIN: {
            target: 'dologin',
            actions: ['setIdToken'],
          },
        },
      },
      dologin: {
        entry: ({ id_token }: { id_token: OidcJwt }) =>
          gigyaJwtLogin({ id_token: id_token.raw, callback: sendOnLogin }),
        on: {
          LOGIN: {
            target: 'authenticated',
            actions: ['setAccount'],
          },
        },
      },
      authenticated: {},
    },
  },
  {
    actions: {
      setIdToken: assign({
        id_token: (_ctx: unknown, { id_token }: { id_token: OidcJwt }) =>
          id_token,
      }),
      setAccount: assign({
        account: (
          _ctx: unknown,
          { account }: { account: Record<string, object> }
        ) => account,
      }),
    },
  }
);

export const gigyaService = interpret(authMachine).start();
export type GigyaState = StateFrom<typeof authMachine>;

gigyaService.subscribe((state: { value: any }) => {
  console.log(state.value);
});

export function sendOnLogin({
  userInfo,
}: {
  userInfo: Record<string, object>;
}) {
  gigyaService.send({ type: 'LOGIN', account: userInfo });
}

googleService.subscribe((state: GoogleState) => {
  if (state.matches('authenticated')) {
    gigyaService.send({ type: 'GOOGLE_LOGIN', ...state.context });
  }
});
