import LoginPage from '@src/components/pages/login';
import Head from 'next/head';

const Login = () => {
	return (
		<>
			<Head>
				<title>spiceJet - Login</title>
			</Head>

			<LoginPage />
		</>
	);
};

export default Login;
