export const REQUEST_TOKEN = 'GET_TOKEN' as const;


function action(type, payload = {}) {
  return {type, ...payload}
}

export type TokenAction =
  | ReturnType<typeof requestToken>;


export function requestToken() {
  
}