import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import HomeContent from '@src/components/pages/home';
import { HomeDataApiResponse } from '@src/interfaces/home';
import { getHomeData } from '@src/api/home';

type HomeProps = {
	data: HomeDataApiResponse;
};

const Home = ({ data }: HomeProps) => {
	return (
		<div>
			<Head>
				<title>spiceJet</title>
			</Head>

			<HomeContent data={data} />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	const response = await getHomeData();

	return { props: { data: response.data } };
};

export default Home;
