export const cloneList = (list: []) => {
	if (!list) return;
	return JSON.parse(JSON.stringify(list));
};

export const isServer = typeof window === 'undefined';

export const isBrowser = !isServer;
