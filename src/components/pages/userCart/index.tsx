import CartProducts from '@src/components/base/cartProducts';
import Input from '@src/components/base/input';
import Button from '@src/components/base/button';
import { BuyButton, Form, FormInput, ProductsShoppingCart, Wrapper } from './styled';

const UserCart = () => {
	const userCart = [
		{ title: 'Rosehip Berries', total: '$649.00' },
		{ title: 'Rosehip Berries', total: '$649.00' },
	];
	return (
		<Wrapper>
			<ProductsShoppingCart>
				<h2>Products</h2>
				<CartProducts list={userCart} />
			</ProductsShoppingCart>

			<div>
				<h2>Order Summary</h2>
				<Form>
					<p>Shipping, taxes, and discounts will be calculated at checkout.</p>

					<FormInput>
						<span>Country</span>
						<Input width={340} />
					</FormInput>

					<FormInput>
						<span>State</span>
						<Input width={340} />
					</FormInput>

					<FormInput>
						<span>Zip/Postal Code</span>
						<Input width={340} />
					</FormInput>

					<BuyButton>
						<Button width={145}>Continue shopping</Button>
						<span> subtotal: $935.00</span>
					</BuyButton>
				</Form>
			</div>
		</Wrapper>
	);
};

export default UserCart;
