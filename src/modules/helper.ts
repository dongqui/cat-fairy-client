export const action = <T, P extends object>(type: T) => (payload: P) => {
  return { type, payload } 
}