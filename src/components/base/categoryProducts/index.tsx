import Image from 'next/image';
import image from 'public/images/product.png';
import loading from 'public/images/loading.gif';
import Button from '../button';
import { Products, Product, Container, ProductPrice } from './styled';

type ProductSlideProps = {
	title?: string;
	list?: any;
};

const ProductCategory = ({ list }: ProductSlideProps) => {
	return (
		<Container>
			<Products>
				{list ? (
					list.map((item: any, index: any) => (
						<Product key={index}>
							<Image src={image} alt='image' width={225} height={225} />

							<span>{item.title}</span>
							<ProductPrice>{item.price}</ProductPrice>

							<Button>Add To Cart</Button>
						</Product>
					))
				) : (
					<Image src={loading} alt='loading' />
				)}
			</Products>
		</Container>
	);
};

export default ProductCategory;
