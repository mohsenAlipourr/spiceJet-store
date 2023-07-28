import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import HomeContent from '@src/components/pages/home';
import { HomeDataApiResponse } from '@src/interfaces/home';
import { Rubik } from '@next/font/google';
import { getHomeData } from '@src/api/home';

export const title = Rubik({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

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

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await getHomeData();

	return { props: { data: response.data } };
};

export default Home;
