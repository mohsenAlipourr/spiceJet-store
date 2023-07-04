import { homeData } from '@src/services/database/homeData';

type Response = {
	data: any;
	status: 200 | 404;
};

export const getHomeData = () => {
	return new Promise<Response>((resolve) => {
		const result: Response = {
			data: homeData,
			status: 200,
		};

		resolve(result);
	});
};
