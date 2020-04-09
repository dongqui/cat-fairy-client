export const action = <T, P>(type: T) => (payload: P) => {
  return { type, payload } 
}