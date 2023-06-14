import Image from 'next/image';
import profile from 'public/images/profile.png';
import edit from 'public/icons/edit.png';
import cart from 'public/icons/cart.png';
import OrderedProducts from '@src/components/base/orderedProducts';
import {
	Account,
	AccountContent,
	CartContent,
	CartProfile,
	OrderText,
	Orders,
	UserInformation,
	Wrapper,
} from './styled';

const UserProfile = () => {
	const shoppingList = [
		{ title: 'Rosehip Berries', total: '$649.00' },
		{ title: 'Rosehip Berries', total: '$649.00' },
	];
	return (
		<Wrapper>
			<CartProfile>
				<Account>
					<AccountContent>
						<Image src={profile} alt='account' />

						<UserInformation>
							<span>user</span>
							<span>09102416098</span>
						</UserInformation>
					</AccountContent>

					<Image src={edit} alt='edit' />
				</Account>

				<div>
					<Orders>
						<Image src={cart} alt='cart' width={20} height={20} />

						<OrderText>Orders</OrderText>
					</Orders>
				</div>
			</CartProfile>

			<CartContent>
				<OrderedProducts list={shoppingList}></OrderedProducts>
			</CartContent>
		</Wrapper>
	);
};

export default UserProfile;
