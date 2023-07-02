import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import profile from 'public/images/profile.png';
/* import edit from 'public/icons/edit.png';
 */ import cart from 'public/icons/cart.png';
import exit from 'public/icons/exit.png';
import OrderedProducts from '@src/components/base/orderedProducts';
import { routes } from '@src/constants/routes';
import { updateGlobalSlice } from '../../../store/globalSlice';

import {
	Account,
	AccountContent,
	CartContent,
	CartProfile,
	Exit,
	ExitText,
	OrderText,
	Orders,
	User,
	UserInformation,
	Wrapper,
} from './styled';

const UserProfile = ({ data }: any) => {
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

					{/* <Image src={edit} alt='edit' /> */}
				</Account>

				<div>
					<Orders>
						<Image src={cart} alt='cart' width={20} height={20} />

						<OrderText>Orders</OrderText>
					</Orders>
				</div>

				<div>
					<Exit onClick={handleLogOut}>
						<Image src={exit} alt='exit' width={20} height={20} />

						<ExitText>Exit</ExitText>
					</Exit>
				</div>
			</CartProfile>

			<CartContent>
				<OrderedProducts list={data}></OrderedProducts>
			</CartContent>
		</Wrapper>
	);
};

export default UserProfile;
