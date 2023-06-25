import Image from 'next/image';
import Link from 'next/link';
import loading from 'public/images/loading.gif';
import Button from '../button';
/* import { addCart } from '../../../store/globalSlice';
 */
import { Products, Product, Title, Content, ProductPrice, ProductTitle } from './styled';
import { routes } from '@src/constants/routes';

type ProductSlideProps = {
	title?: string;
	list?: any;
};

const ProductSlide = ({ title, list }: ProductSlideProps) => {
	/* 	const dispatch = useDispatch();

	 */

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
								<Image src={item.image} alt='image' width={225} height={225} />

								<ProductTitle>{item.title}</ProductTitle>
								<ProductPrice>{`$${item.price}`}</ProductPrice>
							</Link>

							<Button /* onClick={() => dispatch(addCart(item))} */>Add To Cart</Button>
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
