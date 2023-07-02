import { GetServerSideProps } from 'next';
import { getProductData } from '@src/api/product';
import ProductContent from '@src/components/pages/product';

const Product = (props: any) => {
	const product = props.data.status === 200;
	return <>{product ? <ProductContent data={props.data.data} /> : 'There is no product'}</>;
};

export const getServerSideProps: GetServerSideProps<any> = async (context: any) => {
	const id = context.query.id;

	const response = await getProductData(id[0]);

	return { props: { data: response } };
};

export default Product;
