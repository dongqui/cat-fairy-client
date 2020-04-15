import { action } from './helper';

export const NAVIGATE = 'NAVIGATE' as const;
export const navigate = (pathname: string) => action(NAVIGATE)({ pathname });