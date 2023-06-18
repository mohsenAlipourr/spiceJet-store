import Image from 'next/image';
import loading from 'public/images/loading.gif';
import Button from '../button';
import { Products, Product, Title, Content, ProductPrice, ProductTitle } from './styled';

type ProductSlideProps = {
	title?: string;
	list?: any;
};

const ProductSlide = ({ title, list }: ProductSlideProps) => {
	return (
		<Content>
			<Title>
				<span>{title ? title : <Image src={loading} alt='loading' />}</span>
			</Title>

			<Products>
				{list ? (
					list.map((item: any, index: any) => (
						<Product key={index}>
							<Image src={item.image} alt='image' width={225} height={225} />

							<ProductTitle>{item.title}</ProductTitle>
							<ProductPrice>{`$${item.price}`}</ProductPrice>

							<Button>Add To Cart</Button>
						</Product>
					))
				) : (
					<></>
				)}
			</Products>
		</Content>
	);
};

export default ProductSlide;
