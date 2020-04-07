import { createRequestTypes, action, REQUEST, SUCCESS, FAILURE } from './index';


export const TOKEN = createRequestTypes('TOKEN');

export type TokenAction =
  | ReturnType<typeof token.request>
  | ReturnType<typeof token.success>
  | ReturnType<typeof token.failure>
;

export const token = {
  request: (code: string) => action(TOKEN[REQUEST], { code }),
  success: (token: string) => action(TOKEN[SUCCESS], { token }),
  failure: (error: object) => action(TOKEN[FAILURE], { error }),
}

