import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CategoryProduct from '@src/components/pages/categoryProduct';
import { getCategoryData } from '@src/api/category';

type CategoryType = {
	data: {
		data: [];
		status: number;
	};
};

const Category = (props: CategoryType) => {
	return (
		<>
			<Head>
				<title>spiceJet - Category</title>
			</Head>

			<CategoryProduct data={props.data.data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const id = context.query.id;

	const response = await getCategoryData(id[0]);

	return { props: { data: response } };
};

export default Category;
