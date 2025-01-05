export const mergeArray = (a1: string[], a2: string[]): string[] => {
	let s = new Set([...a1, ...a2]);
	return [...s];
};
