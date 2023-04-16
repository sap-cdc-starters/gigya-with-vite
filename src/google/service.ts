import { createMachine, interpret, assign } from '@xstate/fsm';
import type { StateFrom } from '@xstate/fsm';
import type { OidcJwt } from '@auth';
import { Jwt } from '@auth';

const authMachine = createMachine(
  {
    id: 'google',
    context: {
      id_token: undefined as unknown as OidcJwt,
    },
    initial: 'none',
    states: {
      none: {
        on: { ID_TOKEN: { target: 'authenticated', actions: ['setIdToken'] } },
      },
      authenticated: {},
    },
  },
  {
    actions: {
      setIdToken: assign({
        id_token: (_ctx: unknown, { id_token }: { id_token: string }) =>
          new Jwt(id_token),
      }),
    },
  }
);

export const googleService = interpret(authMachine).start();
export type GoogleState = StateFrom<typeof authMachine>;

googleService.subscribe((state: { value: any }) => {
  console.log(state.value);
});
