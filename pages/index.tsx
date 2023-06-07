import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import HomeContent from '@src/components/pages/home';
import { response } from '@src/constants/home';
import { HomeDataApiResponse } from '@src/interfaces/home';

type HomeProps = {
	data: HomeDataApiResponse;
};

const Home = ({ data }: HomeProps) => {
	return (
		<>
			<Head>
				<title>spiceJet</title>
			</Head>

			<HomeContent data={data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	return { props: { data: response.data } };
};

export default Home;
