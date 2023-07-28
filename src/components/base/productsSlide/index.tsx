import { useDispatch, useSelector } from 'react-redux';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import loading from 'public/images/loading.gif';
import { routes } from '@src/constants/routes';
import Button from '../button';
import { postCartChange } from '@src/api/cart';
import { updateGlobalSlice } from '@src/store/globalSlice';
import { Products, Product, Title, Content, ProductPrice, ProductTitle } from './styled';

type ProductSlideProps = {
	title?: string;
	list: {
		id: string;
		images: StaticImageData;
		title: string;
		price: number;
	}[];
};

type ListType = {
	id: string;
	price: number;
	images: any;
	title: string;
};

const ProductSlide = ({ title, list }: ProductSlideProps) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const email = useSelector((state: any) => state.globalSlice.data.email);
	const password = useSelector((state: any) => state.globalSlice.data.password);

	const handleBuy = async (id: string) => {
		if (!email && !password) {
			router.push(routes.login);
			return;
		}

		const response = await postCartChange(id, 1);

		if (response.status === 200) {
			dispatch(updateGlobalSlice({ cartTotal: response.cartTotal }));

			router.push(routes.cart);
		}
	};

	return (
		<Content>
			<Title>
				<span>{title ? title : <Image src={loading} alt='loading' />}</span>
			</Title>

			<Products>
				{list ? (
					list.map((item: ListType, index: number) => (
						<Product key={index}>
							<Link href={routes.product(item.id)}>
								<Image src={item.images[0]} alt='image' width={225} height={225} />

								<ProductTitle>{item.title}</ProductTitle>
								<ProductPrice>{`$${item.price}`}</ProductPrice>
							</Link>
							<Button onClick={() => handleBuy(item.id)}>Add To Cart</Button>
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
