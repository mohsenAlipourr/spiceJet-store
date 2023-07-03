import UserProfile from '@src/components/pages/userProfile';
import Head from 'next/head';

const Profile = () => {
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
