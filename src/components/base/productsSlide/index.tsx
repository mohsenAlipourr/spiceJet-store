import Image from 'next/image';
import Link from 'next/link';
import loading from 'public/images/loading.gif';
import { routes } from '@src/constants/routes';
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
							<Link href={routes.product(item.id)}>
								<Image src={item.images[0]} alt='image' width={225} height={225} />

								<ProductTitle>{item.title}</ProductTitle>
								<ProductPrice>{`$${item.price}`}</ProductPrice>
							</Link>
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
