export const cloneList = (list: any) => {
	if (!list) return;
	return JSON.parse(JSON.stringify(list));
};

export const isServer = typeof window === 'undefined';

export const isBrowser = !isServer;
