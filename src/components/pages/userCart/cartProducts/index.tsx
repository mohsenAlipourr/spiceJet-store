import Image, { StaticImageData } from 'next/image';
import { useDispatch } from 'react-redux';
import close from 'public/icons/close.png';
import Button from '../../../base/button';
import { postCartChange } from '@src/api/cart';
import { cloneList } from '@src/utils';
import { updateGlobalSlice } from '@src/store/globalSlice';
import {
	CounterNumber,
	OrderedProduct,
	OrderedProductDetails,
	Price,
	ProductCounter,
	ProductName,
	PriceProduct,
	Wrapper,
	Total,
} from './styled';

type ProductSlideProps = {
	cartList?: any;
	setCartList?: any;
};
type CartListType = {
	category: string;
	description: [];
	id: string;
	images: StaticImageData[];
	price: number;
	score: number;
	summery: string;
	title: string;
	total: number;
};

const CartProducts = ({ cartList, setCartList }: ProductSlideProps) => {
	const dispatch = useDispatch();
	console.log('cartList', cartList);
	console.log('setCartList', setCartList);
	const increment = async (id: string) => {
		const response = await postCartChange(id, 1);
		if (response.status === 200) {
			const index = cartList.findIndex((item: CartListType) => item.id === id);

			const listCloned = cloneList(cartList);

			listCloned[index].total += 1;
			setCartList(listCloned);
		}
	};

	const decrement = async (id: string) => {
		const response = await postCartChange(id, -1);

		if (response.status === 200) {
			const index = cartList.findIndex((item: CartListType) => item.id === id);
			const listCloned = cloneList(cartList);

			listCloned[index].total -= 1;

			setCartList(listCloned);
		}
	};

	const deleteItem = async (id: string) => {
		const response = await postCartChange(id, 0);

		if (response.status === 200) {
			const cartListDelete = JSON.parse(localStorage.getItem('cartList') || '');
			const index = cartList.findIndex((item: CartListType) => item.id === id);
			const listCloned = cloneList(cartList);

			listCloned.splice(index, 1);
			setCartList(listCloned);
			dispatch(updateGlobalSlice({ cartTotal: cartListDelete?.length }));
		}
	};

	return (
		<>
			{cartList.map((item: CartListType, index: number) => (
				<Wrapper key={index}>
					<OrderedProduct>
						<Image src={item.images[0]} alt='image' width={150} height={150} />

						<OrderedProductDetails>
							<ProductName>{item.title}</ProductName>

							<ProductCounter>
								<Button
									borderColor={'none'}
									width={40}
									height={35}
									onClick={() => (item.total > 1 ? decrement(item.id) : '')}
								>
									-
								</Button>

								<CounterNumber>{item.total}</CounterNumber>

								<Button borderColor={'none'} width={40} height={35} onClick={() => increment(item.id)}>
									+
								</Button>
							</ProductCounter>

							<PriceProduct>
								<Total>Total:</Total>
								<Price>{`$${item.price * item.total}`}</Price>
							</PriceProduct>
						</OrderedProductDetails>
					</OrderedProduct>

					<Image src={close} alt='close' onClick={() => deleteItem(item.id)} />
				</Wrapper>
			))}
		</>
	);
};

export default CartProducts;
