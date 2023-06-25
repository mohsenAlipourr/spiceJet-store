export const routes = {
	home: `/`,
	login: `/login`,
	cart: `/cart`,
	profile: `/profile`,
	product: (id: string) => `/product/${id}`,
	category: (id: string) => `/category/${id}`,
};
