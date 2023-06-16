import { GetServerSideProps } from 'next';
import { getProductData } from '@src/api/product';
import ProductContent from '@src/components/pages/product';

const Product = (props: any) => {
	console.log('props', props);

	return <ProductContent />;
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	const response = await getProductData('sp-10');

	return { props: { data: response } };
};

export default Product;
