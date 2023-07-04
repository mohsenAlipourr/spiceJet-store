import { getCategoryData } from '@src/api/category';
import CategoryProduct from '@src/components/pages/categoryProduct';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

const Category = (props: any) => {
	return (
		<>
			<Head>
				<title>spiceJet - Category</title>
			</Head>

			<CategoryProduct data={props.data.data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps<any> = async (context: any) => {
	const id = context.query.id;

	const response = await getCategoryData(id[0]);

	return { props: { data: response } };
};

export default Category;
