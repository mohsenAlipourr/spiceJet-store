import { useState } from 'react';
import { useRouter } from 'next/router';
import CartProducts from '@src/components/pages/userCart/cartProducts';
import Input from '@src/components/base/input';
import Button from '@src/components/base/button';
import { postNewOrder } from '@src/api/order';
import { routes } from '@src/constants/routes';

import {
	BuyButton,
	CartTitle,
	DescriptionForm,
	Form,
	FormInput,
	FormInputTitle,
	ProductsShoppingCart,
	Wrapper,
	/* Subtotal,
	SubtotalPrice, */
} from './styled';
import { useDispatch } from 'react-redux';
import { updateGlobalSlice } from '@src/store/globalSlice';

const UserCart = ({ cartList, setCartList }: any) => {
	const dispatch = useDispatch();

	const [inputValues, setInputValues] = useState({
		country: '',
		state: '',
		postalCode: '',
	});
	const router = useRouter();

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setInputValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmitForm = async () => {
		const response = await postNewOrder(inputValues.country, inputValues.state, inputValues.postalCode);

		if (response.status === 201) {
			router.push(routes.profile);
			dispatch(updateGlobalSlice({ cartTotal: null }));
		}
	};

	/* const sum = cartList.reduce((acc: any, curr: any) => {
		acc += curr.price;
		return acc;
	}, 0); */

	return (
		<>
			{cartList.length ? (
				<Wrapper>
					<ProductsShoppingCart>
						<CartTitle>Products</CartTitle>

						<CartProducts cartList={cartList} setCartList={setCartList} />
					</ProductsShoppingCart>

					<div>
						<CartTitle>Order Summary</CartTitle>
						<Form>
							<DescriptionForm>Shipping, taxes, and discounts will be calculated at checkout.</DescriptionForm>

							<FormInput>
								<FormInputTitle>Country</FormInputTitle>
								<Input width='100%' height={50} name='country' value={inputValues.country} onChange={handleChange} />
							</FormInput>

							<FormInput>
								<FormInputTitle>State</FormInputTitle>
								<Input width='100%' height={50} name='state' value={inputValues.state} onChange={handleChange} />
							</FormInput>

							<FormInput>
								<FormInputTitle>Zip/Postal Code</FormInputTitle>
								<Input
									width='100%'
									height={50}
									name='postalCode'
									value={inputValues.postalCode}
									onChange={handleChange}
								/>
							</FormInput>

							<BuyButton>
								<Button width={145} onClick={handleSubmitForm}>
									Continue shopping
								</Button>
								{/* <div>
									<Subtotal> subtotal:</Subtotal>

									<SubtotalPrice>{`$${sum}`}</SubtotalPrice>
								</div> */}
							</BuyButton>
						</Form>
					</div>
				</Wrapper>
			) : (
				<span>Shopping basket is empty</span>
			)}
		</>
	);
};

export default UserCart;
