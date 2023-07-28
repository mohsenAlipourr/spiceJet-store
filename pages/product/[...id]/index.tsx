import type { GetServerSideProps } from 'next';
import { getProductData } from '@src/api/product';
import ProductContent from '@src/components/pages/product';
import Head from 'next/head';
import { StaticImageData } from 'next/image';

type ProductType = {
	data: {
		data: {
			category: string;
			description: [];
			id: string;
			images: StaticImageData[];
			price: number;
			score: number;
			summery: string;
			title: string;
		};
		status: number;
	};
};

const Product = (props: ProductType) => {
	const product = props.data.status === 200;
	console.log('props', props);

	return (
		<>
			<Head>
				<title>spiceJet - Product</title>
			</Head>

			{product ? <ProductContent data={props.data.data} /> : 'There is no product'}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const id = context.query.id;

	const response = await getProductData(id[0]);

	return { props: { data: response } };
};

export default Product;
