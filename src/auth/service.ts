// import { createMachine, interpret, assign } from '@xstate/fsm';
// import type { StateFrom } from '@xstate/fsm';
// import type { OidcJwt } from '@auth/jwt';
// import { Jwt } from '@auth/jwt';

// const authMachine = createMachine(
//   {
//     id: 'auth',
//     context: {
//       id_token: undefined as unknown as OidcJwt,
//     },
//     initial: 'none',
//     states: {
//       none: {
//         on: { ID_TOKEN: { target: 'authenticated', actions: ['setIdToken'] } },
//       },
//       authenticated: {},
//     },
//   },
//   {
//     actions: {
//       setIdToken: assign({
//         id_token: (_ctx: unknown, { id_token }: { id_token: string }) =>
//           new Jwt(id_token),
//       }),
//     },
//   }
// );

// export const authService = interpret(authMachine).start();
// export type AuthState = StateFrom<typeof authMachine>;

// authService.subscribe((state: { value: any }) => {
//   console.log(state.value);
// });
