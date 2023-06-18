import CartProducts from '@src/components/base/cartProducts';
import Input from '@src/components/base/input';
import Button from '@src/components/base/button';
import {
	BuyButton,
	CartTitle,
	DescriptionForm,
	Form,
	FormInput,
	FormInputTitle,
	ProductsShoppingCart,
	Wrapper,
} from './styled';
import { Subtotal, SubtotalPrice } from '@src/components/base/productsSlide/styled';

const UserCart = () => {
	const userCart = [
		{ title: 'Rosehip Berries', total: '$649.00' },
		{ title: 'Rosehip Berries', total: '$649.00' },
	];
	return (
		<Wrapper>
			<ProductsShoppingCart>
				<CartTitle>Products</CartTitle>
				<CartProducts list={userCart} />
			</ProductsShoppingCart>

			<div>
				<CartTitle>Order Summary</CartTitle>
				<Form>
					<DescriptionForm>Shipping, taxes, and discounts will be calculated at checkout.</DescriptionForm>

					<FormInput>
						<FormInputTitle>Country</FormInputTitle>
						<Input width={340} />
					</FormInput>

					<FormInput>
						<FormInputTitle>State</FormInputTitle>
						<Input width={340} />
					</FormInput>

					<FormInput>
						<FormInputTitle>Zip/Postal Code</FormInputTitle>
						<Input width={340} />
					</FormInput>

					<BuyButton>
						<Button width={145}>Continue shopping</Button>
						<div>
							<Subtotal> subtotal:</Subtotal>
							<SubtotalPrice> $935.00</SubtotalPrice>
						</div>
					</BuyButton>
				</Form>
			</div>
		</Wrapper>
	);
};

export default UserCart;
