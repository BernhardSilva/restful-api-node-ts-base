import { status400, status200, status500 } from './statusNumbers';

export const isStatus500 = (args: string): boolean => {
	if (status500.some((code: any) => args.includes(code))) return true;
	return false;
};
export const isStatus400 = (args: string): boolean => {
	if (status400.some((code: any) => args.includes(code))) return true;
	return false;
};
export const isStatus200 = (args: string): boolean => {
	if (status200.some((code: any) => args.includes(code))) return true;
	return false;
};
