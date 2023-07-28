import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import loading from 'public/images/loading.gif';
import interest from 'public/icons/interest.png';
import score from 'public/icons/score.png';
import { routes } from '@src/constants/routes';
import Button from '@src/components/base/button';
import { updateGlobalSlice } from '@src/store/globalSlice';
import { postCartChange } from '@src/api/cart';
import { ListProducts } from '@src/interfaces/listProducts';
import { Product, ProductFavorites, ProductName, ProductPrice, Score } from './styled';

type ProductSlideProps = {
	title?: string;
	list?: [];
};

const ProductCategory = ({ list }: ProductSlideProps) => {
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
		<>
			{list ? (
				list.map((item: ListProducts, index: number) => (
					<Product key={index}>
						<Link href={routes.product(item.id)}>
							<Image src={item.images[0]} alt='image' width={225} height={225} />

							<ProductName>{item.title}</ProductName>

							<ProductFavorites>
								<Score>
									<Image src={score} alt='score' width={70} height={17} />
								</Score>

								<Image src={interest} alt='interest' width={18} height={18} />
							</ProductFavorites>
							<ProductPrice>{`$ ${item.price}`}</ProductPrice>
						</Link>
						<Button onClick={() => handleBuy(item.id)}>Add To Cart</Button>
					</Product>
				))
			) : (
				<Image src={loading} alt='loading' />
			)}
		</>
	);
};

export default ProductCategory;
