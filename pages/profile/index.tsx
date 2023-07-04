import { useEffect } from 'react';
import { useRouter } from 'next/router';
import UserProfile from '@src/components/pages/userProfile';
import Head from 'next/head';
import { routes } from '@src/constants/routes';

const Profile = () => {
	const router = useRouter();
	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (!email || !password) {
			router.push(routes.login);
		}
	}, []);

	return (
		<>
			<Head>
				<title>spiceJet - Profile</title>
			</Head>

			<UserProfile />
		</>
	);
};

export default Profile;
