import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import edit from 'public/icons/edit.png';
import profile from 'public/images/profile.png';
import cart from 'public/icons/cart.png';
import exit from 'public/icons/exit.png';
import { routes } from '@src/constants/routes';
import { updateGlobalSlice } from '../../../store/globalSlice';
import OrderedProducts from './orderedProducts';
import {
	Account,
	AccountContent,
	ActiveFever,
	CartProfile,
	Exit,
	ExitText,
	Fever,
	OrderText,
	Orders,
	User,
	UserInformation,
	Wrapper,
} from './styled';

const UserProfile = () => {
	const email = useSelector((state: any) => state.globalSlice.data.email);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogOut = () => {
		localStorage.clear();
		dispatch(updateGlobalSlice({ email: null, password: null }));
		router.push(routes.home);
	};

	return (
		<Wrapper>
			<CartProfile>
				<Account>
					<AccountContent>
						<Image src={profile} alt='account' />

						<UserInformation>
							<User>user</User>
							<span>{email}</span>
						</UserInformation>
					</AccountContent>

					<Image src={edit} alt='edit' />
				</Account>

				<Fever>
					<ActiveFever></ActiveFever>
					<Orders>
						<Image src={cart} alt='cart' width={20} height={20} />

						<OrderText>Orders</OrderText>
					</Orders>
				</Fever>
				<Fever>
					<Exit onClick={handleLogOut}>
						<Image src={exit} alt='exit' width={20} height={20} />

						<ExitText>Exit</ExitText>
					</Exit>
				</Fever>
			</CartProfile>

			<OrderedProducts />
		</Wrapper>
	);
};

export default UserProfile;
