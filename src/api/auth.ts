type Response = {
	status: 201 | 422;
};

export const postAuth = (email: string, password: string) => {
	return new Promise<Response>((resolve) => {
		if (email && password) {
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);

			const result: Response = {
				status: 201,
			};

			resolve(result);
		} else {
			const result: Response = {
				status: 422,
			};

			resolve(result);
		}
	});
};
