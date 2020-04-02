import { TokenAction } from '../actions/token';

interface ITokenState {
  token: string
}
const initState: ITokenState = {
  token: '',
}

export const reducer = (state: ITokenState = initState, action: TokenAction) => {
  switch (action.type) {
    case GET:
      return {
        
      }
  }
}
