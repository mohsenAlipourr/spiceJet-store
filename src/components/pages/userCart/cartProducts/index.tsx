import Image from 'next/image';
import close from 'public/icons/close.png';
import Button from '../../../base/button';
import { postCartChange } from '@src/api/cart';
import { cloneList } from '@src/utils';

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

const CartProducts = ({ cartList, setCartList }: ProductSlideProps) => {
	const increment = async (id: string) => {
		const response = await postCartChange(id, 1);
		if (response.status === 200) {
			const index = cartList.findIndex((item: any) => item.id === id);
			const listCloned = cloneList(cartList);

			listCloned[index].total += 1;
			setCartList(listCloned);
		}
	};

	const decrement = async (id: string) => {
		const response = await postCartChange(id, -1);

		if (response.status === 200) {
			const index = cartList.findIndex((item: any) => item.id === id);
			const listCloned = cloneList(cartList);

			listCloned[index].total -= 1;

			setCartList(listCloned);
		}
	};

	const deleteItem = async (id: string) => {
		const response = await postCartChange(id, 0);

		if (response.status === 200) {
			const index = cartList.findIndex((item: any) => item.id === id);
			const listCloned = cloneList(cartList);

			listCloned.splice(index, 1);
			setCartList(listCloned);
		}
	};

	return (
		<>
			{cartList.map((item: any, index: any) => (
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
