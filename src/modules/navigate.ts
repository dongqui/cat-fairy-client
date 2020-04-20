import { action } from './helper';

export const NAVIGATE_PUSH = 'NAVIGATE_PUSH' as const;
export const NAVIGATE_REPLACE = 'NAVIGATE_REPLACE' as const;
export const navigate_push = (pathname: string) => action(NAVIGATE_PUSH)({ pathname });
export const navigate_replace = (pathname: string) => action(NAVIGATE_REPLACE)({ pathname });