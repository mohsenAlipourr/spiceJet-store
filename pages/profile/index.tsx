import { GetServerSideProps } from 'next';
import { getMyOrders } from '@src/api/order';
import UserProfile from '@src/components/pages/userProfile';

const Profile = (data: any) => {
	return <UserProfile data={data.data.data} />;
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	const response = await getMyOrders();

	return { props: { data: response } };
};

export default Profile;
