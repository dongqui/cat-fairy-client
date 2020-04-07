export const REQUEST = 'REQUEST' as const;
export const SUCCESS = 'SUCCESS' as const;
export const FAILURE = 'FAILURE' as const;

export function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE].reduce<Record<string, string>>((acc, type: string) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export function action(type: string, payload = {}) {
  return {type, ...payload}
}